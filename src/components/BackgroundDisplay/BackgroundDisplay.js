import { DisplayContext } from "@/hooks/BackGroundDisplayContext";
import { useContext } from "react";

const BackgroundDisplay = () => {
  const { state, setDirection } = useContext(DisplayContext);
  console.log(state)
  return (
    <>
      <section id="backgroundDipslay"></section>
      <style jsx>
        {`
          section {
            background: ${state.style === "Linear"
              ? `linear-gradient(${setDirection(state.direction)}, ${
                  state.color1
                }, ${state.color2})`
              : state.style === "Radial"
              ? `-webkit-radial-gradient(${setDirection(state.direction)}, ${
                  state.color1
                }, ${state.color2})`
              : state.style === "Conic" &&
                `conic-gradient(${setDirection(state.direction)},${
                  state.color1
                }, ${state.color2})`};
            width: 100%;
          }
        `}
      </style>
    </>
  );
};

export default BackgroundDisplay;


