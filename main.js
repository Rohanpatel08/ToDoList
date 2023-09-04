let input = document.getElementById('text-box')

let btn = document.querySelector('.btn')
let arr = [];

btn.addEventListener('click',(e)=>{
    e.preventDefault()
    let todo = input.value
    if (todo === '') {
        alert("please enter ToDo")
    }else{
        let list = document.getElementById('list');
        // arr.push(todo)
        list.innerHTML += `
            <li>${todo} <span>&#10006;</span></li>
        `
    }
    input.value = ""

})


let list = document.getElementById('list')

list.addEventListener('click', (e)=>{
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked')
    }else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
    }
},false)