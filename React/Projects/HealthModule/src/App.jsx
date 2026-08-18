import ItemList from "./Components/ItemList";
import Header from "./Components/Header";

function App(){

  let Items=['daal','rice','roti','sabzi','chicken','fish','milk',];

  return (
    <>
      <Header/>

      <Header>
        <p>Hello I am Your Doctor</p>
      </Header>
      
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