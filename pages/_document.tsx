import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
export default class PaintDocument extends Document {
  render() {
    return (
      <Html lang="zh-CN">
        <Head>
          {/* PWA primary color */}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
        </Head>
        <body>
          <Main />
          <NextScript/>
        </body>
      </Html>
    );
  }
}
