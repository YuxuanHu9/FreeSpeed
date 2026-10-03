(() => {
  'use strict';
  const data = window.FREESPEED_PROJECT;
  const $ = id => document.getElementById(id);
  const speed = $('speed');
  const taskSelect = $('comparison-task');
  const grid = $('video-grid');
  const note = $('comparison-note');
  const playAll = $('play-all');
  const replayAll = $('replay');
  let cards = [];
  let selection = new AbortController();
  let actionVersion = 0;
  let groupPlaying = false;
  let groupStarting = false;

  const commandLabel = command => command === 'variable' ? 'Variable' : `${command}×`;
  const clock = seconds => {
    const value = Math.max(0, Number.isFinite(seconds) ? seconds : 0);
    return `${Math.floor(value / 60)}:${Math.floor(value % 60).toString().padStart(2, '0')}`;
  };
  function element(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }
  function available() { return cards.filter(card => card.video && !card.failed); }
  function refreshControls() {
    const active = available();
    const playing = active.some(card => !card.video.paused && !card.video.ended);
    playAll.disabled = !active.length;
    replayAll.disabled = !active.length;
    playAll.textContent = playing || groupStarting ? 'Pause all' : 'Play all';
    cards.forEach(card => {
      if (!card.video) return;
      const video = card.video;
      card.button.disabled = card.failed;
      const verb = video.ended ? 'Replay' : video.paused ? 'Play' : 'Pause';
      card.button.textContent = verb === 'Pause' ? 'Ⅱ' : verb === 'Replay' ? '↻' : '▶';
      card.button.setAttribute('aria-label', `${verb} ${card.name} video`);
      card.button.title = `${verb} this video`;
      card.clock.textContent = `${clock(video.currentTime)} / ${clock(card.asset.duration)}`;
      card.ended.textContent = video.ended ? 'Clip ended' : '';
    });
  }
  function independent() {
    groupPlaying = false;
    groupStarting = false;
    actionVersion++;
  }
  function pauseAll() {
    independent();
    available().forEach(card => card.video.pause());
    refreshControls();
  }
  function ready(video, signal) {
    if (signal.aborted || video.error) return Promise.resolve(false);
    if (video.readyState >= 3) return Promise.resolve(true);
    return new Promise(resolve => {
      const finish = value => {
        clearTimeout(timeout);
        video.removeEventListener('canplay', loaded);
        video.removeEventListener('error', failed);
        signal.removeEventListener('abort', failed);
        resolve(value);
      };
      const loaded = () => finish(true);
      const failed = () => finish(false);
      const timeout = setTimeout(failed, 15000);
      video.addEventListener('canplay', loaded, { once: true });
      video.addEventListener('error', failed, { once: true });
      signal.addEventListener('abort', failed, { once: true });
    });
  }
  async function startAll(restart = false) {
    const version = ++actionVersion;
    const signal = selection.signal;
    const active = available();
    if (!active.length) return;
    groupPlaying = false;
    groupStarting = true;
    const unfinished = active.filter(card => !card.video.ended);
    const position = restart || !unfinished.length ? 0 : Math.max(...unfinished.map(card => card.video.currentTime));
    active.forEach(card => card.video.pause());
    refreshControls();
    const loaded = await Promise.all(active.map(card => ready(card.video, signal)));
    if (signal.aborted || version !== actionVersion) return;
    const playable = active.filter((card, index) => loaded[index] && !card.failed);
    const pending = playable.filter(card => position < card.asset.duration);
    playable.forEach(card => {
      card.video.playbackRate = 1;
      card.video.currentTime = Math.min(position, card.asset.duration);
    });
    const attempts = await Promise.allSettled(pending.map(card => card.video.play()));
    if (signal.aborted || version !== actionVersion) return;
    groupStarting = false;
    groupPlaying = attempts.length > 0 && attempts.every(attempt => attempt.status === 'fulfilled');
    refreshControls();
  }

  function makeCard(method, asset, command) {
    const variable = command === 'variable';
    const name = data.methods[method];
    const card = { name, asset, failed: false };
    const article = element('article', 'video-card');
    article.dataset.method = method;
    const header = element('div', 'video-card-header');
    const heading = element('h2', 'video-card-title', variable ? `${name} · Variable` : `${name} · ${method === 'reference' ? 1 : command}×`);
    const notices = [];
    if (asset?.outcome === 'failure') notices.push('Failure');
    if (asset?.starts_midway) notices.push('Mid-task start');
    if (notices.length) heading.append(element('span', 'video-status', notices.join(' · ')));
    header.append(heading);
    article.append(header);
    if (!asset) {
      article.append(element('div', 'video-placeholder', variable
        ? 'Variable-speed recording not yet available for this task.' : 'Recording not yet available.'));
      grid.append(article);
      return card;
    }
    const video = element('video');
    video.controls = true;
    video.playsInline = true;
    video.muted = true;
    video.preload = 'auto';
    video.poster = asset.poster;
    video.src = asset.src;
    video.setAttribute('aria-label', `${name} ${variable ? 'within-episode speed modulation' : `${method === 'reference' ? 1 : command} times commanded rate`} recording`);
    const button = element('button', 'panel-play', '▶');
    button.type = 'button';
    const footer = element('div', 'video-card-footer');
    card.clock = element('span', 'video-clock');
    card.ended = element('span', 'video-ended');
    footer.append(card.clock, card.ended);
    header.append(button);
    article.append(video, footer);
    Object.assign(card, { video, button });
    button.addEventListener('click', () => {
      independent();
      if (video.paused || video.ended) {
        if (video.ended) video.currentTime = 0;
        video.playbackRate = 1;
        video.play().catch(() => refreshControls());
      } else video.pause();
      refreshControls();
    });
    // Native controls also release group alignment so a single clip can be inspected.
    video.addEventListener('pointerdown', independent);
    video.addEventListener('keydown', independent);
    ['play', 'pause', 'ended', 'timeupdate', 'loadedmetadata'].forEach(event => video.addEventListener(event, refreshControls));
    video.addEventListener('error', () => {
      card.failed = true;
      video.hidden = true;
      footer.hidden = true;
      article.append(element('div', 'video-placeholder', 'Video could not be loaded.'));
      refreshControls();
    }, { once: true });
    grid.append(article);
    return card;
  }

  function updateComparison(autoplay = true) {
    pauseAll();
    selection.abort();
    cards.forEach(card => {
      if (!card.video) return;
      card.video.removeAttribute('src');
      card.video.load();
    });
    selection = new AbortController();
    cards = [];
    grid.replaceChildren();
    const command = data.commands[Number(speed.value)];
    speed.style.setProperty('--range-fill', `${Number(speed.value) / (data.commands.length - 1) * 100}%`);
    const variable = command === 'variable';
    const task = data.comparisonTasks.find(item => item.id === taskSelect.value);
    const clip = task.comparisonClips[String(command)];
    $('speed-value').textContent = commandLabel(command);
    speed.setAttribute('aria-valuetext', variable ? 'Variable: speed command changes within a single episode' : `${command} times commanded rate`);
    $('command-rate-note').textContent = variable ? 'Speed command changes within an episode' : 'Actual execution rate varies by rollout';
    grid.classList.toggle('slowdown', !variable && command < 1);
    grid.classList.toggle('variable-mode', variable);
    const methods = variable ? ['freespeed'] : command < 1 ? ['reference', 'wocr', 'freespeed'] : ['reference', 'wocr', 'vanilla', 'freespeed'];
    methods.forEach(method => cards.push(makeCard(method, clip?.panels?.[method], command)));
    note.textContent = clip?.note || '';
    note.hidden = !clip?.note;
    refreshControls();
    if (autoplay) startAll(true);
  }

  // During shared playback, align to the longest recording without changing rates.
  // Using an individual button or native control releases this alignment.
  setInterval(() => {
    if (!groupPlaying || groupStarting) return;
    const active = available().filter(card => !card.video.ended);
    if (!active.length) { groupPlaying = false; return; }
    const master = active.reduce((a, b) => a.asset.duration >= b.asset.duration ? a : b);
    if (master.video.paused || master.video.seeking || master.video.readyState < 3) return;
    active.forEach(card => {
      const video = card.video;
      if (card === master || video.paused || video.seeking || video.readyState < 3) return;
      if (Math.abs(video.currentTime - master.video.currentTime) > .12) {
        video.currentTime = Math.min(master.video.currentTime, card.asset.duration);
      }
    });
  }, 200);

  speed.max = data.commands.length - 1;
  speed.value = data.commands.indexOf(data.defaultCommand);
  document.querySelector('.ticks').replaceChildren(...data.commands.map(command => element('span', '', commandLabel(command))));
  taskSelect.replaceChildren(...data.comparisonTasks.map(task => new Option(task.label, task.id)));
  taskSelect.value = data.defaultTask;
  speed.addEventListener('input', () => updateComparison());
  taskSelect.addEventListener('change', () => updateComparison());
  playAll.addEventListener('click', () => {
    if (groupStarting || available().some(card => !card.video.paused && !card.video.ended)) pauseAll();
    else startAll();
  });
  replayAll.addEventListener('click', () => startAll(true));
  updateComparison(!window.matchMedia('(prefers-reduced-motion: reduce)').matches);
})();
