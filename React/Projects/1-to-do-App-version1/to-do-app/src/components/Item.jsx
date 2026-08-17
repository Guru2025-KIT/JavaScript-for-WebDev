import styles from "./Item.module.css"

const Item=(props)=>{
    let {name,dueDate}=props;
  return (
    <>
      <div className={`${styles.input} ${styles.containerInput}`}>
            <div className="row">
              <div className="col-4">{name}</div>
              <div className="col-4">{dueDate}</div>
            {console.log(name)}
            {console.log(name)}
              <div className="col-2">
                <button type="button" className="btn btn-danger">
                  Delete
                </button>
              </div>
            </div>
      </div>
    </>
  )
}

export default Item;