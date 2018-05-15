import 'antd/dist/antd.css';
import React from 'react';
import { Row, Col } from 'antd';
import './App.css';
import Forms from './Form';

function App() {
  return (
    <Row>
      <Col sm={24} md={12} lg={16}>
        <div>HOLDER</div>
      </Col>
      <Col sm={24} md={12} lg={8}>
        <Forms />
      </Col>
    </Row>
  );
}

export default App;
