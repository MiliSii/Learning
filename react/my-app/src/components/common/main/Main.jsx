import React from 'react';
import './Main.css';
function Main() {


  return (
   <div>
       <h1 >Just to remind myself</h1>
       <p className="date">"Every time you suppress some part of yourself or allow others to play you small, you are
            ignoring
            the owner’s manual your Creator gave you.What I know for sure is this: You are built not to shrink down to
            less
            but to blossom into more. To be more splendid. To be more extraordinary. To use every moment to fill
            yourself
            up."
        </p>

        <h2 id="text" onClick="TextChange()">Inspirational quotes:</h2>

        <ul id="lista">
            <li>"Where there is no struggle there is no strength."</li>
            <li>"You look at yourself and you accept yourself for who you are, and once you accept yourself for who
                you are
                you become a better person."</li>
            <li>"Do the one thing you think you cannot do. Fail at it. Try again. Do better the second time. The
                only people
                who never tumble are those who never mount the high wire. This is your moment. Own it."</li>
        </ul>

        <img title="Fearless Motivational Quote"
            src={"https://cdn.shopify.com/s/files/1/0070/7032/files/Fearless_Motivational_Quote_Desktop_Wallpaper_1.png?format=jpg&quality=90&v=1600450412"}
            alt="Success is not final; failure is not fatal: It is the courage to continue that counts. — Winston S. Churchill"
            id="image"></img>
</div>
  
    
  )
}

export default Main;