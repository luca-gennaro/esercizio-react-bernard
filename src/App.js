import {Fragment} from 'react';
import { DATA } from "./database";
import './App.css'

const App = () => {
  const items = DATA;
  return ( 
    <Fragment>
       <header>
      <nav>
        <div className="logo">LOGO</div>
        <ul className="link">
          <li>Home</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
    <main>
    <div className="slider">REACT PROPS AND COMPONENTS</div>
    <ul className="item">
      {items.map(item=>
      <li>
        <div className="card">
        <div className="cover">
          <img src={item.image} alt="" />
        </div>
        <h3 className="">{item.name}</h3>
        <div className="price">€{item.price}</div>
        </div>
      </li>)}
    </ul>
    </main>
    </Fragment>
   );
}
 
export default App;