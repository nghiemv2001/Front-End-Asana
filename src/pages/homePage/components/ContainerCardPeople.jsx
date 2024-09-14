import "./ContainerCardPeople.css";
import ic_arr_down_gray from "../../../assets/icons/ic_arr_dwon_gray.svg";
import img_people_1 from "../../../assets/images/main_avatar_1.png";
import img_people_2 from "../../../assets/images/main_avatar_2.png";
import img_people_3 from "../../../assets/images/main_avatar_3.png";
const ContainerCardPeople = () => {
  return (
    <div className="container_card_people"  onDragStart="return false">
      <div className="head_container_card_people">
        <p className="name_people">People</p>
        <button className="gr_button_frequet_collaboration">
          <p className="title_people">Frequent collaborators</p>
        <img src={ic_arr_down_gray} />
        </button>
        
      </div>
      <div className="main_list_container_card_people">
        <div className="item_in_list_card_people">
          <button>
            <img src={img_people_1} />
            <div></div>
          </button>
        </div>

        <div className="item_in_list_card_people">
          <button>
            <img src={img_people_2} />
            <div></div>
          </button>
        </div>
        <div className="item_in_list_card_people">
          <button>
            <img src={img_people_3} />
            <div></div>
          </button>
        </div>
      </div>
      <div className="gr_button_in_card_people">
      <button className="collaborate_in_Asana">
      Invite your teammates to collaborate in Asana
      </button>
      <button className="invite_teammates">
      Invite teammates
      </button>
      </div>
    </div>
  );
};

export default ContainerCardPeople;
