import styles from "./Header.module.css";

export default function Header(props){

  const {children,property} = props;
  if(props.children){
    return(
      <div className={styles.head}>
        {props.children}
      </div>
    )
  }

  return(
    <>
        <div className={styles.head}>Healthy Foods from {property}</div>
    </>
  )
}