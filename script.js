
const urlInput=document.querySelector('#get_url');
const downloadBtn=document.querySelector(".btn");
downloadBtn.addEventListener("click",async () =>{
    try {
        const response = await fetch(urlInput.value);
        const file = await response.blob();
        const link = document.createElement("a");
        link.href = URL.createObjectURL(file);
        link.download = new Date().getTime();
        link.click();
    } catch (error) {
        alert("Failed to download the file !");
    }
})






const date = new Date();
let year = date.getFullYear();
document.getElementById("year").innerHTML = year;