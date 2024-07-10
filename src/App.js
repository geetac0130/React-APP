import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import ItemListing from './Item/Item';
import CreateItem from './Item/CreateItem';
import EditItem from './Item/EditItem';

function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path="/" element={<ItemListing />} />
        <Route path="/create-item" element={<CreateItem />} />
        <Route path="/edit-item/:id" element={<EditItem />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
