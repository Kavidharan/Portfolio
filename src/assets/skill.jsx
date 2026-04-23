import React from 'react'
import './skill.css'
import html from './images/html.png'
import css from './images/css.png'
import javascipt from './images/javascript.png'
import react from './images/react.png'
import nodejs from './images/node js.png'
import mysql from './images/my sql.png'

function skill() {
  return (
    <div className='skill'>
        <div className='data'>
            <div className='head'>
                <h1>HTML</h1>
                <img src={html} />
            </div>
            <div className='body'>
                <p>HTML (HyperText Markup Language) is the standard markup language used to create and structure content on the World Wide Web</p>
            </div>
        </div>
        <div className='data'>
            <div className='head'>
                <h1>CSS</h1>
                <img src={css}/>
            </div>
            <div className="body">
                <p>Cascading Style Sheets (CSS) is a style sheet language used for specifying the presentation and styling of documents written in a markup language, primarily HTML and XML</p>
            </div>
        </div>
        <div className='data'>
            <div className="head">
                <h1>JAVA SCRIPT</h1>
                <img src={javascipt}/>
            </div>
            <div className="body">
                <p>JavaScript is a high-level, interpreted, multi-paradigm programming language that serves as one of the three core technologies of the World Wide Web, alongside HTML and CSS.</p>
            </div>
        </div>
        <div className='data'>
            <div className="head">
                <h1>REACT</h1>
                <img src={react}/>
            </div>
            <div className="body">
                <p>Open-source front-end JavaScript library designed for building user interfaces.</p>
            </div>
        </div>
        <div className='data'>
            <div className="head">
                <h1>NODE JS</h1>
                <img src={nodejs}/>
            </div>
            <div className="body">
                <p>Node.js is a free, open-source, cross-platform JavaScript runtime environment that allows developers to execute JavaScript code outside of a web browser</p>
            </div>
        </div>
        <div className='data'>
            <div className="head">
                <h1>MY SQL</h1>
                <img src={mysql}/>
            </div>
            <div className="body">
                <p>MySQL is an open-source Relational Database Management System (RDBMS) that uses Structured Query Language (SQL) to store, manage, and manipulate data.</p>
            </div>
        </div>
    </div>
  )
}

export default skill