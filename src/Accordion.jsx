import React , {useState} from "react";
import PanelB from "./PanelB";
import PanelA from "./PanelA";
import PanelC from "./PanelC";
const Accordion = () =>{
    const[activePanel,setActivepanel]=useState(0)


const toggle= (num) =>{
    setActivepanel(num);
    // console.log(num)
}

return(
    <>
    <PanelA toggle={toggle} activePanel={activePanel} />
    <PanelB toggle={toggle} activePanel={activePanel} />
    <PanelC toggle={toggle} activePanel={activePanel} />
 </>
)
}
export default Accordion;
