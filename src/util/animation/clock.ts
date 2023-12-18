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

export type StoppableClock = Clock & {
  stop: () => void;
  start: () => void;
};

export const createStoppableClock = (timeWarp = 1): StoppableClock => {
  const clock = createClock(timeWarp);
  let preStopWarp = 0;
  let stopped = false;

  return {
    tick: clock.tick,
    warp: (factor = 1) => {
      if (stopped) preStopWarp = factor;
      else clock.warp(factor);
    },
    get timeWarp() {
      if (stopped) return preStopWarp;
      return clock.timeWarp;
    },
    stop: () => {
      if (stopped) return;
      stopped = true;
      preStopWarp = clock.timeWarp;
      clock.warp(0);
    },
    start: () => {
      if (!stopped) return;
      stopped = false;
      clock.warp(preStopWarp);
    },
  };
};
