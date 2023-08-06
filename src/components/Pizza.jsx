function Pizza(props) {
  const { pizza } = props;
  const getPizzaImgPath = obj => {
    return 'src/images/' + obj.photoName;
  };
  // if (props.pizza.soldOut) return null;
  return (
    <>
      <li className={`pizza ${pizza.soldOut ? 'sold-out' : ''}`}>
        <img src={getPizzaImgPath(pizza)} alt="image" />
        <div>
          {' '}
          <h3>{pizza.name}</h3>
          <p>{pizza.ingredients}</p>
          <span>{pizza.soldOut ? 'SOLD OUT' : pizza.price}</span>
        </div>
      </li>
    </>
  );
}
// Pizza.propTypes = {
//   pizza: (props, propName, componentName) => {
//     if (props[propName] && typeof props[propName] !== 'object') {
//       return new Error(`Invalid prop '${propName}' supplied to '${componentName}'. Expected an object.`);
//     }
//   },

// };
export default Pizza;
