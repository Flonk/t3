import { StoppableClock, createStoppableClock } from "./clock";

export type AnimationLoopCallback = (
  time: number,
  interval: number,
  clock: StoppableClock
) => void;
export type AnimationLoop = {
  start: () => void;
  stop: () => void;
  clock: StoppableClock;
};

export const createAnimationLoop = (
  callback: AnimationLoopCallback
): AnimationLoop => {
  const clock = createStoppableClock();
  let time = clock.tick();
  let stop = false;
  let animationFrameHandle: number;

  const loop = () => {
    const nextTime = clock.tick();
    const interval = nextTime - time;
    time = nextTime;

    callback(time, interval, clock);
    if (!stop) animationFrameHandle = requestAnimationFrame(loop);
  };
  animationFrameHandle = requestAnimationFrame(loop);

  return {
    stop: () => {
      if (stop) return;
      stop = true;
      cancelAnimationFrame(animationFrameHandle);
      clock.stop();
    },
    start: () => {
      if (!stop) return;
      stop = false;
      clock.start();
      animationFrameHandle = requestAnimationFrame(loop);
    },
    clock,
  };
};
