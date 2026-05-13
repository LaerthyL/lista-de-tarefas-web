function addTarefa() {
    let input = document.querySelector("input").value

    let li = document.createElement("li")
    li.innerHTML = input + '<span onclick="delTarefa(this)">❌</span>'
    
    document.querySelector("ul").appendChild(li)

    document.querySelector("input").value = ""
}

function delTarefa(li) {
    li.parentElement.remove()
}

document.querySelector("input").addEventListener("keypress", function(event) {
    if(event.key === "Enter") {
        addTarefa()
    }
})