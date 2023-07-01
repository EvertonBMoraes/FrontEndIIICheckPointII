import { useContext, useEffect, useState } from "react";
import styles from "./ScheduleForm.module.css";
import axios from 'axios';
import apiBaseUrl from '../api';
import { useNavigate } from "react-router-dom";

const ScheduleForm = () => {
  //const params = useParams();

  // const { data, shouldFetch } = useApi();
  const navigate = useNavigate();
  const [dentistas, setDentistas] = useState([]);
  const [pacientes, setPacientes] = useState([]);

  const [dentistaSelecionado, setDentistaSelecionado] = useState();
  const [pacienteSelecionado, setPacienteSelecionado] = useState();
  const [dataSelecionada, setDataSelecionada] = useState();


  const getDentistas = async () => {
    const res = await axios.get(`${apiBaseUrl}/dentista`);

    setDentistas([
      {
        matricula: "0",
        nome: "Selecionar",
        sobrenome: "..."
      },
      ...res.data
    ]);

  }

  useEffect(() => {
    getDentistas();
  }, []);

  const getPacientes = async () => {
    const res = await axios.get(`${apiBaseUrl}/paciente`);

    setPacientes([
      {
        matricula: "0",
        nome: "Selecionar",
        sobrenome: "..."
      },
      ...res.data.body
    ]);

  }

  useEffect(() => {
    getPacientes();
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    console.log("clicou no botão de schedule");

    //Token vindo do Login
    const token = localStorage.getItem("token");
    console.log(`Token utilizado no schedule consulta: ${token}`)

    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };

    const consulta = {
      paciente: {
        matricula: pacienteSelecionado
      },
      dentista: {
        matricula: dentistaSelecionado
      },
      dataHoraAgendamento: dataSelecionada
    }

    console.log(`Consulta gerada no handle Submit:`);
    console.log(consulta);

    /// Comunicação com a API
    const response = await axios.post(`${apiBaseUrl}/consulta`, consulta, config);
    console.log(response);

    if (response.status == 200) {
      alert("Consulta gerada com sucesso")
      navigate("/home");
    } else {
      alert("Ocorreu um erro tente novamente mais tarde")
      navigate("/home");
    }
    /// Atualizando as informações da tela, com o novo objeto (produto) cadastrado.
    //getProducts();
  }


  return (
    <>
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
      <div
        className={`text-center container}`
        }
      >
        <form onSubmit={handleSubmit}>
          <div className={`row ${styles.rowSpacing}`}>
            <div className="col-sm-12 col-lg-6">

              <label htmlFor="dentist" className="form-label">
                Dentist
              </label>
              <select className="form-select" name="dentist" id="dentist"
                onChange={(e) => { setDentistaSelecionado(e.target.value) }}
              >
                {/*Aqui deve ser feito um map para listar todos os dentistas*/}
                <>
                  {
                    dentistas.map(dentista => {
                      return (
                        dentista ?
                          <option key={dentista.matricula} value={dentista.matricula}>
                            {`${dentista.nome}`} {`${dentista.sobrenome}`}
                          </option>
                          : <h2>Carregando informações</h2>
                      )
                    })
                  }
                </>
              </select>
            </div>
            <div className="col-sm-12 col-lg-6">
              <label htmlFor="patient" className="form-label">
                Patient
              </label>
              <select className="form-select" name="patient" id="patient"
                onChange={(e) => { setPacienteSelecionado(e.target.value) }}
              >
                {/*Aqui deve ser feito um map para listar todos os pacientes*/}
                {/* <option key={'Matricula do paciente'} value={'Matricula do paciente'}>
                  {`Nome Sobrenome`}
                </option> */}
                <>
                  {
                    pacientes.map(paciente => {
                      return (
                        paciente ?
                          <option key={paciente.matricula} value={paciente.matricula}>
                            {`${paciente.nome}`} {`${paciente.sobrenome}`}
                          </option>
                          : <h2>Carregando informações</h2>
                      )
                    })
                  }
                </>
              </select>
            </div>
          </div>
          <div className={`row ${styles.rowSpacing}`}>
            <div className="col-12">
              <label htmlFor="appointmentDate" className="form-label">
                Date
              </label>
              <input
                className="form-control"
                id="appointmentDate"
                name="appointmentDate"
                type="datetime-local"
                onChange={(e) => { setDataSelecionada(e.target.value) }}
              />
            </div>
          </div>
          <div className={`row ${styles.rowSpacing}`}>
            {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
            <button
              className={`btn btn-light ${styles.button
                }`}
              type="submit"
              data-bs-dismiss="modal"
            >
              Schedule
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ScheduleForm;
