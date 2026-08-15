function reUsableComponents(){

  let randomNum=Math.ceil(Math.random()*100+1);

  return <div>
    <h1 style={{background:"#012345",color:"white"}}>Random Number is:{randomNum}</h1>
  </div>
}

export default reUsableComponents;