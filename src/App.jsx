import RegPage from './components/regPage.jsx';
import WelcomePage from './components/WelcomePage.jsx';
import { setToLocalStorage, getFromLocalStorage } from './utils/localStorage.js'

import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [currentPage, setCurrentPage] = useState('regPage');
  const [users, setUsers] = useState(() => {
    return getFromLocalStorage('users') || [
      {
        firstName: 'asd',
        secondName: 'asd',
        login: 'asd',
        password: 'asdfghj'
      }
    ];
  });


  const [currentUser, setCurrentUser] = useState();

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (isLoaded) {
      setToLocalStorage('users', users)
    } else {
      setIsLoaded(true)
    }
  }, [users]);


  return (
    <>
      {currentPage === 'regPage' && (<RegPage users={users} setUsers={setUsers} setCurrentPage={setCurrentPage} setCurrentUser={setCurrentUser} />)}
      {currentPage === 'welcomePage' && (<WelcomePage currentUser={currentUser} />)}
    </>
  )
}

export default App
