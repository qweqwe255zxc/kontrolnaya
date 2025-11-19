import RegPage from './components/regPage.jsx';
import WelcomePage from './components/WelcomePage.jsx';
import Quiz from './components/quiz.jsx';
import Results from './components/Results.jsx';
import { setToLocalStorage, getFromLocalStorage } from './utils/localStorage.js'

import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [currentPage, setCurrentPage] = useState('regPage');
  const [users, setUsers] = useState(
    () => {
    return getFromLocalStorage('users') || [
      // {
      //   firstName: 'asd',
      //   secondName: 'asd',
      //   login: 'asd',
      //   password: 'asdasdasd'
      // }
    ];
  });
  const [currentUser, setCurrentUser] = useState();
  const [isLoaded, setIsLoaded] = useState(false);

  const shuffleArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5) // метод фишера-йетса
  }
  const [questions] = useState(shuffleArray([
    {
      id: 1,
      quest: "Вопрос1",
      options: ["Вариант 1", "Вариант 2", "Вариант 3", "Вариант 4"],
      correctAnswer: 0 // индекс правильного ответа
    },
    {
      id: 2,
      quest: "Вопрос2",
      options: ["Вариант 1", "Вариант 2", "Вариант 3", "Вариант 4"],
      correctAnswer: 1 // индекс правильного ответа
    },
    {
      id: 3,
      quest: "Вопрос3",
      options: ["Вариант 1", "Вариант 2", "Вариант 3", "Вариант 4"],
      correctAnswer: 2 // индекс правильного ответа
    }])
  )
  const [results, setResults] = useState();

  console.log(questions);
  
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
      {currentPage === 'welcomePage' && (<WelcomePage currentUser={currentUser} setCurrentPage={setCurrentPage} />)}
      {currentPage === 'quizPage' && (<Quiz setCurrentPage={setCurrentPage} questions={questions} setResults={setResults}/>)}
      {currentPage === 'resultsPage' && (<Results currentUser={currentUser} results={results}/>)}

    </>
  )
}

export default App
