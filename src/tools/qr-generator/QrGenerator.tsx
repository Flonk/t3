import QRCode from "qrcode";
import { useEffect, useRef, useState } from "react";
import { TextArea } from "../../ui/TextArea";
import { H1 } from "../../ui/Typography";

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
  useEffect(() => {
    document.title = "JSON Prettifier - T3";
  }, []);

  const [value, setValue] = useState("T3 rocks!");

  return (
    <div className="flex flex-col items-center min-h-screen px-2 md:px-8 max-w-prose grow">
      <H1 className="w-full">QR Code Generator</H1>
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
      <QrCode value={value} />
    </div>
  );
};
