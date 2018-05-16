import React from 'react';
import ScrollAnim from 'rc-scroll-anim';
import PlaceCard from './PlaceCard';

import gotImg from './got.png';
import narniaImg from './narnia.jpg';
import hogImg from './hog.jpg';

const ScrollParallax = ScrollAnim.Parallax;
const ScrollElement = ScrollAnim.Element;

const got = `url(${gotImg})`;
const narnia = `url(${narniaImg})`;
const hog = `url(${hogImg})`;

class Body extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      css: { height: '100vh', position: 'fixed', top: 0 },
    };
    this.onComplete = this.onComplete.bind(this);
  }

  onComplete(e) {
    console.log(e);
  }

  render() {
    return (
      <ScrollElement style={{ height: '400vh' }} id="Scroll-Pack">
        <ScrollParallax
          className="bkg"
          location="Scroll-Pack"
          animation={{
            playScale: [1, 2],
            onComplete: () => { this.onComplete('complete'); },
            onStartBack: () => { this.onComplete('back start'); },
          }}
          style={{ 
            ...this.state.css,
           }}
        >
          <PlaceCard title="Inicio" />
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
            <PlaceCard title="Narnia" />
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
              <PlaceCard title="Got" />
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
                <PlaceCard title="Hogwarts" />
              </ScrollParallax>
            </ScrollParallax>
          </ScrollParallax>
        </ScrollParallax>
      </ScrollElement>
    );
  }
}

export default Body;
