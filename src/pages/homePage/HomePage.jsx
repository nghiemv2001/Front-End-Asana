import { useContext } from "react";
import DrawerComponent from "../../components/drawer/drawer";
import Header from "../../components/header/Header";
import HomeContentTextComponent from "./components/HomeContentTextComponents";
import "./HomePage.css";
import { DrawerContext } from "../../context/useContext";


const HomePage = () => {
  const {isOpenDrawer, setIsOpenDrawer} = useContext(DrawerContext); 

  const toggleDrawer = () => {
    setIsOpenDrawer(!isOpenDrawer);
  };

  return (
    <>
      <div className="container_homepage">
        <Header toggleDrawer={toggleDrawer} />
        <div className="wrap_drawer_main_content">
          <DrawerComponent isOpenDrawer={isOpenDrawer} />
          <HomeContentTextComponent/>
        </div>
      </div>
    </>
  );
};

export default HomePage;
