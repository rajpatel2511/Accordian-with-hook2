import React , {useState} from "react";

const PanelA = ({toggle,activePanel}) =>{


// const [show, setShow] = useState(false);
//  console.log(show)
// const handleOpen = () => {
//     setShow(!show); 
//     console.log(!show)
//      toggle(!show ? 1:null)
//   };

    return(<>
        <h1>P1</h1>
        <button onClick={()=>toggle(1)}>click</button>


        {activePanel===1 ? <p>this is 1st panel </p> : null}
     
        </>)
}
export default PanelA;
