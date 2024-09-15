import style from "./HomeContentTextComponent.module.css";

import ic_arrow from "../../../assets/icons/ic_arrow_down_black.svg";
import ic_check from '../../../assets/icons/ic_check.svg';
import ic_collaborator from '../../../assets/icons/ic_collaborator.svg';
import StackDirectionRow from "./StackDirectionRow";
import ContainerCardProject from "./ContainerCardProject";
import ContainerCardPeople from "./ContainerCardPeople";
import Sortable from 'sortablejs';
import { useEffect, useRef } from "react";
import MyTasKComponent from "./MyTaskComponent";

const HomeContentTextComponent = () => {

  const listRef = useRef(null);

  useEffect(() => {
      Sortable.create(listRef.current, {
          swapThreshold: 0.99,
          invertSwap: true,
          animation: 150,
      });
  }, []);

  return (
    <div className={style.home_page_context}>
      <button className={style.text_home}>Home</button>
      <div className={style.container_header_home_page}>
        <span className={style.monday_september}>Monday, September 2</span>
        <span className={style.good_evening}>Good evening, trong</span>
        <div className={style.conatiner_achievement_widget}>
          <button className={style.conatainer_button_achievement_widget}>
            <p>My week</p>
            <img src={ic_arrow} alt="Arrow Icon" />
          </button>
          <div className={style.conatainer_button_achievement_widget}>
            <img src={ic_check} alt="Check Icon" />
            <p>0 Task completed</p>
          </div>
          <div className={style.conatainer_button_achievement_widget}>
            <img src={ic_collaborator} alt="Collaborator Icon" />
            <p>0 Collaborators</p>
          </div>
        </div>
        <StackDirectionRow />
        <div className={style.container_card_project_and_people} ref={listRef}>
          <MyTasKComponent />
          <ContainerCardProject />
          <ContainerCardPeople />
        </div>
      </div>
    </div>
  );
  
};

export default HomeContentTextComponent;
