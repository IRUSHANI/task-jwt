import React, {useState} from "react"
export const Register = (props) =>{
    const [email,setEmail]= useState('');
    const [pass, setPass]=useState('');
    const [name,setName]=useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
       
    }

    return(
     <div className="form-container">
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Full Name</label>
                <input  type="text" id="name" placeholder="Full Name" value={name} onChange={(event) => setName(event.target.value)}/>

                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder="youremail@.com" value={email} onChange={(event) => setEmail(event.target.value)}/>

                <label htmlFor="password">Password</label>
                <input  type="password" name="password" id="password" placeholder="******" value={pass} onChange={(event) => setPass(event.target.value)}/>

                <button type="Submit" onClick={()=>props.onFormSwitch('login')}>Login</button>
            </form>
            <button className="link-btn" onClick={()=>props.onFormSwitch('login')}>Already have an account? Login here</button>
        </div>    
    )
      
    
}