import Head from 'next/head';
import Image from "next/image";
import styles from '../styles/Home.module.css';

export default function lang() {
  return (
    <div>
      <section className='main'>
        <div className='wrapper'>
          <center>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <h1 className='title'>Download Glow</h1>
            <a href="https://cdn.discordapp.com/attachments/830088075010637835/830516378851213332/Glow_Setup.exe">
              <button className="download" id='button'>Glow v1.0</button>
            </a>
            <a href="https://github.com/Glowstik-YT/.glow/blob/main/README.md">
              <button className="download" id='button'>Docs</button>
            </a>
            <a href="/">
              <button className="download" id='button'>Go Back</button>
            </a>
          </center>
        </div>
      </section>
        <br />
        <br />
      <section id='aboutMe'>
      <center>
          <br />
        </center>
      </section>


      <style jsx>{`
        .wrapper {
          width: 100%;
          height: 100%;
          position: absolute;
          background: linear-gradient(45deg,#17aaff, #7e0eed);
          background-size: 600% 100%;
          animation: gradient 5s linear infinite;
          animation-direction: alternate;
          border-bottom: 20px solid #141414
        }
        @keyframes gradient {
          0% {background-position: 0%}
          100% {background-position: 100%}
        }
        #button{
          margin: 10px;
        }
        .title {
          color: #fff;
          text-align: center;
          z-index: 10000000;
          font-size: 50px;
        }
        .download{
          border: 3px solid #fff;
          background-color: #fff;
          border-radius: 45px;
          color: #7e0eed;
          width: 200px;
          height: 50px;
          font-size: 20px;
          padding-left: 15px;
          transition: 0.7s;
        }
        .download:hover{
          box-shadow:
          0 2.8px 2.2px rgba(0, 0, 0, 0.034),
          0 6.7px 5.3px rgba(0, 0, 0, 0.048),
          0 12.5px 10px rgba(0, 0, 0, 0.06),
          0 22.3px 17.9px rgba(0, 0, 0, 0.072),
          0 41.8px 33.4px rgba(0, 0, 0, 0.086),
          0 100px 80px rgba(0, 0, 0, 0.12)
        ;
          background-color: #fff;
          color: #7e0eed  ;
          cursor: pointer;
        }
      `}</style>
    </div>
    
  )
}
