
import React, {useState} from 'react'
import { Document, Page, pdfjs, } from "react-pdf";
import caseOne from '../assets/case1.pdf'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function CaseStudyOne() {

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({numPages}){
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offSet){
    setPageNumber(prevPageNumber => prevPageNumber + offSet);
  }

  function changePageBack(){
    changePage(-1)
  }

  function changePageNext(){
    changePage(+1)
  }

  return (
        <div className='case-study'>
          <div className='case-study-title'>
          <p className='overline-text'>Category</p>
          <h3>Case Study Title</h3>
          </div>
          <div className='case-study-body'>
          <p className="body-2">Hello! I am Patrick. I am a graphic and brand identity designer who also has a passion for illustration, type design, print and packaging design, web design, UX design and motion graphics and has corporate experience in marketing strategy, brand and trade marketing.</p>
          </div>
          <Document file={caseOne} onLoadSuccess={onDocumentLoadSuccess} className="body-1">
            {Array.from(
              new Array(numPages),
              (el,index) => (
                <Page 
                  key={`page_${index+1}`}
                  pageNumber={index+1}
                />
              )
            )}
          </Document>
        </div>
  );
}

export default CaseStudyOne;