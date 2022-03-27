import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'

const SIZE = 30;

const Skill = (props) =>{
    return (
        <div>
        <Tippy content={props.desc}>
        <object className="skillicon" type="image/svg+xml" data={props.logosrc} width={SIZE} height={SIZE} alt="Fail"></object>
        </Tippy>
        
        </div>
        
    )
}

export default Skill