/* ══ Lightbox ══ */
function openLightbox(src) {
  document.getElementById('lightboxImg').src = src;
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeLightbox();
});

/* ══ Carousel factory ══ */
function initCarousel(trackId, prevId, nextId, dotsId) {
  var track = document.getElementById(trackId);
  var btnPrev = document.getElementById(prevId);
  var btnNext = document.getElementById(nextId);
  var dotsWrap = document.getElementById(dotsId);

  if (!track || !btnPrev || !btnNext || !dotsWrap) return;

  var slides = track.querySelectorAll('.carousel-slide');
  var total = slides.length;
  var current = 0;
  var dots = [];

  for (var i = 0; i < total; i++) {
    var d = document.createElement('button');
    d.className = 'carousel-dot' + (i === 0 ? ' active' : '');
    d.setAttribute('aria-label', 'Slide ' + (i + 1));

    (function (idx) {
      d.addEventListener('click', function () {
        go(idx);
      });
    })(i);

    dotsWrap.appendChild(d);
    dots.push(d);
  }

  function go(idx) {
    current = Math.max(0, Math.min(idx, total - 1));
    track.style.transform = 'translateX(-' + (current * 100) + '%)';

    dots.forEach(function (d, i) {
      d.classList.toggle('active', i === current);
    });

    btnPrev.disabled = current === 0;
    btnNext.disabled = current === total - 1;
  }

  btnPrev.addEventListener('click', function () {
    go(current - 1);
  });

  btnNext.addEventListener('click', function () {
    go(current + 1);
  });

  go(0);
}

initCarousel('track2k', 'btn2kPrev', 'btn2kNext', 'dots2k');

/* ══ §3 SOTA switcher ══ */
var sotaPairIdx = 0;

function sotaSelectPair(el) {
  document.querySelectorAll('.sota-pair-item').forEach(function (p) {
    p.classList.remove('active');
  });

  el.classList.add('active');
  sotaPairIdx = parseInt(el.dataset.index, 10);
  document.getElementById('sotaSliderLeft').src = el.dataset.source;

  document.querySelectorAll('.sota-method-item').forEach(function (m) {
    var val = m.dataset['p' + sotaPairIdx];
    if (val) m.querySelector('img').src = val;
  });

  var active = document.querySelector('.sota-method-item.active');
  if (active) {
    var val = active.dataset['p' + sotaPairIdx];
    if (val) document.getElementById('sotaSliderRight').src = val;
  }
}

function sotaSelectMethod(el) {
  document.querySelectorAll('.sota-method-item').forEach(function (m) {
    m.classList.remove('active');
  });

  el.classList.add('active');
  document.getElementById('sotaRightLabel').textContent = el.dataset.label;

  var val = el.dataset['p' + sotaPairIdx];
  if (val) document.getElementById('sotaSliderRight').src = val;
}

/* ══ §4 More Results — Cartesian product ══ */
var resultsSrcIdx = 1;
var resultsRefIdx = 1;

function resultsGetPaths(s, r) {
  var base = 'assets/images/more_visual/';
  return {
    src: base + 'source_' + s + '.jpg',
    ref: base + 'ref_' + r + '.jpg',
    ours: base + 'generate_' + s + '_' + r + '.jpg'
  };
}

function resultsUpdate() {
  var p = resultsGetPaths(resultsSrcIdx, resultsRefIdx);
  var noResult = document.getElementById('resultsNoResult');
  var leftImg = document.getElementById('resultsLeft');
  var rightImg = document.getElementById('resultsRight');

  leftImg.src = p.src;

  var probe = new Image();
  probe.onload = function () {
    rightImg.src = p.ours;
    noResult.classList.remove('show');
  };
  probe.onerror = function () {
    noResult.classList.add('show');
    rightImg.removeAttribute('src');
  };
  probe.src = p.ours;
}

function resultsSelectSrc(el) {
  document.querySelectorAll('#resultsSrcCol .results-col-item').forEach(function (i) {
    i.classList.remove('active');
  });

  el.classList.add('active');
  resultsSrcIdx = parseInt(el.dataset.srcIdx, 10);
  resultsUpdate();
}

function resultsSelectRef(el) {
  document.querySelectorAll('#resultsRefCol .results-col-item').forEach(function (i) {
    i.classList.remove('active');
  });

  el.classList.add('active');
  resultsRefIdx = parseInt(el.dataset.refIdx, 10);
  resultsUpdate();
}

resultsUpdate();

function resultsUpdate() {
  var p = resultsGetPaths(resultsSrcIdx, resultsRefIdx);
  var noResult = document.getElementById('resultsNoResult');

  document.getElementById('resultsLeft').src = p.src;

  var probe = new Image();
  probe.onload = function () {
    document.getElementById('resultsRight').src = p.ours;
    noResult.classList.remove('show');
  };
  probe.onerror = function () {
    noResult.classList.add('show');
  };
  probe.src = p.ours;
}

function resultsSelectSrc(el) {
  document.querySelectorAll('#resultsSrcCol .results-col-item').forEach(function (i) {
    i.classList.remove('active');
  });

  el.classList.add('active');
  resultsSrcIdx = parseInt(el.dataset.srcIdx, 10);
  resultsUpdate();
}

function resultsSelectRef(el) {
  document.querySelectorAll('#resultsRefCol .results-col-item').forEach(function (i) {
    i.classList.remove('active');
  });

  el.classList.add('active');
  resultsRefIdx = parseInt(el.dataset.refIdx, 10);
  resultsUpdate();
}

/* ══ §5 Magnifier ══ */
(function () {
  var ZOOM = 0.3;
  var LENS_DIAM = 80;

  document.querySelectorAll('.magnifier-wrap').forEach(function (wrap) {
    var img = wrap.querySelector('img');
    var lens = wrap.querySelector('.magnifier-lens');
    var canvas = lens.querySelector('canvas');
    var ctx = canvas.getContext('2d');

    canvas.width = canvas.height = LENS_DIAM;

    function draw(ex, ey) {
      if (!img.complete || !img.naturalWidth) return;

      var W = wrap.offsetWidth;
      var H = wrap.offsetHeight;
      var iW = img.naturalWidth;
      var iH = img.naturalHeight;

      var srcW = LENS_DIAM / ZOOM;
      var srcH = LENS_DIAM / ZOOM;

      var sx = Math.max(0, Math.min((ex / W) * iW - srcW / 2, iW - srcW));
      var sy = Math.max(0, Math.min((ey / H) * iH - srcH / 2, iH - srcH));

      ctx.clearRect(0, 0, LENS_DIAM, LENS_DIAM);
      ctx.save();
      ctx.beginPath();
      ctx.arc(LENS_DIAM / 2, LENS_DIAM / 2, LENS_DIAM / 2, 0, Math.PI * 2);
      ctx.clip();
      ctx.drawImage(img, sx, sy, srcW, srcH, 0, 0, LENS_DIAM, LENS_DIAM);
      ctx.restore();
    }

    wrap.addEventListener('mousemove', function (e) {
      var r = wrap.getBoundingClientRect();
      var ex = e.clientX - r.left;
      var ey = e.clientY - r.top;

      lens.style.left = ex + 'px';
      lens.style.top = ey + 'px';

      if (img.complete && img.naturalWidth) {
        draw(ex, ey);
      } else {
        img.addEventListener('load', function onLoad() {
          draw(ex, ey);
          img.removeEventListener('load', onLoad);
        });
      }
    });
  });
})();