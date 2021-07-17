import React from 'react';


function LogIn() {
    return (
        <div>
            <h1 type="text" >Log In</h1>

            <form>
                <label>
                    Username:<span>&nbsp;&nbsp;</span> 
                    <input type="text"  placeholder="Enter username" name="username" required />
                </label>
                <br />
                <label>
                    Password:<span>&nbsp;&nbsp;</span> 
                    <input type="text"  placeholder="Enter password" name="psw" required />
                </label><br />
                <label>
                    Remember me <span>&nbsp;&nbsp;</span>
                    <input type='checkbox' checked='checked' name="remember" value='true' /> 
                </label><br />
               
    
                <input type="submit" value="Submit" />
                
            </form>

            
        </div>
     )
}
 export default LogIn;