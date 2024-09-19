import { useRef, useState } from "react";
import { CustomSelectMenu } from "../../../components/selectOptional/CustomerSelectionMenuButton";
import { useOutsideClick } from "../../../hooks/customHook/UseOutsideClick ";

//Import ICON&IMAGE
import ic_arr_down_gray from "../../../assets/icons/ic_arr_dwon_gray.svg";
import img_people_1 from "../../../assets/images/main_avatar_1.png";
import img_people_2 from "../../../assets/images/main_avatar_2.png";
import img_people_3 from "../../../assets/images/main_avatar_3.png";
import ic_check from "../../../assets/icons/ic_check.svg";
import ic_menu_option from '../../../assets/icons/ic_menu_options.svg'
import ic_plus from "../../../assets/icons/ic_plus.svg";
import ic_remove from "../../../assets/icons/ic_trash.svg";

import style from "./ContainerCardPeople.module.css";
import { ItemPeople } from "./ItemPeople";

export const ContainerCardPeople = ({size,  toggleHalfSize, toggleFullSize}) => {

  const buttonRef = useRef(null);
  const buttonMenuOptionRef = useRef(null);
  
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  useOutsideClick(buttonRef, () => {
    setIsOpen(false);
  });

  useOutsideClick(buttonMenuOptionRef, () => {
    setIsOpenMenu(false);
  })

  const handleOpenSelection = () => {
    setIsOpen(!isOpen);
  };

  const handleOpenSelectionMenu = () => {
    setIsOpenMenu(!isOpenMenu)
  }

  const listRecents= [
    {
      src: ic_check,
      title: "Frequent collaborators",
    },
    {
      src: "",
      title: "Recent collaborators",
    },
  ];
  const listOptional = [
    {
      src: ic_plus,
      title: "Invite",
    },
    {
      src: size === "half" ? ic_check : "",
      title: "Half size",
      action: toggleHalfSize,
    },
    {
      src: size === "full" ? ic_check : "",
      title: "Full size",
      action: toggleFullSize,
    },
    {
      src: ic_remove,
      title: "remove widget",
    },
  ];

  const peopleList = [
    {
      image : img_people_3,
      email : 'nghiemV2001@gmail'
    },
    {
      image : img_people_2,
      email : 'nghiemV2001@gmail'
    },
    {
      image : img_people_1,
      email : 'nghiemV2001@gmail'
    }
  ]

  return (
    <div className={ `${style.container_card_people} ${style.card} 
      ${size === "full" ? style.fullSize : style.halfSize}`}>
      <div className={style.head_container_card_people}>
        <p className={style.name_people}>People</p>
        <button
          className={style.gr_button_frequet_collaboration}
          ref={buttonRef}
          onClick={handleOpenSelection}>
          {isOpen ? <CustomSelectMenu listOptional={listRecents} /> : null}
          <p className={style.title_people}>Frequent collaborators</p>
          <img src={ic_arr_down_gray} alt="Arrow down" />
        </button>
        <button className={style.btn_option_menu_card_people} onClick={handleOpenSelectionMenu} ref={buttonMenuOptionRef}>
          {isOpenMenu ? <CustomSelectMenu listOptional={listOptional}/>: null}
          <img src={ic_menu_option}/>
        </button>
      </div>
      <div className={style.main_list_container_card_people}>
        <div className={style.item_invite_people}>
          <button>
            <img  src={ic_plus}/>
           </button>  
           <p>Invite people</p>
        </div>
        {peopleList.map((person, index) => (
         <ItemPeople key={index} image={person.image} email={person.email}  />
      ))}
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
