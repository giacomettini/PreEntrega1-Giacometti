import './components/ItemListContainer/ItemListContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer
      mensaje='Work in progress....................'
      />
    </div>
  );
}

export default App;
