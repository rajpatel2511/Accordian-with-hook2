import React , {useState} from "react";

const PanelA = ({toggle,activePanel}) =>{

console.log(activePanel)

    return(<>
        <h1>P1</h1>

        {activePanel ? <p>this is 1st panel</p>: null}
     
    <button onClick={()=>toggle(1)}>click</button>
        </>)
}
export default PanelA;
