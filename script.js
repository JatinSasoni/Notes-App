const myBtn = document.querySelector(".myBtn");
const inputDiv = document.querySelector(".input-div");
const allPTag = document.querySelectorAll(".p-tag");

const alwaysShowLocal = ()=>{
    inputDiv.innerHTML = localStorage.getItem("notes");
}
alwaysShowLocal();
const updateLocal = ()=>{
    let  latestInputDiv = document.querySelector(".input-div").innerHTML;
    localStorage.setItem("notes",latestInputDiv);
}
const getNote = ()=>{
    let inputBox = document.createElement("p");
    let deleteImage = document.createElement("img");
    inputBox.className = "p-tag";
    deleteImage.className = "deleteIcon";
    deleteImage.src = "/Notes App/images/delete.png";
    inputBox.setAttribute("contenteditable","true");
    inputBox.append(deleteImage);
    inputDiv.append(inputBox);
    updateLocal();
}

myBtn.addEventListener('click',getNote);

document.querySelector(".input-div").addEventListener('click',(e)=>{
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateLocal();
    }else if(e.target.tagName==="P"){
        let  latestPTag = document.querySelectorAll(".p-tag");
        latestPTag.forEach((nts)=>{
            nts.addEventListener('keyup',()=>{
                updateLocal();
            })
        })
    }
});

document.addEventListener('keydown',(e)=>{
    if(e.key ==="Enter"){
        document.execCommand("insertLineBreak");
        e.preventDefault();
    }
})