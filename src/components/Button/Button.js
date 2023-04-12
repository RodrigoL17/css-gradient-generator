import style from "@/components/Button/button.module.css";
import { DisplayContext } from "@/hooks/BackGroundDisplayContext";
import { useContext } from "react";
import Image from "next/image";

const Actions = {
  UPDATE_STYLE: "updateStyle",
  UPDATE_DIRECTION: "updateDirection",
  UPDATE_COLORS: "updateColor",
};
const Button = ({ content, type }) => {
  const {
    dispatch,
    state,
    randomColor,
    Direction,
    colorFormatHex,
    colorFormatRgb,
  } = useContext(DisplayContext);
  const handleClick = (e) => {
    type === "style"
      ? dispatch({ type: Actions.UPDATE_STYLE, payload: content })
      : type === "direction"
      ? dispatch({ type: Actions.UPDATE_DIRECTION, payload: content })
      : type === "colors"
      ? dispatch({
          type: Actions.UPDATE_COLORS,
          payload: { color1: randomColor(), color2: randomColor() },
        })
      : type === "output format" &&
        dispatch({
          type: Actions.UPDATE_COLORS_FORMAT,
          payload: {
            color1:
              content === "Hex"
                ? colorFormatHex(state.color1)
                : content === "Rgba" && colorFormatRgb(state.color1),
            color2:
              content === "Hex"
                ? colorFormatHex(state.color2)
                : content === "Rgba" && colorFormatRgb(state.color2),
          },
        });
  };

  return (
    <>
      <button
        className={`${style.sectionButton} ${
          content === "360" ? "center" : content
        }`}
        onClick={() => {
          content !== "a" && content !== "b" && handleClick();
        }}
      >
        {type === "direction" ? (
          content === "360" ? (
            <Image
              src="/circle.svg"
              width={12}
              height={14}
              alt="circle"
              className={`${content}`}
            />
          ) : (
            <div
              className={`${
                content && Direction[content][1].split(" ").join("")
              }`}
            >
              <Image src="/arrow.svg" width={16} height={14} alt="arrow" />
            </div>
          )
        ) : type === "colors" ? (
          <span className={content}>{content}</span>
        ) : (
          content
        )}
      </button>

      <style jsx>
        {`
          .a {
            background-color: ${state.color1};
          }

          .b {
            background-color: ${state.color2};
          }

          .a span {
            visibility: hidden;
          }

          .b span {
            visibility: hidden;
          }

          .center {
            visibility: ${state.style !== "Radial" ? "hidden" : "visible"};
          }
          .lefttop {
            transform: rotate(315deg);
          }

          .leftcenter {
            transform: rotate(270deg);
          }

          .leftbottom {
            transform: rotate(225deg);
          }

          .righttop {
            transform: rotate(45deg);
          }

          .rightcenter {
            transform: rotate(90deg);
          }
          .rightbottom {
            transform: rotate(135deg);
          }

          .centerbottom {
            transform: rotate(180deg);
          }
        `}
      </style>
    </>
  );
};

export default Button;
