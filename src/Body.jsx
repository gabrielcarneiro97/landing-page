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
import lionIcon from './lion-icon.svg';
import gotIcon from './got-icon.svg';

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
              animation={{ translateY: '0%', playScale: [1, 2] }}
              style={{
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundImage: narnia,
                transform: 'translateY(100%)',
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
                      Nárnia é um mundo plano e geocêntrico, ao contrário do nosso, conforme é
                      narrado em A Viagem do Peregrino da Alvorada. No limiar do mundo de Nárnia,
                      o oceano tem água doce, é coberto por flores, e o céu encontra o mar. Além
                      do mais, no extremo leste deste oceano está o País de Aslam.
                    </div>
                    <div>
                    Em Nárnia, alguns animais podem falar, as criaturas mitológicas abundam,
                    e a magia é comum. As pessoas, geralmente crianças, entram no mundo narniano
                    provenientes do "nosso mundo", a Terra.
                    </div>
                    <div className="title" style={{ textAlign: 'center', marginTop: '5vh' }}>
                      Venha Conhecer Narnia!
                    </div>
                  </div>
                }
                col2={
                  <List
                    header={<div className="title" style={{ padding: 0 }}>Inclui:</div>}
                    itemLayout="horizontal"
                    dataSource={[
                      {
                        desc: 'Você poderá visitar lugares únicos como o grande castelo de Cair Paravel.',
                      },
                      {
                        desc: 'A viagem inclui um passeio no lendário barco Peregrino da Alvorada',
                      },
                      {
                        desc: 'Aslan ronda Narnia, com um pouco de sorte você certamente o encontrará!',
                      },
                      {
                        desc: 'Para os mais valentes Narnia sempre guarda gigantes prontos para serem destruidos!',
                      },
                      {
                        desc: 'E muito mais!',
                      },
                    ]}
                    renderItem={item => (
                      <List.Item style={{ padding: '1vw' }}>
                        <List.Item.Meta
                          avatar={<Avatar style={{ width: '4vw' }} src={lionIcon} />}
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
                        Westeros é a casa dos Sete Reinos e das terras além da grande Muralha,
                        que compõe um grande pedaço de Westeros, sendo aproximadamente do
                        tamanho do norte do Canadá, com a maior parte não-mapeada e inexplorada.
                        Westeros está à mercê de estações erráticas de duração imprevisível
                        que podem durar por muitos anos.
                      </div>
                      <div>
                        Trezentos anos antes da saga começar, Aegon o Conquistador e suas duas
                        esposas-irmãs Targaryen vieram de Pedra do Dragão e se estabeleceram no
                        que hoje é conhecido como Porto Real. Seus poderosos dragões
                        sobrepujaram seis dos sete reinos por conquista ou ameaça,
                        mas Dorne continuou independente por mais duzentos anos até ser absorvido
                        através de uma aliança de casamento. Os Targaryen forjaram o Trono de
                        Ferro das espadas daqueles a quem derrotaram, fundidas em fogo de dragão,
                        estabelecendo Porto Real como sua capital e continuaram tendo o poder no
                        continente até serem depostos por Robert Baratheon e Ned Stark.
                      </div>
                      <div className="title" style={{ textAlign: 'center', marginTop: '5vh' }}>
                        Venha Conhecer Westeros!
                      </div>
                    </div>
                  }
                  col2={
                    <List
                      header={<div className="title" style={{ padding: 0 }}>Inclui:</div>}
                      itemLayout="horizontal"
                      dataSource={[
                        {
                          desc: 'Tenha a oportunidade de conhecer Winterfell, a Muralha e Porto Real, tudo em uma única viagem!',
                        },
                        {
                          desc: 'A viagem também inclui um ovo de dragão inteiramente grátis!',
                        },
                        {
                          desc: 'Ganhe inteiramente grátis um voo de dragão por Pedra de Dragão!',
                        },
                        {
                          desc: 'Venha aprender a manejar uma espada com os melhores espadachins dos Sete Reinos!',
                        },
                        {
                          desc: 'E muito mais!',
                        },
                      ]}
                      renderItem={item => (
                        <List.Item style={{ padding: '1vw' }}>
                          <List.Item.Meta
                            avatar={<Avatar style={{ width: '4vw' }} src={gotIcon} />}
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
                  animation={{ translateY: '0%', playScale: [3, 4] }}
                  style={{
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundImage: hog,
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
