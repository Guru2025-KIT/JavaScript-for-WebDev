const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  let bmi=0;
  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = `Please Enter the Valid Height.\nEnterd Value ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please Enter the Valid Weight.\nEnterd Value ${weight}`;
  } else {
     bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `BMI Value is: ${bmi}`;
  }

  if(bmi<18.6){
      result.innerHTML=`Underweight: BMI value is: ${bmi}`;
  }else  if(bmi<24.9){
    result.innerHTML=`Normal Weight: BMI value is: ${bmi}`;
  }else{
    result.innerHTML=`OverWeight Weight: BMI value is: ${bmi}`;
  }
});
