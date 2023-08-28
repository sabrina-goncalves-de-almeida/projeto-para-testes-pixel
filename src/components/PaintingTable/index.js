import { useState } from "react";
import styles from "./PaintingTable.module.css";

function PaintingTable({num, colorPixel, digite}) {
    const pixelsPainting = Array(num).fill(colorPixel);
    const codePixelEmpty = Array(5).fill("");

    const [paintingTable, setPaintingTable] = useState(pixelsPainting);

    const [codePixels, setCodePixels] = useState(codePixelEmpty);

    // const pixelOnClick = (index) => {
    //     setPaintingTable(paintingTable.map(pixel, pixelIndex) => )
    // }

    return (
        <div>
            <div className={styles.paintingTable}>
                {paintingTable.map((pixel, index) => (
                    <div
                        key={index}
                        className={styles.pixels}
                        // className={`element ${pixel}`}
                    >{pixel}
                    </div>
                ))}
            </div>
            <div>
                {codePixels.map((codPixel, indexCod) => (
                    <div
                        key={indexCod}
                        className={styles.codPixels}
                        // className={`element ${pixel}`}
                    >{codPixel}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PaintingTable;
