import styles from "./ItemList.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

function ItemList(props) {
  const { item,children } = props;
  
  if(children){
    return (
      <div className={styles.item}>
        {children}
      </div>
    );
  }

  return (
    <div className={styles.item}>
      {/* Added d-flex, justify-content-between, and align-items-center */}

      <a href="#" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">

        <span>{item}</span>

        <button type="button" className={`${styles.Button} btn btn-success`} onClick={()=> alert(`You have bought ${item}`)}>
          Buy
        </button>
      </a>
    </div>
  );
}

export default ItemList;
