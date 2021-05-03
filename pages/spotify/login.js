import Head from 'next/head';
import { accessUrl } from '../api/spotifyapi'

const string = '</Spotify-Login>'

export default function lang() {
  return (
    <div className='body'> 
      <Head>
        <meta property="og:title" content="Glowify" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://glowstik.ml/" />
        <meta property="og:image" content="https://media.discordapp.net/attachments/771821245292609556/837489485797261322/Untitled_5.png?width=452&height=452" />
        <meta property="og:description" content="A login for a spotify stat tracker made by Me and Taptaplit#3992" />
      </Head>
      <section className='main'>
        <h1 className="title">{string}</h1>
        <div className='wrapper'>
          <a href={accessUrl}>
            <button>
              <img src="https://1000logos.net/wp-content/uploads/2021/04/Spotify-logo.png" />Login
            </button>
          </a>
          <a href="/">
            <button>Go Back</button>
          </a>
        </div>
      </section>
      <style jsx>{`
        .wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .title {
          color: #fff;
          text-align: center;
          z-index: 10000000;
          font-size: 50px;
        }
        @keyframes gradient {
          0% {background-position: 0%}
          100% {background-position: 100%}
        }
        img {
          height: 2.5rem;
          margin-left: -95px
        }

        section {
          position: absolute;
          top: 50%;
          left:50%;
          transform: translate(-50%, -50%);
        }

        button{
          display: flex;
          justify-content: center;
          align-items: center;
          border: 3px solid #fff;
          background-color: #fff;
          border-radius: 45px;
          width: 200px;
          height: 50px;
          font-size: 25px;
          padding-left: 17px;
          transition: 0.7s;
          color: #1ED761;
          margin: 10px;
        }
        button:hover{
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
        .body{
          display: grid;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100vh;
          position: absolute;
          background: linear-gradient(45deg,#1ed761, #1ed72a);
          background-size: 600% 100%;
          animation: gradient 3s linear infinite;
          animation-direction: alternate;
          border-bottom: 20px solid #141414;
        }
      `}</style>
    </div>
  )
}
