import './Assets/css/Nav.css'
import Img2 from './Assets/img/th-removebg-preview.png'
import Img3 from './Assets/img/cc-removebg-preview.png'
function App()
{
  return(
      <>
    <div>
    <nav>
      <div>PW</div>

    <ul className="Navbar">
            <li><a href="#">LOGIN</a></li>
            <li><a href="form.html">REGISTER</a></li>
        </ul>
    </nav>
    </div>
    <div >
<div class="flip-card">

    <div class="flip-card-inner">
    
    <div class="flip-card-front">
    <img src={Img2} alt=""Logo/>
    
    
    </div>
    
    <div class="flip-card-back">
    
    <img src={Img2} alt=""Logo/>
    
    <h1>THOR</h1>
    
    <h4>The God Of Thunder</h4>
    
    </div>
    
    </div>
    
    </div>
    <div class="flip-card">

        <div class="flip-card-inner">
        
        <div class="flip-card-front">
        
        <img src={Img3} alt="Logo"/>
        
        </div>
        
        <div class="flip-card-back">
        
        <img src={Img3} alt="Logo"/>
        
        <h1 class="H1">Captain America</h1>
        
        <h3>The First Avenger</h3>
        
        </div>
        
        </div>
        
        </div>
</div>       
      </>
    )
  }
  export default App