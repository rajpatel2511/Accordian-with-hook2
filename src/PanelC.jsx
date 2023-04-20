import React , {useState} from "react";

const PanelB = ({toggle,activePanel}) =>{

// console.log(toggle)
    return(<>
        <h1>P3</h1>
        <button onClick={()=>toggle(activePanel === 3 ? null : 3)} >click</button>

        {activePanel===3 ?  <p>this is 3rd panel </p>:null}


        </>)
}
export default PanelB;