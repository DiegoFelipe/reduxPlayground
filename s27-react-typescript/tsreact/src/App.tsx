import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  const myTodos = [new Todo("Learn React"), new Todo("Learn Typescript")];
  return (
    <div className="App">
      <Todos items={myTodos} />
    </div>
  );
}

export default App;
