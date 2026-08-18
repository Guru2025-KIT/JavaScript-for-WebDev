import styles from "./Header.module.css";

export default function Header(props){

  if(props.children){
    return(
      <div className={styles.head}>
        {props.children}
      </div>
    )
  }

  return(
    <>
        <div className={styles.head}>Healthy Foods</div>
    </>
  )
}