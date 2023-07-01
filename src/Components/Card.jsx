import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import useApi from "../Hooks/useApi";
import { useEffect } from "react";

const Card = ({ nomeDentista, matricula }) => {
  const { data, error, shouldFetch } = useApi();

  useEffect(() => {

    if (data && !error) {

      /// Guardamos o token JWT no Storage
      localStorage.setItem("matricula", matricula);

    }


  }, [data, error]);
  return (
    <>
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
      <div className={`card`}>
        <img
          className="card-img-top"
          src="/images/doctor.jpg"
          alt="doctor placeholder"
        />
        <div className={`card-body ${styles.CardBody}`}>
          {/* Na linha seguinte o link deverá utilizar a matricula, nome e sobrenome do dentista
          que vem da API */}
          <Link
            className="linkStyle"
            to={`/detail/${matricula}`}
            onClick={() => {
              localStorage.setItem("matricula", matricula);
            }}
          //{async () => await shouldFetch(`dentista/?matricula=${matricula}`)}
          >
            <h5 className={`card-title ${styles.title}`}>{nomeDentista}</h5>

          </Link>
        </div>
      </div >
    </>
  );
};

export default Card;

