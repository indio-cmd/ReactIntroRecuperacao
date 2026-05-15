
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './pages/Home'
import LocaisDoMundo from './pages/LocaisDoMundo'
import OperacoesBasicas from './pages/OperacoesBasicas'

function App() {
//  const [count, setCount] = useState(0)
  return (
    <>
    <Header/>
<Routes>
<Route  path='/'  element={<Home   />} />
<Route  path='/LocaisDoMundo'  element={<LocaisDoMundo  />} />
<Route path='/OperacoesBasicas'  element={<OperacoesBasicas  />} />
</Routes>
<Footer/>
    </>
  )
}

export default App
