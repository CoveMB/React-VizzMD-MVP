import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import TagManager from 'react-gtm-module';

// if (window.location.href.match(/test-vizzmd-test.netlify/)) {
//   console.log("here 2");
//   const tagManagerArgs = {
//     gtmId: 'GTM-MM93V8P'
//   };
//
//   TagManager.initialize(tagManagerArgs);
// }

// const tagManagerArgs = {
//   gtmId: 'GTM-MM93V8P'
// };
//
// TagManager.initialize(tagManagerArgs);
const checkIfMasterProdForGTMScript = () => {
  if (typeof window !== 'undefined') {
    if (window.location.href.match(/test-vizzmd-test.netlify/)) {
      return (<script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-MM93V8P');`
      }}
      />);
    }
  }
  return null;
};

const checkIfMasterProdForGTMIframe = () => {
  if (typeof window !== 'undefined') {
    if (window.location.href.match(/test-vizzmd-test.netlify/)) {
      return <iframe title="gtmFrame" src="https://www.googletagmanager.com/ns.html?id=GTM-MM93V8P" height="0" width="0" style={{ display: "none", visibility: "hidden" }} />;
    }
  }
  return null;
};

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <title>VizzMD</title>
          <link rel="shortcut icon" type="image/x-icon" href="/static/images/favicon.png" />
          {checkIfMasterProdForGTMScript()}
        </Head>
        <body>
          <noscript>
            {checkIfMasterProdForGTMIframe()}
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
