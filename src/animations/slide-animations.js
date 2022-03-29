import anime from 'animejs';

export const animateSlide = (targets, reverse, onComplete) =>
  anime({
    targets,
    translateX: ['100%', 0],
    duration: 250,
    direction: reverse ? 'reverse' : ' normal',
    easing: 'easeInOutQuad',
    ...(onComplete ? { complete: () => onComplete() } : {}),
  });
