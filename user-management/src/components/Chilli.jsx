import Base from './base'
const Chilli = () => {
    return (
        <div className="flex-container-chilli normal-inside-flex background-chilli">
            This is chilli
            {<Base name="chilli1" className="normal-inside-flex"> </Base>}
            {<Base name="chilli2" className="normal-inside-flex"> </Base>}
            {<Base name="chilli3" className="normal-inside-flex"> </Base>}
        </div>
    )
}

export default Chilli;
