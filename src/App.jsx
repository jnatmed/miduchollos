import './App.css'
import { Link, NavLink as NavLinkReactRouter, Outlet, Route, Routes, useParams } from 'react-router-dom'

const Home = () => <h1>Home</h1>

const SearchPage = () => {
  const tacos = [
    'cochinita',
    'chili',
    'carnita',
    'quesadilla'
  ]

  return (
    <div>
        <h1>Search Page</h1>
        
        <ul>
        {tacos.map((taco) => (
          <li key={taco}><Link to={ '/tacos/' + taco}>{taco}</Link></li>
        ))}
      </ul>
        
    </div>
  ) 
}

const Tacos = () => {
    const { taco } = useParams()

    return (
      <div>
        <h1>Tacos</h1>
        {taco}
        <Link to="details">Ir a los detalles</Link>
        <Outlet />
      </div>
    )
}

const TacoDetails = () =>{
  const { taco } = useParams()
  
  return (
      <h1>Tacos Details {taco}</h1>      
  )
}

const NavLink = ({to, children, ...props}) => {
  return (
    <NavLinkReactRouter
      {...props}
      className={({isActive}) => isActive ? 'is-active' : undefined}
      to={to}
    >
    {children}
    </NavLinkReactRouter>
  )
}


const Login = () => <h1>Login</h1>

function App() {

  return (
      <div className="App">
        <header>
          <h1>MiduChollos</h1>
          <nav>
            <ul>
              <li><NavLink 
                className={({ isActive }) =>{
                  return isActive ? 'is-active' : undefined
                }}
                to="/"
                >Home
                </NavLink>
              </li>
              <li><NavLink to="/search-page">Search Page</NavLink></li>
            </ul>
          </nav>
          <nav>
            <ul>
              <li><Link to="/login">Login</Link></li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search-page' element={<SearchPage />} />
          <Route path='/tacos/:taco/' element={<Tacos />}>
            <Route path='details' element={<TacoDetails />}/>
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<h1>Not Found</h1>} />
        </Routes>
      </div>
  )
}

export default App
