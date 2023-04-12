import { createContext, useReducer } from "react";
import rgbHex from "rgb-hex";
import hexRgb from "hex-rgb";

const DisplayContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case Actions.UPDATE_STYLE:
      return {
        ...state,
        style: action.payload,
      };
    case Actions.UPDATE_DIRECTION:
      return {
        ...state,
        direction: action.payload,
      };
    case Actions.UPDATE_COLORS:
      return {
        ...state,
        color1: action.payload.color1,
        color2: action.payload.color2,
      };
    case Actions.UPDATE_COLORS_FORMAT:
      return {
        ...state,
        color1: action.payload.color1,
        color2: action.payload.color2,
      };
    case Actions.UPDATE_BACKGROUND:
      return {
        ...state,
        background: action.payload,
      };
    default:
      return state;
  }
};

const initialArg = {
  style: "Linear",
  direction: "135",
  color1: "rgba(0,0,255,1.0)",
  color2: "rgba(255,0,0,1.0)",
};

const Actions = {
  UPDATE_STYLE: "updateStyle",
  UPDATE_DIRECTION: "updateDirection",
  UPDATE_COLORS: "updateColor",
  UPDATE_COLORS_FORMAT: "updateColorsFormat",
};

const Direction = {
  0: ["0deg", "center bottom", "from 180deg"],
  45: ["45deg", "left bottom", "from 225deg"],
  90: ["90deg", "left center", "from 270deg"],
  135: ["135deg", "left top", "from 315deg"],
  180: ["180deg", "center top", "from 0deg"],
  225: ["225deg", "right top", "from 45deg"],
  270: ["270deg", "right center", "from 90deg"],
  315: ["315deg", "right bottom", "from 135deg"],
  360: ["360deg", "center center", "from 360deg"],
};

const DisplayProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialArg);
  const setDirection = (direction) => {
    if (state.style === "Linear" && direction !== "center")
      return Direction[direction][0];
    if (state.style === "Conic" && direction !== "center")
      return Direction[direction][2];
    if (state.style === "Radial" && direction !== "center") {
      return Direction[direction][1];
    } else {
      return Direction[direction];
    }
  };

  const randomColor = () => {
    const x = Math.floor(Math.random() * 256);
    const y = Math.floor(Math.random() * 256);
    const z = Math.floor(Math.random() * 256);
    const a = parseFloat(Math.random().toFixed(2)) + 0.01;
    const color = `rgba(${x},${y},${z},${a})`;
    return color;
  };

  const colorFormatHex = (color) => {
    if (color.includes("rgb")) {
      const newColor = `#${rgbHex(color)}`;
      return newColor;
    }
    return color;
  };

  const colorFormatRgb = (color) => {
    if (color.includes("#")) {
      const getColor = hexRgb(color);
      const newColor = `rgb(${getColor.red},${getColor.green},${getColor.blue},${getColor.alpha})`;
      return newColor;
    }
    return color;
  };

  const getBackground = (state) => {
    if (state.style === "radial") {
      const background = `background: -webkit-${state.style}-gradient(${state.direction}, ${state.color1}, ${state.color2})`;
      return background;
    }
    const background = `background: ${state.style}-gradient(${state.direction}, ${state.color1}, ${state.color2})`;
    return background;
  };


  return (
    <DisplayContext.Provider
      value={{
        state,
        dispatch,
        randomColor,
        setDirection,
        Direction,
        colorFormatHex,
        colorFormatRgb,
        getBackground,
      }}
    >
      {children}
    </DisplayContext.Provider>
  );
};

export { DisplayContext, DisplayProvider };
