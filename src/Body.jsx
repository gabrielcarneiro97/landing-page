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
    if (this.state.cssNoPosition) {
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

  // return (
  //   <div
  //     style={{
  //       backgroundColor: '#30334C',
  //       minHeight: '15vh',
  //     }}
  //   >
  //     <PlaceCard title="Tá" />
  //     <PlaceCard />
  //     <PlaceCard />
  //     <PlaceCard />
  //     <PlaceCard />
  //   </div>
  // );
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
          <ScrollParallax
            animation={{ translateX: '0%', playScale: [1, 2] }}
            style={{
              transform: 'translateX(-100%)',
              backgroundColor: '#F38EAD',
              width: '100%',
              height: '100%',
              position: 'absolute',
            }}
            location="Scroll-Pack"
          >
            <ScrollParallax
              animation={{ translateX: '0%', playScale: [2, 3] }}
              style={{
                transform: 'translateX(-100%)',
                backgroundColor: 'red',
                width: '100%',
                height: '100%',
                position: 'absolute',
              }}
              location="Scroll-Pack"
            />
          </ScrollParallax>
          <ScrollParallax
            animation={[{ translateY: 0 }, { translateY: '-100vh' }]}
            location="Scroll-Pack"
            style={{
              height: '100vh',
            }}
          >
            <PlaceCard title="1" />
          </ScrollParallax>
          <ScrollParallax
            animation={[{ translateY: 0 }, { translateY: '-200vh', playScale: [0, 2] }]}
            location="Scroll-Pack"
            style={{
              height: '100vh',
            }}
          >
            <PlaceCard title="2" />
          </ScrollParallax>
          <ScrollParallax
            animation={[{ translateY: 0 }, { translateY: '-250vh', playScale: [0, 3] }]}
            location="Scroll-Pack"
            style={{
              height: '100vh',
            }}
          >
            <PlaceCard title="3" />
          </ScrollParallax>
        </ScrollParallax>
      </ScrollElement>
    );
  }
}

export default Body;
