function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 to {closeHour}:00. Come visit us or order online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <>
      <footer className="footer">
        {' '}
        <footer className="footer">
          {isOpen ? (
            <Order closeHour={closeHour} openHour={openHour} />
          ) : (
            <p>
              We're happy to welcome you between {openHour}:00 and {closeHour}:00.
            </p>
          )}
        </footer>
      </footer>
    </>
  );
}
// Order.propTypes = {
//   closeHour: (props, propName, componentName) => {
//     if (props[propName] && typeof props[propName] !== 'number') {
//       return new Error(`Invalid prop '${propName}' supplied to '${componentName}'. Expected a number.`);
//     }
//   },
//   openHour: (props, propName, componentName) => {
//     if (props[propName] && typeof props[propName] !== 'number') {
//       return new Error(`Invalid prop '${propName}' supplied to '${componentName}'. Expected a number.`);
//     }
//   },
// };

export default Footer;
