import React from 'react'

import FeedbackCard from '../../components/FeedbackCard'

import {
  Container,
  Header,
  Main,
  Presentation,
  Information,
  Feedbacks,
  Footer
} from './styles'

import VideocallImage from '../../assets/video_call.png'
import CodingImage from '../../assets/coding.png'

import FacebookIcon from '../../assets/facebook.svg'
import TwitterIcon from '../../assets/twitter.svg'
import InstagramIcon from '../../assets/instagram.svg'

const Home: React.FC = () => {
  document.title = 'Home'

  return (
    <Container>
      <Header>
        <h1>
          Codar<span>.</span>
        </h1>
        <ul className="menu">
          <li>
            <a href="#">Ínicio</a>
          </li>
          <li>
            <a href="#information">Serviços</a>
          </li>
          <li>
            <a href="#footer">Contato</a>
          </li>
          <li className="login">
            <a href="#">Login</a>
          </li>
        </ul>
      </Header>
      <Main>
        <Presentation id="presentation">
          <img className="videocall" src={VideocallImage} alt="Video call" />
          <div className="text">
            <p>Alavanque seu negócio com um</p>
            <h2>Website incrível</h2>
            <button>Solicitar orçamento</button>
          </div>
        </Presentation>
        <Information id="information">
          <div className="header">
            <img className="coding" src={CodingImage} alt="Coding" />
            <ul>
              <li>Domínio personalizado</li>
              <li>Hospedagem</li>
              <li>Site responsivo</li>
              <li>Redes sociais</li>
              <li>Chat online</li>
              <li>Blog integrado</li>
            </ul>
          </div>
          <div className="contact">
            <p>Nossa equipe está à disposição!</p>
            <div className="form">
              <input type="text" placeholder="Celular" />
              <button>Solicitar orçamento</button>
            </div>
          </div>
        </Information>
        <Feedbacks>
          <FeedbackCard
            feedback={{
              client: 'Pedro Ferreira',
              company: 'Contrutura Minari',
              text:
                'Já tive experiências com outras 4 empresas da área e a Coder é sem sombra de dúvidas superior em todos os aspectos.'
            }}
          />
          <FeedbackCard
            feedback={{
              client: 'Maria Rita',
              company: 'Escola Criança Feliz',
              text:
                'Processos bem simples e criação de um site exatamente como a minha escola queria!'
            }}
          />
          <FeedbackCard
            feedback={{
              client: 'Pedro Ferreira',
              company: 'Contrutura Minari',
              text:
                'Já tive experiências com outras 4 empresas da área e a Coder é sem sombra de dúvidas superior em todos os aspectos.'
            }}
          />
          <FeedbackCard
            feedback={{
              client: 'Maria Rita',
              company: 'Escola Criança Feliz',
              text:
                'Processos bem simples e criação de um site exatamente como a minha escola queria!'
            }}
          />
        </Feedbacks>
      </Main>
      <Footer id="footer">
        <div className="header">
          <h1>
            Codar<span>.</span>
          </h1>
          <p>Criamos sites incrivéis</p>
        </div>
        <ul>
          <li>
            <h2>Sobre</h2>
            <p>Amamos criar soluções e entregar sites incrivéis.</p>
          </li>
          <li>
            <h2>Contato</h2>
            <p>123 Av. Manjar - Nárnia</p>
            <p>+55 99 44444-5555</p>
            <p className="email">contato@codar.com</p>
          </li>
          <li>
            <h2>Sociais</h2>
            <img src={FacebookIcon} alt="Facebook" />
            <img src={InstagramIcon} alt="Instagram" />
            <img src={TwitterIcon} alt="Twitter" />
          </li>
        </ul>
      </Footer>
    </Container>
  )
}

export default Home
