import styles from "./ButtonContainer.module.css"
import Button from "./Button"

export default function ButtonContainer(){

  return(
    <>
      <div class={styles.ButtonContainer}>
            <Button></Button>
      </div>
    </>
  )
}