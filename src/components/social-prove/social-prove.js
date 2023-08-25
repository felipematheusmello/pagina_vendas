import './social-prove.css';
import Message from './message/message'
import { usersData } from './users-data';

function SocialProve () {
    return (
        <div className="chat-container">
            {usersData.map((user) => (
                <Message
                src={user.src}
                username={user.username}
                message={user.message}/>
            ))}
        </div>
    )
}

export default SocialProve