import React from 'react'
import { render } from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

// Some folks find value in a centralized route config.
// A route config is just data. React is great at mapping
// data into components, and <Route> is a component.

////////////////////////////////////////////////////////////
// first our route components

const Main = () => <h2>Main</h2>

const Sandwiches = () => <h2>Sandwiches</h2>

const Tacos = ({ routes }) => (
  <div>
    <h2>Tacos</h2>
    <ul>
      <li><Link to="/tacos/bus">Bus</Link></li>
      <li><Link to="/tacos/cart">Cart</Link></li>
    </ul>

    {routes.map((route, i) => (
      <RouteWithSubRoutes key={i} {...route}/>
    ))}
  </div>
)

const Bus = () => <h3>Bus</h3>

const Cart = () => <h3>Cart</h3>

////////////////////////////////////////////////////////////

//??// 

// then our route config
const routes = [
  { path: '/main',
    component: Main
  },
  { path: '/sandwiches',
    component: Sandwiches
  },
  { path: '/tacos',
    component: Tacos,
    routes: [
      { path: '/tacos/bus',
        component: Bus
      },
      { path: '/tacos/cart',
        component: Cart
      }
    ]
  }
]

//??// so Main and Sandwiches have an empty space under them that COULD hold subroutes if there were any? 
//??// In the routes key, whose value is an array of objects?

// wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work
const RouteWithSubRoutes = route => (
  <Route path={route.path} render={props => (
    // pass the sub-routes down to keep nesting

    //??// super confused by this
    //??// RouteWithSubRoutes has one prop, "route"
    //??// the path of this Route is {route.path} -- so /main or /sandwiches or /tacos, etc 
    //??// we want to render on the page the component Main or Tacos or Sandwiches
    //??// those are defined at the top of the file (const Main = () => blah )

    <route.component {...props} routes={route.routes} />
  )}/>
)

//// CREATE THE TOP-LEVEL COMPONENT THAT WILL CONTAIN ALL THE OTHER COMPONENTS

//??// these are creating Link components that lead to different Routes

//??// {routes.map((route, i) => (
//??//   <RouteWithSubRoutes key={i} {...route}/>
//??//  ))}

//??// 

const RouteConfigExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/main">Main</Link></li>
        <li><Link to="/sandwiches">Sandwiches</Link></li>
        <li><Link to="/tacos">Tacos</Link></li>
      </ul>
      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route}/>
      ))}
    </div>
  </Router>
)

//// RENDER THE WHOLE THING

render(
  <RouteConfigExample/>, 
  document.getElementById('root')
)





