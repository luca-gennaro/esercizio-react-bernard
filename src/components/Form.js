import { useState } from "react";


const Form = (props) => {
  const [enteredImageLink, setEnteredImageLink] = useState("");
  const [enteredItemName, setEnteredItemName] = useState("");
  const [enteredItemPrice, setEnteredItemPrice] = useState("");
  const [enteredItemDescription, setEnteredItemDescription] = useState("");
  // const [data, setData] = useState([]);
  

  const ImageLinkHandler = (event) => {
    setEnteredImageLink(event.target.value);
  };
  const ItemNameHandler = (event) => {
    setEnteredItemName(event.target.value);
  };
  const ItemPriceHandler = (event) => {
    setEnteredItemPrice(event.target.value);
  };
  const ItemDescriptionHandler = (event) => {
    setEnteredItemDescription(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault()

    if(!enteredImageLink){
      return
    }
    const enteredValues = {
      image:enteredImageLink,
      name:enteredItemName,
      price:enteredItemPrice,
      description:enteredItemDescription,
    };

    props.onSaveItem(enteredValues)
    // console.log(enteredValues)

    setEnteredImageLink('')
    setEnteredItemDescription('')
    setEnteredItemName('')
    setEnteredItemPrice('')

  };

  return (
    <div className="">
      <form action="" onSubmit={onSubmitHandler}>
        <div className="">
          <input
            type="text"
            placeholder="image"
            value={enteredImageLink}
            onChange={ImageLinkHandler}
          />
        </div>
        <div className="">
          <input
            type="text"
            placeholder="item name"
            value={enteredItemName}
            onChange={ItemNameHandler}
          />
        </div>
        <div className="">
          <input
            type="text"
            placeholder="item price"
            value={enteredItemPrice}
            onChange={ItemPriceHandler}
          />
        </div>
        <div className="">
          <input
            type="text"
            placeholder="item description"
            value={enteredItemDescription}
            onChange={ItemDescriptionHandler}
          />
        </div>
        <button>Submit</button>
      </form>

    </div>
  );
};

export default Form;
