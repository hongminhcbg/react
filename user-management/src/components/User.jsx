import '../css/user.css'
import '../Flex.css'
const User = (props) => {
    return (
        <div className="user-background flex-container">
        <img 
            src= {props.Src} 
            alt="avatar" 
            className="user-avatar user-base" 
            height="200px" 
            width="200px"
        />
        <p> Name: {props.FullName} </p>
        <button onClick={props.HandlerOnlick}> Edit </button>
    </div>
)
}

export default User;
