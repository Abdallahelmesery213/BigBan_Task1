import './App.css';
import TodoList from './components/TodoList/TodoList';


function App() {
  return (
    <div className="App">
      <h2>Todo List</h2>
      <div className='my-task'>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
