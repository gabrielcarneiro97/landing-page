import 'antd/dist/antd.css';
import React from 'react';
import { Row, Col } from 'antd';
import './App.css';
import Body from './Body';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Row theme="dark" className="App">
        <Col sm={24}>
          <Body />
        </Col>
      </Row>
    );
  }
}

export default App;
