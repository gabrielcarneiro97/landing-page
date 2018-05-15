import 'antd/dist/antd.css';
import React from 'react';
import { Row, Col } from 'antd';
import './App.css';
import Forms from './Form';
import Header from './Header';
import Body from './Body'

function App() {
  return (
    <Row theme="dark">
      <Col sm={24}>
        <Header />
      </Col>
      <Col sm={24} md={12} lg={16}>
        <Body />
      </Col>
      <Col sm={24} md={12} lg={8}>
        <Forms />
      </Col>
    </Row>
  );
}

export default App;
