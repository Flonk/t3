/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useEffect, useMemo, useRef, useState } from "react";
import { HiMiniMinus, HiMiniPlus, HiPause, HiPlay } from "react-icons/hi2";
import { Inset } from "../../ui/Inset";
import { H1, Overline } from "../../ui/Typography";
import { BaseButtonSmall } from "../../ui/button/Button";
import { Clock, createAnimationLoop } from "../../util/animation/animation";
import { ASSUMED_BPM, metronomeAnimation } from "./metronomeAnimation";

export const Metronome = () => {
  useEffect(() => {
    document.title = "Metronome - T3";
  }, []);

  const [bpm, setBpm] = useState(100);
  const [play, setPlay] = useState(true);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  type Callback = (time: number, clock: Clock) => void;
  const animationRef = useRef<Callback>(() => {});

  useEffect(() => {
    animationRef.current = (time: number, clock: Clock) =>
      metronomeAnimation(
        canvasRef.current!,
        canvasRef.current!.getContext("2d")!,
        time,
        clock
      );
  }, [canvasRef]);

  const animation = useMemo(() => {
    return createAnimationLoop((time, _, clock) =>
      animationRef.current(time, clock)
    );
  }, []);

  useEffect(() => {
    animation?.clock.warp(bpm / ASSUMED_BPM);
  }, [animation?.clock, bpm]);

  useEffect(() => {
    if (!play) animation?.stop();
    else animation?.start();
  }, [animation, bpm, play]);

  return (
    <div className="flex flex-col min-h-screen px-8 max-w-prose grow">
      <H1>Metronome</H1>
      <div className="flex">
        <Inset className="grow mr-2">
          <Overline as="h2">BPM</Overline>
          <div className="flex flex-col items-center">
            <input
              type="range"
              min="40"
              max="220"
              id="bpm"
              value={bpm}
              className="w-full rounded-sm"
              onChange={(e) => setBpm(parseInt(e.target.value))}
            ></input>
            <div className="flex items-center">
              <BaseButtonSmall onClick={() => setBpm(bpm - 1)}>
                <HiMiniMinus />
              </BaseButtonSmall>
              <div className="text-lg mx-4">{bpm}</div>
              <BaseButtonSmall onClick={() => setBpm(bpm + 1)}>
                <HiMiniPlus />
              </BaseButtonSmall>
              <BaseButtonSmall
                onClick={() => setPlay((x) => !x)}
                className="ml-1"
              >
                {play ? <HiPause /> : <HiPlay />}
              </BaseButtonSmall>
            </div>
          </div>
        </Inset>
        <Inset className="flex items-center justify-center">
          <canvas
            ref={canvasRef}
            width={40}
            height={100}
            style={{ width: "40px", height: "100px" }}
          ></canvas>
        </Inset>
      </div>
    </div>
  );
};
