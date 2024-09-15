import ItemStack from "./ItemTaskComponent";
import { useState } from "react";

import ic_close from '../../../assets/icons/ic_close.svg'
import img_get_start_detail_image from "../../../assets/images/get_start_detail_image 1.png";
import ic_arrow_rigt from "../../../assets/icons/ic_arr_right_gray.svg";

import style from "./StackDirectionRow.module.css";

const StackDirectionRow = () => {

  const [activeStep, setActiveStep] = useState(2);

  const steps = [
    { done: true, number: 1, text: "Create your first project" },
    { done: false, number: 2, text: "Customize home" },
    { done: false, number: 3, text: "Manage your team" },
    { done: false, number: 4, text: "Complete your profile" },
    { done: false, number: 5, text: "Download mobile & desktop apps" }
  ];

  return (
    <div className={style.getting_started}>
      <button>
        <img className={style.ic_close_stack_direction_row} src={ic_close} alt="Close" />
      </button>
      <div className={style.getting_started_container_left}>
        {steps.map((step, index) => (
          <ItemStack
            key={index}
            done={step.done}
            number={step.number}
            text={step.text}
            active={activeStep === step.number} 
            onClick={() => setActiveStep(step.number)} 
          />
        ))}
      </div>
      <div className={style.getting_started_container_right}>
        <img
          className={style.img_get_start_detail_image}
          src={img_get_start_detail_image}
          alt="Detail"
        />
        <div className={style.content_in_getting_started_container_right}>
          <p>Keep work on track. Make it clear who’s doing what by when.</p>
          <button className={style.btn_go_to_cross}>
            Go to Cross-functional project plan
          </button>
          <button className={style.btn_gr_next_step}>
            Next step
            <img src={ic_arrow_rigt} alt="Arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StackDirectionRow;
