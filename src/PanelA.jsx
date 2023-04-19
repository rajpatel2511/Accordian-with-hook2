import React , {useState} from "react";

const PanelA = ({toggle,activePanel}) =>{

console.log(activePanel)

    return(<>
        <h1>P1</h1>
        <button onClick={()=>toggle(1)}>click</button>

        {activePanel===1 ? <p>this is 1st panel <hr /></p> : null}
     
        </>)
}
export default PanelA;
