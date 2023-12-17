import { getAudioContext } from "./audiocontext";

const whiteNoiseBuffer = ((lengthInSeconds = 0.1) => {
  const audioContext = getAudioContext();
  const bufferSize = lengthInSeconds * audioContext.sampleRate;
  const noiseBuffer = audioContext.createBuffer(
    1,
    bufferSize,
    audioContext.sampleRate
  );
  const output = noiseBuffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    output[i] = Math.random() * 2 - 1;
  }
  return noiseBuffer;
})();

export const generateWhiteNoiseSource = (audioContext: AudioContext) => {
  const whiteNoise = audioContext.createBufferSource();
  whiteNoise.buffer = whiteNoiseBuffer;
  whiteNoise.loop = true;

  return whiteNoise;
};

// make a tsk sound
export const tsk = (
  audioContext: AudioContext,
  destination: AudioNode,
  time: number
) => {
  const whiteNoise = generateWhiteNoiseSource(audioContext);
  const gainNode = audioContext.createGain();
  whiteNoise.connect(gainNode);
  gainNode.connect(destination);
  gainNode.gain.setValueAtTime(0.3, time);
  gainNode.gain.exponentialRampToValueAtTime(0.01, time + 0.02);
  whiteNoise.start(time);
  whiteNoise.stop(time + 0.02);
};
