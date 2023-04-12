import { useContext, useState } from "react"
import style from "./clipboardButton.module.css"
import { DisplayContext } from "@/hooks/BackGroundDisplayContext";
const ClipboarButton = ({content}) => {
    const [text, setText] = useState(content);
    const {state} = useContext(DisplayContext)
 

    const handleClick = () => {
        console.log(state)
        setText("Copied to clipboard!")
        setTimeout(()=> setText(content),2000);
        const element = document.getElementById("backgroundDipslay")
        const style = window.getComputedStyle(element)
        const background = style.backgroundImage
        navigator.clipboard.writeText(`background: ${background}`)
    }

    return (
        <button onClick={handleClick} className={style.clipButton}>
            {text}
        </button>
    );
}

export default ClipboarButton;

