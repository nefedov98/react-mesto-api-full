import React from 'react'
import PopupWithForm from './PopupWithForm'
import { CurrentUserContext } from '../contexts/CurrentUserContext'

function EditProfilePopup({isOpen, onClose, onUpdateUser}) {

    const [name, setName] = React.useState('')
    const [description, setDescription] = React.useState('')
    const currentUser = React.useContext(CurrentUserContext)

    function handleNameChange(e) {
        setName(e.target.value)
    }
      
    function handleDescriptionChange(e) {
        setDescription(e.target.value)
    }

    React.useEffect(() => {
        setName(currentUser.name || '');
        setDescription(currentUser.about || '');
    }, [currentUser, isOpen]); 

    function handleSubmit(e) {
        e.preventDefault()
        onUpdateUser({
          name: name,
          about: description,
        })
    }

    return (
        <PopupWithForm name='edit' title='Редактировать профиль' buttonText='Подтвердить' isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
            <input value={name} onChange={handleNameChange} type="text" className="form__input form__input_title" placeholder="Имя" minLength="2" maxLength="30" required="" />
                <span className="form__input-error"></span>
            <input value={description} onChange={handleDescriptionChange} type="text" className="form__input form__input_link" placeholder="О себе" name="image-place" id ='link' required="" />
                <span className="form__input-error"></span>
        </ PopupWithForm >
    )
}

export default EditProfilePopup

