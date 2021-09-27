import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import 'antd/dist/antd.css'
import '../styles/vars.css'
import '../styles/globals.css'
import { CopyrightOutlined } from '@ant-design/icons';
import GlobalFooter from '@/components/GlobalFooter';

import {Layout} from 'antd'

const {Header, Content, Footer} = Layout;
const currentYear = new Date().getFullYear();

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
        <GlobalFooter
          links={[]}
          copyright={
            <>
              Copyright <CopyrightOutlined /> {currentYear} 绘旅书梦
              <span style={{ padding: '0 20px' }}>|</span>
              <a onClick={() => open('https://beian.miit.gov.cn')}>
              <img data-src="china-net.gif" className="report-img" src="china-net.gif"/>
              <img data-src="china.png" className="report-img" src="china.png"/>
                沪ICP备2021026434号
              </a>
            </>
          }
        />
      </Footer>
    </React.Fragment>
  );
}