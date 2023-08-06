import Pizza from './Pizza';
import { pizzaData } from '../assets/data/data';
function Menu() {
  const numPizzas = pizzaData.length;

  return (
    <>
      <main className="menu">
        <h2>Our Menu</h2>
        {numPizzas > 0 ? (
          <>
            <p>
              Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all
              delicious.
            </p>
            <ul className="pizzas">
              {pizzaData.map((pizza, index) => {
                return <Pizza key={index} pizza={pizza} />;
              })}
            </ul>
          </>
        ) : (
          <div>
            <h1>No Pizzas Available</h1>
          </div>
        )}
      </main>
    </>
  );
}

export default Menu;
