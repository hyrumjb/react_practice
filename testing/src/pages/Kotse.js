function Kotse(props) {
  return <li>I am a { props.brand }</li>;
}

function Garage() {
  const cars = [
    {id: 1, brand: 'Ford'},
    {id: 2, brand: 'BMW'},
    {id: 3, brand: 'Audi'}
  ];
  return (
    <>
      <h2>What cars are in my garage?</h2>
      <ul>
        {cars.map((car) => <Kotse key={car.id} brand={car.brand} />)}
      </ul>
    </>
  );
}

export default Garage;