/* global tw */
import React from 'react';
import styled from 'react-emotion';
import 'typeface-cantata-one';
import 'typeface-open-sans';
import { Parallax, ParallaxLayer } from 'react-spring/dist/addons';
import SEO from '../components/SEO';
import SVG from '../components/SVG';
import ProjectCard from '../components/ProjectCard';
import { UpDown, UpDownWide, waveAnimation } from '../styles/animations';
import { hidden } from '../styles/utils';
import { colors } from '../../tailwind';
import avatar from '../images/avatar.jpg';
import '../styles/global';

const Divider = styled(ParallaxLayer)`
  ${tw('absolute w-full h-full')};
  background: ${props => props.bg};
  svg {
    fill: ${props => props.fill};
  }
  clip-path: ${props => props.clipPath};
`;

const DividerMiddle = styled(Divider)`
  clip-path: polygon(0 15%, 100% 25%, 100% 85%, 0 75%);
`;

const Content = styled(ParallaxLayer)`
  ${tw('p-6 md:p-12 lg:p-24 justify-center items-center flex z-50')};
`;

const Hero = styled.div`
  ${tw('w-full xl:w-2/3')};
`;

const Inner = styled.div`
  ${tw('w-full xxl:w-2/3 text-center lg:text-left')};
`;

const BigTitle = styled.h1`
  ${tw('text-4xl lg:text-4xl font-sans text-white mb-6 tracking-wide')};
  text-shadow: -1px -1px 1px #222222, 2px 2px 1px #212426;
`;

const Title = styled.h1`
  ${tw('text-right uppercase text-4xl lg:text-4xl font-sans text-white mb-8 tracking-wide relative inline-block')};
  text-shadow: 2px 0px 5px #222222, 2px 0px 5px #212426;
`;

const Subtitle = styled.p`
  ${tw('text-2xl lg:text-4xl font-serif text-white mt-8 xxl:w-3/4')};
  text-shadow: 2px 2px 3px #222222, 2px 3px 3px #212426;
`;

const ProjectsWrapper = styled.div`
  ${tw('flex flex-wrap justify-between mt-8')};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`;

const WaveWrapper = styled.div`
  ${tw('absolute pin-b w-full')};
  transform: matrix(1, 0, 0, -1, 0, 0);
`;

const InnerWave = styled.div`
  ${tw('relative h-full')};
  svg {
    width: 100%;
    height: 40vh;
  }
`;

const AboutHero = styled.div`
  ${tw('flex flex-col lg:flex-row items-center mt-8')};
`;

const Avatar = styled.img`
  ${tw('sm:w-48 md:w-64 lg:w-1/4 xl:w-1/5 shadow-lg h-auto border-1 border-yellow border-solid')};
`;

const AboutSub = styled.span`
  ${tw('text-white pt-12 pb-6 md:pb-0 md:text-xl lg:pt-0 lg:pl-12 lg:text-xl lg:text-2xl xl:text-3xl')};
`;

const AboutDesc = styled.p`
  ${tw('text-grey-light text-justify text-justify text-base md:text-lg md:pt-12 lg:text-1xl font-sans xl:text-2xl ')};
`;

const ContactText = styled.p`
  ${tw('text-center font-normal text-grey-dark font-sans text-2xl md:text-3xl lg:text-3xl')};
  a {
    color: #f0d547;
    text-decoration: none;
    padding: 0 0.7rem;
    -webkit-transition: 0.3s all;
    -webkit-transition-delay: 0.6s;
    -moz-transition: 0.3s all;
    -moz-transition-delay: 0.6s;
    -o-transition: 0.3s all;
    -o-transition-delay: 0.6s;
    transition: 0.3s all;
    transition-delay: 0.1s;
  }
  a:hover {
    color: #bf381a;
    -webkit-transition-delay: 0s;
    -moz-transition-delay: 0s;
    -o-transition-delay: 0s;
    transition-delay: 0s;
  }
`;

const Footer = styled.footer`
  ${tw('text-center text-grey absolute pin-b p-3 font-sans text-sm')};
  a {
    color: #f0d547;
    text-decoration: none;
  }
`;

const Index = () => (
  <React.Fragment>
    <SEO />
    <Parallax pages={5}>
      <Divider speed={0.2} offset={0}>
        <UpDown>
          <SVG icon="triangle" width={32} stroke={colors.orange} left="10%" top="70%" />
          <SVG icon="circle" width={24} fill={colors['red-light']} left="70%" top="20%" />
          <SVG icon="box" width={12} fill={colors['blue-light']} left="30%" top="15%" />
        </UpDown>
        <UpDownWide>
          <SVG icon="arrowUp" className={hidden} width={8} fill={colors['blue-dark']} left="80%" top="10%" />
          <SVG icon="triangle" width={12} stroke={colors.white} left="90%" top="50%" />
          <SVG icon="circle" width={6} fill={colors['grey-darkest']} left="15%" top="10%" />
        </UpDownWide>
        <SVG icon="triangle" width={8} stroke={colors['grey-darker']} left="25%" top="5%" />
        <SVG icon="circle" width={64} fill={colors.green} left="95%" top="55%" />
        <SVG icon="box" width={48} fill={colors.purple} left="40%" top="95%" />
        <SVG icon="triangle" width={12} stroke={colors.yellow} left="50%" top="25%" />
        <SVG icon="hexa" width={8} stroke={colors['grey-darker']} left="65%" top="70%" />
      </Divider>
      <Content speed={0.4} offset={0}>
        <Hero>
          <BigTitle>
            Hello, <br /> my name is Ramin Nazari.
          </BigTitle>
          <Subtitle>I'm a front-end developer based in Sofia, Bulgaria</Subtitle>
        </Hero>
      </Content>
      <DividerMiddle bg="linear-gradient(to right, #f7ff00 0%, #db36a4 100%)" speed={-0.2} offset={1.1} factor={2} />
      <Content speed={0.4} offset={1.2} factor={2}>
        <Inner>
          <Title>Projects</Title>
          <ProjectsWrapper>
            <ProjectCard
              title="Art for Amateurs"
              link="https://www.artforamateurs.com/"
              bg="linear-gradient(to right, #fff 0%, #959797 30%, #23282D 100%)"
            >
              Blog about art and travel build using CMS Wordpress.
            </ProjectCard>
            <ProjectCard
              title="Zona Uslugi"
              link="https://www.zonauslugi.com/"
              bg="linear-gradient(to right, #CD304B 0%, #34BFBA 100%)"
            >
              Custom design website for a small business build with CMS Wordpress.
            </ProjectCard>
            <ProjectCard
              title="Balkan Book"
              link="https://github.com/raminrn/BalkanBook"
              bg="linear-gradient(#159957 0%, #155799 100%)"
            >
              Social media application for balkans. Build using jQuery, Handlebars & Sammy.
            </ProjectCard>
            <ProjectCard
              title="Other Projects"
              link="https://github.com/raminrn/"
              bg="linear-gradient(to right, #FF8008 0%, #FFC837 100%)"
            >
              Feel free to view my other projects.
            </ProjectCard>
          </ProjectsWrapper>
        </Inner>
      </Content>
      <Divider speed={0.1} offset={1} factor={2}>
        <UpDown>
          <SVG icon="hexa" width={6} stroke={colors.white} left="35%" top="75%" />
          <SVG icon="upDown" width={8} fill={colors.teal} left="80%" top="20%" />
          <SVG icon="triangle" width={12} stroke={colors.blue} left="35%" top="85%" />
          <SVG icon="triangle" width={8} stroke={colors.orange} left="25%" top="5%" />
          <SVG icon="circle" className={hidden} width={24} fill={colors.white} left="17%" top="40%" />
        </UpDown>
        <UpDownWide>
          <SVG icon="arrowUp" className={hidden} width={12} fill={colors.green} left="75%" top="75%" />
          <SVG icon="triangle" width={12} stroke={colors.white} left="90%" top="30%" />
          <SVG icon="circle" width={12} fill={colors.yellow} left="65%" top="80%" />
          <SVG icon="triangle" className={hidden} width={16} stroke={colors.teal} left="18%" top="75%" />
          <SVG icon="circle" width={6} fill={colors.white} left="75%" top="10%" />
          <SVG icon="upDown" className={hidden} width={8} fill={colors.green} left="45%" top="10%" />
        </UpDownWide>
        <SVG icon="circle" width={6} fill={colors.white} left="4%" top="20%" />
        <SVG icon="circle" width={12} fill={colors.pink} left="80%" top="60%" />
        <SVG icon="box" width={6} fill={colors.orange} left="10%" top="10%" />
        <SVG icon="box" width={12} fill={colors.yellow} left="29%" top="26%" />
        <SVG icon="hexa" width={16} stroke={colors.red} left="65%" top="30%" />
        <SVG icon="hexa" width={8} stroke={colors.yellow} left="80%" top="70%" />
      </Divider>
      <Divider bg="#23262b" clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)" speed={0.2} offset={3} />
      <Divider speed={0.1} offset={3} />
      <Content speed={0.05} offset={3}>
        <Inner>
          <Title>About</Title>
          <AboutHero>
            <Avatar src={avatar} alt="Ramin Nazari" />
            <AboutSub>
              “Believe in your infinite potential. Your only limitations are those you set upon yourself.”
            </AboutSub>
          </AboutHero>
          <AboutDesc>
            Coding is something I have always found intriguing, but started studying about 2 years ago and haven’t
            stopped ever since. <br />
            The projects I have done reflect my vision of front end – simple but innovative and with each and every one
            of them I like to be diverse. Furthermore I have gained a lot of experience with responsive design that lets
            me optimise your web page for the various devices and browsers. <br />
            My focus is directed towards clean and modern design that is both interactive and effortless for the user.
            As for my character – I am an energetic, bold person; a team player, with excellent soft skills and a sport
            lover.
          </AboutDesc>
        </Inner>
      </Content>
      <Divider fill="#23262b" speed={0.3} offset={4}>
        <WaveWrapper>
          <InnerWave>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 338.05" preserveAspectRatio="none">
              <path className={waveAnimation}>
                <animate
                  attributeName="d"
                  values="M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z"
                  repeatCount="indefinite"
                  dur="30s"
                />
              </path>
            </svg>
          </InnerWave>
        </WaveWrapper>
      </Divider>
      <Content speed={0.05} offset={4}>
        <Inner>
          <Title>Contact</Title>
          <ContactText>
            Send me{' '}
            <a href="mailto:nazari.ramin96@gmail.com">
              <i className="far fa-envelope" />
            </a>{' '}
            <br /> or find me on <br />
            <a
              href="https://www.instagram.com/ramin.webdev/"
              aria-label="Instagram"
              target="_blank"
              rel="noreferrer noopener"
            >
              <i className="fab fa-instagram" />
            </a>
            <a href="https://codepen.io/raminrn/" aria-label="Codepen" target="_blank" rel="noreferrer noopener">
              <i className="fab fa-codepen" />
            </a>
            <a href="https://github.com/raminrn" aria-label="Github" target="_blank" rel="noreferrer noopener">
              <i className="fab fa-github" />
            </a>{' '}
          </ContactText>
        </Inner>
        <Footer>&copy; 2018 Ramin Nazari</Footer>
      </Content>
      <Divider speed={0.05} offset={4}>
        <UpDown>
          <SVG icon="upDown" className={hidden} width={8} fill={colors['grey-darkest']} left="40%" top="15%" />
          <SVG icon="hexa" width={32} stroke={colors['red-light']} left="1%" top="5%" />
        </UpDown>
        <UpDownWide>
          <SVG icon="triangle" width={12} stroke={colors.orange} left="85%" top="50%" />
          <SVG icon="circle" width={8} fill={colors['blue-light']} left="85%" top="15%" />
        </UpDownWide>
        <SVG icon="triangle" width={12} stroke={colors['grey-light']} left="60%" top="15%" />
        <SVG icon="box" width={6} fill={colors.purple} left="60%" top="85%" />
        <SVG icon="hexa" width={8} stroke={colors.green} left="20%" top="70%" />
      </Divider>
    </Parallax>
  </React.Fragment>
);

export default Index;
