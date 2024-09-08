import DrawerComponent from "../../components/drawer/drawer";
import Header from "../../components/header/Header";
import HomeContentTextComponent from "./components/HomeContentTextComponents";
import "./HomePage.css";
import { useState } from "react";


const HomePage = () => {
  const [isOpenDrawer, setIsOpenDrawer] = useState(true);
  console.log("home out", isOpenDrawer);
  const toggleDrawer = () => {
    console.log("home", isOpenDrawer);
    setIsOpenDrawer(!isOpenDrawer);
  };

  return (
    <>
      <div className="container">
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
