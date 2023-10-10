document.addEventListener('DOMContentLoaded', function () {
    var mapOptions = {
        center: { lat: 8.9465, lng: 125.5370 },
        zoom: 7 
    };
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    var animals = document.querySelectorAll('.animal-list img');
    var infoWindow = new google.maps.InfoWindow();

    animals.forEach(function (animal) {
        var lat = parseFloat(animal.getAttribute('data-lat'));
        var lng = parseFloat(animal.getAttribute('data-lng'));
        var info = animal.getAttribute('data-info');

        var marker = new google.maps.Marker({
            position: { lat: lat, lng: lng },
            map: map,
            title: info
        });
        marker.addListener('click', function () {
            document.getElementById('animal-image').innerHTML = '<img src="' + animal.src + '" alt="' + animal.alt + '">';
            document.getElementById('animal-details').innerHTML = '<p>' + info + '</p>';
            infoWindow.setContent(info);
            infoWindow.open(map, marker);
        });
    });
});
