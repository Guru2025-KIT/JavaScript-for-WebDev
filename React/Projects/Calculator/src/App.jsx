import Styles from "./App.module.css";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Input from "./Components/Input";
import ButtonContainer from "./Components/ButtonContainer";

function App() {


  return (
    <>
      <div class={Styles.Calculator}>
          <h3>calculator</h3>
          <Input></Input>
          <ButtonContainer>
          </ButtonContainer>

          
      </div>
    </>
  )
}

export default App
