import React from "react";
import styled from 'styled-components';
import './Intro.styles.css';

const Span = styled.span`
  color: ${props => props.themeColor.color};
`;
const Intro = ({ themeColor }) => {
  return (
    <section className={`intro-${themeColor.value}`} id="intro">
      <p className="name">Hi, my name is <Span themeColor={themeColor}>Chris Blesson.</Span></p>
      <h2>I am a frontend developer</h2>
      <p className="status">I have been part of Freshworks for the past 2 years. Currently I am working with Ember.js</p>
    </section>
  )
}

export default Intro;