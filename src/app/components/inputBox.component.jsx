import React from 'react'

export default function InputBox(props) {
    const {onChange,placeholder,type} = props;
    return (
        <div className="input_box">
            <input type={type} onChange={onChange} placeholder={placeholder}/>
        </div>
    )
}
