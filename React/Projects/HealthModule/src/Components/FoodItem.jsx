import styles from "./Fooditem.module.css";

export default function FoodItem({onChangeEvent}){

  

  return(
    <>
      <input type="text" placeholder="Enter Food Item" className={styles.InputButton} 
      onChange={onChangeEvent}/>
    </>
  )
}