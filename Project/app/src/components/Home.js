import React from 'react'
import '../Assets/css/Homestyle.css';
import { Link } from 'react-router-dom';

function Home(){
  return (
    <>
    <header>
        <nav>
            <div class="NAV">Home</div>
            <ul class="nav-links">
              {/* <Link to='/login'> */}
                <li>ABOUT</li>
              {/* </Link> */}
              <Link to='/login'>
                <li><a href="#">LOGIN</a></li>
                </Link>
                <Link to='/register'>
                <li>REGISTER</li>
                </Link>
                <input id="checkbox" type="checkbox"/>
                <label class="toggle" for="checkbox">
                    <div id="bar1" class="bars"></div>
                    <div id="bar2" class="bars"></div>
                    <div id="bar3" class="bars"></div>
                </label>
            
            
            </ul>
        </nav>
    </header>
      
    <div>
        <h1>Order food from favourite restaurants near you.</h1>
        <div class="input-group">
            <input type="email" class="input" id="Email" name="Email" placeholder="Enter your delivery location" autocomplete="off"/>
            <input class="button--submit" value="Find Food" type="submit"/>
         </div>     
    </div>

<main class="page-content">
  <div class="card">
    <div class="content">
      <h2 class="title">Biryani</h2>
      <p class="copy">Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains</p>
      <button class="btn">Search</button>
    </div>
  </div>
  <div class="card">
    <div class="content">
      <h2 class="title">Pizza</h2>
      <p class="copy">Plan your next beach trip with these fabulous destinations</p>
      <button class="btn">Search</button>
    </div>
  </div>
  <div class="card">
    <div class="content">
      <h2 class="title">Desert</h2>
      <p class="copy">It's the desert you've always dreamed of</p>
      <button class="btn">Order Now</button>
    </div>
  </div>
  <div class="card">
    <div class="content">
      <h2 class="title">Indian Food</h2>
      <p class="copy">Seriously, straight up, just blast off into outer space today</p>
      <button class="btn">Order Now</button>
    </div>
  </div>
</main>
        </>
  );
}

export default Home;
