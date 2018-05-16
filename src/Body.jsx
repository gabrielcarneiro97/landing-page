import React from 'react';
import ScrollAnim from 'rc-scroll-anim';
import { Row, Col } from 'antd';

import PlaceCard from './PlaceCard';
import Seta from './Seta';

import gotImg from './got.png';
import narniaImg from './narnia.jpg';
import hogImg from './hog.jpg';

const ScrollParallax = ScrollAnim.Parallax;
const ScrollElement = ScrollAnim.Element;

const got = `url(${gotImg})`;
const narnia = `url(${narniaImg})`;
const hog = `url(${hogImg})`;

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      css: { height: '100vh', position: 'fixed', top: 0 },
    };
  }

  render() {
    const fontFamily = "'Great Vibes', cursive";

    return (
      <div>
        <ScrollElement style={{ height: '400vh' }} id="Scroll-Pack">
          <ScrollParallax
            className="bkg"
            location="Scroll-Pack"
            animation={{ playScale: [1, 2] }}
            style={{
              ...this.state.css,
            }}
          >
            <Row type="flex" justify="center" align="middle" style={{ height: '100vh', textAlign: 'center' }}>
              <Col span={24}>
                <div style={{ fontFamily, fontSize: '70px' }}>
                  Fantastic Travel
                </div>
                <div style={{ fontSize: '20px' }}>
                  Viaje para onde sua imaginação te levar
                </div>
                <div>
                  Deslize para baixo e descubra
                </div>
                <Seta to={2} />
              </Col>
            </Row>
            <ScrollParallax
              animation={{ translateX: '0%', playScale: [1, 2] }}
              style={{
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundImage: narnia,
                transform: 'translateX(-100%)',
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
              }}
              location="Scroll-Pack"
            >
              <PlaceCard title="Narnia" haveButton />
              <div style={{ textAlign: 'center', color: 'white' }}>
                <Seta to={3} />
              </div>
              <ScrollParallax
                animation={{ translateY: '0%', playScale: [2, 3] }}
                style={{
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundImage: got,
                  transform: 'translateY(100%)',
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  left: 0,
                  top: 0,
                }}
                location="Scroll-Pack"
              >
                <PlaceCard
                  haveButton
                  title="Westeros"
                  col1={
                    <div>
                      Top1
                    </div>
                  }
                  col2={
                    <div>
                      Top2
                    </div>
                  }
                />
                <div style={{ textAlign: 'center', color: 'white' }}>
                  <Seta to={4} />
                </div>
                <ScrollParallax
                  animation={{ translateX: '0%', playScale: [3, 4] }}
                  style={{
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundImage: hog,
                    transform: 'translateX(-100%)',
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    left: 0,
                    top: 0,
                  }}
                  location="Scroll-Pack"
                >
                  <PlaceCard
                    haveButton
                    title="Hogwarts"
                  />
                  <div style={{ textAlign: 'center', color: 'white' }}>
                    <Seta to={1} up />
                  </div>
                </ScrollParallax>
              </ScrollParallax>
            </ScrollParallax>
          </ScrollParallax>
        </ScrollElement>
      </div>
    );
  }
}

export default Body;
