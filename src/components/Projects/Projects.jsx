import React from "react";
import "./Projects.styles.css";
import styled from 'styled-components';
import song from "./song.png";
import portfolio from './portfolio.png';
import freshbills from './freshbills.png';

const H3 = styled.h3`
  color: ${props => props.themeColor.color};
`

const Image = styled.img`
  border-left: ${props => props.theme.mode === 'light' ? '1px solid #ccc !important' : '#86fbfb'};
  border-top: ${props => props.theme.mode === 'light' ? '1px solid #ccc !important' : '#86fbfb'}
`

const Projects = ({ themeColor }) => {
  return (
    <section className={`projects-${themeColor.value}`} id="projects">
      <h2>Projects I'm proud of</h2>
      <article>
        <div className="text">
          <h4>Latest Projects</h4>
          <H3 themeColor={themeColor}>My Portfolio</H3>
          <p className="blackbox">Did somebody say recursion ? Repo link <a href="https://github.com/Chris-Blesson/Trinket-gallery" target="_blank">here</a></p>
          <h4>Technologies used include:</h4>
          <ul>
            <li>React</li>
            <li>JSX</li>
            <li>CSS</li>
          </ul>
        </div>
        <Image src={portfolio} alt="Portfolio" />
      </article>
      <article>
        <div className="text">
          <h3>Virtual Fashion</h3>
          <p className="blackbox">An application that allows the end users to try on Jewels, dresses and other products virtually and purchase them. Using the Haar Cascade algorithm the application will identify the key facial points and based on this the jewels will be plotted on the 2D Image. Repo link <a href="https://github.com/Chris-Blesson/Trinket-gallery" target="_blank">here</a></p>
          <h4>Technologies used include:</h4>
          <ul>
            <li>Django</li>
            <li>SQLite</li>
            <li>Stripe.js</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </div>
        <Image src="https://uploads-ssl.webflow.com/5f19557d996e1b4712972141/5f5e0ab8d14a85605e9b1dbf_Mockup%20(1).png" alt="Screenshot of Virtual Fashion." />
      </article>
      <article>
        <div className="text">
          <h3>Ember Songs</h3>
          <p className="blackbox">An application that allows the end users to stream to their favourite songs, podcasts and share them with their friends. App link <a href="https://chris-blesson.github.io/Ember-Songs/" target="_blank">here</a></p>
          <h4>Technologies used include:</h4>
          <ul>
            <li>Ember JS</li>
            <li>Firebase</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </div>
        <Image src={song} alt="Screenshot of Virtual Fashion." />
      </article>
      <article>
        <div className="text">
          <h3>Freshbills</h3>
          <p className="blackbox">An Integration between Freshteam and Freshservice that replaces Fyle and allows the employees of an organization to easily raise claim requests without the need of any third party applications. Repo link <a href="https://github.com/Chris-Blesson/Freshbills-Frontend" target="_blank">here</a></p>
          <h4>Technologies used include:</h4>
          <ul>
            <li>React JS</li>
            <li>Node JS</li>
            <li>MySQL</li>
            <li>JSX</li>
            <li>SCSS</li>
          </ul>
        </div>
        <Image src={freshbills} alt="Screenshot of Virtual Fashion." />
      </article>
    </section>
  )
}
export default Projects;