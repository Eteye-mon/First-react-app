
export default function Card({ myclass, description, logo, icon1, icon2, location, animationtype }) {
    let style = {
        padding:10
    }
    return (
        <div className={myclass} style={style}>
            <h1>{ description}</h1>
            <div className="subblock">
                <img className="mylogo" src={logo}/>
                <div>
                 <small>{icon1} {location } </small>
                <small>  {icon2} {animationtype }</small>
            </div>

            </div>
        </div>
    )
}