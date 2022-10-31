import React from "react"

const Left = ({className, onClick}) => {
    return (
        <svg width="58" height="58" className={className} onClick={onClick} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M15.545 4.855a.6.6 0 0 1 0 .85L8.77 12.48l6.776 6.775a.6.6 0 1 1-.85.85l-7.2-7.2a.6.6 0 0 1 0-.85l7.2-7.2a.6.6 0 0 1 .85 0Z" clip-rule="evenodd"></path>
        </svg>
    )
}

export default Left