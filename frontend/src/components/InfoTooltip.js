export default function InfoTooltip({ isOpen, onClose, title, imgPath }) {
    return (
      <div className={`popup ${isOpen ? 'popup_active' : ''}`}>
        <div className="popup__container">
  
          <div className='popup__wrapper'>
            <img src={imgPath} alt={imgPath} className='popup__tooltip' />
  
            <h2 className="popup__title">{title}</h2>
          </div>
  
          <button
            type="button"
            className="popup__close"
            onClick={onClose}
          >
          </button>
        </div>  
      </div>
    )
  }