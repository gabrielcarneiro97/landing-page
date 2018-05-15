import 'antd/dist/antd.css';
import React from 'react';
import { Row, Col, Affix } from 'antd';
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
      <Col sm={24} md={16} lg={18}>
        <Body />
      </Col>
      <Col sm={24} md={8} lg={6}>
        <Affix>
          <Forms />
        </Affix>
      </Col>
    </Row>
  );
}

export default App;
