import React , {useState} from "react";

const PanelB = ({toggle,activePanel}) =>{

console.log(toggle)
    return(<>
        <h1>P2</h1>

        {activePanel ? <p>this is 2nd panel</p>: null}

    <button onClick={()=>toggle(2)} >click</button>

        </>)
}
export default PanelB;