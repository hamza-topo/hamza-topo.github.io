import React from 'react';
import "./App.css";
import Hero from './sections/Hero';
import Timeline from './sections/Timeline';
import Skills from './sections/Skills';
import Toolbox from './sections/Toolbox';
import Projects from './sections/Projects';
import ThemeToggle from "./Components/ThemeToggle";
import Footer from "./sections/Footer";
import EnterpriseWork from "./sections/EnterpriseWork";
import FinalCta from "./sections/FinalCta";
import { APP_VERSION, APP_AUTHOR } from "./version";
export default function App() {
  return (
    <div className="App">
      <header className="topBar">
        <ThemeToggle />
      </header>
      <main className="sections">
        <Hero />
        <Timeline />
        <Toolbox />
        <EnterpriseWork />
        <Projects />
        <Skills />
        <FinalCta />
        <Footer version={APP_VERSION} author={APP_AUTHOR} />
      </main>
    </div>
  );
}
