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

export default Goal;