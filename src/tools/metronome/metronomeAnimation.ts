import { Clock } from "../../util/animation/clock";
import { easing } from "../../util/animation/easing";
import { getAudioContext } from "../../util/audiocontext/audiocontext";
import { tsk } from "../../util/audiocontext/whiteNoise";

export type MetronomeAnimationCallback = (
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D,
  time: number,
  clock: Clock
) => void;

export const ASSUMED_BPM = 100;
let schedulable = true;
const actx = getAudioContext();

export const metronomeAnimation: MetronomeAnimationCallback = (
  canvas,
  ctx,
  time,
  clock
) => {
  if (!ctx) return;

  const MS_PER_BEAT = 60_000 / ASSUMED_BPM;
  const MS_PER_TWO_BEATS = 2 * MS_PER_BEAT;
  const MS_PER_SECOND = 1000;

  const BEAT_PROGRESS = (time / MS_PER_BEAT) % 1;
  const nextBeat = ((1 - BEAT_PROGRESS) * MS_PER_BEAT) / clock.timeWarp;
  if (nextBeat < 50 && schedulable) {
    tsk(actx, actx.destination, actx.currentTime + nextBeat / MS_PER_SECOND);
    schedulable = false;
  } else if (BEAT_PROGRESS < 0.1) {
    schedulable = true;
  }

  const width = canvas.width;
  const height = canvas.height;

  ctx.globalAlpha = 0.075;
  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, width, height);
  ctx.globalAlpha = 1;
  ctx.drawImage(canvas, 0, -1);

  const circleDiameter = 10;
  const paddedWidth = width - circleDiameter;

  ctx.fillStyle = "#fff";
  ctx.strokeStyle = "#4d7c0f";
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.arc(
    circleDiameter / 2 + easing.sawtooth(time / MS_PER_TWO_BEATS) * paddedWidth,
    height - circleDiameter,
    circleDiameter / 2,
    0,
    2 * Math.PI
  );
  ctx.fill();
  ctx.stroke();
};
