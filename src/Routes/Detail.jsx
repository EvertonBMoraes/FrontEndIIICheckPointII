import DetailCard from "../Components/DetailCard";
import { useParams } from "react-router-dom";

const Detail = () => {
  const params = useParams();
  console.log(params.id);
  const dentistaMatricula = params.id;
  return (
    <>
      <DetailCard
        matricula={dentistaMatricula}
      />
    </>
  )
}

export default Detail