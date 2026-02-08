import React from 'react';
import "./App.css";
import Hero from './sections/Hero';
import Timeline from './sections/Timeline';
import Skills from './sections/Skills';
import Toolbox from './sections/Toolbox';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Social from "./sections/Social";
import ThemeToggle from "./Components/ThemeToggle";
import Footer from "./sections/Footer";
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
        <Skills />
        <Footer version={APP_VERSION} author={APP_AUTHOR} />
      </main>
    </div>
  );
}
