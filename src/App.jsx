import Card from './components/Card'
import mylogo1 from "./assets/unsplash-photo-1.jpg"
import mylogo2 from "./assets/unsplash-photo-2.jpg"
import mylogo3 from "./assets/unsplash-photo-3.jpg"
import { MdAddLocationAlt } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import './App.css'
import { useState } from 'react'
import Form from "./components/Form"

function App() {
  // const [num, setNum] = useState(0)
  // console.log(num)
  // function handleClick() {
  //   setNum(function (prev) {
  //     return ++prev
  //   })
  //  }

  let styles = {
    display: "flex",
    justifyContent: "space-between",
  }
  return (
    <>

      {/* <div style={styles}>
        <Card
          myclass="card1"
          icon1={<MdAddLocationAlt />}
          icon2={<FaRegCalendarAlt />}
          description="Short title, long jacket"
          logo={mylogo1}
          location="Earth" animationtype="3D"
        />
        <Card myclass="card2" icon1={<MdAddLocationAlt />} icon2={<FaRegCalendarAlt />} description="Much longer title that wraps to multiple lines" logo={mylogo2} location="Pakistan" animationtype="4D" />
        <Card myclass="card3" icon1={<MdAddLocationAlt />} icon2={<FaRegCalendarAlt />} description="Another longer title belongs here" logo={mylogo3} location="California" animationtype="5D" />

      </div> */}
      <Form mode={true} />
      {/* <h1>{num}</h1>
      <button onClick={handleClick}>+</button> */}
    </>
  )
}


export default App
