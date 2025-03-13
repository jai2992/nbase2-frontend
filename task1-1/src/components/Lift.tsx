import './Lift.css'
export default function Lift({state,visible}:{state:string,visible:number}) {
  return (
    <div className="lift-container">
        <div className="left-door" style={{width:(state==="close")?"100%":"0%",opacity:(visible)?"100%":"0%"}}>
        </div>
        <div className="right-door" style={{width:(state==="close")?"100%":"0%",opacity:(visible)?"100%":"0%"}}>

        </div>
    </div>
  )
}
