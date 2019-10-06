import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import TagManager from 'react-gtm-module';

if (typeof window !== 'undefined') {
  console.log("here 1");
  if (window.location.href.match(/test-vizzmd-test.netlify/)) {
    console.log("here 2");
    const tagManagerArgs = {
      gtmId: 'GTM-MM93V8P'
    };

    TagManager.initialize(tagManagerArgs);
  }
}

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
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
