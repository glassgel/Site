document.addEventListener("DOMContentLoaded", function() {
    
    const sectiuneMonitorizare = document.getElementById("imgs");
    const containerGalerie = document.getElementById("3imgs");

    const imagini = [
        "1.png",
        "2.png",
        "3.png"
    ];

    let indexCurent = 0;
    let slideshowInterval;
    let slideshowActiv = false;

    sectiuneMonitorizare.addEventListener("dblclick", function() {
        
        if (slideshowActiv) return; 

        slideshowActiv = true;

        containerGalerie.innerHTML = "";
        
        const slideContainer = document.createElement("div");
        slideContainer.id = "slideshow-container";
        
        const imgElement = document.createElement("img");
        imgElement.id = "slideshow-img";
        imgElement.src = imagini[0];
        imgElement.alt = "Slideshow Resurse";
        
        slideContainer.appendChild(imgElement);
        
        const infoText = document.createElement("p");
        slideContainer.appendChild(infoText);

        containerGalerie.appendChild(slideContainer);

        slideshowInterval = setInterval(function() {
            indexCurent++;
            
            if (indexCurent >= imagini.length) {
                indexCurent = 0;
            }

            imgElement.src = imagini[indexCurent];
            
        }, 3000);
    });
});
