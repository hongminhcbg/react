import '../css/user.css'
import '../Flex.css'
const User = (props) => {
    return (
        <div className="user-background flex-container">
        <img src="https://i.pinimg.com/originals/c8/f7/a8/c8f7a86a5a668cac7a2846073ce4baf3.jpg" alt="avatar" className="user-avatar user-base" height="200px" width="200px"/>
        <p> Name: {props.FullName} </p>
        <button onClick={props.HandlerOnlick}> Edit </button>
    </div>
)
}

export default User;
