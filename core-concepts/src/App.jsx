import './App.css';
import Counter from './Counter';
import Search from './Search';

function App() {
  return (
    <>
      <Counter initialCounter={42}/>
      <Search initialQuery='initial' onSearch={console.log} />
    </>
  )
}

export default App;
