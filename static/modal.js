
function getId(id) {
    return document.getElementById(id)
}

function getClasses(className) {
    return document.querySelectorAll('.' + className)
}

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

function closeListener() {
    modalCloseButton
        .addEventListener('click',
            closeModal()
        )
}

function addSrc(src) {
    return modalImage.setAttribute('src', src)
}

images.forEach(function(image) {
    image.addEventListener('click',
        function() {
            var src = this.getAttribute('src')
            addSrc(src)
            openModal()
            closeListener()
        })
})
