import { jsPDF } from "jspdf";
import "svg2pdf.js"; // plugin for jspdf
import BgImage from "../assets/bg.jpg";
import QRImage from "../assets/sample.svg";

const PDFDownloader2 = () => {
  const download = async () => {
    // HTML to SVG
    const htmlElem = document.querySelector("#paintArea");
    const width = parseFloat(getComputedStyle(htmlElem).width);
    const height = parseFloat(getComputedStyle(htmlElem).height);
    console.log(width, height);

    const pdfDoc = new jsPDF({
      unit: "px",
      format: [width, height],
    });

    // pdfDoc.addSvgAsImage(htmlElem.outerHTML, 0, 0, width, height).then(() => {
    //   pdfDoc.save("image.pdf");
    // });

    // SVG to PDF
    pdfDoc.svg(htmlElem, 0, 0, width, height).then(() => {
      pdfDoc.save("image.pdf");
    });
  };

  return (
    <div>
      <div
      // style={{ visibility: "hidden", position: "absolute", top: "-9999px", left: "-9999px", pointerEvents: "none" }}x
      >
        <svg id="paintArea" xmlns="http://www.w3.org/2000/svg" width="400" height="400">
          <foreignObject width="100%" height="100%">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              style={{ background: "white", position: "relative", width: "100%", height: "100%" }}
            >
              <img src={BgImage} style={{ display: "block", minWidth: "100%", minHeight: "100%" }}></img>
              <img src={QRImage} style={{ width: "100px", position: "absolute", top: "50px", left: "50px" }}></img>
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
          </foreignObject>
        </svg>
      </div>

      <button onClick={download}>Download</button>
    </div>
  );
};

export default PDFDownloader2;
