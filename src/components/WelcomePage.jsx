const WelcomePage = ({ currentUser }) => {
    return (
        <div>
            <h1>Добро пожаловать {currentUser.firstName} {currentUser.secondName}</h1>
        </div>
    );
};

export default WelcomePage;