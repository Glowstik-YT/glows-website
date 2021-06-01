export default function Custom404() {
    const string = '<404>'
    return (
        
        <div>
            <div className="wrapper">
                <div>
                    <h1 className="title">{string}</h1>
                    <p className="oops"><strong>Oops! Something went wrong...</strong></p>
                    <a href="/">
                        <button className="download" id='button'>Go Back</button>
                    </a>
                </div>
                <div className="space"></div>
                <a href="/"><img className='glowImg' src='https://media.discordapp.net/attachments/771821245292609556/837489485797261322/Untitled_5.png?width=452&height=452'/></a>
            </div>
            <style jsx>{`
                .wrapper {
                    width: 100%;
                    height: 100vh;
                    position: fixed;
                    background: linear-gradient(45deg,#f54257, #6a00ff);
                    background-size: 600% 100%;
                    animation: gradient 5s linear infinite;
                    animation-direction: alternate;
                    border-bottom: 20px solid #141414;
                    display: flex;
                    justify-content:center;
                    align-items: center;
                    text-align: center;
                    flex-wrap: wrap;
                    flex-direction: row;
                    margin: 0 auto;
                }
                @keyframes gradient {
                    0% {background-position: 0%}
                    100% {background-position: 100%}
                }

                .space {
                    margin: 5em;
                }
                .glowImg{
                    width: 40em;
                }
                .title{
                    font-size: 130px;
                    margin-bottom: -10px;
                    color: #fff;
                }
                .download{
                    border: 3px solid #fff;
                    background-color: #fff;
                    border-radius: 45px;
                    color: #f54257;
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
                    0 100px 80px rgba(0, 0, 0, 0.12);
                    background-color: #fff;
                    color: #f54257;
                    cursor: pointer;
                }
                .oops {
                    font-size: 20px;
                    color: #fff;
                }
            `}</style>
        </div>
    )
}