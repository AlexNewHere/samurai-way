import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogsItem';
import {Message} from './Message/Messages';
import a from '../Profile/Myposts/Myposts.module.css';
import {useAppDispatch, useAppSelector} from 'store/hooks';
import {addPostMessage, FormDialogsType} from 'store/features';
import {useForm} from 'react-hook-form';

export const Dialogs = () => {

    const {dialogs, messages} = useAppSelector(state => state.dialogs);
    const dispatch = useAppDispatch();
    const {register, handleSubmit, reset, formState: {errors, isValid}} = useForm<FormDialogsType>();

    const dialogsElements = dialogs.map(d =>
        <DialogItem name={d.name} key={d.id}/>)

    const messagesElements = messages.map(m =>
        <Message message={m.message} key={m.id}/>)

    const onSubmit = (data: FormDialogsType) => {
        dispatch(addPostMessage(data))
        reset()
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialog_items}>
                {dialogsElements}
            </div>
            <div>
                {messagesElements}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <textarea {...register('text',
                        {required: true,
                        maxLength: 50})}
                              placeholder={'Введи текст'}/>
                    <div>{errors.text && <p>Слишком длинное сообщение!!!</p>}</div>
                    <input type="submit" name={'Отправить'} disabled={isValid}/>
                </form>
            </div>
        </div>
    )
}

