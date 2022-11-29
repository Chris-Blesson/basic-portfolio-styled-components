import React, { useState } from "react";
import './AppLayout.styles.css';
import './Colors.styles.css';
import './Responsive.styles.css';
import Header from "./Header/Header";
import Intro from "./Intro/Intro";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import FooterSection from "./Footer/FooterSection";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";

const DIV = styled.div`
`;

/*
const DIV = styled.div`
 background: ${props => props.theme.mode === 'dark' ? '#171321' : '#fff'};
 color: ${props => props.theme.mode === 'dark' ? '#fff' : '#12344D'};

  & .gradient {
    background: ${props => props.theme.mode === 'dark' ? 'linear-gradient(90deg, rgba(255, 23, 228, 1) 0%, rgba(134, 251, 251, 1) 100%)' : 'linear-gradient(90deg, #ccc 0%, #12344D 100%)'};
    height: 2px;
  }
`;

*/


const AppLayout = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => true);
  const [themeColor, setThemeColor] = useState({ value: 'ocean', color: '#86fbfb' });
  return (
    <ThemeProvider theme={{ mode: isDarkMode ? 'dark' : 'light' }}>
      <DIV className="Portfolio_layout">
        <Header
          themeColor={themeColor}
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
          setThemeColor={setThemeColor}
        />
        <Intro themeColor={themeColor} />
        <DIV className="gradient"></DIV>
        <Projects themeColor={themeColor} />
        <DIV className="gradient"></DIV>
        <Contact themeColor={themeColor} />
        <DIV className="gradient"></DIV>
        <FooterSection themeColor={themeColor} />
      </DIV>
    </ThemeProvider>

  )
}

export default AppLayout;