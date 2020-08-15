import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import NavBar from "./navBar";
import About from "./about";
import Skills from "./skills";
import Career from "./career";
import Contact from "./contact";
import Projects from "./projects";

function App() {
  const arrayRef = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null)
  ];

  const [selectedButton, setselectedButton] = useState(0);

  function selectTab(index) {
    arrayRef[index].current.scrollIntoView({ behavior: "smooth" });
  }

  const scrollHandler = _ => {
    for (let i = 0; i < 5; i++) {
      let ref = arrayRef[i].current.getBoundingClientRect();
      if ((ref.top >= 0 && ref.top < 260) || ref.bottom > 400) {
        setselectedButton(i);
        break;
      }
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler, true);
    return () => {
      window.removeEventListener("scroll", scrollHandler, true);
    };
  }, []);

  return (
    <div>
      <div>
        <NavBar selectTab={selectTab} selectedButton={selectedButton} />
        <div ref={arrayRef[0]}>
          <About />
        </div>
        <div ref={arrayRef[1]}>
          <Skills />
        </div>
        <div ref={arrayRef[2]}>
          <Career />
        </div>
        <div ref={arrayRef[3]}>
          <Projects />
        </div>
        <div ref={arrayRef[4]}>
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
