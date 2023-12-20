import QRCode from "qrcode";
import { useEffect, useRef, useState } from "react";
import { Inset } from "../../ui/Inset";
import { Page } from "../../ui/Page";
import { TextArea } from "../../ui/TextArea";
import { H1, Overline } from "../../ui/Typography";

type QrCodeProps = {
  value: string;
};
const QrCode = ({ value }: QrCodeProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    QRCode.toCanvas(canvasRef.current, value, { scale: 6 });
  }, [value]);

  return <canvas ref={canvasRef} />;
};

export const QrGenerator = () => {
  const [value, setValue] = useState("T3 rocks!");

  return (
    <Page title="QR Code Generator" className="max-w-2xl">
      <H1 className="w-full">QR Code Generator</H1>
      <Overline className="w-full">Input</Overline>
      <TextArea
        name="input"
        id="input"
        className="font-mono h-32 mb-2"
        placeholder="Gerate QR code..."
        onChange={(e) => setValue(e.target.value)}
        wrap="hard"
      >
        {value}
      </TextArea>
      <Overline className="w-full">Output</Overline>
      <Inset className="w-full overflow-scroll">
        <div className="flex justify-center">
          <QrCode value={value} />
        </div>
      </Inset>
    </Page>
  );
};
