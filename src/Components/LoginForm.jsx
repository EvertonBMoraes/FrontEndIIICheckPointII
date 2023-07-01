import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { LoginContext } from "../Context/LoginContext";
import apiBaseUrl from "../api";
import styles from "./Form.module.css";
import axios from "axios";

const LoginForm = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    const response = localStorage.getItem("user_name");
    setName(response);
  }, []);

  function saveName(user_name) {
    setName(user_name);
    localStorage.setItem("user_name", user_name);
  }

  function saveToken(token) {
    localStorage.setItem("token", token);
  }

  function removeUserStorage() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("token");
  }

  const navigate = useNavigate();
  //const { saveName, saveToken } = useContext(LoginContext);

  // let { username, setUsername } = useState();
  // let { password, setPassword } = useState();

  async function handleSubmit(e) {
    e.preventDefault();

    const username = e.target[0].value;
    const password = e.target[1].value;

    //Verificando se o login tem pelo menos 5 caracteres
    if (username.length < 5) {
      alert("Validação < 5: Verifique as suas informações novamente");
      console.error("username menor que 5 caracteres");
    } else {
      try {

        const authBody = {
          username: username,
          password: password,
        };

        console.log(username);
        console.log(password);

        const response = await axios.post(`${apiBaseUrl}/auth`, authBody);
        console.log(response);

        saveName(username);
        saveToken(response.data.token);
        navigate("/home");

      } catch (error) {
        alert("Erro Catch: Verifique suas informações novamente");
        console.error("erro ao logar");
        console.log(error);
      }
    }
  }

  return (
    <LoginContext.Provider
      value={{ name, saveName, removeUserStorage, saveToken }}
    >
      {/* <LoginConsumer> */}
      <>
        {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
        <div className={`text-center card container ${styles.card}`}>
          <div className={`card-body ${styles.CardBody}`}>
            <form onSubmit={handleSubmit}>
              <input
                className={`form-control ${styles.inputSpacing} `}
                placeholder="Login"
                name="login"
                required
              //onSubmit={(event) => setUsername(event.target[0].value)}
              />
              <input
                className={`form-control ${styles.inputSpacing} `}
                placeholder="Password"
                name="password"
                type="password"
                required
              //onSubmit={(event) => setPassword(event.target[1].value)}
              />
              <button className="btn btn-primary" type="submit">
                Enviar
              </button>
            </form>
          </div>
        </div>
      </>
      {/* </LoginConsumer> */}

    </LoginContext.Provider>
  );

  // return (
  //   <>
  //     {/* //Na linha seguinte deverá ser feito um teste se a aplicação
  //       // está em dark mode e deverá utilizar o css correto */}
  //     <div className={`text-center card container ${styles.card}`}>
  //       <div className={`card-body ${styles.CardBody}`}>
  //         <form onSubmit={handleSubmit}>
  //           <input
  //             className={`form-control ${styles.inputSpacing} `}
  //             placeholder="Login"
  //             name="login"
  //             required
  //           //onSubmit={(event) => setUsername(event.target[0].value)}
  //           />
  //           <input
  //             className={`form-control ${styles.inputSpacing} `}
  //             placeholder="Password"
  //             name="password"
  //             type="password"
  //             required
  //           //onSubmit={(event) => setPassword(event.target[1].value)}
  //           />
  //           <button className="btn btn-primary" type="submit">
  //             Enviar
  //           </button>
  //         </form>
  //       </div>
  //     </div>
  //   </>
  // );
};

export default LoginForm;
