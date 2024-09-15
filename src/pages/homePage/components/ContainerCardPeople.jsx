import style from "./ContainerCardPeople.module.css";
import ic_arr_down_gray from "../../../assets/icons/ic_arr_dwon_gray.svg";
import img_people_1 from "../../../assets/images/main_avatar_1.png";
import img_people_2 from "../../../assets/images/main_avatar_2.png";
import img_people_3 from "../../../assets/images/main_avatar_3.png";
import ic_check from '../../../assets/icons/ic_check.svg'
import { useRef, useState } from "react";
import { CustomSelectMenu } from "../../../components/selectOptional/CustomerSelectionMenuButton";
import { useOutsideClick } from "../../../hooks/customHook/UseOutsideClick ";

const ContainerCardPeople = () => {
 const buttonRef = useRef(null);
  const [isOpen , setIsOpen] = useState(false);
 

  useOutsideClick(buttonRef, () => {setIsOpen(false)})
  const handleOpenSelection = () =>{
    setIsOpen(!isOpen);
  }
  const listOptional = [
    {
      src: ic_check,
      title: "Frequent collaborators",
    },
    {
      src: "",
      title: "Recent collaborators",
    },
    {
      src: "",
      title: "Starred collaborators",
    }
  ]

 

  return (
   <div className={style.container_card_people}>
   <button className={style.head_container_card_people}>
   
     <p className={style.name_people}>People</p>
     <button className={style.gr_button_frequet_collaboration}  ref={buttonRef} onClick={handleOpenSelection}> 
       {isOpen ? <CustomSelectMenu  listOptional={listOptional}/> : null}
       <p className={style.title_people}>Frequent collaborators</p>
       <img src={ic_arr_down_gray} alt="Arrow down" />
     </button>
   </button>
   <div className={style.main_list_container_card_people}>
     <div className={style.item_in_list_card_people}>
       <button>
         <img src={img_people_1} alt="Person 1" />
         <div></div>
       </button>
     </div>

     <div className={style.item_in_list_card_people}>
       <button>
         <img src={img_people_2} alt="Person 2" />
         <div></div>
       </button>
     </div>
     <div className={style.item_in_list_card_people}>
       <button>
         <img src={img_people_3} alt="Person 3" />
         <div></div>
       </button>
     </div>
   </div>
   <div className={style.gr_button_in_card_people}>
     <button className={style.collaborate_in_Asana}>
       Invite your teammates to collaborate in Asana
     </button>
     <button className={style.invite_teammates}>Invite teammates</button>
   </div>
 </div>

  );
};

export default ContainerCardPeople;
