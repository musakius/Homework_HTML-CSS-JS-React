import ItemList from "../item-list";
import SwapiService from "../../services/swapi-service";
import { withData, withChildFunction } from "../../hocs";

const { getAllPeople, getAllPlanets, getAllStarships } = new SwapiService();
const renderName = (item) => `${item.name}`;

const PersonList = withData(
  withChildFunction(ItemList, renderName),
  getAllPeople
);
const PlanetList = withData(
  withChildFunction(ItemList, renderName),
  getAllPlanets
);
const StarshipsList = withData(
  withChildFunction(ItemList, renderName),
  getAllStarships
);

export { PersonList, PlanetList, StarshipsList };
