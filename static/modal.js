document.addEventListener('DOMContentLoaded', function() {
    //start once page is loaded

    //helpers to find html elements
    function getId(id) {
        return document.getElementById(id)
    }

    function getClasses(className) {
        return document.querySelectorAll('.' + className)
    }

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

    //add event listner to all images with class='images'
    images.forEach(function(image) {
        image.addEventListener('click',
            function(e) {
                console.log('clicked image')
                var src = e.currentTarget.getAttribute('src')
                addSrc(src)
                openModal()
                closeListener()
                console.log('clicked image')
            })
    })


    //end 
})
