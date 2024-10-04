const Drag = document.querySelector(".Appbody");
DragText=Drag.querySelector("h3");
button=Drag.querySelector("button");
input=Drag.querySelector("input");
let myFile;


button.onclick=()=>{
    input.click()
}

input.addEventListener("change",function(){
   myFile=this.files[0];
   Drag.classList.add("active");
   Showme()


})

Drag.addEventListener("dragover",(event)=>{
    event.preventDefault();
    Drag.classList.add("active");
    Drag.textContent="Release to upload File";
})
Drag.addEventListener("dragleave",()=>{
    Drag.classList.remove("active");
    DragText.textContent="Drag and Drop";
})

Drag.addEventListener("drop",(event)=>{
    event.preventDefault();
    myFile=event.dataTransfer.files[0];
    Showme()
})

function Showme(){
    let filetype=myFile.type;
    let validEx=["image/jpeg","image/jpg", "image/png"];
    if(validEx.includes(filetype)){
        let fileReader =new FileReader();
        fileReader.onload=()=>{
            let imgUrl=fileReader.result;
            let img = `<img src ="${imgUrl}" alt="">`;
        
            Drag.innerHTML=img
        }
        fileReader.readAsDataURL(myFile);

    }
    else{
        alert("আপনার ফাইল টা ভালো না পচা । দয়া করে ইমেজ ফাইল ব্যবহার করুন 🥰");
        Drag.classList.remove("active");
        DragText.textContent="Drag & Drop";

    }
}









// function showFile(){
//     let filetype = Myfile.type 
//     let VaildEx = ["image/jpeg", "image/jpg", "image/png"];
//     if(VaildEx.includes(filetype)){
//         let fileReader = new  FileReader();
//         fileReader.onload = () => {
//             let FileUrl  = fileReader.result;
//             let img = `<img src="${FileUrl}" alt="">`;
//             DragArea.innerHTML = img
//         }
//         fileReader.readAsDataURL(Myfile)
//     }
//     else {
//         alert("Please Upload Jpg Or Png Formet "); 
//         DragArea.classList.remove("active"); 
//         DragText.textContent = "Drag & Drop"
//     }
// }