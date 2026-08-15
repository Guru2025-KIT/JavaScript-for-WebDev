export default function DynamiComponent(){
  let name="Guru";
  let fullName=()=>{
    return `${name} Prasad Shinde`
  }

  return <div>
    <h1>Hello {fullName()}</h1>
  </div>
}