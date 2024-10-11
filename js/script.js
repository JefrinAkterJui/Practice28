let input= document.querySelector(".input")
let result = document.querySelector(".result")


// ================button function
let handelClick=()=>{
  // if (input.value=''){
  //   error.innerHTML='Plese Type Your Text'
    
  // }else{
  //   result.innerHTML=input.value 

  // input.value=""
  // }
  result.innerHTML=input.value 

  input.value=""
}



// ===============enter key function ========================
let inputkey = (item)=>{
  console.log(item.key)
  if(item.key== "Enter"){
    handelClick()
  }
}