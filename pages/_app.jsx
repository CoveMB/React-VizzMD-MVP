import withRedux from "next-redux-wrapper";
import React from "react";
import { Provider } from "react-redux";
import App from "next/app";
import makeStore from '../src/store/makeStore';

import WithGtmScript from '../src/components/hoc/WithGtmScript';

import '../static/css/application.scss';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <WithGtmScript>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </WithGtmScript>
    );
  }
}

export default withRedux(makeStore)(MyApp);
