import './App.css'
import HeaderComponent from './components/HeaderComponent';
import ListPersonComponent from './components/ListPersonComponent';
import { BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import PersonComponent from './components/PersonComponent';
import TransactionComponent from './components/TransactionComponent';
import ListPersonTransactionsComponent from './components/ListPersonTransactionsComponent';
import ListPersonRecurrencesComponent from './components/ListPersonRecurrencesComponent';
import RecurrenceComponent from './components/RecurrenceComponent';

function App() {

  return (
    <>
    <BrowserRouter>
      <HeaderComponent />
      <Routes>
        {/* http:localhost:3000 -> redireciona para /persons*/}
        <Route path='/' element = { <Navigate to="/persons" replace />}></Route>

        {/* http:localhost:3000/persons */}
        <Route path='/persons' element = { <ListPersonComponent />}></Route>

        {/* http:localhost:3000/add-person */}
        <Route path='/persons/add-person' element = { <PersonComponent />}></Route>

        {/* http:localhost:3000/add-transaction */}
        <Route path='/persons/add-transaction' element = { <TransactionComponent />}></Route>

        {/* http:localhost:3000/add-recurrence */}
        <Route path='/persons/add-recurrence' element = { <RecurrenceComponent />}></Route>

        <Route path='/persons/person-recurrences/:id' element = { <ListPersonRecurrencesComponent />}></Route>
        
        {/* http:localhost:3000/person-transactions */}
        <Route path='/persons/person-transactions/:id' element = { <ListPersonTransactionsComponent />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
