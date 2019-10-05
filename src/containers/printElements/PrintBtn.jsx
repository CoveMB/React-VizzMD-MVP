import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { faPrint } from '@fortawesome/free-solid-svg-icons';

class PrintBtn extends Component {
  render() {
    return (
      <Link href="/print"><button id="gta-print-btn" className="btn btn-blue print-btn" ref={(el) => { this.printingBtn = el; }} onClick={this.startPrinting}>Print <FontAwesomeIcon icon={faPrint} /></button></Link>
    );
  }
}


export default PrintBtn;
