import Head from 'next/head';
import Image from "next/image";
import styles from '../styles/Home.module.css';

const string = '</Glowstik>'
const username = 'Glowstikk#5127'

export default function Home() {
  return (
    <div>
      <Head>
        <meta property="og:title" content="Glowstik" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://glowstik.ml/" />
        <meta property="og:image" content="https://media.discordapp.net/attachments/771821245292609556/837489485797261322/Untitled_5.png?width=452&height=452" />
        <meta property="og:description" content="Youtuber, Student, Developer" />
      </Head>
      <section className='main'>
        <div className="wrapper">
            <div className="None">
              <h1 className="Logo anim-typewriter">{string}</h1>        
            </div> 
          <div className='flex-box'>
            <a href="https://github.com/Glowstik-YT"><button className="git" id='button'>GitHub</button></a>
            <a href="https://youtube.com/Glowstik" className="button" ><button className="yt"  id='button'>Youtube</button></a>
            <a href="http://discord.gg/z2zfZMwemk" className="button" ><button className="discord"  id='button'>Discord</button></a>
            
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
              <p>Hi! I'm glowstik but most people refer to me as Glow, I am a Student, Developer, and Youtuber. I am currently proficant in 3 languages and 3 frameworks. Along with that I am learning 2 languages including Java and C++. My youtube channel currently has 300ish subscribers which to others is really not that much but to me it means a lot. I make videos on Discord Bot creation and am in the middle of creating a public bot right now called "Project Glow". If you want to know more about that you can always dm me on discord or shoot me an email. If you have business inquries be sure to email me and I will get back to you as soon as possible. Anyways thats all about me (mah lifes pretty boring). </p>
              <h3><strong>Contact Info</strong></h3>
              <p>Discord: <strong>{username}</strong></p>
          </div>
          <br />
          <div className='projectContainer'>
              <h1 className='abtTitle'>Projects</h1>
              <a href="/glow"><button className="lang" >.glow</button></a>
              <a href="/spotify/login" className="button" ><button className="glowify"  id='button'>Glowify</button></a>
              <a href="/search" className="button" ><button className="glowsearch"  id='button'>Glow Search</button></a>
          </div>
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
      #button {
        margin-top: 65px;
      }

      button {
        margin: 2px;
      }
      .git{
        border: 3px solid #fff;
        background-color: #fff;
        border-radius: 45px;
        color: #141414;
        width: 200px;
        height: 50px;
        font-size: 20px;
        padding-left: 17px;
        transition: 0.7s;
      }
      .yt{
        border: 3px solid #fff;
        background-color: #fff;
        border-radius: 45px;
        color: #e41234;
        width: 200px;
        height: 50px;
        font-size: 20px;
        padding-left: 15px;
        transition: 0.7s;
      }
      .discord{
        border: 3px solid #fff;
        background-color: #fff;
        border-radius: 45px;
        color: #5b84b1;
        width: 200px;
        height: 50px;
        font-size: 20px;
        padding-left: 15px;
        transition: 0.7s;
      }
      .glowify{
        border: 3px solid #141414;
        background-color: #141414;
        border-radius: 45px;
        color: #1ED761;
        width: 200px;
        height: 50px;
        font-size: 20px;
        padding-left: 15px;
        transition: 0.7s;
      }
      .glowify:hover{
        box-shadow:
          0 2.8px 2.2px rgba(0, 0, 0, 0.034),
          0 6.7px 5.3px rgba(0, 0, 0, 0.048),
          0 12.5px 10px rgba(0, 0, 0, 0.06),
          0 22.3px 17.9px rgba(0, 0, 0, 0.072),
          0 41.8px 33.4px rgba(0, 0, 0, 0.086),
          0 100px 80px rgba(0, 0, 0, 0.12)
        ;
        background-color: #141414;
        color: #1ED761;
        cursor: pointer;
      }
      .glowsearch{
        border: 3px solid #141414;
        background-color: #141414;
        border-radius: 45px;
        color: #c471ed;
        width: 200px;
        height: 50px;
        font-size: 20px;
        padding-left: 15px;
        transition: 0.7s;
      }
      .glowsearch:hover{
        box-shadow:
          0 2.8px 2.2px rgba(0, 0, 0, 0.034),
          0 6.7px 5.3px rgba(0, 0, 0, 0.048),
          0 12.5px 10px rgba(0, 0, 0, 0.06),
          0 22.3px 17.9px rgba(0, 0, 0, 0.072),
          0 41.8px 33.4px rgba(0, 0, 0, 0.086),
          0 100px 80px rgba(0, 0, 0, 0.12);
        background-color: #141414;
        color: #c471ed;
        cursor: pointer;
      }
      .lang{
        border: 3px solid #141414;
        background-color: #141414;
        border-radius: 45px;
        color: #7e0eed;
        width: 200px;
        height: 50px;
        font-size: 20px;
        padding-left: 15px;
        transition: 0.7s;
      }
      .chill{
        border: 3px solid #141414;
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
        box-shadow:
          0 2.8px 2.2px rgba(0, 0, 0, 0.034),
          0 6.7px 5.3px rgba(0, 0, 0, 0.048),
          0 12.5px 10px rgba(0, 0, 0, 0.06),
          0 22.3px 17.9px rgba(0, 0, 0, 0.072),
          0 41.8px 33.4px rgba(0, 0, 0, 0.086),
          0 100px 80px rgba(0, 0, 0, 0.12)
        ;
        background-color: #fff;
        border: 3px solid #1f1f1;
        color: #1f1f1f;
        cursor: pointer; 
      }
      .lang:hover{
        box-shadow:
          0 2.8px 2.2px rgba(0, 0, 0, 0.034),
          0 6.7px 5.3px rgba(0, 0, 0, 0.048),
          0 12.5px 10px rgba(0, 0, 0, 0.06),
          0 22.3px 17.9px rgba(0, 0, 0, 0.072),
          0 41.8px 33.4px rgba(0, 0, 0, 0.086),
          0 100px 80px rgba(0, 0, 0, 0.12)
        ;
        cursor: pointer; 
      }
      .chill:hover{
        box-shadow:
          0 2.8px 2.2px rgba(0, 0, 0, 0.034),
          0 6.7px 5.3px rgba(0, 0, 0, 0.048),
          0 12.5px 10px rgba(0, 0, 0, 0.06),
          0 22.3px 17.9px rgba(0, 0, 0, 0.072),
          0 41.8px 33.4px rgba(0, 0, 0, 0.086),
          0 100px 80px rgba(0, 0, 0, 0.12)
        ;
        cursor: pointer; 
      }
      .yt:hover{
        box-shadow:
          0 2.8px 2.2px rgba(0, 0, 0, 0.034),
          0 6.7px 5.3px rgba(0, 0, 0, 0.048),
          0 12.5px 10px rgba(0, 0, 0, 0.06),
          0 22.3px 17.9px rgba(0, 0, 0, 0.072),
          0 41.8px 33.4px rgba(0, 0, 0, 0.086),
          0 100px 80px rgba(0, 0, 0, 0.12)
        ;
        background-color: #fff;
        color: #e41234;
        cursor: pointer;
      }
      .discord:hover{
        box-shadow:
        0 2.8px 2.2px rgba(0, 0, 0, 0.034),
        0 6.7px 5.3px rgba(0, 0, 0, 0.048),
        0 12.5px 10px rgba(0, 0, 0, 0.06),
        0 22.3px 17.9px rgba(0, 0, 0, 0.072),
        0 41.8px 33.4px rgba(0, 0, 0, 0.086),
        0 100px 80px rgba(0, 0, 0, 0.12)
      ;
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
          height: 70vh;
        }

        .wrapper {
          width: 100%;
          height: 100%;
          position: absolute;
          background: linear-gradient(45deg,#00e004, #17aaff);
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
