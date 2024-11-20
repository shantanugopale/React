import AppName from "./components/AppName";
import AddTodo from "./components/AppTodo";
import AddItem1 from "./components/AddItem1";
import AddItem2 from "./components/AddItem2";

function App() {
  return (
    <div className="container text-center">
      <AppName></AppName>
      <AddTodo></AddTodo>
      <AddItem1></AddItem1>
      <AddItem2></AddItem2>
    </div>
  );
}
export default App;
