import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import 'antd/dist/antd.css'
import '../styles/vars.css'
import '../styles/globals.css'

import {Layout} from 'antd'

const {Header, Content, Footer} = Layout;

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <React.Fragment>
      <Head>
        <title>绘旅书梦</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <Layout>
        <Header className="header">
          <span className="logo">
            绘旅书梦
          </span>
        </Header>
        <Content className="content">
          <Component {...pageProps} />
        </Content>
      </Layout>
      <Footer className="footer">
        <p>为独立游戏开发者提供免费素材,进行游戏的开发和学习,施工中</p>
      </Footer>
    </React.Fragment>
  );
}