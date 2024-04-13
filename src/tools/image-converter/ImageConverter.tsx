import { useEffect, useRef, useState } from "react";
import { Inset } from "../../ui/Inset";
import { Page } from "../../ui/Page";
import { Caption, H1, Overline } from "../../ui/Typography";
import { Button } from "../../ui/button/Button";
import { $ } from "../../util/dom";
import { safeCast } from "../../util/util";

const downloadAs = (
  canvas: HTMLCanvasElement,
  fileName: string,
  extension: string
) => {
  const link = document.createElement("a");
  link.download = `${fileName}.${extension}`;
  link.href = canvas
    .toDataURL(`image/${extension}`)
    .replace(`image/${extension}`, "image/octet-stream");
  link.click();
};

type DownloadButtonProps = {
  extension: string;
  fileName: string;
};

const DownloadButton = ({ extension, fileName }: DownloadButtonProps) => {
  return (
    <Button
      className="mr-1"
      onClick={() => {
        downloadAs($("canvas"), fileName, extension);
      }}
      title={extension}
    />
  );
};

type ImageReaderProps = {
  setFileName: (fileName: string) => void;
};

const ImageReader = ({ setFileName }: ImageReaderProps) => {
  const dropRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!dropRef.current) return;
    dropRef.current.addEventListener("change", (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];

      if (!file) return;

      const fileNameWithoutExtensionParts = file?.name.split(".");
      const fileNameWithoutExtension = fileNameWithoutExtensionParts?.slice(
        0,
        fileNameWithoutExtensionParts.length - 1
      );
      setFileName(fileNameWithoutExtension?.join(".") || "");

      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.src = safeCast(e).target.result as string;
        img.onload = () => {
          const canvas = document.querySelector("canvas") as HTMLCanvasElement;
          const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
          canvas.width = img.width;
          canvas.height = img.height;
          ctx.drawImage(img, 0, 0);
        };
      };
      reader.readAsDataURL(file);
    });
  }, [dropRef, setFileName]);

  return (
    <Inset className="mb-4 w-fit relative">
      <input
        type="file"
        className="w-full absolute inset-0 flex items-center justify-center cursor-pointer p-4"
        ref={dropRef}
      />
      <canvas className="max-w-full max-h-[60em]"></canvas>
    </Inset>
  );
};

export const ImageConverter = () => {
  const [fileName, setFileName] = useState("");

  return (
    <Page title="Image Converter" className="max-w-2xl">
      <H1 className="w-full mb-0">Image Converter</H1>
      <Caption className="w-full mb-8">
        Supported Formats: .png, .jpeg, .webp
      </Caption>
      <Overline className="w-full">Input</Overline>
      <div className="w-full">
        <ImageReader setFileName={setFileName} />
      </div>
      <Overline className="w-full">Download</Overline>
      <div className="flex items-start justify-start w-full">
        <DownloadButton extension="png" fileName={fileName} />
        <DownloadButton extension="jpeg" fileName={fileName} />
        <DownloadButton extension="webp" fileName={fileName} />
      </div>
    </Page>
  );
};
