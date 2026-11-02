/* The Summerland Band: small enhancements. The page works without this file;
   it adds the audio player, color-on-play for videos, the photo viewer and the
   copy-email button. */
(function () {
  'use strict';

  var each = function (selector, fn) {
    Array.prototype.forEach.call(document.querySelectorAll(selector), fn);
  };

  /* Only one video or track plays at a time. */
  document.addEventListener('play', function (event) {
    each('video, audio', function (media) {
      if (media !== event.target && !media.paused) media.pause();
    });
  }, true);

  /* Videos stay black and white until they play. */
  each('video.mono', function (video) {
    var sync = function () { video.classList.toggle('is-playing', !video.paused && !video.ended); };
    ['play', 'playing', 'pause', 'ended'].forEach(function (name) { video.addEventListener(name, sync); });
  });

  /* Audio player for the Listen section. */
  var list = document.querySelector('[data-tracks]');
  var audio = document.getElementById('player');
  if (list && audio) {
    var current = null;

    var format = function (seconds) {
      if (!isFinite(seconds) || seconds < 0) seconds = 0;
      var m = Math.floor(seconds / 60);
      var s = Math.floor(seconds % 60);
      return m + ':' + (s < 10 ? '0' : '') + s;
    };
    var partsOf = function (row) {
      return {
        button: row.querySelector('.track-btn'),
        seek: row.querySelector('.track-seek'),
        clock: row.querySelector('[data-current]'),
        title: row.querySelector('.track-title').textContent.trim()
      };
    };
    var showPlaying = function (row, playing) {
      var p = partsOf(row);
      row.classList.toggle('is-playing', playing);
      p.button.setAttribute('aria-label', (playing ? 'Pause ' : 'Play ') + p.title);
      p.button.setAttribute('aria-pressed', playing ? 'true' : 'false');
    };
    var showProgress = function (row, time, duration) {
      var p = partsOf(row);
      var percent = duration ? Math.min(100, (time / duration) * 100) : 0;
      p.seek.value = Math.round(percent * 10);
      p.seek.style.setProperty('--p', percent + '%');
      if (p.clock) p.clock.textContent = format(time);
    };
    var select = function (row) {
      if (current && current !== row) {
        showPlaying(current, false);
        showProgress(current, 0, 0);
      }
      current = row;
      audio.src = row.getAttribute('data-src');
      audio.load();
    };
    var start = function () {
      var attempt = audio.play();
      if (attempt && typeof attempt.catch === 'function') attempt.catch(function () {});
    };

    each('.track[data-src]', function (row) {
      var p = partsOf(row);
      p.button.addEventListener('click', function () {
        if (current !== row) select(row);
        if (audio.paused) start(); else audio.pause();
      });
      p.seek.addEventListener('input', function () {
        var fraction = p.seek.value / 1000;
        p.seek.style.setProperty('--p', (fraction * 100) + '%');
        if (current !== row) {
          select(row);
          audio.addEventListener('loadedmetadata', function () {
            audio.currentTime = fraction * audio.duration;
          }, { once: true });
        } else if (isFinite(audio.duration)) {
          audio.currentTime = fraction * audio.duration;
        }
      });
    });

    audio.addEventListener('play', function () { if (current) showPlaying(current, true); });
    audio.addEventListener('pause', function () { if (current) showPlaying(current, false); });
    audio.addEventListener('timeupdate', function () { if (current) showProgress(current, audio.currentTime, audio.duration); });
    audio.addEventListener('ended', function () {
      if (!current) return;
      showPlaying(current, false);
      showProgress(current, 0, audio.duration);
    });
  }

  /* Photo viewer: opens the full photo in color. Without it, links open the image. */
  var viewer = document.querySelector('.lightbox');
  if (viewer && typeof viewer.showModal === 'function') {
    var big = viewer.querySelector('img');
    each('a[data-lightbox]', function (link) {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        var thumb = link.querySelector('img');
        big.src = link.getAttribute('href');
        big.alt = thumb ? thumb.alt : '';
        viewer.showModal();
      });
    });
    viewer.addEventListener('click', function (event) {
      if (event.target === viewer || event.target.closest('.lightbox-close')) viewer.close();
    });
    viewer.addEventListener('close', function () { big.removeAttribute('src'); });
  }

  /* Copy the booking email. Falls back to selecting it. */
  each('[data-copy]', function (button) {
    var label = button.textContent;
    var flash = function (text) {
      button.textContent = text;
      window.setTimeout(function () { button.textContent = label; }, 1800);
    };
    var selectText = function () {
      var target = document.getElementById(button.getAttribute('aria-controls'));
      if (target && window.getSelection) {
        var range = document.createRange();
        range.selectNodeContents(target);
        var selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
      }
      flash('Selected');
    };
    button.addEventListener('click', function () {
      var text = button.getAttribute('data-copy');
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(function () { flash('Copied'); }, selectText);
      } else {
        selectText();
      }
    });
  });
})();
