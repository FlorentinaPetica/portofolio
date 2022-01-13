import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import sample from "../../documents/CV_Florentina_Petica.pdf";

const CV = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };
  return (
    <div>
      <Document file={sample} onLoadSuccess={onDocumentLoadSuccess} />
      <Page pageNumber={pageNumber} />
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
};

export default CV;
