import React from 'react'
import img from '../../assets/images/unlock.jpg'

export default function Register() {
  return (
    <div className='container d-flex justify-content-center align-items-center vh-100'>
        <div className="card mb-3">
            <div class="row g-0">
                <div className="col-md-6">
                    <div className="card-body">
                        <form>
                            <input type='text' className='form-control mt-2' id='userName' placeholder='User Name' />
                            <input type="email" class="form-control mt-2" id="email" placeholder='Email' aria-describedby="emailHelp" />
                            <div id="emailHelp" class="form-text mt-1">We'll never share your email with anyone else.</div>
                            <input type="password" class="form-control mt-2" placeholder='Password' id="pass" />
                            <div className="d-grid gap-2 mt-2">
                                <button class="btn btn-primary" type="submit">Button</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-md-6">
                    <img src={img} className="img-fluid rounded-start" alt="..." />
                </div>
            </div>
         </div>
    </div>
  )
}
