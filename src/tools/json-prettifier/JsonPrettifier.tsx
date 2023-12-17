import { useEffect } from "react";
import { TextArea } from "../../ui/TextArea";
import { H1 } from "../../ui/Typography";
import { Button } from "../../ui/button/Button";
import { safeCast } from "../../util/util";

export const JsonPrettifier = () => {
  useEffect(() => {
    document.title = "JSON Prettifier - T3";
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen px-8 max-w-prose grow">
      <H1 className="w-full">JSON Prettifier</H1>
      <TextArea
        name="input"
        id="input"
        className="border border-gray-200 rounded-md w-full text-xs font-mono overflow-x-scroll whitespace-pre h-20"
        placeholder="Paste your JSON here."
      ></TextArea>
      <div className="flex my-4">
        <Button
          className="mr-1"
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
          title="Prettify"
        />
        <Button
          className=""
          onClick={() => {
            const output = document.getElementById(
              "output"
            ) as HTMLTextAreaElement;
            output.select();
            document.execCommand("copy");
            output.blur();
          }}
          title="Copy"
        />
      </div>
      <TextArea
        name="output"
        id="output"
        className="border border-gray-200 rounded-md w-full mt-4 h-64 text-xs font-mono overflow-x-scroll whitespace-pre"
        placeholder="Prettified JSON will appear here."
      ></TextArea>
    </div>
  );
};
