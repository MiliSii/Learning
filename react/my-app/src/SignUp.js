import React from 'react';



function SignUp() {
    return (
        <div >


            <form ><h1 >Sign Up</h1>
                <label>
                    First name:<span>&nbsp;&nbsp;</span>
                    <input type="text" placeholder="Enter first name" name="first name" required />
                </label><br /><br />
                <label>
                    Last name:<span>&nbsp;&nbsp;</span>
                    <input type="text" placeholder="Enter last name" name="last name" required />
                </label><br /><br />

                <input type="radio" id="male" name="gender" value="male" />
                <label for="male" >Male</label><br />
                <input type="radio" id="female" name="gender" value="female" />
                <label for="female">Female</label><br />
                <input type="radio" id="other" name="gender" value="other" />
                <label for="other">Other</label><br /><br /><br />

                <label for="username"><b>Username: </b></label>
                <input type="text" placeholder="Enter username" name="username" required /><br /><br />

                <label for="email"><b>Email: </b></label>
                <input type="text" placeholder="Enter Email" name="email" required /><br /><br />

                <label for="psw"><b>Password: </b></label>
                <input type="password" placeholder="Enter Password" name="psw" required /><br /><br />

                <label for="psw-repeat"><b>Repeat Password: </b></label>
                <input type="password" placeholder="Repeat Password" name="psw-repeat" required /><br /><br /><br />

                <label>
                    <input type="checkbox" checked="checked" name="remember" /> Remember me
                </label><br /><br />


                <p class="date">By creating an account you agree to our <a href="https://www.google.com/">Terms & Privacy</a>.</p>
                <br /><br />
                <div>
                    <button type="button" class="cancelbtn">Cancel</button>
                    <button type="submit" class="signupbtn">Sign Up</button><br /><br />
                </div>
                <p class="date">Alredy have account? Go to: <a href="https://www.google.com/" >LodIn</a>.</p>

            </form>
        </div>

    );

}
export default SignUp;