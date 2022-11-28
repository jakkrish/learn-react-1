import { useState } from 'react';
import './App.css';
import Item from './components/Item';

function App() {

  const [itemsList, setItemsList]  = useState(
    [
      {name: "Jay",
      alias: "Superman"
      },
      {
        name: "Rishi",
        alias: "Batman"
      }
    ]
  ) 

  function addItem(){
    setItemsList(oldArray => [...oldArray, {name:"test",alias:"test"}])
  }


  return (
    <div className="App">
      <button onClick={addItem}>Add new item</button>
     {
itemsList.map(item=>{
  return <Item key={item.name} name={item.name} alias={item.alias}/>
})
     } 
    </div>
  );
}

export default App;
