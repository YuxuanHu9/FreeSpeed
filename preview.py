"""Serve only the project page and its public dependencies on localhost."""
import re
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import unquote, urlsplit

SITE = Path(__file__).resolve().parent
PUBLIC = {
    'index.html',
    'static/data/project.js',
    'static/js/individual-players.js',
    'static/js/page.js',
    'static/css/site.css',
}
for directory in ('static/fonts', 'static/videos/individual', 'static/videos/supplementary',
                  'static/images/paper'):
    PUBLIC.update(path.relative_to(SITE).as_posix()
                  for path in (SITE / directory).glob('*') if path.is_file())


class AnonymousPreview(SimpleHTTPRequestHandler):
    server_version = 'FreeSpeedPreview'
    sys_version = ''
    _remaining = None  # bytes left to send for a 206 response

    def send_head(self):
        self._remaining = None
        path = unquote(urlsplit(self.path).path)
        if path in ('/', '/FreeSpeed', '/IROS', '/IROS/'):
            self.send_response(302)
            self.send_header('Location', '/FreeSpeed/')
            self.end_headers()
            return None
        if not path.startswith('/FreeSpeed/'):
            self.send_error(404)
            return None
        relative = path[len('/FreeSpeed/'):] or 'index.html'
        if relative not in PUBLIC:
            self.send_error(404)
            return None
        self.path = '/' + relative
        byte_range = re.fullmatch(r'bytes=(\d*)-(\d*)', self.headers.get('Range', '').strip())
        if not byte_range or byte_range.groups() == ('', ''):
            return super().send_head()
        # Byte ranges let the browser seek within videos that are not fully buffered.
        file = SITE / relative
        size = file.stat().st_size
        first, last = byte_range.groups()
        start = int(first) if first else max(0, size - int(last))
        end = min(int(last), size - 1) if first and last else size - 1
        if start >= size or start > end:
            self.send_response(416)
            self.send_header('Content-Range', f'bytes */{size}')
            self.end_headers()
            return None
        source = open(file, 'rb')
        source.seek(start)
        self._remaining = end - start + 1
        self.send_response(206)
        self.send_header('Content-Type', self.guess_type(str(file)))
        self.send_header('Content-Range', f'bytes {start}-{end}/{size}')
        self.send_header('Content-Length', str(self._remaining))
        self.end_headers()
        return source

    def copyfile(self, source, outputfile):
        if self._remaining is None:
            return super().copyfile(source, outputfile)
        while self._remaining > 0:
            chunk = source.read(min(64 * 1024, self._remaining))
            if not chunk:
                break
            outputfile.write(chunk)
            self._remaining -= len(chunk)

    def end_headers(self):
        if self._remaining is None:
            self.send_header('Accept-Ranges', 'bytes')
        self.send_header('Cache-Control', 'no-cache')
        super().end_headers()

    def list_directory(self, path):
        self.send_error(404)
        return None


if __name__ == '__main__':
    handler = partial(AnonymousPreview, directory=str(SITE))
    server = ThreadingHTTPServer(('127.0.0.1', 8765), handler)
    print('FreeSpeed preview: http://127.0.0.1:8765/FreeSpeed/', flush=True)
    server.serve_forever()
