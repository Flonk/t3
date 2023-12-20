/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useEffect, useMemo, useRef, useState } from "react";
import { HiMiniMinus, HiMiniPlus, HiPause, HiPlay } from "react-icons/hi2";
import { Inset } from "../../ui/Inset";
import { Page } from "../../ui/Page";
import { H1, Overline } from "../../ui/Typography";
import { BaseButtonSmall } from "../../ui/button/Button";
import { createAnimationLoop } from "../../util/animation/animation";
import { Clock } from "../../util/animation/clock";
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
  }, [animation, bpm]);

  useEffect(() => {
    if (!play) animation?.stop();
    else animation?.start();
  }, [animation, bpm, play]);

  return (
    <Page title="Metronome" className="max-w-xl">
      <H1 className="w-full">Metronome</H1>
      <div className="flex w-full">
        <Inset className="grow mr-2">
          <Overline as="h2">BPM</Overline>
          <div className="flex flex-col items-center">
            <input
              type="range"
              min="40"
              max="220"
              id="bpm"
              value={bpm}
              className="w-full rounded-sm mb-2"
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
        <Inset className="flex items-center justify-center py-0">
          <canvas
            ref={canvasRef}
            width={30}
            height={105}
            style={{ width: "30px", height: "105px" }}
          ></canvas>
        </Inset>
      </div>
    </Page>
  );
};
