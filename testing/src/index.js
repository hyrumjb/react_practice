import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Car from './Car.js'

const x = 5;

function MissedGoal() {
  return <h1>MISSED!</h1>;
}

function MadeGoal() {
  return <h1>GOALLLLLLLL!</h1>;
}

function Goal(props) {
  const isGoal = props.isGoal;
  return isGoal ? <MadeGoal/> : <MissedGoal/>;
}

function Football() {
  const shoot = (a, b) => {
    alert(a + b.type);
  }

  return (
    <button onClick={(event) => shoot("Goal!", event)}>Take the shot!</button>
  )
}

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

function MyForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input 
          type="text"
          name="username"
          value={inputs.username || ""}
          onChange={handleChange}
        />
      </label>
      <label>Enter your age:
        <input
          type="number"
          name="age"
          value={inputs.age || ""}
          onChange={handleChange}
        />
      </label>
      <input type="submit" />
    </form>
  )
}

const myElement = (
  <>
    <Goal isGoal={true} />
    <Car color="red" />
    <Garage />
    <MyForm />
    <table>
      <tr>
        <th>Name</th>
      </tr>
      <tr>
        <td>John</td>
      </tr>
      <tr>
        <td>Elsa</td>
      </tr>
      <tr>
        <td>{5 + 5}</td>
      </tr>
      <tr>
        <td>{(x) < 10 ? "Hello" : "Goodbye"}</td>
      </tr>
    </table>
    <Football />
  </>
);

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container);
root.render(myElement);