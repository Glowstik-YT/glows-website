import querystring from 'querystring';

// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#
export const authEndpoint = "https://accounts.spotify.com/authorize";
// Replace with your app's client ID, redirect URI and desired scopes
const clientId = "1fe3b63297394446a75e0ce9d6fda392";
const redirectUri = "http://localhost:3001/spotify/dashboard/";
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromResponse = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

// const {
//   SPOTIFY_CLIENT_ID: client_id,
//   SPOTIFY_CLIENT_SECRET: client_secret,
//   SPOTIFY_REFRESH_TOKEN: refresh_token,
// } = process.env;

// const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
// const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
// const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

// const getAccessToken = async () => {
//   const response = await fetch(TOKEN_ENDPOINT, {
//     method: 'POST',
//     headers: {
//       Authorization: `Basic ${basic}`,
//       'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     body: querystring.stringify({
//       grant_type: 'refresh_token',
//       refresh_token,
//     }),
//   });

//   return response.json();
// };

// export const getNowPlaying = async () => {
//   const { access_token } = await getAccessToken();

//   return fetch(NOW_PLAYING_ENDPOINT, {
//     headers: {
//       Authorization: `Bearer ${access_token}`,
//     },
//   });
// };

// export default async (_, res) => {
//   const response = await getNowPlaying();

//   if (response.status === 204 || response.status > 400) {
//     return res.status(200).json({ isPlaying: false });
//   }

//   const song = await response.json();
//   const isPlaying = song.is_playing;
//   const title = song.item.name;
//   const artist = song.item.artists.map((_artist) => _artist.name).join(', ');
//   const album = song.item.album.name;
//   const albumImageUrl = song.item.album.images[0].url;
//   const songUrl = song.item.external_urls.spotify;

//   return res.status(200).json({
//     album,
//     albumImageUrl,
//     artist,
//     isPlaying,
//     songUrl,
//     title,
//   });
// };