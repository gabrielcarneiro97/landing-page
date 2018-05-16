import React from 'react';
import ScrollAnim from 'rc-scroll-anim';
import PlaceCard from './PlaceCard';

const ScrollParallax = ScrollAnim.Parallax;
const ScrollElement = ScrollAnim.Element;

class Body extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      css: { backgroundColor: '#174270', height: 920 },
      cssNoPosition: true,
    };

    this.setCss = this.setCss.bind(this);
    this.onComplete = this.onComplete.bind(this);
  }

  onComplete(e) {
    console.log(e);
  }

  setCss(e) {
    const { css } = this.state;
    console.log(e);
    if (e === 'back complete') {
      css.position = 'fixed';
      css.top = 0;
    } else {
      css.position = '';
      css.top = '';
    }
    this.setState({
      css,
      cssNoPosition: !this.state.cssNoPosition,
    });
  }

  render() {
    return (
      <ScrollElement style={{ height: '300vh' }} id="Scroll-Pack">
        <ScrollParallax
          className="bkg"
          location="Scroll-Pack"
          animation={{
            backgroundColor: '#0097D0',
            playScale: [1, 2],
            onStart: () => { this.setCss('start'); },
            onCompleteBack: () => { this.setCss('back complete'); },
            onComplete: () => { this.onComplete('complete'); },
            onStartBack: () => { this.onComplete('back start'); },
          }}
          style={this.state.css}
        >
          <PlaceCard title="1" />
          <ScrollParallax
            animation={{ translateX: '0%', playScale: [1, 2] }}
            style={{
              transform: 'translateX(-100%)',
              backgroundColor: '#F38EAD',
              width: '100%',
              height: '100%',
              position: 'absolute',
              top: 0,
              left: 0,
            }}
            location="Scroll-Pack"
          >
            <PlaceCard title="2" />
            <ScrollParallax
              animation={{ translateY: '0%', playScale: [2, 3] }}
              style={{
                transform: 'translateY(100%)',
                backgroundColor: 'red',
                width: '100%',
                height: '100%',
                position: 'absolute',
                left: 0,
                top: 0,
              }}
              location="Scroll-Pack"
            >
              <PlaceCard title="3" />
            </ScrollParallax>
          </ScrollParallax>
        </ScrollParallax>
      </ScrollElement>
    );
  }
}

export default Body;
