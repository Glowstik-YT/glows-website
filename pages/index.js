import Head from 'next/head';
import Image from "next/image";
import styles from '../styles/Home.module.css';

const string = '</Glowstik>'
const username = 'Glowstikk#5127'

export default function Home() {
  return (
    <div>
      <section className='main'>
        <div className="wrapper">
          <a href="/">
            <div className="None">
              <h1 className="Logo anim-typewriter">{string}</h1>        
            </div> 
          </a>

          <div className='flex-box'>
            <a href="https://github.com/Glowstik-YT"><button className="git" >GitHub</button></a>
            <a href="https://bit.ly/Glowstik" className="button" ><button className="yt" >Youtube</button></a>
            <a href="http://discord.gg/z2zfZMwemk" className="button" ><button className="discord" >Discord</button></a>
          </div>
        </div>
      </section>
      
      {/* <a href='#aboutMe' className='down'><center><img className='down' src='https://images-ext-1.discordapp.net/external/ud1wEoAUruk9SOXl6RREiMt5eVd-SFV3Fse6OJ-p2ys/https/static.thenounproject.com/png/22174-200.png'/></center></a> */}
        <br />
        <br />
      <section id='aboutMe'>
      <center>
          <div className='abtContainer'>
              <h1 className="abtTitle">About Me</h1>
              <p>Hi! I'm glowstik but most people refer to me as Glow, I am a Student, Developer, and Youtuber. I am currently proficant in 3 languages and 3 frameworks. I am currently learning 2 languages including Java and C++. My youtube channel currently has 103 subscribers which to others is really not that much but to me it means a lot. I make videos on Discord Bot creation and am in the middle of creating a public bot right now called "Chill". If you want to know more about that you can always dm me on discord or shoot me an email. If you have business inquries be sure to email me and I will get back to you as soon as possible. Anyways thats all about me (mah lifes pretty boring). </p>
              <h3><strong>Contact Info</strong></h3>
              <p>Discord: <strong>{username}</strong></p>
              <p>Email: <strong>Glowstik728@gmail.com</strong></p>
          </div>
          <br />
          <br />
          <br />
        </center>
      </section>


      <style jsx>{`
      .flex-box {
        width: 75% !important;
        display: flex;
        justify-content: space-around;
        margin: 0 auto;
        flex-direction: row;
        flex-wrap: wrap;
      }

      .abtContainer {
        width: 75%;
        justify-content: center;
      }
        html, div, body, head {
          scroll-behavior: smooth;
        }
        ::-webkit-scrollbar {
          display: none;
        }
      .abtTitle{
        font-size: 35px;
      }
      button {
        margin-top: 65px;
      }
      .button{
        margin-left: 50px
      }
      .git{
        border: 3px solid #fff;
        background-color: #141414;
        border-radius: 45px;
        color: #fff;
        width: 200px;
        height: 50px;
        font-size: 20px;
        padding-left: 15px;
        transition: 0.7s;
      }
      .yt{
        border: 3px solid #e41234;
        background-color: #141414;
        border-radius: 45px;
        color: #fff;
        width: 200px;
        height: 50px;
        font-size: 20px;
        padding-left: 15px;
        transition: 0.7s;
      }
      .discord{
        border: 3px solid #5b84b1;
        background-color: #141414;
        border-radius: 45px;
        color: #fff;
        width: 200px;
        height: 50px;
        font-size: 20px;
        padding-left: 15px;
        transition: 0.7s;
      }
      .git:hover{
        box-shadow: 3px 3px 3px #2f2f2f;
        background-color: #fff;
        border: 3px solid #1f1f1;
        color: #1f1f1f;
        cursor: pointer; 
      }
      .yt:hover{
        box-shadow: 3px 3px 3px #2f2f2f;
        background-color: #fff;
        color: #e41234;
        cursor: pointer;
      }
      .discord:hover{
        box-shadow: 3px 3px 3px #2f2f2f;
        background-color: #fff;
        color: #5b84b1;
        cursor: pointer;
      }
      .Logo {
          margin-left: 20px;
          font-size: 100px;
          color: #fff;
          margin: 0 auto;
          border-right: 2px solid #fff;
          font-size: 180%;
          text-align: center;
          white-space: nowrap;
          overflow: hidden;
          transform: translateY(65%);   
        }

        .anim-typewriter{
          font-size: 50px;
          margin-top: 200px;
          JUSTIFY-content: center;  
          animation: typewriter 2s steps(20) 0.1s 1 normal both,
                    blinkTextCursor 0.6s steps(24) infinite normal;
          }
        @keyframes typewriter{
          from{width: 0em;}
          to{width: 6em;}
        }
        @keyframes blinkTextCursor{
          from{border-right-color: #fff;}
          to{border-right-color: transparent;}
        }
        
        .main {
          height: 100vh;
        }

        #aboutMe {
          height: 60vh;
        }

        .wrapper {
          width: 100%;
          height: 100%;
          position: absolute;
          background: linear-gradient(45deg,#eb1c63, #349cdc);
          background-size: 600% 100%;
          animation: gradient 5s linear infinite;
          animation-direction: alternate;
          border-bottom: 20px solid #141414
        }
        @keyframes gradient {
          0% {background-position: 0%}
          100% {background-position: 100%}
        }
        .title {
          color: #fff;
          text-align: center;
          z-index: 10000000;
        }
      `}</style>
    </div>
    
  )
}
