import React , {useState} from "react";
import PanelB from "./PanelB";
import PanelA from "./PanelA";
import PanelC from "./PanelC";

const Accordion = () =>{
    const[activePanel,setActivepanel]=useState(0)

    const p = [
        {
          question: "P1",
          answer:
            "Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesen.",
        },
        {
          question: "p2",
          answer:
            "Aperiam ab atque incidunt dolores ullam est, earum ipsa.",
        },]

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
export default Accordion;
