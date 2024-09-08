import ItemStack from "./ItemTaskComponent";

import "./StackDirectionRow.css";

import img_get_start_detail_image from "../../../assets/images/get_start_detail_image 1.png";
import ic_arrow_rigt from "../../../assets/icons/ic_arr_right_gray.svg";

const StackDirectionRow = () => {
  return (
    <div className="getting_started">
      <div className="getting_started_container_left">
        <ItemStack done={true} number={1} text={"Create your first project"} />
        <ItemStack done={false} number={2} text={"Customize home"} />
        <ItemStack done={false} number={3} text={"Manage your team"} />
        <ItemStack done={false} number={4} text={"Complete your profile"} />
        <ItemStack
          done={false}
          number={5}
          text={"Download mobile & desktop apps"}
        />
      </div>
      <div className="getting_started_container_right">
        <img
          className="img_get_start_detail_image"
          src={img_get_start_detail_image}
        />
        <div className="content_in_getting_started_container_right">
          <p>Keep work on track. Make it clear who’s doing what by when.</p>
          <button className="btn_go_to_cross">Go to Cross-functional project plan</button>
          <button className="btn_gr_next_step">
            Next step
            <img src={ic_arrow_rigt} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StackDirectionRow;
