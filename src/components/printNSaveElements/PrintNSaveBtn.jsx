import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { faPrint, faFilePdf } from '@fortawesome/free-solid-svg-icons';

const PrintNSaveBtn = (props) => {
  let id = "";
  let icon = "";
  let text = "";
  let href = "";

  if (props.function === "print") {
    id = "gta-print-btn";
    icon = faPrint;
    text = "Print ";
    href = "/print";
  } else if (props.function === "save") {
    id = "gta-save-btn";
    icon = faFilePdf;
    text = "Save ";
    href = "/pdf";
  }

  return (
    <Link href={href}><button id={id} className="btn btn-blue print-btn" >{text} <FontAwesomeIcon icon={icon} /></button></Link>
  );
};


export default PrintNSaveBtn;
