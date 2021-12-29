function PopupWithForm({name, title, buttonText, isOpen, onClose, onSubmit, children}) {
    return (
    <div className={`popup popup_${name} ${isOpen ? 'popup_active' : ''}`}>
        <div className="popup__container">
            <h2 className="popup__title">{title}</h2>
            <form className={`form form_${name}`} name={`form-${name}`} onSubmit={onSubmit}>
                <fieldset className="form__container">
                    {children}
                    <button type="submit" className="popup__save popup__save_image " aria-label="сохранить" >{buttonText}</button>
                </fieldset>
            </form>
            <button onClick={onClose} className="popup__close" type="button" aria-label="закрыть"></button>
        </div>
    </div>
    )
  }

  export default PopupWithForm