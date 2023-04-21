import React, { useState } from "react";
import './App.css';

const Accordion = () => {
  const [activePanel, setActivePanel] = useState(null);
  const panels = [
    {
      question: "P1",
      answer: "This is 1st panel",
    },
    {
      question: "P2",
      answer: "This is 2nd panel",
    },
    {
      question: "P3",
      answer: "This is 3rd panel",
    },
    {
      question: "P4",
      answer: "This is 4th panel",
    },
  ];

const toggle = (num) => {
    setActivePanel(activePanel === num ? null : num);
    console.log(num)
};

return (<>
      {
      panels.map((panel, num) =>(              
        <div onClick={() => toggle(num)} className="raj" key={num}><h1>{panel.question}</h1>
       
        <h2> {activePanel === num && <p>{panel.answer}</p>} </h2>
        
        </div>
    ))}
      </>
  );};


export default Accordion;