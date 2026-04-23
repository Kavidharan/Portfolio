import './home.css'
import keyboard from './images/keyboard.png'
import cabinet from './images/cabinet.png'
import reactlogo from './images/react.png'

const home = () => {
  return (
    <div className='all'>
      <div className='amimason'>
        <div className='computer'>
          <img src={cabinet} className='cabinet'/>
          <img src={keyboard} className='keyboard'/>
        </div>
        <img src={reactlogo} className='reactlogo' />
      </div>
      <div className='profile'>
        <h1>KAVIDHARAN S</h1>
        <p>I’m KAVIDHARAN S, a full-stack web developer specializing in REACT. I build modern, responsive, and scalable web applications using technologies like REACT, NODE.JS, and related tools. I enjoy turning ideas into functional digital products and focus on writing clean, efficient code. I’m always looking to improve my skills and stay updated with the latest trends in web development.</p>
      </div>
    </div>
  );
}
export default home;