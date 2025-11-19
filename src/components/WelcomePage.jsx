const WelcomePage = ({ currentUser, setCurrentPage }) => {
    return (
        <div>
            <h1>Добро пожаловать {currentUser.firstName} {currentUser.secondName}</h1>
            <button onClick={() => setCurrentPage('quizPage')}>Перейти к квизу</button>
        </div>
    );
};

export default WelcomePage;