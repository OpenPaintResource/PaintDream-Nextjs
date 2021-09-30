import React from 'react';
import { Row, Col,Space, Card } from 'antd';
import Image from 'next/image';

export default function Index() {
  return (
      <React.Fragment>
        <Row>
          <Col span={8}>
            <Space>
            <Image src={"/background.png"} width="300" height="300"/>
            <Image src={"/painter.jpg"} width="300" height="300"/>
            <Image src={"/paintes.png"} width="300" height="300"/>
            </Space>
          </Col>
          <Col span={16}>
            <h1>Tilemap</h1>
            <p>
              这类游戏资源可以很好地解决内存空间占用过大的问题。
              在游戏行业早期，内存比较少，但是要塞进一定数量的关卡。
              为了满足在需求，游戏行业的先驱设计出了
              <b>Tilemap</b>
            </p>

            <p>Tilemap是用于创建游戏关卡的瓷砖网格。使用Tilemap设计游戏关卡，有几个好处：</p>
            <ul>
              <li>
                通过将图块绘制到网格上来，游戏加载将变快
              </li>
              <li>
                在游戏引擎中，针对Tilemap进行了优化
              </li>
            </ul>

            <h2>工具推荐</h2>
            <Row>
            <Card
              cover={
                <img alt="Godot" src={"/soft/godot.png"}  height="150px"/>
              }
            />
            <Card
              cover={
                <img alt="Godot" src={"/soft/krita.svg"}  height="150px"/>
              }
            />
            <Card
              cover={
                <img alt="Godot" src={"/soft/cocos_400x400.png"}  height="150px"/>
              }
            />
            <Card
              cover={
                <img alt="Godot" src={"/soft/ps.png"}  height="150px"/>
              }
            />
            </Row>
          </Col>
        </Row>
      </React.Fragment>
  );
}