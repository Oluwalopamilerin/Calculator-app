const buttons = document.querySelectorAll("button");
const input = document.querySelector(".input-field");
let string = ""


buttons.forEach(button => {
  button.addEventListener("click", () => {
    let val =button.textContent;
    switch (val) {
      case "=":
        string = eval(string);
        input.value = string;  
        break;

      case "AC":
        string = " ";
        input.value = string;
        break;

      case "DE":
        string = string.slice(0,-1);
        input.value = string;
        break;
    
      default:
        string+= val;
        input.value = string;
        break;
    }
    
    // if (val == "="){
    //   string = eval(string);
    //   input.value = string;
    // } else{
    //   string+= val;
    //   input.value = string;
    // }

  })
})

