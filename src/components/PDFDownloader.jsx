import { jsPDF } from "jspdf";
import "svg2pdf.js"; // plugin for jspdf
import BgImage from "../assets/bg.jpg";
import QRImage from "../assets/sample.svg";
import htmlToSvg from "htmlsvg";

const PDFDownloader = () => {
  const download = async () => {
    // HTML to SVG
    const htmlElem = document.querySelector("#paintArea");
    const width = parseFloat(getComputedStyle(htmlElem).width);
    const height = parseFloat(getComputedStyle(htmlElem).height);
    console.log(width, height);

    const svg = await htmlToSvg(htmlElem);
    const pdfDoc = new jsPDF({
      unit: "px",
      format: [width, height],
    });

    // SVG to PDF
    pdfDoc.svg(svg, 0, 0, width, height).then(() => {
      pdfDoc.save("image.pdf");
    });
  };

  return (
    <div>
      <div
        style={{ visibility: "hidden", position: "absolute", top: "-9999px", left: "-9999px", pointerEvents: "none" }}
      >
        <div id="paintArea" style={{ background: "white", position: "relative" }}>
          <img src={BgImage} style={{ display: "block", minWidth: "100%", minHeight: "100%" }} />
          <img src={QRImage} style={{ width: "100px", position: "absolute", top: "50px", left: "50px" }} />
          <span
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              color: "red",
              position: "absolute",
              top: "150px",
              left: "50px",
            }}
          >
            Meow
          </span>
        </div>
      </div>

      <button onClick={download}>Download</button>
    </div>
  );
};

export default PDFDownloader;
