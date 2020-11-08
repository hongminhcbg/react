import '../css/user.css'
import '../Flex.css'
const User = (props) => {
    return (
        <div>
            <div className="user-container">
                <img 
                    src= {props.Src} 
                    alt="avatar" 
                    className="user-avatar" 
                />
                <p> Name: {props.FullName} </p>
            </div>
            <div>
                <button className="user-button" onClick={props.HandlerOnlick}> Edit profile </button>
            </div>
        </div>
)
}

export default User;
