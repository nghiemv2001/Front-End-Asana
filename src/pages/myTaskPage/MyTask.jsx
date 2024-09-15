import { useContext} from "react";
import DrawerComponent from "../../components/drawer/drawer";
import Header from "../../components/header/Header";


import './MyTaskPage.css'
import MyTaskMainContent from "./components/MyTaskMainContent";
import { DrawerContext } from "../../context/useContext";

const MyTaskPage = () => {
  
  const {isOpenDrawer, setIsOpenDrawer} = useContext(DrawerContext); 

  const toggleDrawer = () => {
    setIsOpenDrawer(!isOpenDrawer);
  };

  return (
    <>
      <div className="container_mytask_page">
        <Header toggleDrawer={toggleDrawer} />
        <div className="wrap_drawer_mytask_main_content">
          <DrawerComponent isOpenDrawer={isOpenDrawer}/>
          <MyTaskMainContent/>
        </div>
      </div>
    </>
  );
};

export default MyTaskPage;
