import { useContext } from "react";
import DrawerComponent from "../../components/drawer/drawer";
import Header from "../../components/header/Header";
import { DrawerContext } from "../../context/useContext";
import { InBoxMainContentComponents } from "./components/InBoxMainContentComponents";
import styles from './InBoxPage.module.css'

export const InboxPage = () => {
  const { isOpenDrawer, setIsOpenDrawer } = useContext(DrawerContext);

  function toggleDrawer() {
    setIsOpenDrawer(!isOpenDrawer);
  }

  return (
    <>
      <div className={styles.container_mytask_page}>
        <Header toggleDrawer={toggleDrawer} />
        <div className={styles.wrap_drawer_inbox_main_content}>
          <DrawerComponent isOpenDrawer={isOpenDrawer} />
          <InBoxMainContentComponents />
  
        </div>
      </div>
    </>
  );
};
