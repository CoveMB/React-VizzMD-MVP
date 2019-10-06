import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import TagManager from 'react-gtm-module';

// if (typeof window !== 'undefined') {
//   if (window.location.href.match(/vizzmd.netlify/)) {
//     console.log(" here");
//     const tagManagerArgs = {
//       gtmId: 'GTM-MM93V8P'
//     };
//
//     TagManager.initialize(tagManagerArgs);
//   }
// }

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
            <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MM93V8P');</script>
        </Head>
        <body>
          <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MM93V8P"
          height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
