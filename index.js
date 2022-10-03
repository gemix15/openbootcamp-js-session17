let marker, marker2, marker3, map;

function initMap() {
    const posicion1 = {
        lat: 53.270257,
        lng: -9.056365
    }
    const posicion2 = {
        lat: 41.888749,
        lng: 3.190902
    }
    const posicion3 = {
        lat: 45.433268,
        lng: 12.339913
    }

    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: posicion1 
    })

    marker = new google.maps.Marker({
        position: posicion1,
        map,
        title: "Posición Inicial"
    })

    marker2 = new google.maps.Marker({
        position: posicion2,
        map,
    })

    marker3 = new google.maps.Marker({
        position: posicion3,
        map,
    })
}

function onError(error) {
    console.error(error)
}