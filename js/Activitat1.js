/*Quan es Carregui la pagina a de mostra per defecte la URL de la pàgina*/


addEventListener('load', () => {

    let urlInput = document.getElementById("recurs");
    let urlPagina = window.location.href
    if (urlPagina.indexOf('?') > 0) {
        urlPagina = urlPagina.substring(0, urlPagina.indexOf('?'))
    }
    urlInput.value = urlPagina


    let button = document.getElementById("enviar");
    button.addEventListener('click', (evt) => {

        descarregarArxiu();

    })

})


function descarregarArxiu() {
    let peticio_http = null;
    if (window.XMLHttpRequest) {
        peticio_http = new window.XMLHttpRequest();
    } else if (window.ActiveXObject) {
        peticio_http = new window.ActiveXObject("Microsoft.XMLHTTP");
    }

    peticio_http.onreadystatechange = function () {
        console.log(peticio_http.readyState);

        let httpDiv = document.getElementById("capsaleres");
        httpDiv.innerText = peticio_http.getAllResponseHeaders();

        let div = document.getElementById("estats")
        div.innerHTML += peticio_http.readyState + "<br>";

        let divCodi = document.getElementById("codi")
        divCodi.innerText = peticio_http.status;


        if (peticio_http.readyState === 4) {
            if (peticio_http.status === 200) {
                let div = document.getElementById("continguts")
                div.innerText = peticio_http.responseText;

                

            }
        }
    };
    // Per últim realitzem la petició HTTP (Hem de )
    peticio_http.open('GET', document.getElementById("recurs").value, true)
    peticio_http.send(null);
}


