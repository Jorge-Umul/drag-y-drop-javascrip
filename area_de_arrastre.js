const dropArea= document.querySelector(".drop-area");
const dragText= dropArea.querySelector("h2");
const button= dropArea.querySelector("button");
const input= dropArea.querySelector("#input-file");
let files;

//llamamos al fol folderes
button.addEventListener("click", (e) => {
    input.click();
});


input.addEventListener("change", (e)=>{
    files=this.files;
    dropArea.classList.add("active");
    showFiles(files);
    dropArea.classList.remove("active");
})



//evento de arrastre y suelta  de la imagen
dropArea.addEventListener("drogover", (e) => {
    e.preventDefault();
    dropArea.classList.add("active");
    dragText.textContent="Suelta para subir los archivos";
});

dropArea.addEventListener("dragleave", (e) => {
    e.preventDefault();
    dropArea.classList.remove("active");
    dragText.textContent = "Arrastra y suelta imagenes";
});

dropArea.addEventListener("drop", (e) => {
    e.preventDefault();
    files= e.dataTransfer.files;
    showFiles(files);
    dropArea.classList.remove("active");
    dragText.textContent = "Arrastra y suelta imagenes";
});



//funcion que se ejecuta cuando sube varios archivos

function showFiles(files){
    if (files.length === "undefined"){
        processFile(files);
    } else {
        for (const file of files) {
            processFile(file);
        }
    }
}

function processFile(file){
    const docType = file.type;
    const validExtensions = ['image/jpeg', 'image/jpg','image/png','image/gif'];

    if(validExtensions.includes(docType)){
        //archivo valido
    } else{
        //no es un archivo valido
        alert('no es un archivo valido');
    }
}
