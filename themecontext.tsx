import { createContext, useContext } from "react";
import { Theme } from "./colorstyle";



/**this interface is used for intellisense for the 'Theme' useContext*/
export interface ThemeContextInterface{
    theme:Theme
    setTheme:Function
}
/**This is the basic object used for the 'Theme' useContext*/
function setNullTheme(){
    return
}
export const themeContextObject:ThemeContextInterface = {theme:0,setTheme:()=>{}}

/**This is the global 'Theme' context*/
export const themeContext = createContext(themeContextObject)