import React from 'react';
import { Card, Col, Row, Button, message } from 'antd';

import ModalForm from './ModalForm';

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
          message.success('Informações adicionais foram encaminhadas para o seu e-mail!', 1);
          this.setState({ visible: false });
        }
      });
    };
  }

  render() {
    const destino = this.props.title; //eslint-disable-line
    const title = <div className="title-big">{this.props.title}</div> || 'Default'; //eslint-disable-line
    const { col1, col2, haveButton, singleCol } = this.props; //eslint-disable-line

    const row = singleCol ? (
      <Row>
        <Col xs={24}>
          {singleCol}
        </Col>
      </Row>
    ) : (
      <Row gutter={16}>
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
          destino={destino}
        />
        <Button onClick={this.showModal}>Quero Este!</Button>
      </div>) : null;

    return (
      <Row
        type="flex"
        justify="center"
        style={{
          paddingTop: '1vh',
          margin: '3vh',
        }}
      >
        <Col xs={23} md={20}>
          <Card
            title={title}
            className="text"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              textAlign: 'justify',
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
