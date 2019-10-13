import React,{Fragment,useState} from 'react'
import Input from './shared/input'

export default function Register() {
    const [register, setregister] = useState({name:'',email:'',password:'',mobile:''})
    const updateDetails = (name,value) =>{
        setregister ({...register,[name]:value})
    }
    return (
        <Fragment>
        <br/>
            <Input type="text" name="name" onChange = {(value)=> updateDetails('name',value)} value={ register.name} placeholder="name"/><br/><br/>
            <Input type="text" name="email" onChange = {(value)=> updateDetails('email',value)} value={register.email} placeholder="email"/><br/><br/>
            <Input type="text" name="password" onChange = {(value) => updateDetails('password',value)} value={register.password} placeholder="password"/><br/><br/>
            <Input type="number" name="mobile" onChange = {(value) => updateDetails('mobile',value)}  value={register.mobile} placeholder="mobile number"/><br/><br/>
            <Input type="submit" name="register" value="Register"/>
        </Fragment>
    )
}