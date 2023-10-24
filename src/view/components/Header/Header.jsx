import './Header.css'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header>
      <h1>Shopping Cart JC</h1>

      <ul>
        <li><Link to='/'>Comercio</Link></li>
        <li><Link to='/admin'>Aministrador</Link></li>
      </ul>
    </header>
  )
}
