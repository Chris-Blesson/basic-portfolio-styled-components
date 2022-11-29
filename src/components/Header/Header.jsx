import React from 'react';
import styled from 'styled-components';

import './Header.styles.css';
import chroma from 'chroma-js';
import Select from 'react-select';
import DarkModeToggle from "react-dark-mode-toggle";

const Icon = styled.i`
`;

/*
const Icon = styled.i`
  color: ${props => {
    return props.themeColor.color
  }};
`;
*/

const Anchor = styled.a`
`

/*
const Anchor = styled.a`
  color: ${props => props.theme.mode === 'dark' ? '#fff' : '#475867'}
`;
*/

export const AnchorButton = styled.a`
`
/*
export const AnchorButton = styled.a`
  background: ${props => props.theme.mode === 'light' ? 'linear-gradient(180deg, #264966 0%, #12344d 100%)' : '#E310CB'};
  &:hover {
    background-color: #12344D ${props => props.theme.mode === 'light' ? '#12344D' : '#FF17E4'};
  }
`;
*/
const colourOptions = [
  { value: 'ocean', label: 'Ocean', color: '#86fbfb' },
  { value: 'purple', label: 'Purple', color: '#5243AA' },
  { value: 'silver', label: 'Silver', color: '#666666' },
];

const dot = (color = 'transparent') => ({
  alignItems: 'center',
  display: 'flex',

  ':before': {
    backgroundColor: color,
    borderRadius: 10,
    content: '" "',
    display: 'block',
    marginRight: 8,
    height: 10,
    width: 10,
  },
});

const colourStyles = {
  control: (styles) => ({ ...styles, backgroundColor: 'white' }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: isSelected ? data.color : "white",
      color: isDisabled
        ? '#000'
        : isSelected
          ? chroma.contrast(color, 'white') > 2
            ? 'white'
            : 'black'
          : data.color,
      cursor: isDisabled ? 'not-allowed' : 'default',

      ':active': {
        ...styles[':active'],
        backgroundColor: !isDisabled
          ? isSelected
            ? data.color
            : '#fff'
          : undefined,
      },
    };
  },
  input: (styles) => ({ ...styles, ...dot() }),
  placeholder: (styles) => ({ ...styles, ...dot('#ccc') }),
  singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) }),
};
const Header = ({
  themeColor,
  setIsDarkMode,
  isDarkMode,
  setThemeColor
}) => {
  return (
    <section className='header'>
      <div className="theme__switcher">
        <Select
          onChange={setThemeColor}
          defaultValue={colourOptions[0]}
          options={colourOptions}
          styles={colourStyles}
        />
        <div className="theme__toggle">
          <div className="mx-10 h-12 w-12 rounded-round dark:bg-black flex justify-center items-center focus:outline-short focus:border" role="button" tabIndex="0" aria-label="toggle theme">
            <DarkModeToggle
              onChange={setIsDarkMode}
              checked={isDarkMode}
              size={60}
            />
          </div>
        </div>
      </div>
      <nav className={themeColor.value}>
        <ul>
          <li>
            <h1><Anchor href="index.html"> <Icon themeColor={themeColor} className="fa-solid fa-code"></Icon> Chris Blesson</Anchor></h1>
          </li>
          <li>
            <Anchor href="#projects">Projects</Anchor>
          </li>
          <li>
            <Anchor href="about">About</Anchor>
          </li>
          <li>
            <Anchor href="contact">Contact</Anchor>
          </li>
          <li>
            <Anchor href="https://www.linkedin.com/in/chris-blesson/" target="_blank">
              <Icon themeColor={themeColor} aria-hidden="true" className="fa-brands fa-linkedin-in"></Icon>
              <span className="sr-only">LinkedIn</span>
            </Anchor>
          </li>
          <li>
            <Anchor href="https://github.com/Chris-Blesson">
              <Icon themeColor={themeColor} aria-hidden="true" className="fa-brands fa-github"></Icon>
              <span className="sr-only">Github</span>
            </Anchor>
          </li>
          <li>
            <AnchorButton href="https://www.dropbox.com/s/ah9ohaz4n08vzkg/Chris_Blesson_Resume.pdf?dl=0" className="button">Resume</AnchorButton>
          </li>
        </ul>
      </nav>
    </section>
  )
}

export default Header;

