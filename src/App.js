import React from "react";
import PropTypes from "prop-types";

function Food({ name, weight }) {
  return (
    <div>
      {name} : {weight}kg
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  weight: PropTypes.number.isRequired
};

const people = [
  {
    id: 1,
    name: "jin",
    weight: 74
  },
  {
    id: 2,
    name: "asdfg",
    weight: 34
  },
  {
    id: 3,
    name: "dsg",
    weight: 56
  },
  {
    id: 4,
    name: "sdef",
    weight: 88
  }
];

function callPeople(person) {
  return <Food key={person.id} name={person.name} weight={person.weight} />;
}

function App() {
  return (
    <div>
      {people.map(person => (
        <Food key={person.id} name={person.name} weight={person.weight} />
      ))}

      {people.map(callPeople)}
    </div>
  );
}

export default App;
