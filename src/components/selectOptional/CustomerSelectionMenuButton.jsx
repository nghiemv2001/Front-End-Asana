// CustomSelectMenu.js
import { useEffect, useRef, useState } from "react";
import { OptionalSelect } from "./Optional";
import './Optional.scss'

export const CustomSelectMenu = ({ listOptional}) => {
  const [alignRight, setAlignRight] = useState(false);
  const selectMenuRef = useRef(null);
  const handleOptionClick = (action) => {
    if (typeof action === 'function') {
      action(); // Call the action function when an option is clicked
    }
  };
  useEffect(() => {
    const handlePosition = () => {
      const boundingBox = selectMenuRef.current.getBoundingClientRect();
      const windowWidth = window.innerWidth;
      if (boundingBox.right > windowWidth) {
        setAlignRight(true);
      } else {
        setAlignRight(false);
      }
    };
    handlePosition();
    window.addEventListener("resize", handlePosition);
    return () => {
      window.removeEventListener("resize", handlePosition);
    };
  }, []);
  return(
    <div
    ref={selectMenuRef}
    className={`custom-select-menu ${alignRight ? "align-right" : "align-left"}`}
    >
    {listOptional.map((option) => (
      <OptionalSelect
        key={option.title}
        src={option.src}
        title={option.title}
        action={() => handleOptionClick(option.action)}
        className="optional-select"
        
      />
    ))}
  </div>
  )
};
