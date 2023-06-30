/* eslint-disable @typescript-eslint/no-non-null-assertion */
import chroma from "chroma-js";
import { CENTER_LUMINANCE, maxChroma } from "./color";
import { Fn, lerp } from "./math";
import { UseColorSchemeGenerator } from "../tools/generator/useColorSchemeGenerator";

const renderGradient = () => {
  const canvas = document.createElement("canvas");
  canvas.width = 1000;
  canvas.height = 1;
  const ctx = canvas.getContext("2d")!;
  const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = pixels.data;
  for (let i = 0; i < canvas.width; i++) {
    const hue = (i / canvas.width) * 360;
    const color = chroma.oklch(
      CENTER_LUMINANCE,
      maxChroma(hue, CENTER_LUMINANCE),
      hue
    );
    const rgb = color.rgb();
    data[i * 4 + 0] = rgb[0];
    data[i * 4 + 1] = rgb[1];
    data[i * 4 + 2] = rgb[2];
    data[i * 4 + 3] = 255;
  }
  ctx.putImageData(pixels, 0, 0);
  return canvas;
};

export const OKLAB_GRADIENT = renderGradient();

export const drawGradient = (canvas: HTMLCanvasElement) => {
  const ctx = canvas.getContext("2d")!;
  ctx.drawImage(OKLAB_GRADIENT, 0, 0, canvas.width, canvas.height);
};

export const graph = (
  fn: Fn,
  canvas: HTMLCanvasElement,
  generator: UseColorSchemeGenerator
) => {
  const ctx = canvas.getContext("2d")!;
  const PADDING = 16;

  // fill background
  ctx.fillStyle = "#FFF"; //generator.generateHex(0);
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.save();
  ctx.translate(0.5, 0.5);

  // find min and max value of fn from 0 to 10
  let ymin = Infinity;
  let ymax = -Infinity;

  for (let i = 0; i < 10; i++) {
    const y = fn(i);
    if (y > ymax) ymax = y;
    if (y < ymin) ymin = y;
  }

  const paddedYmin = ymin * 0.8;
  const paddedYmax = ymax * 1.1;
  const ySpan = paddedYmax - paddedYmin;

  const xAxis = lerp(0, 9, PADDING, canvas.width - PADDING);
  const yAxis = lerp(paddedYmin, paddedYmax, canvas.height - PADDING, PADDING);

  // draw grid
  ctx.strokeStyle = generator.generateHex(1);
  ctx.lineWidth = 0.6;
  ctx.beginPath();
  for (let i = 0; i <= 10; i++) {
    const x = Math.round(xAxis(i));
    ctx.moveTo(x, PADDING);
    ctx.lineTo(x, canvas.height - PADDING);
  }
  for (let i = 0; i <= 10; i++) {
    const y = Math.round(yAxis((i / 10) * ySpan + paddedYmin));
    ctx.moveTo(PADDING, y);
    ctx.lineTo(canvas.width - PADDING, y);
  }

  ctx.stroke();

  // draw graph
  ctx.strokeStyle = generator.generateHex(9);
  ctx.lineWidth = 2;
  ctx.beginPath();
  for (let i = 0; i < 10; i++) {
    const x = xAxis(i);
    const y = yAxis(fn(i));

    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.stroke();
  ctx.restore();
};
