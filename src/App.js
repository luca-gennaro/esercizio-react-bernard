import "./App.css";
import Header from "./layout/Header";
import Items from "./components/Items";
import Wrapper from "./components/UI/Wrapper";
import { DATA } from "./database";
import AddItem from "./pages/AddItem";
import { useState } from "react";
import ItemDetails from "./components/ItemDetails";

const App = () => {
  const items = DATA



  return (
    <div className="container">
      <Header />
      <main>
            <div className="slider">
              <ul>
                <li>REACT PROPS, COMPONENTS AND ROUTES</li>
                <li>FORMS, OUTPUTTING DATA ON DETAILS PAGE AND CUSTOM HOOKS</li>
              </ul>
            </div>
            <Wrapper>
              {items.map((item) => (
                <Items
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                />
              ))}
            </Wrapper>
      </main>
    </div>
  );
};

export default App;

