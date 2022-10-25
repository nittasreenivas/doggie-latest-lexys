import { Link } from "react-router-dom";
import data from "./data.json";
export default function Pokemon() {
  const pokeInfo = data.map((poki) => {
    return (
      <div key={poki.id} className="each-dog">
        <Link to={`/pokemon/${poki.id}`} state={poki}>
          <h3>{poki.Breed} </h3>
        </Link>
        <img alt={poki.title} src={poki.image} width={400} />
      </div>
    );
  });
  return (
    <div>
      <h3> Pokemon Info </h3>
      <div className="poki-container">{pokeInfo}</div>
    </div>
  );
}
