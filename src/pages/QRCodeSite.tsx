import { QRCodeCanvas } from "qrcode.react";
import { useRef } from "react";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const SITE_URL = "https://impact.utcluj.ro";

const QRCodeSite = () => {
  const canvasRef = useRef<HTMLDivElement>(null);

  const downloadQR = () => {
    const canvas = canvasRef.current?.querySelector("canvas");
    if (canvas) {
      const url = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.download = "impact-utcn-qr-code.png";
      link.href = url;
      link.click();
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-8">
      <h1 className="text-2xl font-bold text-[#2b2b2b] mb-4">
        Cod QR - Site IMPACT+UTCN
      </h1>
      <p className="text-[#666] mb-8 text-center">
        Scanează acest cod pentru a accesa:<br />
        <a href={SITE_URL} className="text-[#BE1E2D] underline">
          {SITE_URL}
        </a>
      </p>
      
      <div ref={canvasRef} className="bg-white p-8 rounded-xl shadow-lg border">
        <QRCodeCanvas
          value={SITE_URL}
          size={300}
          level="H"
          includeMargin={true}
          fgColor="#000000"
          bgColor="#ffffff"
        />
      </div>

      <Button
        onClick={downloadQR}
        className="mt-8 bg-[#BE1E2D] hover:bg-[#a01825] text-white"
      >
        <Download className="w-4 h-4 mr-2" />
        Descarcă QR Code (PNG)
      </Button>
    </div>
  );
};

export default QRCodeSite;
