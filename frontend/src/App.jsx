import './App.css'
import HeaderComponent from './components/HeaderComponent';
import ListPersonComponent from './components/ListPersonComponent';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import PersonComponent from './components/PersonComponent';
import TransactionComponent from './components/TransactionComponent';

function App() {

  return (
    <>
    <BrowserRouter>
      <HeaderComponent />
      <Routes>
        {/* // http:localhost:3000 */}
        <Route path='/' element = { <ListPersonComponent />}></Route>
        {/* // http:localhost:3000/persons */}
        <Route path='/persons' element = { <ListPersonComponent />}></Route>
        {/* // http:localhost:3000/add-person */}
        <Route path='/persons/add-person' element = { <PersonComponent />}></Route>
        {/* // http:localhost:3000/add-transaction */}
        <Route path='/persons/add-transaction' element = { <TransactionComponent />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
