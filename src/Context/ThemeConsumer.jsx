import { useContext } from "react";

import { ThemeContext } from "../Context/ThemeContext";

function ThemeConsumer({ children }) {

    const { theme } = useContext(ThemeContext);

    return (
        <div className={
            `
            ${theme.bodyTheme} 
            ${theme.h2Theme} 
            ${theme.thTheme} 
            ${theme.trTheme}
            ${theme.btnTheme}
            ${theme.navTheme}

            ${theme.btnThemeIndex}
            ${theme.darkTheme}
            ${theme.cardTheme}
            ${theme.iconsTheme}
            ${theme.modalTheme}
            ${theme.closeButton}

            `
        }>
            {children}
        </div>
    )

}

export default ThemeConsumer;