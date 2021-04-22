import 'bootstrap/dist/css/bootstrap.min.css';

//FONT AWESOME CONFG
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faJsSquare, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

import React from 'react'


import styled from 'styled-components'
import Head from 'next/head';
import { Container, Jumbotron } from 'reactstrap';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Home() {
  return (
    <div>
      <Head>
        <meta name='description' content='Portfolio de Ramon Nunes Desenvolvedor JavaScrpt, Node.JS, React.js' />
        <meta name='author' content='Ramon Nunes' />
        <title>Ramon Nunes</title>
      </Head>
      <style>{`
              .tecContainer{
                    margin-bottom: 0px;
                    text-align: center;
                    background: linear-gradient(90deg, rgba(0, 0, 255, 0.7), rgba(0, 255, 0, 0.7) );
              }
              .circulo{
                width: 140px;
                height: 140px;
                background-color: #FED136;
                font-size: 52px;
                padding-top: 24px;
              }
              .centralizar{
                margin: 0 auto !important;
                float: none !important;
              }
      `}</style>

      <Jumbotron fluid className="tecContainer">
        <Container className="text-center" >

          <div>
            <h1 className="display-4">Ramon Nunes</h1>
            <p className="lead pb-4">Desenvolvedor JavaScript</p>
          </div>

          <div className="row">
            <div className="col-lg-4">
              <div className="rounded-circle circulo centralizar" >
                <FontAwesomeIcon icon={faJsSquare} size="lg" />
              </div>

              <h2 className="mt-4 mb-4">JavaScript</h2>
              <p>JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.</p>
            </div>
            <div className="col-lg-4">
              <div className="rounded-circle circulo centralizar" >
                <FontAwesomeIcon icon={faNodeJs} size="lg" />
              </div>

              <h2 className="mt-4 mb-4">Node.JS</h2>
              <p>Node.js trata-se de um software open-source, cross-platform, e de um runtime de JavaScript que execute código de JavaScript a nível backend e frontend. O runtime de JavaScript é constituído pelos seguintes commandos - node package manage, e npx.</p>
            </div>
            <div className="col-lg-4">
              <div className="rounded-circle circulo centralizar" >
                <FontAwesomeIcon icon={faReact} size="lg" />
              </div>

              <h2 className="mt-4 mb-4">React.JS</h2>
              <p>O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. É mantido pelo Facebook, Instagram, outras empresas e uma comunidade de desenvolvedores individuais. É utilizado nos sites da Netflix, Imgur, Feedly, Airbnb, SeatGeek, HelloSign, Walmart e outros.</p>
            </div>
          </div>

        </Container>
      </Jumbotron>

    </div>
  )
}
