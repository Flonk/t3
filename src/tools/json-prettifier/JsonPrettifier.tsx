import { useEffect } from "react";
import { TextArea } from "../../ui/TextArea";
import { H1 } from "../../ui/Typography";
import { Button } from "../../ui/button/Button";
import { $ } from "../../util/dom";
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
        className="whitespace-pre font-mono h-20"
        placeholder="Paste your JSON here."
      ></TextArea>
      <div className="flex my-4">
        <Button
          className="mr-1"
          onClick={() => {
            const input = $<HTMLTextAreaElement>("#input");
            const output = $<HTMLTextAreaElement>("#output");

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
          className="mr-1"
          onClick={() => {
            const input = $<HTMLTextAreaElement>("#input");
            const output = $<HTMLTextAreaElement>("#output");

            try {
              output.classList.add("whitespace-pre");
              output.value = JSON.stringify(JSON.parse(input.value));
            } catch (e) {
              output.classList.remove("whitespace-pre");
              output.value = safeCast(e).message;
            }
          }}
          title="Minify"
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
        className="whitespace-pre font-mono h-64"
        placeholder="Prettified JSON will appear here."
      ></TextArea>
    </div>
  );
};
