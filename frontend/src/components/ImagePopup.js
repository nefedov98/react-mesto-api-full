function ImagePopup({card, onClose}) {
  console.log(card)
    return (
  <div className={`popup popup_full ${card ? 'popup_active' : ''}`} >
      <figure className="popup__full-image-caption">
          <img className="popup__full-image" src={card ? card.link : '#'} alt={card && card.name} />
          <p className="popup__full-caption">{card ? card.name : ' '}</p>
          <button onClick={onClose} className="popup__close popup__close_full" type="button" aria-label="закрыть"></button> 
      </figure>       
  </div>
    )
  }

export default ImagePopup