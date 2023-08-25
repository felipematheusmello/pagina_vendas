import "./message.css"

function Message ({ message, src, username, likes}) {
    return  (
        <>
        <div className="user-container">
            <img className="picture"src={src}/>
            <div className="message-container">
                <div className="name-container">
                    <div className="username">
                        {username}
                    </div>
                </div>
                <div className="messages">
                    { message }
                </div>
            </div>
        </div>
        <div >
            <div class="display-likes">
                <img class="like-icon" width='20' height='20' src="https://img.imageboss.me/atm/cdn/p/l.png"/>
                <img class="heart-icon" width='20' height='20' src="https://img.imageboss.me/atm/cdn/p/h.png"/>
                <span class="likes">
                {likes}
                </span>
            </div>
        </div>
        </>
    )
}

export default Message