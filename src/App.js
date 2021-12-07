import logo from './logo.svg';
import './App.css';
import Hello from './components/hello/Hello';
import Search from './components/search/Search'
import Task from './components/task/Task'

function App() {
  return (
    <div className="App">
      <Search/>
      <Task/>
      <Task/>
      <Task/>
    </div>
  ) 
}

export default App;
