import styles from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({ nomeDentista, matricula }) => {
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
         <Link
            className="linkStyle"
            to={`/dentista/${matricula}`}
            onClick={() => {
              localStorage.setItem("matricula", matricula);
            }}>
            <h5 className={`card-title ${styles.title}`}>{nomeDentista}</h5>
          </Link>
      </div>
    </>
  );
};

export default Card;
