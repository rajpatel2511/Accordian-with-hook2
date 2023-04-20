import React , {useState} from "react";

const PanelB = ({toggle,activePanel}) =>{

// console.log(toggle)
    return(<>
        <h1>P2</h1>
        <button onClick={()=>toggle(2)} >click
        </button>
        {activePanel===2 ?  <p>this is 2nd panel  </p>:null}


        </>)
}
export default PanelB;