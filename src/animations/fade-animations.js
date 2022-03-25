import anime from 'animejs';

export const fade = (targets, duration = 700) => ({
  targets,
  opacity: [0, 1],
  duration,
  easing: 'cubicBezier(.5, .05, .1, .3)',
});

export const svgTextFade = (targets) => ({
  targets,
  dy: ['1rem', 0],
  opacity: [0, 1],
  duration: 700,
  delay: (el, i) => 50 * i,
});

export const svgLineFade = (targets) => ({
  targets,
  x2: [50, 169],
  opacity: [0, 1],
  duration: 500,
  easing: 'linear',
});

export const animateFade = (targets) => anime(fade(targets));
export const animateSvgTextFade = (targets) => anime(fade(targets));
