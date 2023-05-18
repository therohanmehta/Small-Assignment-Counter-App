import React,{useState} from "react";
import "./style.css";
import Button from '@mui/material/Button';
export default function App() {
  const [num , setNum] = useState(0)
  return (
    <div className='mainDiv'>
      <Button variant='' onClick={()=>{setNum(num+1)}}>UP +1</Button>
<div>
  <Button variant=''onClick={()=>{setNum(num-10)}}>left -10</Button>
  <h1>{num}</h1>
  <Button  variant='' onClick={()=>{setNum(num+10)}}>right +10</Button>
</div>
<Button  variant='' onClick={()=>{setNum(num-1)}}>Down -1</Button>
    </div>
  );
}
