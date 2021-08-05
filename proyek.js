function myFunction(){
    document.getElementsById("isidrop").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.drop-button')){
        var dropdowns = document.getElementsByClassName("drop-content");
        var i;
        for (i = 0; i < dropdowns.length; i++){
            var openDrop = dropdowns[i];
            if (openDrop.classList.contains('show')){
                openDrop.classList.remove('show');
            }
        }
    }
}