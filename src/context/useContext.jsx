import {createContext, useState } from "react";

export const DrawerContext = createContext();

export const DrawerProvider = ({children}) => {
    const [isOpenDrawer, setIsOpenDrawer] = useState(true);

    return (
        <DrawerContext.Provider value={{isOpenDrawer, setIsOpenDrawer}}>
            {children}
        </DrawerContext.Provider>
    )
}