import styles from "./Button.module.css";

export default function Button(){

  let buttonArr=['c','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.'];

  return(
    <>
      {
        buttonArr.map((item)=>   <button className={styles.Buttons} key={item} >{item}</button>
        )
      }
    </>
  )
}