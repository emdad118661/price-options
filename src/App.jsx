
import './App.css'
import BarCharts from './Components/BarCharts/BarCharts'
import DaisyNav from './Components/DaisyNav/DaisyNav'
import NavBar from './Components/NavBar/NavBar'
import PriceOptions from './Components/PriceOptions/PriceOptions'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      

    {/* <DaisyNav></DaisyNav> */}
    <NavBar></NavBar>
    <PriceOptions></PriceOptions>
    <BarCharts></BarCharts>
    
    </>
  )
}

export default App
