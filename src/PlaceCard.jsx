import React from 'react';
import { Card, Col, Row, Button } from 'antd';

import ModalForm from './Form';

import './PlaceCard.css';

class PlaceCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
    };

    this.showModal = () => {
      this.setState({ visible: true });
    };

    this.handleCancel = () => {
      this.setState({ visible: false });
    };

    this.saveFormRef = (formRef) => {
      this.formRef = formRef;
    };

    this.handleSubmit = () => {
      const { form } = this.formRef.props;
      form.validateFields((err, values) => { // eslint-disable-line
        if (!err) {
          console.log('Received values of form: ', values);
          this.setState({ visible: false });
        }
      });
    };
  }

  render() {
    const title = this.props.title || 'Default'; //eslint-disable-line
    const { col1, col2, haveButton, singleCol } = this.props; //eslint-disable-line

    const row = singleCol ? (
      <Row>
        <Col xs={24}>
          {singleCol}
        </Col>
      </Row>
    ) : (
      <Row>
        <Col xs={24} md={12}>
          {col1}
        </Col>
        <Col xs={24} md={12}>
          {col2}
        </Col>
      </Row>
    );

    const actions = haveButton ? (
      <div>
        <ModalForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleSubmit}
          destino={title}
        />
        <Button onClick={this.showModal}>Quero Este!</Button>
      </div>) : null;

    return (
      <Row
        type="flex"
        justify="center"
        style={{
          marginTop: '5vh',
          paddingTop: '2vh',
          paddingBottom: '2vh',
        }}
      >
        <Col xs={23} md={20}>
          <Card
            title={title}
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
            }}
            extra={actions}
          >
            {row}
          </Card>
        </Col>
      </Row>
    );
  }
}

export default PlaceCard;
