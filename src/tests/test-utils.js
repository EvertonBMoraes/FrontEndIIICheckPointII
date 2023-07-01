import { render } from "@testing-library/react"
import { BrowserRouter, MemoryRouter, Routes, Route } from "react-router-dom"
import { ThemeContext } from "../Context/ThemeContext"
import { LoginContext } from "../Context/LoginContext"


const renderWithContext = (ui, providerValue) => {
    return render(
        <BrowserRouter>
            <ThemeContext.Provider value={providerValue || { theme, handleChangeTheme, themeIcon }}>
                <LoginContext.Provider value={{ name, saveName, removeUserStorage, saveToken }}>
                    {ui}
                </LoginContext.Provider>
            </ThemeContext.Provider>
        </BrowserRouter>
    )
}

//Only for testing individual routes as /dentist/:id
export const renderWithRouter = (ui, { route = '/', path = '/' }) => {
    window.history.pushState({}, 'Test page', route)

    return render(
        <MemoryRouter initialEntries={[route]}>
            <Routes>
                <Route index path={path} element={ui} />
            </Routes>
        </MemoryRouter>
    )
}

export * from "@testing-library/react"
export { renderWithContext as render }  