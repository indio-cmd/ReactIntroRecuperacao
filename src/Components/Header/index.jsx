import { Link } from 'react-router-dom'
import './style.css'

function Header() {
return(
   <>
<Link to='/LocaisDoMundo' ><button>Mundo</button></Link>
<Link to='/' > <button>Home</button> </Link>
<Link to='/OperacoesBasicas'><button>Operações</button> </Link>
   </> 
)
}
export default Header 