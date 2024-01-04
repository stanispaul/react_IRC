import React from 'react';
import {useData} from 'react';

const Home=()=>
{
    const[visible,setvisible]=useData(true);
    const toggle=()=>
    {
        setvisible(!visible)
    }
    setTimeout(()=>{
        setvisible(true)
    },5000)
    return(
        <>
           {visible ? (<button onClick={toggle}>Welcome</button>):(<button onClick={toggle}>Good Bye</button>)}
        </>
    )
}
export default Home;