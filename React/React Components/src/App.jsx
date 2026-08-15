import GuruButton from "./My Components/GuruButton";        //Syntax to import default component
import { GuruButton2,GuruButton3 } from "./My Components/GuruButton";   //Syntax for importing multiple named Components
import DynamiComponent from "./My Components/DynamiComponent";
import ReUsableComponents from './My Components/reUsableComponents'

function App(){
  return <div>
    <h1>Welcome Guru...</h1>
    <GuruButton></GuruButton>
    <GuruButton2></GuruButton2>
    <GuruButton3></GuruButton3>
    <DynamiComponent></DynamiComponent>
    <ReUsableComponents />
    <ReUsableComponents></ReUsableComponents>
    <ReUsableComponents></ReUsableComponents>
    <ReUsableComponents></ReUsableComponents>
    <ReUsableComponents></ReUsableComponents>
  </div>
}

export default App;