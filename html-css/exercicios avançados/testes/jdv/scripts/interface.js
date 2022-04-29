document.addEventListener("DOMContentLoaded", ()=> {

    let boxes = document.querySelectorAll('.boxes')

    boxes.forEach((box)=> {
        box.addEventListener("click", handleClick)
    })

    function handleClick(event){
        let square =  event.target 
        let position = square.id
        movement(position)
        updateSquare()
    }
  function updateSquare(position){
    let boxes = document.querySelectorAll('.boxes')
    
    boxes.forEach((boxes)=> {
       
        let position = boxes.id
        let symbols = board[position]
        
        if (symbol != ''){
            boxes.innerHTML = `<div class='${symbols}'></div>`
        }

    })


    
    }




})