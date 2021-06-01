import React, {useState, useEffect} from 'react'
import { getTokenFromResponse } from '../api/spotifyapi';
import SpotifyWebApi from "spotify-web-api-js";
import Head from 'next/head';
import Router from 'next/router'
import axios from 'axios';
import { isMobile } from 'react-device-detect';


const s = new SpotifyWebApi();
export default function dashboard() {
    const [userInfo, setUserInfo] = useState({ topArtists: [], topSongs: [], userData: {} });
    useEffect(() => {
        const hash = getTokenFromResponse();
        if (hash['']) {
            Router.push('/spotify/login')         
        }
        window.location.hash = "";
        let _token = hash.access_token;
        s.setAccessToken(_token);
    }, [])

    useEffect(() => {
        var topa;
        var ud;
        var tops;
        s.getMyTopArtists().then((response) => {
            topa = response.items
            s.getMe().then((res) => {
                ud = res
                s.getMyTopTracks().then((rea) => {
                    tops = rea.items;
                    console.log(tops);
                    setUserInfo({ ...userInfo, userData: ud, topArtists: topa, topSongs: tops })
                });
            });
        });

        

        


    }, [s])
    
    const check = (arr, name, length) => {
        var i;
        for (i = 0; i < length; i++) {
            if (arr[i]['name'] === name && i < 5) {
                return true;
            }
        }
        return false;
    }
    const top6Songs = (arr, id, length) => {
        var i;
        for (i = 0; i < length; i++) {
            if (arr[i]['id'] === id && i < 5) {
                return true;
            }
        }
        return false;
    }


    return (
        isMobile ? ( <center><h1>Mobile currently not supported.</h1></center> ) :
        <div className='body'>
            <Head>
                <meta property="og:title" content="Glowify" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://glowstik.ml/" />
                <meta property="og:image" content="https://media.discordapp.net/attachments/771821245292609556/837489485797261322/Untitled_5.png?width=452&height=452" />
                <meta property="og:description" content="A login for a spotify stat tracker made by Me and Taptaplit#3992" />
            </Head>
            <br />
            {userInfo.userData && userInfo.topArtists && userInfo.topSongs ? (
                <div className="box">
                    <div className='user-section'>
                        <img className="profilepic" src={userInfo.userData.images && userInfo.userData.images[0].url} />
                        <p><strong>{userInfo.userData.display_name} - {userInfo.userData.followers && userInfo.userData.followers.total}</strong></p>
                        <a href={userInfo.userData.external_urls && userInfo.userData.external_urls.spotify}> <button className='profileBtn'>Profile Link</button></a>
                        <a href="/"><button className="profileBtn" id='button'>Go Back</button></a>
                    </div>
                    <div className="artist-section">

                        {userInfo.topArtists.map((arr) => (
                                <center key={arr.name}>
                                    <div key={arr.followers.total}>
                                        {check(userInfo.topArtists, arr.name, userInfo.topArtists.length) && (
                                            <div key={arr.name} className='uno-artist'>
                                                <img className='artistImage' src={arr.images[2].url}/>
                                                <p>Artist: <strong>{arr.name}</strong> <strong>|</strong> Followers: <strong>{arr.followers.total}</strong></p>
                                            </div>
                                        )}
                                    </div>
                                </center>
                        ))}
                    </div>
                    <div className="song-section">

                        {userInfo.topSongs.map((arr) => (
                                <center>
                                    <div>
                                        
                                        {top6Songs(userInfo.topSongs, arr.id, userInfo.topSongs.length) && (
                                            <div key={arr.name} className='uno-song'>
                                                <img src={arr.album.images[2].url} className='songImage'/>
                                                <p> - <strong>{arr.name}</strong></p>
                                            </div>
                                        )}
                                    </div>
                                </center>
                        ))}
                    </div>

                </div>
            ): ( <div></div> ) }
            <style jsx>{`

            .box {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: space-around;
            }
            .uno-artist {
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 10px;
            }
            .uno-song{
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 10px;
            }
            .artistImage {
                border-radius: 100%;
                width: 5rem;
                height: 5rem;
                padding: 10px;
            }
            .songImage{
                border-radius: 100%;
                width: 5rem;
                height: 5rem;
                padding: 10px;
            }
            .body{
                background-color: #1ED761;
                min-height: 100vh;
                width: 100%;
            }
            .uno-artist{
                display: flex;
                width: 100%;
                flex-wrap: wrap;
                flex-direction: row;
            }
            .download{
                border: 3px solid #fff;
                background-color: #fff;
                left: 50%;
                border-radius: 45px;
                color: #7e0eed;
                width: 200px;
                height: 50px;
                font-size: 20px;
                padding-left: 15px;
                transition: 0.7s;
                z-index: 10000;
              }
              .download:hover{
                box-shadow:
                0 2.8px 2.2px rgba(0, 0, 0, 0.034),
                0 6.7px 5.3px rgba(0, 0, 0, 0.048),
                0 12.5px 10px rgba(0, 0, 0, 0.06),
                0 22.3px 17.9px rgba(0, 0, 0, 0.072),
                0 41.8px 33.4px rgba(0, 0, 0, 0.086),
                0 100px 80px rgba(0, 0, 0, 0.12);
                background-color: #fff;
                color: #7e0eed;
                cursor: pointer;
              }
            .artist-section{
                background-color: #fff;
                border-radius: 45px;
                width: 600px;
                position: absolute;
                z-index: 0;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
            .song-section{
                background-color: #fff;
                border-radius: 45px;
                width: wrap;
                position: absolute;
                z-index: 0;
                bottom: 10px;
                display: flex;
            }
            .user-section{
                background-color: #fff;
                left: 50%;
                transform: translate(-50%, -50%);
                border-radius: 90px;
                width: wrap;
                height: wrap;
                padding: 10px;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: row;
                flex-wrap: wrap;
                margin: auto;
                position: fixed;
                top: 6vh;
                z-index: 10;
            }
            .profilepic{
                border-radius: 100%;
                width: 5rem;
                height: 5rem;
                padding: 10px;
            }
            .profileBtn{
                display: flex;
                justify-content: center;
                align-items: center;
                border: 3px solid #1ED761;
                background-color: #1ED761;
                border-radius: 45px;
                width: 200px;
                height: 50px;
                font-size: 25px;
                padding-left: 17px;
                transition: 0.7s;
                color: #fff;
                margin: 10px;
            }
            .profileBtn:hover{
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
            `}</style>
        </div>
    )
}