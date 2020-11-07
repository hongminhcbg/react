import Base from './base';
import '../Flex.css'

const Apple = () => {
    return (
        <div className="flex-container normal-inside-flex background-apple">
            This is apple
            {<Base name="apple1" className="normal-inside-flex"> </Base>}
            {<Base name="apple2" className="normal-inside-flex"> </Base>}
            {<Base name="apple3" className="normal-inside-flex"> </Base>}
        </div>
    )
}

export default Apple;
