const MyElement = (
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

export default MyElement;