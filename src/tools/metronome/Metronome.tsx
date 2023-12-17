import { useEffect } from "react";

export const Metronome = () => {
  useEffect(() => {
    document.title = "Metronome - T3";
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen px-8 max-w-prose grow">
      <h1 className="text-3xl font-bold text-center mb-4 mt-8">Metronome</h1>
      <div className="flex mt-4">
        <button className="btn btn-primary">Start</button>
        <button className="btn btn-secondary ml-2">Stop</button>
      </div>
    </div>
  );
};
