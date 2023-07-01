import { createContext } from "react";

const themes = {

    light: {
        bodyTheme: "bodyThemeLight", /* São classes css pré-definidas */
        h2Theme: "h2ThemeLight",
        thTheme: "thThemeLight",
        trTheme: "trThemeLight",
        btnTheme: "btnThemeLight",
        navTheme: "navThemeLight",
        icons: "icons",
        icon: "icon",
        dhLogo: "dhLogo",
        stickyTop: "sticky-top",

        btnThemeIndex: "btn-light",
        cardTheme: "card",
        closeButton: "closeButton",
    },

    dark: {
        bodyTheme: "bodyThemeDark",
        h2Theme: "h2ThemeDark",
        thTheme: "thThemeDark",
        trTheme: "trThemeDark",
        btnTheme: "btnThemeDark",
        navTheme: "navThemeDark",
        cardDark: "cardDark",
        iconsDark: "iconsDark",

        darkTheme: "dark",
        cardTheme: "cardDark",
        iconsTheme: "iconsDark",
        modalTheme: "DarkModal",
        closeButton: "closeButtonDark",
    }
}

const ThemeContext = createContext(themes.light);

export { themes, ThemeContext };