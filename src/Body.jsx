import React from 'react';
import ScrollAnim from 'rc-scroll-anim';
import { Row, Col, List, Avatar } from 'antd';

import PlaceCard from './PlaceCard';
import Seta from './Seta';

import './Body.css';

import gotImg from './got.png';
import narniaImg from './narnia.jpg';
import hogImg from './hog.jpg';
import wandIcon from './wand-icon.svg';

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
              <PlaceCard
                haveButton
                title="Narnia"
                col1={
                  <div className="text">
                    <div>
                      A Escola de Magia e Bruxaria de Hogwarts, ou simplesmente Hogwarts,
                      é um internato de magia para bruxos e bruxas com idades entre os onze e
                      dezessete anos.
                    </div>
                    <div>
                      A propriedade de Hogwarts é extensa, abrangendo o enorme castelo, que
                      possui várias torres e masmorras com as respectivas salas de aulas,
                      os professores, as salas comuns de cada casa (Ravenclaw,
                      Gryffindor, Hufflepuff e Slytherin), os Dormitórios dos alunos,
                      as Cozinhas de Hogwarts (onde podemos encontrar elfos domésticos),
                      o Salão Principal, o Salão de Entrada, todos os aposentos frequentados
                      diariamente pelos alunos, professores e funcionários.
                    </div>
                    <div className="title" style={{ textAlign: 'center', marginTop: '5vh' }}>
                      Venha Conhecer Hogwarts!
                    </div>
                  </div>
                }
                col2={
                  <List
                    header={<div className="title" style={{ padding: 0 }}>Inclui:</div>}
                    itemLayout="horizontal"
                    dataSource={[
                      {
                        desc: 'Você terá o prazer de desfrutar das melhores iguarias de Hogwarts, tendo a oportunidade única de experimentar a lendária cerveja amanteigada!',
                      },
                      {
                        desc: 'A viagem também inclui um passeio épico a Hogsmeade passando pela cabana do grande Hagrid!',
                      },
                      {
                        desc: 'Visitar Hogwarts e não assistir a uma partida de quadribol seria um pecado, fique tranquilo que o seu ingresso já está garantido!',
                      },
                      {
                        desc: 'Para quem curte aventuras radicais existe um passeio de hipogrifo que vai deixar sua viagem ainda mais divertida!',
                      },
                      {
                        desc: 'E muito mais!',
                      },
                    ]}
                    renderItem={item => (
                      <List.Item style={{ padding: '1vw' }}>
                        <List.Item.Meta
                          avatar={<Avatar style={{ width: '4vw' }} src={wandIcon} />}
                          description={<div className="text" style={{ lineHeight: 'normal' }}>{item.desc}</div>}
                        />
                      </List.Item>
                    )}
                  />
                }
              />
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
                    <div className="text">
                      <div>
                        A Escola de Magia e Bruxaria de Hogwarts, ou simplesmente Hogwarts,
                        é um internato de magia para bruxos e bruxas com idades entre os onze e
                        dezessete anos.
                      </div>
                      <div>
                        A propriedade de Hogwarts é extensa, abrangendo o enorme castelo, que
                        possui várias torres e masmorras com as respectivas salas de aulas,
                        os professores, as salas comuns de cada casa (Ravenclaw,
                        Gryffindor, Hufflepuff e Slytherin), os Dormitórios dos alunos,
                        as Cozinhas de Hogwarts (onde podemos encontrar elfos domésticos),
                        o Salão Principal, o Salão de Entrada, todos os aposentos frequentados
                        diariamente pelos alunos, professores e funcionários.
                      </div>
                      <div className="title" style={{ textAlign: 'center', marginTop: '5vh' }}>
                        Venha Conhecer Hogwarts!
                      </div>
                    </div>
                  }
                  col2={
                    <List
                      header={<div className="title" style={{ padding: 0 }}>Inclui:</div>}
                      itemLayout="horizontal"
                      dataSource={[
                        {
                          desc: 'Você terá o prazer de desfrutar das melhores iguarias de Hogwarts, tendo a oportunidade única de experimentar a lendária cerveja amanteigada!',
                        },
                        {
                          desc: 'A viagem também inclui um passeio épico a Hogsmeade passando pela cabana do grande Hagrid!',
                        },
                        {
                          desc: 'Visitar Hogwarts e não assistir a uma partida de quadribol seria um pecado, fique tranquilo que o seu ingresso já está garantido!',
                        },
                        {
                          desc: 'Para quem curte aventuras radicais existe um passeio de hipogrifo que vai deixar sua viagem ainda mais divertida!',
                        },
                        {
                          desc: 'E muito mais!',
                        },
                      ]}
                      renderItem={item => (
                        <List.Item style={{ padding: '1vw' }}>
                          <List.Item.Meta
                            avatar={<Avatar style={{ width: '4vw' }} src={wandIcon} />}
                            description={<div className="text" style={{ lineHeight: 'normal' }}>{item.desc}</div>}
                          />
                        </List.Item>
                      )}
                    />
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
                    col1={
                      <div className="text">
                        <div>
                          A Escola de Magia e Bruxaria de Hogwarts, ou simplesmente Hogwarts,
                          é um internato de magia para bruxos e bruxas com idades entre os onze e
                          dezessete anos.
                        </div>
                        <div>
                          A propriedade de Hogwarts é extensa, abrangendo o enorme castelo, que
                          possui várias torres e masmorras com as respectivas salas de aulas,
                          os professores, as salas comuns de cada casa (Ravenclaw,
                          Gryffindor, Hufflepuff e Slytherin), os Dormitórios dos alunos,
                          as Cozinhas de Hogwarts (onde podemos encontrar elfos domésticos),
                          o Salão Principal, o Salão de Entrada, todos os aposentos frequentados
                          diariamente pelos alunos, professores e funcionários.
                        </div>
                        <div className="title" style={{ textAlign: 'center', marginTop: '5vh' }}>
                          Venha Conhecer Hogwarts!
                        </div>
                      </div>
                    }
                    col2={
                      <List
                        header={<div className="title" style={{ padding: 0 }}>Inclui:</div>}
                        itemLayout="horizontal"
                        dataSource={[
                          {
                            desc: 'Você terá o prazer de desfrutar das melhores iguarias de Hogwarts, tendo a oportunidade única de experimentar a lendária cerveja amanteigada!',
                          },
                          {
                            desc: 'A viagem também inclui um passeio épico a Hogsmeade passando pela cabana do grande Hagrid!',
                          },
                          {
                            desc: 'Visitar Hogwarts e não assistir a uma partida de quadribol seria um pecado, fique tranquilo que o seu ingresso já está garantido!',
                          },
                          {
                            desc: 'Para quem curte aventuras radicais existe um passeio de hipogrifo que vai deixar sua viagem ainda mais divertida!',
                          },
                          {
                            desc: 'E muito mais!',
                          },
                        ]}
                        renderItem={item => (
                          <List.Item style={{ padding: '1vw' }}>
                            <List.Item.Meta
                              avatar={<Avatar style={{ width: '4vw' }} src={wandIcon} />}
                              description={<div className="text" style={{ lineHeight: 'normal' }}>{item.desc}</div>}
                            />
                          </List.Item>
                        )}
                      />
                    }
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
