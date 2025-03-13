import { useState } from 'react'
import './App.css'
import ControlPannel from './components/ControlPannel'
import Lift from './components/Lift'
let f = 0;
export default function App() {
  const floor2:number[] = [0,1]
  const floor1:number[] = [2,0]
  const floor0:number[] = [1,2]
  const [currFloor,setCurrFloor] = useState(f)
  const [state,setState] = useState("close")
    function btnClick(event:React.MouseEvent<HTMLButtonElement>,floor:number){
      const timeId = setInterval(()=>{
        setCurrFloor(prevFloor => {
          if(floor === prevFloor) {
            clearInterval(timeId)
            setTimeout(() => {
              setState("open")
              setTimeout(()=>setState("close"),3000)
            }, 1000);
            
            return prevFloor
          }
          else if(floor < prevFloor) {
            return prevFloor - 1
          }
          else {
            return prevFloor + 1
          }
        })
      },1000)
  }

  return (
    <div className='main-container'>
      <div className='floor'>
        <div className='floor-lift'>
          <Lift state={state} visible={(currFloor===2)?1:0}></Lift>
        </div>
        <div className='floor-control'>
          <ControlPannel floors={floor2} currFloor={currFloor} handleClick={btnClick}/>
        </div>
      </div>
      <div className='floor'>
        <div className='floor-lift'>
        <Lift state={state} visible={(currFloor===1)?1:0}></Lift>
        </div>
        <div className='floor-control'>
        <ControlPannel floors={floor1} currFloor={currFloor} handleClick={btnClick}/>
        </div>
      </div>
      <div className='floor'>
        <div className='floor-lift'>
        <Lift state={state} visible={(currFloor===0)?1:0}></Lift>
        </div>
        <div className='floor-control'>
        <ControlPannel floors={floor0} currFloor={currFloor} handleClick={btnClick}/>
        </div>
      </div>
    </div>
  )
}
