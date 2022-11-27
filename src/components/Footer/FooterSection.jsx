import React from 'react'
import './FooterSection.styles.css';
import styled from 'styled-components';

const LogoButton = styled.a`
  color:${props => props.theme.mode === 'dark' ? '#e310cb' : '#12344D'};
`;
const FooterSection = () => {
  return (
    <footer>
      <h2>Chris Blesson &middot; Frontend Developer</h2>
      <ul>
        <li>
          <LogoButton href="https://www.linkedin.com/in/chris-blesson/" target="_blank">
            <i aria-hidden="true" className="fa-brands fa-linkedin-in"></i>
            <span className="sr-only">LinkedIn</span>
          </LogoButton>
        </li>
        <li>
          <LogoButton href="https://github.com/Chris-Blesson">
            <i aria-hidden="true" className="fa-brands fa-github"></i>
            <span className="sr-only">Github</span>
          </LogoButton>
        </li>
        <li>
          <LogoButton href="mailto:chrisblesson2598@gmail.com">
            <span className="fas fa-envelope" aria-hidden="true"></span>
            <span className="sr-only">Email</span>
          </LogoButton>
        </li>
      </ul>
      <p>
        <small>&copy;2022 Chris Blesson. All rights resserved</small>
      </p>
    </footer>
  )
}

export default FooterSection;