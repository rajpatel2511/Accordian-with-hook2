import React , {useState} from "react";

const PanelB = ({toggle,activePanel}) =>{

// console.log(toggle)
    return(<>
        <h1>P3</h1>
        <button onClick={()=>toggle(3)} >click</button>

        {activePanel===3 ?  <p>this is 3rd panel <hr />     </p>:null}


        </>)
}
export default PanelB;