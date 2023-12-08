import { jsPDF } from "jspdf";
import BgImage from "../assets/bg.jpg";

const PDFDownloader = () => {
  const download = async () => {
    const htmlElem = document.querySelector("#paintArea");
    const width = parseFloat(getComputedStyle(htmlElem).width);
    const height = parseFloat(getComputedStyle(htmlElem).height);

    const pdfDoc = new jsPDF({
      unit: "px",
      format: [width, height],
    });

    pdfDoc.html(htmlElem, 0, 0, width, height).then(() => {
      pdfDoc.save("images.pdf");
    });
  };

  return (
    <div>
      <div
        style={{ visibility: "hidden", position: "absolute", top: "-9999px", left: "-9999px", pointerEvents: "none" }}
      >
        {/* template image replica using html */}
        <div id="paintArea" style={{ background: "white", position: "relative" }}>
          {/* Template Image */}
          <img src={BgImage} style={{ display: "block", minWidth: "100%", minHeight: "100%" }} />
          {/* QR Code */}
          <img src={BgImage} style={{ width: "100px", position: "absolute", top: "50px", left: "50px" }} />
          {/* Profile No, */}
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
