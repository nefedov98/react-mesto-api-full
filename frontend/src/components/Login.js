import React from 'react'



export default function Login({onLogin}) {

    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    function handleChange(e) {
        const { value } = e.target
        e.target.name === 'Email' ? setEmail(value) : setPassword(value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        onLogin(password, email)
    }

    return (
        <div className='login'>
            <h2 className='login__title'>Вход</h2>
            <form className='login__form' onSubmit={handleSubmit}>
                <input
                    className='login__input'
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
                    name="Password"
                    type="password"
                    className="login__input"
                    id="password"
                    placeholder="Пароль"
                    minLength="6"
                    maxLength="40"
                    required
                    value={password || ''}
                    onChange={handleChange}
                />
                <button className='login__button'>Войти</button>
            </form>
        </div>
    )
}