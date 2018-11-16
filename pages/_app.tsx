import React from 'react';
import App, { Container } from 'next/app';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'theme/global';
import theme from 'theme/settings';
import Head from 'next/head';

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }: any) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Source+Code+Pro:400,700"
            rel="stylesheet"
          />
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-29300344-2"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){window.dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'UA-29300344-2');
              `
            }}
          />
        </Head>
        <ThemeProvider theme={theme}>
          <React.Fragment>
            <GlobalStyles />
            <Component {...pageProps} />
          </React.Fragment>
        </ThemeProvider>
      </Container>
    );
  }
}
