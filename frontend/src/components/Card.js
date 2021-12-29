import React from 'react'
import { CurrentUserContext } from '../contexts/CurrentUserContext'

function Card({card, name, link, likes, onCardClick, onCardLike, onCardDelete}) {

    const currentUser = React.useContext(CurrentUserContext)
    const isOwn = card.owner._id === currentUser._id
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    const cardLikeButtonClassName = (
        `photos__like-button ${isLiked ? 'photos__like-button_liked' : ''}`
      );

    const cardDeleteButtonClassName = (
        `photos__delete ${isOwn ? 'photos__delete_visible' : 'photos__delete_hidden'}`
      ); 

    function handleClick() {
        onCardClick(card);
    }  

    function handleLikeClick() {
        onCardLike(card)
    }

    function handleDeleteClick () {
        onCardDelete(card)
    }

    return (
        <li className="photos__card">
            <img onClick={handleClick} src={link} className="photos__image" alt="Картинка" />
        <div className="photos__title-like"> 
            <h2 className="photos__title">{name}</h2>
            <div className="">
                <button className={cardLikeButtonClassName} onClick={handleLikeClick} type="button" aria-label="лайк"></button>
                <h2 className="photos__likes">{likes}</h2>
            </div>
        </div>
        <button className={cardDeleteButtonClassName} onClick={handleDeleteClick} type="button" aria-label="удалить"></button>
        </li>
    )
}
  
export default Card;