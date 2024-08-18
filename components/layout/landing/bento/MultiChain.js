"use client";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import anime from "animejs";
import opLogo from "@/public/landing/bento/op-logo.svg";
import celoLogo from "@/public/landing/bento/celo-logo.svg";
import avaxLogo from "@/public/landing/bento/avax-logo.svg";
import arbLogo from "@/public/landing/bento/arb-logo.svg";

export default function MultiChain() {
  const container = useRef(null);

  useGSAP(() => {
    if (!container.current) return;
    window.human = false;

    var canvasEl = document.querySelector(".fireworks");
    var ctx = canvasEl.getContext("2d");
    var numberOfParticules = 1;
    var images = [opLogo, celoLogo, avaxLogo, arbLogo];

    function setCanvasSize() {
      canvasEl.width = container.current.offsetWidth * 2;
      canvasEl.height = container.current.offsetHeight * 2;
      canvasEl.style.width = container.current.offsetWidth + "px";
      canvasEl.style.height = container.current.offsetHeight + "px";
      canvasEl.getContext("2d").scale(2, 2);
    }

    function setParticuleDirection(p) {
      var angle = (anime.random(0, 360) * Math.PI) / 180;
      var value = anime.random(50, 180);
      var radius = [-1, 1][anime.random(0, 1)] * value;
      return {
        x: p.x + radius * Math.cos(angle),
        y: p.y + radius * Math.sin(angle),
      };
    }

    function createParticule(x, y) {
      var p = {};
      p.x = x;
      p.y = y;
      p.radius = anime.random(400, 800);
      p.endPos = setParticuleDirection(p);
      p.img = images[anime.random(0, images.length - 1)];
      p.draw = function () {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true);
        const img = new Image();
        img.src = p.img.src;
        ctx.drawImage(img, p.x, p.y, p.radius, p.radius);
      };
      return p;
    }

    function createCircle(x, y) {
      var p = {};
      p.x = x;
      p.y = y;
      p.color = "#FFF";
      p.radius = 0.1;
      p.alpha = 0.5;
      p.lineWidth = 6;
      p.draw = function () {
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true);
        ctx.lineWidth = p.lineWidth;
        ctx.strokeStyle = p.color;
        ctx.stroke();
        ctx.globalAlpha = 1;
      };
      return p;
    }

    function renderParticule(anim) {
      for (var i = 0; i < anim.animatables.length; i++) {
        anim.animatables[i].target.draw();
      }
    }

    function animateParticules(x, y) {
      var circle = createCircle(x, y);
      var particules = [];
      for (var i = 0; i < numberOfParticules; i++) {
        particules.push(createParticule(x, y));
      }
      anime
        .timeline()
        .add({
          targets: particules,
          x: function (p) {
            return p.endPos.x;
          },
          y: function (p) {
            return p.endPos.y;
          },
          radius: 0.1,
          duration: anime.random(3200, 3800),
          easing: "easeOutExpo",
          update: renderParticule,
        })
        .add({
          targets: circle,
          radius: anime.random(80, 160),
          lineWidth: 0,
          alpha: {
            value: 0,
            easing: "linear",
            duration: anime.random(600, 800),
          },
          duration: anime.random(2200, 2800),
          easing: "easeOutExpo",
          update: renderParticule,
          offset: 0,
        });
    }

    anime({
      duration: Infinity,
      update: function () {
        ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
      },
    });

    var centerX = container.current.offsetWidth / 2;
    var centerY = container.current.offsetHeight / 2;

    function autoClick() {
      if (window.human) return;
      animateParticules(
        anime.random(centerX - 50, centerX + 50),
        anime.random(centerY - 50, centerY + 50)
      );
      anime({ duration: 1000 }).finished.then(autoClick);
    }

    autoClick();
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize, false);
  }, [container, window]);

  return (
    <div
      className="col-span-4 sm:col-span-8 bg-dark-tertiary rounded-3xl flex flex-col justify-between items-end overflow-hidden relative"
      ref={container}
    >
      <div className="space-y-4 z-10 relative px-6 lg:px-10 xl:px-12 3xl:px-16 mt-6 lg:mt-12 xl:mt-14 3xl:mt-20 self-start">
        <h2 className="text-xl sm:text-2xl md:text-3xl xl:text-4xl 3xl:text-5xl font-bold">
          Multi-chain Freedom
        </h2>

        <p className="text-base md:text-lg xl:text-xl 3xl:text-2xl">
          Track and manage your assets across all supported chains.
        </p>
      </div>

      <div className="h-28 sm:hidden"></div>

      <canvas className="fireworks absolute  2xl:top-0"></canvas>
    </div>
  );
}
