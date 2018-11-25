/* global tw */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const Wrapper = styled.a`
  width: 100%;
  ${tw('relative no-underline px-8 py-8 md:py-24 text-white')};
  background: ${props => props.bg};
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover {
    transform: translateY(-5px);
    -webkit-box-shadow: 0 16px 35px 0 rgba(0, 0, 0, 0.27), 0 8px 20px 0 rgba(0, 0, 0, 0.15);
    box-shadow: 0 16px 35px 0 rgba(0, 0, 0, 0.27), 0 8px 20px 0 rgba(0, 0, 0, 0.15);
  }
`;

const Title = styled.div`
  ${tw(
    'text-red-black font-semibold text-center font-serif leading-normal capitalize text-2xl md:text-3xl xl:text-4xl tracking-wide pb-6'
  )};
  text-shadow: 1px 0px 3px #2e2e2e, 1px 0px 3px #212426;
`;

const Text = styled.div`
  ${tw('font-sans text-center text-sm md:text-base')};
  text-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
`;

const ProjectCard = ({ title, link, children, bg }) => (
  <Wrapper href={link} target="_blank" rel="noopener noreferrer" bg={bg}>
    <Title>{title}</Title>
    <Text>{children}</Text>
  </Wrapper>
);

export default ProjectCard;

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  bg: PropTypes.string.isRequired,
};
