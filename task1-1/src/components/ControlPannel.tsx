import './ControlPannel.css'
export default function ControlPannel(props:{floors:number[],currFloor:number,handleClick:(event:React.MouseEvent<HTMLButtonElement>,floor:number)=>void}) {
  return (
    <div className='control-pannel-container'>
        <div className="display-container">
            <h2>{props.currFloor}</h2>
        </div>
        <div className="floor-btn-container">
            {props.floors.map((floor)=>{
                return <button key={floor} onClick={(event)=>props.handleClick(event,floor)}>{floor}</button>
            })}
        </div>
    </div>
  )
}
