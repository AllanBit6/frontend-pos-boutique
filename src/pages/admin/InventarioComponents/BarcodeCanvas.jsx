import JsBarcode from "jsbarcode";
import { useRef, useEffect } from "react";
import ButtonLight from "../../../components/ButtonLight";
import "./BarcodeCanvas.css";

function BarcodeCanvas({ productID }) {

  const canvasRef = useRef(null);

  useEffect(() => {
    if(canvasRef.current){
      JsBarcode(canvasRef.current, String(productID), {
        format: "CODE128",
        width: 2,
        height: 60,
        displayValue: true
      });
    }
  }, [productID]);

  const downloadBarcode = () => {
    const canvas = canvasRef.current;
    const image = canvas.toDataURL("image/png");

    const link = document.createElement("a");
    link.href = image;
    link.download = `barcode_${productID}.png`;
    link.click();
  };

  return (
    <div>
      <canvas ref={canvasRef} className="barcode-canvas"></canvas>

        <ButtonLight type="accept" onClick={downloadBarcode}>Descargar</ButtonLight>
    </div>
  );
}

export default BarcodeCanvas;