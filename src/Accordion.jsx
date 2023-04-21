import React , {useState} from "react";
import PanelB from "./PanelB";
import PanelA from "./PanelA";
import PanelC from "./PanelC";

const Accordion = () =>{
    const[activePanel,setActivepanel]=useState(0)

   

const toggle= (num) =>{
    setActivepanel( activePanel === num ?0: num);
   
    console.log(num)
    //  console.log(setActivepanel)
    // console.log(toggle)

}

return(
    <>
    <PanelA toggle={toggle} activePanel={activePanel} />
    <PanelB toggle={toggle} activePanel={activePanel} />
    <PanelC toggle={toggle} activePanel={activePanel} />
 </>
)
}


