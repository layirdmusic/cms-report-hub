import React, {useRef} from 'react'
import { PDFDocument, rgb } from 'pdf-lib'
import html2canvas from 'html2canvas';


export default function Regular() {
    
    const printRef = useRef();

    const handleDownloadPdf = async () => {
        const element = printRef.current;
    
        try {
            const canvas = await html2canvas(element, {
                scale: 3,
                dpi: 1000
            });
    
            const imageData = canvas.toDataURL('image/png');
    
            const pdfDoc = await PDFDocument.create();
            const page = pdfDoc.addPage([canvas.width, canvas.height]);
    
            const pngImage = await pdfDoc.embedPng(imageData);
            page.drawImage(pngImage, {
                x: 0,
                y: 0,
                width: canvas.width,
                height: canvas.height,
            });
    
            const pdfBytes = await pdfDoc.save();
            const blob = new Blob([pdfBytes], { type: 'application/pdf' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'print.pdf';
            link.click();
        } catch (error) {
            console.error('Error creating PDF:', error);
        }
    };

    return (
        <>
        <div ref={printRef} className='regular-form-container'>

            <div className='regular-form-title-container'>
                <h2>CENTRAL MOVING & STORAGE RECEIVING REPORT</h2>
            </div>
            <div className='regular-form-table-container'>
                <table className='regular-form-table'>
                    <tbody>
                        <tr className='form-row-one'>
                            <td className='column-one'>
                                <h2>JOB NAME</h2>
                            </td>
                            <td className='column-two'>
                                <p>HOTEL</p>
                                <p>EMILIE</p>
                            </td>
                            <td className='column-three'>
                                <h2>RECEIVING REPORT</h2>
                                <h2>NUMBER</h2>
                            </td>
                            <td className='column-four'>
                    
                            </td>
                            <td colSpan="2" className='column-five'>
                                <h2>CMS DISTRIBUTION #</h2>
                            </td>
                            <td className='column-six'>
                                
                            </td>
                        </tr>
                        <tr className='form-row-two'>
                            <td className='column-one'>
                                <h2>WAREHOUSE LOCATION:</h2>
                            </td>
                            <td className='column-two'>
                                <p>2002 Directors Row, Orlando</p>
                            </td>
                            <td className='column-three'>
                                <h2>DATE RECEIVED</h2>
                            </td>
                            <td className='column-four'>
                                <p></p>
                            </td>
                            <td colSpan="2" className='column-five'>
                                <h2>RECEIVED BY:</h2>
                            </td>
                            <td className='column-six'>
                                <p></p>
                            </td>
                        </tr>
                        <tr className='form-row-three'>
                            <td className='column-one'>
                                <h2>THREE PART FORM #</h2>
                            </td>
                            <td className='column-two'>
                                <p></p>
                            </td>
                            <td className='column-three'>
                                <h2>PURCHASE ORDER:</h2>
                            </td>
                            <td colSpan="4" className='column-four'>
                                <p></p>
                            </td>
                        </tr>
                        <tr className='form-row-four'>
                            <td className='column-one'>
                                <h2>ITEM CODE</h2>
                            </td>
                            <td className='column-two'>
                                <h2>DESCRIPTION</h2>
                            </td>
                            <td className='column-three'>
                                <h2>LOCATION</h2>
                            </td>
                            <td className='column-four'>
                                <h2>QUANTITY</h2>
                            </td>
                            <td className='column-five'>
                                <h2>WEIGHT PER</h2>
                                <h2>PIECE</h2>
                            </td>
                            <td className='column-six'>
                                <h2>PER PIECE CUBIC</h2>
                                <h2>FEET</h2>
                            </td>
                            <td className='column-seven'>
                                <h2>PER PIECE</h2>
                                <h2>SQUARE FEET</h2>
                            </td>
                        </tr>
                        <tr className='form-row-middle'>
                            <td className='column-one'>
                                <p></p>
                            </td>
                            <td className='column-two'>
                                <p></p>
                            </td>
                            <td className='column-three'>
                                <p></p>
                            </td>
                            <td className='column-four'>
                                <p></p>
                            </td>
                            <td className='column-five'>
                                <p></p>
                            </td>
                            <td className='column-six'>
                                <p></p>
                            </td>
                            <td className='column-seven'>
                                <p></p>
                            </td>
                        </tr>
                        <tr className='form-row-middle'>
                            <td className='column-one'>
                                <p></p>
                            </td>
                            <td className='column-two'>
                                <p></p>
                            </td>
                            <td className='column-three'>
                                <p></p>
                            </td>
                            <td className='column-four'>
                                <p></p>
                            </td>
                            <td className='column-five'>
                                <p></p>
                            </td>
                            <td className='column-six'>
                                <p></p>
                            </td>
                            <td className='column-seven'>
                                <p></p>
                            </td>
                        </tr>
                        <tr className='form-row-middle'>
                            <td className='column-one'>
                                <p></p>
                            </td>
                            <td className='column-two'>
                                <p></p>
                            </td>
                            <td className='column-three'>
                                <p></p>
                            </td>
                            <td className='column-four'>
                                <p></p>
                            </td>
                            <td className='column-five'>
                                <p></p>
                            </td>
                            <td className='column-six'>
                                <p></p>
                            </td>
                            <td className='column-seven'>
                                <p></p>
                            </td>
                        </tr>
                        <tr className='form-row-middle'>
                            <td className='column-one'>
                                <p></p>
                            </td>
                            <td className='column-two'>
                                <p></p>
                            </td>
                            <td className='column-three'>
                                <p></p>
                            </td>
                            <td className='column-four'>
                                <p></p>
                            </td>
                            <td className='column-five'>
                                <p></p>
                            </td>
                            <td className='column-six'>
                                <p></p>
                            </td>
                            <td className='column-seven'>
                                <p></p>
                            </td>
                        </tr>
                        <tr className='form-row-middle'>
                            <td className='column-one'>
                                <p></p>
                            </td>
                            <td className='column-two'>
                                <p></p>
                            </td>
                            <td className='column-three'>
                                <p></p>
                            </td>
                            <td className='column-four'>
                                <p></p>
                            </td>
                            <td className='column-five'>
                                <p></p>
                            </td>
                            <td className='column-six'>
                                <p></p>
                            </td>
                            <td className='column-seven'>
                                <p></p>
                            </td>
                        </tr>
                        <tr className='form-row-middle'>
                            <td className='column-one'>
                                <p></p>
                            </td>
                            <td className='column-two'>
                                <p></p>
                            </td>
                            <td className='column-three'>
                                <p></p>
                            </td>
                            <td className='column-four'>
                                <p></p>
                            </td>
                            <td className='column-five'>
                                <p></p>
                            </td>
                            <td className='column-six'>
                                <p></p>
                            </td>
                            <td className='column-seven'>
                                <p></p>
                            </td>
                        </tr>
                        <tr className='form-row-middle'>
                            <td className='column-one'>
                                <p></p>
                            </td>
                            <td className='column-two'>
                                <p></p>
                            </td>
                            <td className='column-three'>
                                <p></p>
                            </td>
                            <td className='column-four'>
                                <p></p>
                            </td>
                            <td className='column-five'>
                                <p></p>
                            </td>
                            <td className='column-six'>
                                <p></p>
                            </td>
                            <td className='column-seven'>
                                <p></p>
                            </td>
                        </tr>
                        <tr className='form-row-middle'>
                            <td className='column-one'>
                                <p></p>
                            </td>
                            <td className='column-two'>
                                <p></p>
                            </td>
                            <td className='column-three'>
                                <p></p>
                            </td>
                            <td className='column-four'>
                                <p></p>
                            </td>
                            <td className='column-five'>
                                <p></p>
                            </td>
                            <td className='column-six'>
                                <p></p>
                            </td>
                            <td className='column-seven'>
                                <p></p>
                            </td>
                        </tr>
                        <tr className='form-row-middle'>
                            <td className='column-one'>
                                <p></p>
                            </td>
                            <td className='column-two'>
                                <p></p>
                            </td>
                            <td className='column-three'>
                                <p></p>
                            </td>
                            <td className='column-four'>
                                <p></p>
                            </td>
                            <td className='column-five'>
                                <p></p>
                            </td>
                            <td className='column-six'>
                                <p></p>
                            </td>
                            <td className='column-seven'>
                                <p></p>
                            </td>
                        </tr>
                        <tr className='form-row-middle'>
                            <td className='column-one'>
                                <p></p>
                            </td>
                            <td className='column-two'>
                                <p></p>
                            </td>
                            <td className='column-three'>
                                <p></p>
                            </td>
                            <td className='column-four'>
                                <p></p>
                            </td>
                            <td className='column-five'>
                                <p></p>
                            </td>
                            <td className='column-six'>
                                <p></p>
                            </td>
                            <td className='column-seven'>
                                <p></p>
                            </td>
                        </tr>
                        <tr className='form-row-middle'>
                            <td className='column-one'>
                                <p></p>
                            </td>
                            <td className='column-two'>
                                <p></p>
                            </td>
                            <td className='column-three'>
                                <p></p>
                            </td>
                            <td className='column-four'>
                                <p></p>
                            </td>
                            <td className='column-five'>
                                <p></p>
                            </td>
                            <td className='column-six'>
                                <p></p>
                            </td>
                            <td className='column-seven'>
                                <p></p>
                            </td>
                        </tr>
                        <tr className='form-row-middle'>
                            <td className='column-one'>
                                <p></p>
                            </td>
                            <td className='column-two'>
                                <p></p>
                            </td>
                            <td className='column-three'>
                                <p></p>
                            </td>
                            <td className='column-four'>
                                <p></p>
                            </td>
                            <td className='column-five'>
                                <p></p>
                            </td>
                            <td className='column-six'>
                                <p></p>
                            </td>
                            <td className='column-seven'>
                                <p></p>
                            </td>
                        </tr>
                        <tr className='form-row-middle'>
                            <td className='column-one'>
                                <p></p>
                            </td>
                            <td className='column-two'>
                                <p></p>
                            </td>
                            <td className='column-three'>
                                <p></p>
                            </td>
                            <td className='column-four'>
                                <p></p>
                            </td>
                            <td className='column-five'>
                                <p></p>
                            </td>
                            <td className='column-six'>
                                <p></p>
                            </td>
                            <td className='column-seven'>
                                <p></p>
                            </td>
                        </tr>
                        <tr className='form-row-middle'>
                            <td className='column-one'>
                                <p></p>
                            </td>
                            <td className='column-two'>
                                <p></p>
                            </td>
                            <td className='column-three'>
                                <p></p>
                            </td>
                            <td className='column-four'>
                                <p></p>
                            </td>
                            <td className='column-five'>
                                <p></p>
                            </td>
                            <td className='column-six'>
                                <p></p>
                            </td>
                            <td className='column-seven'>
                                <p></p>
                            </td>
                        </tr>
                        <tr className='form-row-middle'>
                            <td className='column-one'>
                                <p></p>
                            </td>
                            <td className='column-two'>
                                <p></p>
                            </td>
                            <td className='column-three'>
                                <p></p>
                            </td>
                            <td className='column-four'>
                                <p></p>
                            </td>
                            <td className='column-five'>
                                <p></p>
                            </td>
                            <td className='column-six'>
                                <p></p>
                            </td>
                            <td className='column-seven'>
                                <p></p>
                            </td>
                        </tr>
                        <tr className='form-row-middle'>
                            <td className='column-one'>
                                <p></p>
                            </td>
                            <td className='column-two'>
                                <p></p>
                            </td>
                            <td className='column-three'>
                                <p></p>
                            </td>
                            <td className='column-four'>
                                <p></p>
                            </td>
                            <td className='column-five'>
                                <p></p>
                            </td>
                            <td className='column-six'>
                                <p></p>
                            </td>
                            <td className='column-seven'>
                                <p></p>
                            </td>
                        </tr>
                        <tr className='form-row-five'>
                            <td className='column-one'>
                                
                            </td>
                            <td className='column-two'>
                                <h2>BILL OF LANDING NUMBER</h2>
                            </td>
                            <td className='column-three'>
                                
                            </td>
                            <td className='column-four'>
                                
                            </td>
                            <td className='column-five'>
                                
                            </td>
                            <td className='column-six'>
                                
                            </td>
                            <td className='column-seven'>
                                
                            </td>
                        </tr>
                        <tr className='form-row-six'>
                            <td className='column-one'>
                                
                            </td>
                            <td className='column-two'>
                                
                            </td>
                            <td className='column-three'>
                                <h2>TOTAL LB, CF & SF</h2>
                            </td>
                            <td className='column-four'>
                                <h2>ITEM COUNT</h2>
                            </td>
                            <td colSpan="3" className='column-five'>
                                <h2>VENDOR NAME</h2>
                            </td>
                        </tr>
                        <tr className='form-row-seven'>
                            <td className='column-one'>
                                <h2>TOTAL LB, CF & SF</h2>
                            </td>
                            <td className='column-two'>
                                
                            </td>
                            <td className='column-three'>
                            <p></p>
                            </td>
                            <td className='column-four'>
                                <p></p>
                            </td>
                            <td colSpan="3" className='column-five'>
                                <p></p>
                            </td>
                        </tr>
                        <tr className='form-row-eight'>
                            <td className='column-one'>
                                <h2>RECEIVING NOTES:</h2>
                            </td>
                            <td colSpan="6" className='column-two'>
                                
                            </td>
                        </tr>
                        <tr className='form-row-nine'>
                            <td colSpan="7" className='column-two'>
                                
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <button onClick={handleDownloadPdf}>CLICK</button>
        </>
    )
}