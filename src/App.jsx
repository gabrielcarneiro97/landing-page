import 'antd/dist/antd.css';
import React from 'react';
import { Row, Col } from 'antd';
import './App.css';
import Forms from './Form';
import Header from './Header';
import Body from './Body';

function App() {
  return (
    <Row theme="dark" className="App">
      <Col sm={24}>
        <Header />
      </Col>
      <Col sm={24} md={16}>
        <Body />
      </Col>
      <Col sm={24} md={8}>
        <Forms />
      </Col>
    </Row>
  );
}

export default App;
