import { useState } from "react";
export default function Counter(){
    const [number, setNumber]= useState(0)
return(

    <>
    <hi>{number}</hi>
    <button onClick={() => {setNumber(number+ 5);
    setTimeout(()=>{alert(number)},3000)
    }}>+5</button>

    </>
);

}