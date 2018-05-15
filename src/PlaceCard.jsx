import React from 'react';
import { Card, Col, Row } from 'antd';

function PlaceCard(props) {
  const title = props.title || 'Default'; //eslint-disable-line

  return (
    <Row
      type="flex"
      justify="center"
      style={{
        paddingTop: '2vh',
        paddingBottom: '2vh',
      }}
    >
      <Col sm={24} md={20}>
        <Card title={title} bordered={false}>
          <Row>
            <Col sm={16}>
              Card content
            </Col>
            <Col sm={8}>
              Image
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
}

export default PlaceCard;
