import Button from "../Button/Button.js";
import style from "./buttonContainer.module.css";

const content = {
  style : ["Linear", "Radial", "Conic"],
  direction: ["135", "180", "225", "90", "360", "270", "45", "0", "315"],
  colors: ["a", "b", "Random"],
  outputFormat: ["Hex", "Rgba"],
  other: ["Get CSS", "Get Share Link"]
}

const ButtonContainer = ({ type }) => {


  return (
    <div className={style[type === "Output format" ? type.split(" ").join("") : type]}>
      {type === "Style"
        ? content.style.map((item) => (
            <Button key={item} content={item} type={type.toLowerCase()}/>
          ))
        : type === "Direction"
        ? content.direction.map((item) => (
            <Button key={item} content={item} type={type.toLowerCase()} />
          ))
        : type === "Colors" 
        ? content.colors.map((item) => ( 
            <Button key={item} content={item} type={type.toLowerCase()}/>
          ))
        : type === "Output format" &&
          content.outputFormat.map((item) => (
            <Button key={item} content={item} type={type.toLowerCase()}/>
          ))
          }
    </div>
  );
};

export default ButtonContainer;
