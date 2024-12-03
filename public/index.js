const disciplineSelect = document.getElementById("disciplineSelect")
const userInfo = document.querySelectorAll(".info");
const form = document.getElementById("regForm");


function submitInformation(){
    const prohibitedText = new Set('0','1','2','3','4','5','6','7','8','9')
    form.addEventListener("submit", e => {
        e.preventDefault() 
    })
  
}


