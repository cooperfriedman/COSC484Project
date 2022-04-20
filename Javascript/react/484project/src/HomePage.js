import React from 'react';
import logo from "./images/keys.png";
import mh  from "./images/Millennium_Hall.jpeg";
import uv from "./images/UV.jpeg";
import ty from "./images/the_york.jpeg";
import './Site.css';
import {Helmet} from "react-helmet";
export default function HomePage(){

     return(
         <div className = "HomePage">
     <Helmet>
          <meta charset = "UTF-8"/>
          <title> Living Spaces</title>
          <link rel = "stylesheet" type = "text/css" href="site.css"/>
     
     </Helmet>
<body className="Body">
     <ul class = "navigation">
          <li> <a href= "./HomePage">Home</a></li>
          <li> <a href= "./about">About Us</a></li>
          <li> <a href= "./confirmroomatequiz">Roommate Quiz</a></li>
     </ul>
     <img src = {logo} id = 'logo' alt = 'keys_logo' class = "Site-logo"/>
     <h1> Living Spaces </h1>
     <h3> Allowing Students to find good housing on and off campus </h3>

     <h3> You could live in one of these great apartments and many more! </h3>
     <table>
          <tr>
               <th><img src = {uv} id = 'uv' alt = 'uv_logo' class = "image2"/>
               <figcaption>University Village</figcaption></th>
               <th><img src = {mh} id = 'mh' alt = 'mh_logo' class = "image3"/>
                    <figcaption>Millennium Hall</figcaption></th>
               <th><img src = {ty} id = 'ty' alt = 'ty_logo' class = "image4"/>
                    <figcaption>The York</figcaption></th>
          </tr>
     </table>

</body>

<footer className="Footer">
     <form name = "contact" method = "get" action = "./SignUpPage">
     <div class="row">
        <div class="column colleft">
            <h5>Reviews</h5>
            <p>Jackie: "They were able to find me a great apartment at a great price"</p>
            <p>Brain: "They found me great roommates"</p>
            <p>Josh: "They got me a great apartment at a great price"</p>
        </div>
        <div class="column colmiddle">
            <h5>Sign up for our Newsletter</h5>
            <p>Sign up today to hear about great new living opportunities</p>
            <input type = "email" />
            <input name="form" type="submit" value="Sign Up!"/>
        </div>
        <div class="column colright">
            <h5>Contact us </h5>
           <p>Email: <a href="mailto:livingspaces.contact@gmail.com">livingspaces.contact@gmail.com</a></p>
           <p> Phone: 123 - 456 - 7890 </p>
        </div>
    </div>
</form>
</footer>
</div>
);
}
