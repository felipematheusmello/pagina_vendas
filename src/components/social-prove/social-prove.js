import './social-prove.css';
import Message from './message/message'
import { usersData } from './users-data';

function SocialProve () {
    return (
        <div className='container-messages'>
            <div className="chat-container">
                {usersData.map((user) => (
                    <>
                        <Message
                        src={user.src}
                        username={user.username}
                        message={user.message}
                        likes={user.likes}
                        />
                        <tbody>
                        {user?.replies?.length &&
                        (
                            <div className='response'>
                            {user.replies.map(userReplier => {
                                return (
                                    <Message
                                    key={userReplier.message}
                                    src={userReplier.src}
                                    username={userReplier.username}
                                    message={userReplier.message}
                                    likes={userReplier.likes}
                                    />
                                    )})}
                            </div>
                        )}
                        </tbody>
                    </>
                ))}
            </div>
        </div>
    )
}

export default SocialProve