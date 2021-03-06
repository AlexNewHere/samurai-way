import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem, Message} from 'components/Dialog';
import {useAppDispatch, useAppSelector} from 'store/hooks';
import {addPostMessage, FormDialogsType} from 'store/features';
import {useForm} from 'react-hook-form';

export const Dialogs = () => {

    const messages = useAppSelector(state => state.dialogs.messages);
    const dialogs = useAppSelector(state => state.dialogs.dialogs);
    const dispatch = useAppDispatch();
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors, isValid}
    } = useForm<FormDialogsType>();

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
                        {
                            required: true,
                            maxLength: 50
                        })}
                              placeholder={'Введи текст'}/>
                    <div>{errors.text && <p>Слишком длинное сообщение!!!</p>}</div>
                    <input type="submit" name={'Отправить'} disabled={isValid}/>
                </form>
            </div>
        </div>
    )
}

