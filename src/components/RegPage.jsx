import { useRef, useState } from "react";
import { setToLocalStorage } from "../utils/localStorage.js";


const RegPage = ({ users, setUsers, setCurrentPage, setCurrentUser }) => {

    const [currentRegPage, setCurrentRegPage] = useState('auth');
    const regInputsRef = useRef([])
    const authInputsRef = useRef([])

    const allInputs = (currentRef, el, index) => {
        currentRef.current[index] = el
    }

    const regClick = (e) => {
        e.preventDefault()

        const name = regInputsRef.current[0].value.trim();
        const surname = regInputsRef.current[1].value.trim();
        const login = regInputsRef.current[2].value.trim();
        const password = regInputsRef.current[3].value.trim();

        if (!name || !surname || !login || !password) {
            alert("Заполните все поля");
            return;
        }

        if (password.length < 6) {
            alert("Пароль должен содержать не менее 6 символов");
            return;
        }

        const canditate = {
            firstName: name,
            secondName: surname,
            login: login,
            password: password,
        }

        console.log(users);
        if (users.some(user =>
            user.login === canditate.login
        )) {
            alert('login уже существует')
        } else {
            alert('Пользователь добавлен')
            setUsers(prev => [...prev, canditate])
            console.log('пользователь добавлен', users);
            setToLocalStorage('users', users)
            setCurrentRegPage('auth')
        }
    }

    const authClick = (e) => {
        e.preventDefault()
        const login = authInputsRef.current[0].value.trim();
        const password = authInputsRef.current[1].value.trim();

        if (!login || !password) {
            alert("Заполните все поля");
            return;
        }

        if (password.length < 6) {
            alert("Пароль должен содержать не менее 6 символов");
            return;
        }

        if (users.some(user =>
            user.login === login && user.password === password
        )) {
            const currentUser = users.find(user =>
                user.login === login && user.password === password
            )
            alert('Вы успешно зарегестрировались')
            setCurrentPage('welcomePage')
            setCurrentUser(currentUser)

        } else {
            alert('Такого аккаунта не существует, зарегестрируйтесь')
            setCurrentRegPage('reg')
        }
    }

    return (
        <>
            {currentRegPage === 'reg' && (<div>
                <form>
                    <input type="text" name="" id="first_name" placeholder="Введите ваше имя" ref={(el) => allInputs(regInputsRef, el, 0)} required />
                    <input type="text" name="" id="second_name" placeholder="Введите вашу фамилию" ref={(el) => allInputs(regInputsRef, el, 1)} required />
                    <input type="text" name="" id="login" placeholder="Введите ваш login" ref={(el) => allInputs(regInputsRef, el, 2)} required />
                    <input type="password" name="" id="password" placeholder="Введите ваш пароль" ref={(el) => allInputs(regInputsRef, el, 3)} required />
                    <button type="submit" onClick={regClick}>Зарегистрироваться</button>
                </form>
                <p onClick={() => setCurrentRegPage('auth')}>Уже есть аккаунт? Войдите</p>
            </div>)}
            {currentRegPage === 'auth' && (<div>
                <form>
                    <input type="text" name="" id="login" placeholder="Введите ваш login" ref={(el) => allInputs(authInputsRef, el, 0)} required />
                    <input type="password" name="" id="password" placeholder="Введите ваш пароль" ref={(el) => allInputs(authInputsRef, el, 1)} required />
                    <button type="submit" onClick={authClick}>Войдите</button>
                </form>
                <p onClick={() => setCurrentRegPage('reg')}>Нет аккаунт? Зарегестрируйтесь</p>
            </div>)}

        </>
    );
};

export default RegPage;