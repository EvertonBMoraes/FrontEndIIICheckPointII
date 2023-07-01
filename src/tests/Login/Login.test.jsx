
import Login from "../../Routes/Login";

import { screen } from "@testing-library/react";

import { renderContext } from "../test-utils";
import { ThemeContext, themes } from "../../Context/ThemeContext";
import { LoginContext } from "../../Context/LoginContext";
import { useContext, useState } from "react";
import { ThemeConsumer } from "../../Context/ThemeConsumer";
import { BrowserRouter } from "react-router-dom";

describe("<Login /> realizando testes", () => {
    // const { theme, handleChangeTheme, themeIcon } = useContext(ThemeContext);
    // const { name, saveName, removeUserStorage, saveToken } = useContext(LoginContext);

    const [theme, setTheme] = useState(themes.light);

    const [themeIcon, setThemeIcon] = useState("☀")

    const handleChangeIcon = () => {
        console.log("Filho disparou a função que troca o icone");

        if (theme === themes.light) {
            setThemeIcon("🌙");
        } else {
            setThemeIcon("☀");
        }
        localStorage.setItem("icon", themeIcon)
    };


    const handleChangeTheme = () => {
        console.log("Filho disparou a função que troca o tema");
        theme === themes.dark ? setTheme(themes.light) : setTheme(themes.dark);
        localStorage.setItem("theme", theme)
        handleChangeIcon();
    };


    test("Renderizou corretamente informando um contexto global", () => {
        return (
            <BrowserRouter>
                <ThemeContext.Provider value={{ theme, handleChangeTheme, themeIcon }}>
                    <ThemeConsumer>
                        <LoginContext>
                            <Login />
                        </LoginContext>
                    </ThemeConsumer>
                </ThemeContext.Provider>
            </BrowserRouter>
        )

    });

    test.skip("Renderizou corretamente E renderizou o componente filho <LoginForm />", () => {

        const contextoGlobal = { theme, handleChangeTheme, themeIcon }

        renderContext(
            <Login />,
            contextoGlobal
        );

        expect(screen.getByTestId("form-login")).toBeInTheDocument();

    });

})