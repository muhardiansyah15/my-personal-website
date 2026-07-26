/* ============================================================
   Muhardiansyah — Futuristic Portfolio
   Graph-network canvas, typing effect, scroll reveal, nav,
   counters, portfolio filter. Zero dependencies.
   ============================================================ */
(function () {
  "use strict";

  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Animated graph network background ----------
     A moving graph whose edges light up in rainbow colors —
     a nod to research on rainbow connection numbers. */
  var canvas = document.getElementById("graph-canvas");
  if (canvas && !reducedMotion) {
    var ctx = canvas.getContext("2d");
    var nodes = [];
    var mouse = { x: -9999, y: -9999 };
    var W, H, COUNT;
    var RAINBOW = ["#22d3ee", "#a3e635", "#fbbf24", "#fb7185", "#e879f9", "#8b5cf6"];
    var LINK_DIST = 150;

    function resize() {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
      COUNT = Math.min(110, Math.floor((W * H) / 16000));
      if (nodes.length > COUNT) nodes.length = COUNT;
      while (nodes.length < COUNT) {
        nodes.push({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          r: Math.random() * 1.6 + 0.7,
          hue: Math.floor(Math.random() * RAINBOW.length)
        });
      }
    }

    function step() {
      ctx.clearRect(0, 0, W, H);
      var i, j, a, b, dx, dy, d;

      for (i = 0; i < nodes.length; i++) {
        a = nodes[i];
        a.x += a.vx;
        a.y += a.vy;
        if (a.x < -20) a.x = W + 20; else if (a.x > W + 20) a.x = -20;
        if (a.y < -20) a.y = H + 20; else if (a.y > H + 20) a.y = -20;
      }

      for (i = 0; i < nodes.length; i++) {
        a = nodes[i];
        for (j = i + 1; j < nodes.length; j++) {
          b = nodes[j];
          dx = a.x - b.x; dy = a.y - b.y;
          d = Math.sqrt(dx * dx + dy * dy);
          if (d < LINK_DIST) {
            var t = 1 - d / LINK_DIST;
            var mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2;
            var mdx = mx - mouse.x, mdy = my - mouse.y;
            var nearMouse = Math.sqrt(mdx * mdx + mdy * mdy) < 180;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            if (nearMouse) {
              ctx.strokeStyle = RAINBOW[a.hue];
              ctx.globalAlpha = t * 0.55;
            } else {
              ctx.strokeStyle = "#94a3d8";
              ctx.globalAlpha = t * 0.14;
            }
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1;
      for (i = 0; i < nodes.length; i++) {
        a = nodes[i];
        ctx.beginPath();
        ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(148, 163, 216, 0.5)";
        ctx.fill();
      }
      requestAnimationFrame(step);
    }

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", function (e) {
      mouse.x = e.clientX; mouse.y = e.clientY;
    });
    window.addEventListener("mouseout", function () {
      mouse.x = -9999; mouse.y = -9999;
    });
    resize();
    step();
  }

  /* ---------- Typing effect ---------- */
  var typedEl = document.getElementById("typed");
  if (typedEl) {
    var items = JSON.parse(typedEl.getAttribute("data-items") || "[]");
    var idx = 0, chr = 0, deleting = false;
    function type() {
      var word = items[idx % items.length];
      if (!deleting) {
        chr++;
        if (chr === word.length) {
          deleting = true;
          typedEl.textContent = word.slice(0, chr);
          setTimeout(type, 2100);
          return;
        }
      } else {
        chr--;
        if (chr === 0) {
          deleting = false;
          idx++;
        }
      }
      typedEl.textContent = word.slice(0, chr);
      setTimeout(type, deleting ? 34 : 68);
    }
    if (items.length) {
      if (reducedMotion) typedEl.textContent = items[0];
      else type();
    }
  }

  /* ---------- Header state + mobile nav ---------- */
  var header = document.querySelector(".site-header");
  var scrollTopBtn = document.getElementById("scroll-top");
  function onScroll() {
    var y = window.scrollY;
    if (header) header.classList.toggle("scrolled", y > 30);
    if (scrollTopBtn) scrollTopBtn.classList.toggle("show", y > 500);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  var toggle = document.querySelector(".nav-toggle");
  var navLinks = document.querySelector(".nav-links");
  if (toggle && navLinks) {
    toggle.addEventListener("click", function () {
      var open = navLinks.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.textContent = open ? "✕" : "☰";
    });
    navLinks.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        navLinks.classList.remove("open");
        toggle.textContent = "☰";
      });
    });
  }

  /* ---------- Active nav link by section ---------- */
  var sections = document.querySelectorAll("main section[id]");
  var menuAnchors = document.querySelectorAll('.nav-links a[href*="#"]');
  if (sections.length && "IntersectionObserver" in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          menuAnchors.forEach(function (a) {
            a.classList.toggle("active", a.hash === "#" + entry.target.id);
          });
        }
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
    sections.forEach(function (s) { spy.observe(s); });
  }

  /* ---------- Scroll reveal ---------- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !reducedMotion) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("visible"); });
  }

  /* ---------- Animated counters ---------- */
  var counters = document.querySelectorAll("[data-count]");
  function animateCount(el) {
    var target = parseFloat(el.getAttribute("data-count"));
    var decimals = (el.getAttribute("data-count").split(".")[1] || "").length;
    var dur = 1400, start = null;
    function frame(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = (target * eased).toFixed(decimals);
      if (p < 1) requestAnimationFrame(frame);
    }
    if (reducedMotion) el.textContent = target.toFixed(decimals);
    else requestAnimationFrame(frame);
  }
  if ("IntersectionObserver" in window) {
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          cio.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(function (el) { cio.observe(el); });
  } else {
    counters.forEach(animateCount);
  }

  /* ---------- Portfolio filter ---------- */
  var filterBtns = document.querySelectorAll(".filter-btn");
  var projectCards = document.querySelectorAll(".project-card");
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      filterBtns.forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");
      var f = btn.getAttribute("data-filter");
      projectCards.forEach(function (card) {
        var show = f === "*" || card.getAttribute("data-cat") === f;
        card.classList.toggle("hidden", !show);
      });
    });
  });

  /* ---------- Footer year ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
