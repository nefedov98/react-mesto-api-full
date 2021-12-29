
import React from 'react';
import Card from './Card.js';
import {api} from '../utils/Api.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext'

function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick, cards, onCardLike, onCardDelete}) {

  const currentUser = React.useContext(CurrentUserContext)

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__info">
                    <div className="profile__info-button">
                        <img src={currentUser.avatar} className="profile__avatar" alt="Аватар пользователя" />
                        <button onClick={onEditAvatar} type="button" className="profile__avatar-edit-button"></button>
                      </div>
                      <div className="profile__bio">
                        <div className="profile__text">
                            <h1 className="profile__title">{currentUser.name}</h1>
                            <p className="profile__subtitle">{currentUser.about}</p>
                        </div>
                        <button onClick={onEditProfile} className="profile__edit" type="button" aria-label="редактирование" ></button>
                    </div>
                </div>
                <button onClick={onAddPlace} className="profile__add" type="button" aria-label="добавление"></button>
            </section>
            <section className="photos">
                <ul className="photos__list">
                {cards.map((item) => (
                    <Card onCardLike ={onCardLike} onCardDelete ={onCardDelete} key={item._id}
                     card={item}
                        name={item.name}
                        link={item.link}
                        likes={item.likes.length}
                        onCardClick={onCardClick}
                    />
                    )
                )}
                </ul>
            </section>
        </main>
    );
  }
  
  export default Main;