import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./components/CoffeeCard";

function App() {

  const coffees = useLoaderData();

  return (
    <>
      <div className="m-20">
        <h1>Welcome to Caffeine Craze</h1>
        <div className="grid md:grid-cols-2 gap-4 my-20">
          {
            coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>)
          }
        </div>
      </div>
    </>
  );
}

export default App;