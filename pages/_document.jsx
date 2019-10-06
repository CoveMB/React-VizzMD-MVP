import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import GtmScript from '../src/components/GtmScript';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }


  render() {
    console.log(this.props.initialProps);
    return (
      <Html>
        <Head>
          <title>VizzMD</title>
          <link rel="shortcut icon" type="image/x-icon" href="/static/images/favicon.png" />
          <GtmScript />
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
