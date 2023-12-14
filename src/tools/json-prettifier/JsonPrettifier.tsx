import { useEffect } from "react";
import { safeCast } from "../../util/util";

export const JsonPrettifier = () => {
  useEffect(() => {
    document.title = "T3 JSON Prettifier";
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen px-8 max-w-prose grow">
      <h1 className="text-3xl font-bold text-center mb-4 mt-8">
        JSON Prettifier
      </h1>
      <textarea
        name="input"
        id="input"
        className="border border-gray-200 rounded-md w-full text-xs font-mono overflow-x-scroll whitespace-pre h-20"
        placeholder="Paste your JSON here."
      ></textarea>
      <div className="flex mt-4">
        <button
          className="btn btn-primary"
          onClick={() => {
            const input = document.getElementById(
              "input"
            ) as HTMLTextAreaElement;
            const output = document.getElementById(
              "output"
            ) as HTMLTextAreaElement;
            try {
              output.classList.add("whitespace-pre");
              output.value = JSON.stringify(JSON.parse(input.value), null, 2);
            } catch (e) {
              output.classList.remove("whitespace-pre");
              output.value = safeCast(e).message;
            }
          }}
        >
          Prettify
        </button>
        <button
          className="btn btn-secondary ml-2"
          onClick={() => {
            const output = document.getElementById(
              "output"
            ) as HTMLTextAreaElement;
            output.select();
            document.execCommand("copy");
            output.blur();
          }}
        >
          Copy
        </button>
      </div>
      <textarea
        name="output"
        id="output"
        className="border border-gray-200 rounded-md w-full mt-4 h-64 text-xs font-mono overflow-x-scroll whitespace-pre"
        placeholder="Prettified JSON will appear here."
      ></textarea>
    </div>
  );
};
