document.addEventListener('DOMContentLoaded', function() {
    //start once page is loaded
    var modalWrapElement = document.createElement('section')
    modalWrapElement.setAttribute('id', 'modal-wrap')

    var modalElement = document.createElement('div')
    modalElement.setAttribute('id', 'modal')

    var modalImageElement = document.createElement('img')
    modalElement.setAttribute('id', 'modal-image')

    var modalCloseButtonElement = document.createElement('h2')
    var closeText = document.createTextNode('X')
    modalCloseButtonElement.appendChild('closeText')
    modalCloseButtonElement.setAttribute('id', 'modal-close-button')

     //set variables for cleaner functions
    var modalWrap = getId('modal-wrap')
    var modal = getId('modal')
    var images = getClasses('image')
    var modalCloseButton = getId('modal-close-button')
    var modalImage = getId('modal-image')

    function openModal () {
        return modalWrap.style.display = 'flex'
    }

    function closeModal() {
        return modalWrap.style.display = 'none'
    }

    //add event listener to close button
    function closeListener() {
        modalCloseButton
            .addEventListener('click',
                closeModal()
            )
    }

 //add src/link to image
    function addSrc(src) {
        return modalImage.setAttribute('src', src)
    }

 //helpers to find html elements
    function getId(id) {
        return document.getElementById(id)
    }

    function getClasses(className) {
        return document.querySelectorAll('.' + className)
    }

    //add event listner to all images with class='images'
    images.forEach(function(image) {
        image.addEventListener('click',
            function(e) {
                console.log('clicked image')
                var src = e.currentTarget.getAttribute('src')
                addSrc(src)
                openModal()
                console.log('clicked image')
            })
    })


    //end 
})
