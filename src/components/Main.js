import React from 'react'
import mail from '../images/email-button.png'


export default function Main() {
    return (
        <div className={'main'}>
            <h1>Maxim Solovev</h1>
            <p className={'spec'}>Developer beginner</p>
            <a href="mailto:msol294@gmail.com" target='_blank' rel="noreferrer"><img className={'mail-button'}
                                                                                     src={mail} alt="mail button"/></a>
            <h3>Interests</h3>
            <p className={'info'}>I am a developer beginner with a particular interest in making things simple and automating daily
                tasks. I keep my motivation high with learning something new every day and I'm always looking for new opportunities to learn.
            </p>
            <h3>About</h3>
            <p className={'info'}>Food expert. Guitar player. Gym fanatic. Coffee maniac.
            </p>
        </div>
    )
}