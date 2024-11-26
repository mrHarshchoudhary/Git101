import styles from "./App.module.css"
import ButtonsContainer from "./component/ButtonsContainer"
import Display from "./component/display"


function App() {
  
  return <center className={styles.calculator}>
   <Display></Display>
   <ButtonsContainer></ButtonsContainer>
   
    </center>
  
    
}

export default App
