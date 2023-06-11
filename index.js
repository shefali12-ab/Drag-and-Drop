const draggables= document.querySelectorAll(".draggable-item") // using DOM queryselectorall, draggables will contain array consisting  of all the draggable items.
const droppable = document.querySelector(".dropzone") // selecting the right side div(drroping zone) where we need to drop the draggable items



draggables.forEach( draggable =>{ 
    draggable.addEventListener('dragstart',()=>{
         // attaching dragstart event to the item which was dragged
       
        draggable.classList.add('dragging')// this will add a css class named dragging to the item which was dragged (change the background color of dragged item)
    })

    draggable.addEventListener('dragend',()=>{
        // attaching dragend event, when we realase the dragged item.
        draggable.classList.remove('dragging') // THis will remove the css class that we have added while dragging the item.
    })
})

droppable.addEventListener('dragover',(e)=>{
    // adding an event dragover to the dropping zone where we will drop our dragged item
    let selected= e.target; // selcting the target that is drop zone div where we need to drop.
    // console.log(selected);
    selected.classList.add('dropping') // this will add a class to dropzone that is when we drop background colour will change.
    e.preventDefault(); // we need to attach prevent Default function as it is preventing our item to drop over dropping zone.
    const draggable=document.querySelector('.dragging') // selcting element which is having dragging class, at one time only one element will have dragging class
      selected.appendChild(draggable) // adding the dragged item to drop zone by appending its child

})

droppable.addEventListener('dragend',()=>{
    droppable.classList.remove('dropping'); // removing the dropping class when drag will end.
})
