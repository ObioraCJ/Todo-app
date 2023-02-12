import './App.css';

function App() {
  return (
    <div className="App">
       <div className="todo">
           <h1>My Todo list</h1>
           <div className="items">
             <input id="item1" type="checkbox" checked />
             <label for="item1">Morning prayer</label>

             <input id="item2" type="checkbox" />
             <label for="item2">Hit the Gym</label>

             <input id="item3" type="checkbox" />
             <label for="item3">Read at the libery</label>

             <input id="item4" type="checkbox" />
             <label for="item4">Buy stuffs at the market</label>

             <input id="item5" type="checkbox" />
             <label for="item5">Relax at home</label>

             <h2 className="done">DONE</h2>
             <h2 className="pending">PENDING</h2>
           </div>
       </div>
    </div>
  );
}

export default App;
