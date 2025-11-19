const Results = ({currentUser, results}) => {
    return (
        <div>
            <h1>Поздравляем!!!</h1>
            <p>Пользователь: {currentUser.firstName} {currentUser.secondName}</p>
            <p>Резуальтат: {results}</p>
        </div>
    );
};

export default Results;