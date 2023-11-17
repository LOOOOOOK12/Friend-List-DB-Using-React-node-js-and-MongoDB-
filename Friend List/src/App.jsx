import './App.css'
import Home from './Home'
import AppStyles from './Styles/AppStyles'
import CR from './assets/pngegg.png'
import {Modal} from "./Components/Modal"

function App() {

  return (
      <AppStyles>  
          <img src={CR} alt=""/>
          <Home/> 
      </AppStyles>
  )
}

export default App
