const words = ["Love", "Entertainment", "Experience", "Friends"];
const container = document.getElementById("changeWord");
console.log(container)
let index = 0;

function replaceWord() {
   
    container.style.opacity = 0;

    setTimeout(() => {
       
        container.textContent = words[index];
        container.style.opacity = 1;

        index = (index + 1) % words.length;
    }, 500); 
}

setInterval(replaceWord, 2000);

replaceWord();