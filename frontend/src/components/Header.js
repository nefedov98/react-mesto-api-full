import logo from '../images/logo.svg';
import { Link, withRouter, useLocation } from 'react-router-dom';



function Header({ email, loggedIn, onSignOut }) {

  const location = useLocation()

  return (
    <header className="header">
      <a href="#" target="_self"><img src={logo} className="logo" alt="логотип" /></a>
      <div className="header__info">{
        loggedIn ?
          <p className='header__email'>{email}</p> :
          (<>
            {
              location.pathname === '/sign-up' ?
                <Link className='header__link' to='/sign-in'>Регистрация</Link> :
                <Link className='header__link' to='/sign-up'>Войти</Link>
            }
          </>)
      }
        {
          loggedIn && <Link className='header__link' onClick={onSignOut} to='/sign-in'>Выйти</Link>
        }
      </div>

    </header>);
}

export default Header;