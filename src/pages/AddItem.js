import Form from "../components/Form";

const AddItem = (props) => {

  const OnSaveItemHandler = (item)=>{
    
    const obj = {
      id: Math.random(),
      ...item
    }
    
    props.onSaveItem(obj)
  }
  

  return (
    <div>
      <Form onSaveItem={OnSaveItemHandler}/>
    </div>
  );
};

export default AddItem;
