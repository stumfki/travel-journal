
import './App.css';
import Header from './Header';
import Head from './Head';
import Card from './Card';
import data from './data';
function App() {
  const elements = data.map(item => 
    <Card item={item}/>);
  return (
    <div className="App">
      <Head />
      <Header />
      {elements}

    </div>
  );
}

export default App;
