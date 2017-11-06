
document.addEventListener('DOMContentLoaded', function() {
    //start once page is loaded
  
    function getId(id) {
        return document.getElementById(id)
    }
  
     //set variables for cleaner functions
    var modalWrap = getId('modal-wrap')
    var modal = getId('modal')
    var images = document.querySelectorAll('.images')
    var modalCloseButton = getId('modal-close-button')
    var modalImage = getId('modal-image')

    function openModal () {
        return modalWrap.style.display = 'flex'
    }

    function closeModal() {
        return modalWrap.style.display = 'none'
    }

    //add event listener to close button
    modalCloseButton.addEventListener('click',
        function() {
            return closeModal()
        }
    )

 //add src/link to image
    function addSrc(src) {
        return modalImage.setAttribute('src', src)
    }
  
    //add event listner to all images with class='images'
    images.forEach(function(link) { 
        link.addEventListener('click', function(e) {
            addSrc(e.currentTarget.getAttribute('src'))
            openModal()
        })             
    }) 
  
    //end 
})
