import { useEffect } from "react";
import Card from "../Components/Card";
import useApi from "../Hooks/useApi";

const Home = () => {

  const { data, isLoading, error, shouldFetch } = useApi();

  useEffect(() => {

    const buscaDentistasApi = async () => {
      await shouldFetch("dentista");
    }
    buscaDentistasApi();
  }, []);


  return (
    <>

      <h1>Home</h1>
      <div className="card-grid container">

        {

          (data && !isLoading) ?

            data.map((card, index) => {
              return (
                <Card
                  key={index}
                  nomeDentista={card.nome}
                  matricula={card.matricula}
                /> 
              )
            })

            : <h1>Carregando as informações...</h1>
        }

      </div>
    </>
  );
};

export default Home;
