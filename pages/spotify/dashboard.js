import React, {useState, useEffect} from 'react'
import { getTokenFromResponse } from '../api/spotifyapi';
import SpotifyWebApi from "spotify-web-api-js";

const s = new SpotifyWebApi();
export default function dashboard() {
    const [token, setToken] = useState('');
    const [userInfo, setUserInfo] = useState({ topArtists: [], currentTrack: []}, name: "" });
    useEffect(() => {
        const hash = getTokenFromResponse();
        window.location.hash = "";
        let _token = hash.access_token;
        setToken(_token)
    }, [])

    useEffect(() => {
        if (token && name == "") {
            s.setAccessToken(token);

            s.getMyTopArtists().then((response) =>
                setUserInfo({ ...userInfo, topArtists: response.items})
            );

            s.getMyCurrentPlayingTrack().then((r) =>
                setUserInfo({ ...userInfo, currentTrack: r.items})
            );
            
            s.getMe().then((r) => {
                setUserInfo({ ...userInfo, name: r.display_name})
            });
        }
    }, [token])

    const check = (arr, name, length) => {
        var i;
        for (i = 0; i < length; i++) {
            if (arr[i]['name'] === name && i < 5) {
                return true;
            }
        }
        return false;
    }

    console.log(userInfo)

    return (
        <div className='body'>
            <div className="artist-section">
                {userInfo.topArtists.map((arr) => (
                        <center>
                            <p>{console.log(userInfo.currentTrack)}</p>
                            <div>
                                {check(userInfo.topArtists, arr.name, userInfo.topArtists.length) && (
                                    <div className='uno-artist'>
                                        <img className='artistImage' src={arr.images[2].url}/>
                                        <p>Artist: <strong>{arr.name}</strong> <strong>|</strong> Followers: <strong>{arr.followers.total}</strong></p>
                                    </div>
                                )}
                            </div>
                        </center>
                ))}
            </div>
            <style jsx>{`

            .uno-artist {
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
            .body{
                background-color: #1ED761;
                height: 100vh;
                position: absolute;
                top: 0;
                width: 100%;
            }
            .uno-artist{
                display: flex;
                width: 100%;
                flex-wrap: wrap;
                flex-direction: row;
            }
            .artist-section{
                background-color: #fff;
                border-radius: 45px;
                width: 600px;
                position: absolute;
                top: 50%;
                left:50%;
                transform: translate(-50%, -50%);
            }
            `}</style>
        </div>
    )
}