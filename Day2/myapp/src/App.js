import './assts/css/style.css';
import Nav from './components/Nav.js';
function App() {
    return (
        <form class="Box">
        <input type="text" name="" id="" placeholder="Name"/>
        <input type="email" name="" id="" placeholder="Email"/>
        <input type="number" name="" id="" placeholder="Phone"/>
        <input type="date" name="" id=""/>
        <input type="password" name="" id="" placeholder="Password"/>
        <label>Human-being</label>
        <input type="checkbox" name="" id=""/>
        <label>Male</label>
        <input type="radio" name="" id=""/>
        <label>Female</label>
        <input type="radio" name="" id=""/>
        <input type="submit" value="Register"/>

        </form> 
    )
}
export default App