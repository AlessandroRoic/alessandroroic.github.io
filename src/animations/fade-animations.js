import anime from "animejs";

export const fade = (targets, duration = 700) => ({
  targets,
  opacity: [0, 1],
  duration,
  easing: "cubicBezier(.5, .05, .1, .3)",
});

export const svgTextFade = (targets, duration = 600, inBetweenDelay = 50) => ({
  targets,
  scale: [0.3, 1],
  opacity: [0, 1],
  duration,
  delay: (el, i) => inBetweenDelay * i,
});

export const svgLineFade = (targets, duration = 500) => ({
  targets,
  x2: [50, 145],
  opacity: [0, 1],
  duration,
  easing: "linear",
});

export const animateFade = (targets, duration) =>
  anime(fade(targets, duration));
export const animateSvgTextFade = (targets) => anime(fade(targets));
