import { useRef, useState } from "react";
import { useOutsideClick } from "../../../hooks/customHook/UseOutsideClick ";
import { CustomSelectMenu } from "../../../components/selectOptional/CustomerSelectionMenuButton";

import style from "./ContainerCardProject.module.css";
import ic_arr_down_gray from "../../../assets/icons/ic_arr_dwon_gray.svg";
import ic_project from "../../../assets/icons/ic_project_drawer_blue.svg";
import plus_has_broder_gray from "../../../assets/icons/plus_has_broder_gray.svg";
import ic_project2 from "../../../assets/icons/ic_project_drawer_pink.svg";
import ic_plus from "../../../assets/icons/ic_plus.svg";
import ic_remove from "../../../assets/icons/ic_trash.svg";
import ic_check from "../../../assets/icons/ic_check.svg";
import ic_menu from "../../../assets/icons/ic_menu_options.svg";

export const ContainerCardProject = ({ size, toggleFullSize, toggleHalfSize }) => {
    const buttonRef = useRef(null);
  const buttonmenuRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);


  useOutsideClick(buttonRef, () => {
    setIsOpen(false);
  });

  useOutsideClick(buttonmenuRef, () => {
    setIsOpenMenu(false);
  });

  const handleOpenSelection = () => {
    setIsOpen(!isOpen);
  };

  const handleOpenSelectionMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  const listMenuRecent = [
    {
      src: ic_check,
      title: "Recents",
    },
    {
      src: "",
      title: "Starred",
    },
  ];

  const listOptional = [
    {
      src: ic_plus,
      title: "New Project",
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
  return (
    <div
      className={`${style.container_card_project} ${style.card} 
      ${size === "full" ? style.fullSize : style.halfSize}`}
    >
      <div className={style.head_container_card_project}>
        <p className={style.name_project}>Project</p>
        <button
          className={style.gr_btn_recents_card_project}
          ref={buttonRef}
          onClick={handleOpenSelection}
        >
          {isOpen ? <CustomSelectMenu listOptional={listMenuRecent} /> : null}
          <p className={style.title_time}>Recents</p>
          <img src={ic_arr_down_gray} />
        </button>
        <button
          className={style.btn_option_menu_card_project}
          onClick={handleOpenSelectionMenu}
          ref={buttonmenuRef}
        >
          {isOpenMenu ? (
            <CustomSelectMenu listOptional={listOptional} className="" />
          ) : null}
          <img src={ic_menu} />
        </button>
      </div>
      <div className={style.main_list_container_card_project}>
        <div className={style.item_in_list_card_project}>
          <button>
            <img src={plus_has_broder_gray} />
            <p>Create project</p>
          </button>
        </div>
        <div className={style.item_in_list_card_project}>
          <button>
            <img src={ic_project} />
            <p>Create project</p>
          </button>
        </div>
        <div className={style.item_in_list_card_project}>
          <button>
            <img src={ic_project} />
            <p>Create project</p>
          </button>
        </div>
        <div className={style.item_in_list_card_project}>
          <button>
            <img src={ic_project} />
            <p>Create project</p>
          </button>
        </div>
        <div className={style.item_in_list_card_project}>
          <button>
            <img src={ic_project} />
            <p>Create project</p>
          </button>
        </div>
        <div className={style.item_in_list_card_project}>
          <button>
            <img src={ic_project} />
            <p>Create project</p>
          </button>
        </div>
        <div className={style.item_in_list_card_project}>
          <button>
            <img src={ic_project2} />
            <p>Create project</p>
          </button>
        </div>
        <div className={style.item_in_list_card_project}>
          <button>
            <img src={plus_has_broder_gray} />
            <p>Create project</p>
          </button>
        </div>
        <div className={style.item_in_list_card_project}>
          <button>
            <img src={ic_project} />
            <p>Create project</p>
          </button>
        </div>
        <div className={style.item_in_list_card_project}>
          <button>
            <img src={ic_project2} />
            <p>Create project</p>
          </button>
        </div>
        <div className={style.item_in_list_card_project}>
          <button>
            <img src={plus_has_broder_gray} />
            <p>Create project</p>
          </button>
        </div>
        <div className={style.item_in_list_card_project}>
          <button>
            <img src={ic_project} />
            <p>Create project</p>
          </button>
        </div>
        <div className={style.item_in_list_card_project}>
          <button>
            <img src={ic_project2} />
            <p>Create project</p>
          </button>
        </div>
        <div className={style.item_in_list_card_project}>
          <button>
            <img src={plus_has_broder_gray} />
            <p>Create project</p>
          </button>
        </div>
      </div>
    </div>
  );
};

