import React,{Fragment} from 'react'

export default function Input(props) {
   const {type,value,placeholder,name,onChange} = props
    return (
        <Fragment>
           <input type={type} name={name} value = {value}
           onChange={onChange && ((evt) => onChange(evt.target.value))}
            placeholder = {placeholder}
            style={{}}/>
        </Fragment>
    )
}
