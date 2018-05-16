import React from 'react';
import { Card, Col, Row } from 'antd';

import './PlaceCard.css';

function PlaceCard(props) {
  const title = props.title || 'Default'; //eslint-disable-line
  const { children, img } = props; //eslint-disable-line

  return (
    <Row
      type="flex"
      justify="center"
      style={{
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
        >
          <Row>
            <Col xs={24} sm={12} id="teste">
              {children}
            </Col>
            <Col xs={24} sm={12}>
              <img
                alt=""
                src={img}
                className="card-img"
              />
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
}

export default PlaceCard;
