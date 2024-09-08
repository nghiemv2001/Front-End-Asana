import { useState } from "react";
import DrawerComponent from "../../components/drawer/drawer";
import Header from "../../components/header/Header";


const InboxPage = () => {
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
        </div>
      </div>
        </>
    );
}

export default InboxPage;