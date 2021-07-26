import React from 'react';


export default function LogIn() {
    return (
        <div className='date'>
            <h1 type="text" >Log In</h1>

            <form>
                <label >
                    Username:<span>&nbsp;&nbsp;</span> 
                    <input type="text"  placeholder="Enter username" name="username" required />
                </label>
                <br /><br />
                <label>
                    Password:<span>&nbsp;&nbsp;</span> 
                    <input type="password"  placeholder="Enter password" name="psw" required />
                </label><br /><br />
                <label>
                    Remember me <span>&nbsp;&nbsp;</span>
                    <input type='checkbox' checked='checked' name="remember" value='true' /> 
                </label><br /><br />
               
    
                <input type="submit" value="Submit" />
                
            </form>

            
        </div>
     )
}
