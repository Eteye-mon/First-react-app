export function Darkbutton() {
    const styles = {
        display: "flex",
        justifyContent: "space-between",
        marginBottom:10
    }
    const dark = {
        backgroundColor: "black",
        color:"white"
    }
    return (
        <div style={styles}>
            <button  style={dark}>Dark</button>
        </div>
 )
}
export function Lightbutton() {
    const styles = {
        display: "flex",
        justifyContent: "space-between",
        marginBottom:10
    }
    const white = {
        backgroundColor: "white",
        color: "black",
        border:"2px solid black"
    }
    return (
        <div style={styles}>
            <button  style={white}>Light</button>
        </div>
 )
}