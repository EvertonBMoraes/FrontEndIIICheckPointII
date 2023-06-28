import { useEffect, useState } from "react";
import ScheduleFormModal from "./ScheduleFormModal";
import styles from "./DetailCard.module.css";
import apiBaseUrl from "../api";
import axios from "axios";
import { useParams } from "react-router-dom";
import useApi from "../Hooks/useApi";

const DetailCard = () => {
  const params = useParams();

  // const { data, shouldFetch } = useApi();

  const [dentista, setdentista] = useState({});


  const getDentista = async () => {
    //const matriculaDentista = localStorage.getItem("matricula");
    const res = await axios.get(`${apiBaseUrl}/dentista?matricula=${params.matricula}`);
    setdentista(res.data);

    // console.log(res.data);
    // console.log(params.matricula);

    //   await shouldFetch(`dentista/?matricula=${matricula}`);
  }

  useEffect(() => {
    getDentista();
  }, [setdentista]);

  return (
    //As instruções que estão com {''} precisam ser 
    //substituídas com as informações que vem da api
    <>
      {
        dentista ?
          <>
            {console.log(dentista)}
            <h1>Detail about Dentist: {`${dentista.nome}`} </h1>
            <section className="card col-sm-12 col-lg-6 container">
              {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
              <div
                className={`card-body row`}
              >
                <div className="col-sm-12 col-lg-6">
                  <img
                    className="card-img-top"
                    src="/images/doctor.jpg"
                    alt="doctor placeholder"
                  />
                </div>
                <div className="col-sm-12 col-lg-6">
                  <ul className="list-group">
                    <li className="list-group-item">Nome: {`${dentista.nome}`}</li>
                    <li className="list-group-item">
                      Sobrenome: {`${dentista.sobrenome}`}
                    </li>
                    <li className="list-group-item">Usuário: {`${dentista.sobrenome}`}</li>
                  </ul>
                  <div className="text-center">
                    {/* //Na linha seguinte deverá ser feito um teste se a aplicação
                    // está em dark mode e deverá utilizado o css correto */}
                    <button
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      className={`btn btn-light ${styles.button}`}
                    >
                      Marcar consulta
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </>
          : <h2>Carregando informações</h2>
      }

      <ScheduleFormModal />
    </>
  );
};

export default DetailCard;
