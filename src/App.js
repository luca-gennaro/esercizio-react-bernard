import "./App.css";
import Header from "./layout/Header";
import Items from "./components/Items";
import Wrapper from "./components/UI/Wrapper";
import { DATA } from "./database";
import AddItem from "./pages/AddItem";
import { useState } from "react";
import ItemDetails from "./components/ItemDetails";
import { Route, Routes } from "react-router-dom";

const App = () => {
const [data, setData] = useState(DATA)
setData({})



  const onSaveItem = (item) =>{
   
    console.log("app component",item)
  }


  return (
    <div className="container">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<div>
            <div className="slider">
              <ul>
                <li>REACT PROPS, COMPONENTS AND ROUTES</li>
                <li>FORMS, OUTPUTTING DATA ON DETAILS PAGE AND CUSTOM HOOKS</li>
              </ul>
            </div>
            <Wrapper>
              {data.map((item) => (
                <Items
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                />
              ))}
            </Wrapper>
          </div>}/>
          <Route path="/add-item" element={<AddItem onSaveItem={onSaveItem}/>}/>
        
        </Routes>
           
      </main>
    </div>
  );
};

export default App;

