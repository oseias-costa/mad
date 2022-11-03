import React from "react";
import WhatsIcon from "./icons/WhatsIcon";
import './Whats.css'

const Whats = () => {
    return(
        <div className="Whats">
            <a href='https://wa.me/5554999009687' target='_blank' title="Link para o WhatsApp">
                <WhatsIcon className='Whats__Icon' />
            </a>
        </div>
    )
}

export default Whats