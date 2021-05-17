import logo from './logo.svg';
import './styles/App.scss';
import Navbar from './components/elements/Navbar'
import Table from './components/contact/Table'
import { Switch, Route } from 'react-router-dom'
import Contact from './components/contact/contact'
import AddContact from './components/contact/AddContact'
import EditContact from './components/contact/EditContact'

function App() {

  return (
    <div className="App">

      <Navbar />



      <div className="container">
        <div className="  py-5  ">
        

          <Switch>
            <Route exact path="/" component={Table} />
            <Route exact path="/contact/add" component={AddContact} />
            <Route exact path="/contact/edit/:id" component={EditContact} />

          </Switch>

        </div>
      </div>
    </div>
  );
}

export default App;
