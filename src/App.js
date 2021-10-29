import './App.css';
import Todo from './component/Todo';

function App() {
  return (
    <div className="App">
          <h1> my todos</h1>
      <header className="App-header">

      <Todo title="todo title 0"/>
      <Todo title="todo title 1"/> 
   
      </header>
    </div>
  );
}

export default App;
