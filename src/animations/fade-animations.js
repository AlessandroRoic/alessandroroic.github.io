import anime from 'animejs';

export const fade = (targets, duration = 700) => ({
  targets,
  opacity: [0, 1],
  duration,
  easing: 'cubicBezier(.5, .05, .1, .3)',
});

export const svgTextFade = (targets) => ({
  targets,
  scale: [0.3, 1],
  opacity: [0, 1],
  duration: 600,
  delay: (el, i) => 50 * i,
});

export const svgLineFade = (targets) => ({
  targets,
  x2: [50, 169],
  opacity: [0, 1],
  duration: 500,
  easing: 'linear',
});

export const animateFade = (targets, duration) => anime(fade(targets, duration));
export const animateSvgTextFade = (targets) => anime(fade(targets));
