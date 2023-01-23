import { useState } from 'react'
import { Darkbutton, Lightbutton } from './Buttons'
let body = document.querySelector('body')

export default function Form(props) {
    const mode = props.mode
    const [fields, setFields] = useState(
        {
            name: '',
            email: '',
            phone: ''
        }
    )
    const handleChange = ({ target }) => {
        let name = target.name
        let value = target.value
        setFields((prev) => {
            return {
                ...prev,
                [name]: value
            }

        })
        // console.log(name, value)
    }
    const handleSave = (e) => {
        e.preventDefault();
        // var form = new FormData(document.getElementById("form"));
        // let name = form.get("name")
        // var email = form.get("email");
        // var phone = form.get("phone");
        // console.log(name)
        fields.name == "" || fields.email == "" || fields.phone == "" ? alert('All fields are required') : alert('Details saved Successfully')
    }


    let [bgmode, setBgmode] = useState(
        {
            backgroundColor: "white",
            color: "black",
            border: '2px solid black'
        }
    )

    let [btnmode, setBtnmode] = useState(
        {
            backgroundColor: "black",
            color: "white"
        }
    )
    const darkMode = (() => {
        body.setAttribute("style", "background-color: black;");
        setBgmode(function (prev) {
            return (
                {
                    ...prev,
                    backgroundColor: "black",
                    color: "white",
                    border: '2px solid white'
                }

            )
        })
        setBtnmode(function (prev) {
            return (
                {...prev,
                    backgroundColor: "white",
                    color: "black"
                }

            )
        })
    })
    const lightMode = (() => {
        body.setAttribute("style", "background-color: white;");

        setBgmode(function (prev) {
            return (
                bgmode = {
                    backgroundColor: "white",
                    color: "black",
                    border: '2px solid black'
                }
            )
        })
        setBtnmode(function (prev) {
            return (
                btnmode = {
                    backgroundColor: "black",
                    color: "white"
                }

            )
        })
    })

    const styles = {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: 10
    }
    const dark = {
        backgroundColor: "black",
        color: "white",
        border: "2px solid white"
    }
    const white = {
        backgroundColor: "white",
        color: "black",
        border: "2px solid black"
    }


    return (
        <>
            <div style={styles}>
                <button onClick={darkMode} style={dark}>Dark</button>
                <button onClick={lightMode} style={white}>Light</button>
            </div>

            {/* {mode ? <Darkbutton /> : <Lightbutton />} */}
            <form className='myform' id="form" style={bgmode}>

                <div className='forms' >
                    <label>Name</label>
                    <input name="name" value={fields.name} onChange={handleChange} />
                </div>
                <div className='forms'>
                    <label>Email</label>
                    <input name="email" value={fields.email} onChange={handleChange} />
                </div>
                <div className='forms'>
                    <label>Phone Number</label>
                    <input name="phone" value={fields.phone} onChange={handleChange} />
                </div>
                <button type='button' className='saveBtn' style={btnmode} onClick={handleSave}>Save</button>
            </form>
        </>
    )
}