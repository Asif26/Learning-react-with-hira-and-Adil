import Gallery from './components/gallery';
import './App.css';
import Todo from './components/todo';
import Avatar from './components/Avatar';
import TodoList from './components/ToDoList';
import Profile from './components/profile';
import { getImageUrl } from './components/utils';

function App() {
  return (
    <div className='App'>
      <h1 className='App'>Amzing Scientists</h1>
      {/* <Gallery />
      <Gallery />
      <Gallery />
      <Gallery /> */}
      {/* <Todo /> */}
      {/* <Avatar /> */}
      {/* <TodoList /> */}
      <Profile />


    </div>
  );
}

export default App;
