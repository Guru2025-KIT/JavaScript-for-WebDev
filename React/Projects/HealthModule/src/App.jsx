import ItemList from "./Components/ItemList";
import Header from "./Components/Header";
import FoodItem from "./Components/FoodItem";

function App(){

  let Items=['daal','rice','roti','sabzi','chicken','fish','milk',];
  
  const onChangeEvent=(event)=>{
    console.log(event.target.value);
  }
  return (
    <>
      <Header property="Guruji"/>

      <Header >
        <p>Hello I am Your Doctor</p>
      </Header>
       <FoodItem key="food-item" onChangeEvent={onChangeEvent}/>
      
        {
          Items.map((item)=>{
            return <ItemList item={item}/>
          })
        
        }

      <ItemList>
        <p>Note: This is a simple React project that displays a list of healthy food items. You can click the "Buy" button next to each item to simulate a purchase.</p>

      </ItemList>

    </>
  )
}

export default App;