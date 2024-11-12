import React, { useEffect, useState } from 'react'
import img from '../../assets/images/unlock.jpg'

export default function Register() {

    const [toggle, setToggle] = useState(false)
    const [haveCase, setHaveCase] = useState(false)
    const [haveNum, setHaveNum] = useState(false)
    const [haveSplChar, setHaveSplChar] = useState(false)
    const [haveMinChar, setHaveMinChar] = useState(false)
    const [validPass, setValidPass] = useState(false)
    
    const toggleVisibility = ()=>{
        setToggle(!toggle);
    }

    const checkValid = (event)=>{
        const password = event.target.value;
        if(haveMinChar && password.length < 8){
            setHaveMinChar(false);
        }
        if(!haveMinChar && password.length > 7){
            setHaveMinChar(true);
        } 
        if(haveNum && !(/\d/.test(password))){
            setHaveNum(false);
        }
        if(!haveNum && (/\d/.test(password))){
            setHaveNum(true);
        }
        if(haveSplChar && !(/[!@#$%^&*]/.test(password))){
            setHaveSplChar(false);
        }
        if(!haveSplChar && (/[!@#$%^&*]/.test(password))){
            setHaveSplChar(true);
        }
        if(haveCase && (!(/[A-Z]/.test(password)) || !(/[a-z]/.test(password)))){
            setHaveCase(false);
        }
        if(!haveCase &&((/[A-Z]/.test(password)) && (/[a-z]/.test(password)))){
            setHaveCase(true);
        }
        if(haveCase && haveNum && haveSplChar && haveMinChar){
            setValidPass(true);
        }else{
            setValidPass(false);
        }
    }

    useEffect(()=>{
        console.log('Password State:',validPass)
    },[validPass])

    return (
        <div className='container d-flex justify-content-center align-items-center vh-100'>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-6">
                        <div className="card-body">
                            <form>
                                <input type='text' className='form-control mt-2' id='userName' placeholder='User Name' />
                                <input type="email" className="form-control mt-2" id="email" placeholder='Email' aria-describedby="emailHelp" />
                                <div id="emailHelp" className="form-text mt-1">We'll never share your email with anyone else.</div>
                                <div className='input-group'>
                                    <input type={toggle ? "text":"password"} className="form-control mt-2" placeholder='Password' id="pass" onChange={checkValid}/>
                                    <i className={`bi ${toggle ? "bi-eye": "bi-eye-slash"}`}  style={{
                                        position: "absolute",
                                        right: "1%",
                                        top: "60%",
                                        transform: "translateY(-50%)",
                                        cursor: "pointer",
                                        zIndex: 5,
                                    }}
                                    onClick={toggleVisibility}
                                    ></i>
                                </div>
                                <div className="d-grid gap-2 mt-2">
                                    <button className="btn btn-primary" type="submit">Register</button>
                                </div>
                            </form>
                        </div>
                        <div className='container d-flex justify-content-center'>
                            <div className='card my-3'>
                                < div className='card-body'>
                                    <p className='card-text'>Password strength indicator</p>
                                        <ul style={{listStyleType:'none'}}>
                                            <li><i className={`bi ${haveCase ? "bi-check-circle-fill" : "bi-x-circle-fill"} me-2`} style={haveCase?{color:'green'}:{color:'red'}}></i>Lower case & Upper case</li>
                                            <li><i className={`bi ${haveNum ? "bi-check-circle-fill" : "bi-x-circle-fill"} me-2`} style={haveNum?{color:'green'}:{color:'red'}}></i>Numbers (0-9)</li>
                                            <li><i className={`bi ${haveSplChar ? "bi-check-circle-fill" : "bi-x-circle-fill"} me-2`} style={haveSplChar?{color:'green'}:{color:'red'}}></i>Special Characters (!@#$%^&*)</li>
                                            <li><i className={`bi ${haveMinChar ? "bi-check-circle-fill" : "bi-x-circle-fill"} me-2`} style={haveMinChar?{color:'green'}:{color:'red'}}></i>Minimum 8 Characters</li>
                                        </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <img src={img} className="img-fluid rounded-start" alt="..."  style={{height:'100%'}}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
