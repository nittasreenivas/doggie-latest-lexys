import { useParams } from "react-router-dom";
import data from "../Pokemon/data";
export default function PokiDescription() {
  const params = useParams();
  console.log("params:", params);
  const pokimons = data.find((poki) => poki.id === params.id);
  return (
    <div className="pokimon-desc">
      <h2>Pokimon Information </h2>
      <h3 style={{ fontSize: "25px", color: "red" }}> {pokimons.Breed} </h3>
      <img alt={pokimons.Breed} src={pokimons.image} width={300} />
      <p style={{ color: "red" }}> {pokimons.description}</p>
      <p style={{ color: "red" }}> {pokimons.Color} </p>
      <p style={{ color: "red" }}> {pokimons["Rescued From"]} </p>
      <p style={{ color: "red" }}> {pokimons["Life Expectancy"]} </p>
      <p style={{ color: "red" }}> {pokimons["Approx Age"]}</p>
    </div>
  );
}
