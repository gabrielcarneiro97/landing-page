import 'antd/dist/antd.css';
import React from 'react';
import { Row, Col } from 'antd';
import './App.css';
import Body from './Body';

class App extends React.Component {

  componentWillMount() {
    window.scrollTo(0, 0);
    console.log('aqui');
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
