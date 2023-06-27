import Gallery from './components/gallery';
import './App.css';
import Todo from './components/todo';
import Avatar from './components/Avatar';
import TodoList from './components/ToDoList';
import Profile from './components/profile';
import { getImageUrl } from './components/utils';
import PackingList from './components/PackingList';
import List from './components/List';

function App() {
  return (
    <div >
      <h1 className='App'>Amzing Scientists</h1>
      {/* <Gallery />
      <Gallery />
      <Gallery />
      <Gallery /> */}
      {/* <Todo /> */}
      {/* <Avatar /> */}
      {/* <TodoList /> */}
      {/* <Profile /> */}
      {/* <PackingList /> */}
      <List />


    </div>
  );
}

export default App;
