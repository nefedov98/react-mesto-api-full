import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Register({ onRegister }) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleChange(e) {
        const { value } = e.target
        e.target.name === 'Email' ? setEmail(value) : setPassword(value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        onRegister(password, email)
    }
    return (
        <div className='register'>
            <h2 className='register__title'>Регистарция</h2>
            <form className='register__form' onSubmit={handleSubmit}>
                <input  
                    className='register__input' 
                    name="Email" 
                    type="email" 
                    id="email" 
                    placeholder="Email" 
                    minLength="6"
                    maxLength="40"
                    required
                    value={email || ''}
                    onChange={handleChange}
                />
                <input 
                    className='register__input' 
                    name="Password"
                    type="password"
                    id="password"
                    placeholder="Пароль"
                    minLength="6"
                    maxLength="40"
                    required
                    value={password || ''}
                    onChange={handleChange}
                />
                <button className='register__button'>Зарегистрироваться</button>
                <Link className='register__link' to='/sign-up'>Уже зарегистрированы? Войти</Link>
            </form>
        </div>
    )
}




// {
//     formName === 'register' &&
//     <Link className='auth-page__link' to='/sign-up'>Уже зарегистрированы? Войти</Link>
// }