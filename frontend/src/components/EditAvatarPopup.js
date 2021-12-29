import React from 'react'
import PopupWithForm from './PopupWithForm'

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {

    const avatarRef = React.useRef('')
    console.log(avatarRef)
    function handleSubmit(e) {
      e.preventDefault()
      onUpdateAvatar({
        avatar: avatarRef.current.value
      })
      avatarRef.current.value = ''
    }

    return (
        <PopupWithForm name={'avatar'} title={'Обновить аватар'} buttonText={'Сохранить'} isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
            <input type="url" className="form__input form__input_title" placeholder="Ссылка на аватар" ref={avatarRef} defaultValue="" required="" />
                <span className="form__input-error"></span>
        </ PopupWithForm >
    )
}

export default EditAvatarPopup
