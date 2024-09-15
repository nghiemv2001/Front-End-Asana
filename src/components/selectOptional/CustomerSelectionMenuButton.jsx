// CustomSelectMenu.js
import { useEffect, useRef, useState } from "react";
import { OptionalSelect } from "./Optional";
import './Optional.scss'

export const CustomSelectMenu = ({ listOptional}) => {

  const handleOptionClick = ()=>{
  }
  const [alignRight, setAlignRight] = useState(false);
  const selectMenuRef = useRef(null);

  useEffect(() => {
    const handlePosition = () => {
      const boundingBox = selectMenuRef.current.getBoundingClientRect();
      const windowWidth = window.innerWidth;

      // Check if there's more space on the right, else align to the left
      if (boundingBox.right > windowWidth) {
        setAlignRight(true);
      } else {
        setAlignRight(false);
      }
    };

    // Call the position check whenever the component is mounted or updated
    handlePosition();

    // Optionally, you can add event listener for window resize if needed
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
        className="optional-select"
        onClick={() => handleOptionClick(option.title)}
      />
    ))}
  </div>
  )
};
