import { useEffect, useState } from "react";
import Card from "../Components/Card";
import apiBaseUrl from "../api";
import axios from "axios";

const Home = () => {

  const [dentistas, setdentistas] = useState([]);

  const getDentistas = async () => {
    const res = await axios(`${apiBaseUrl}/dentista`)
    setdentistas(res.data)
  }

  useEffect(() => {
    //Nesse useEffect, deverá ser obtido todos os dentistas da API
    //Armazena-los em um estado para posteriormente fazer um map
    //Usando o componente <Card />
    console.log("<Home /> executou efeito colateral");
    getDentistas();
    return function unmount() {
      console.log(console.log("<Character /> desmontou"));
    }
  }, []);

  return (
    <>
      <h1>Home</h1>
      <div className="card-grid container">
        {

          dentistas.map(dentista => {

            return (
              dentista ?

                <Card
                  nomeDentista={dentista.nome}
                  matricula={dentista.matricula}
                />

                : <h2>A lista de dentistas está vazia</h2>
            )
          })
        }
      </div>
    </>
  );
};

export default Home;
