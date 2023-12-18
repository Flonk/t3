export type Clock = {
  tick: () => number;
  warp: (factor?: number) => void;
  get timeWarp(): number;
};

export const createClock = (timeWarp = 1): Clock => {
  let starting_time = Date.now(),
    offset = 0;

  const clock = {
    tick: () => (Date.now() - starting_time) * timeWarp + offset,

    warp: (factor = 1) => {
      offset = clock.tick();
      starting_time = Date.now();
      timeWarp = factor;
    },

    get timeWarp() {
      return timeWarp;
    },
  };

  return clock;
};

export type AnimationLoopCallback = (
  time: number,
  interval: number,
  clock: Clock
) => void;
export type AnimationLoop = {
  start: () => void;
  stop: () => void;
  clock: Clock;
};

export const createAnimationLoop = (
  callback: AnimationLoopCallback
): AnimationLoop => {
  const clock = createClock();
  let time = clock.tick();
  let preStopWarp = 0;
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
      preStopWarp = clock.timeWarp;
      clock.warp(0);
    },
    start: () => {
      if (!stop) return;
      stop = false;
      clock.warp(preStopWarp);
      animationFrameHandle = requestAnimationFrame(loop);
    },
    clock,
  };
};
