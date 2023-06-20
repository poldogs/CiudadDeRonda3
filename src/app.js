
//Map interface and markers
var map = L.map('map').setView([36.740694, -5.165831], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var plazaToros = L.marker([36.742351, -5.167041]).addTo(map);
    plazaToros.bindPopup("<b>Plaza de Toros</b><br><a href='plazaToros.html'>Ver más →</a>").openPopup();

var alameda = L.marker([36.743131, -5.168616]).addTo(map);
    alameda.bindPopup("<b>Alameda del Tajo</b><br><a href='alameda.html'>Ver más →</a>").openPopup();

var puertaGrande = L.marker([36.741615861026865, -5.165715473655488]).addTo(map);
    puertaGrande.bindPopup("<b>Puerta Grande</b><br><a href='puertaGrande.html'>Ver más →</a>").openPopup();

var casaOrtega = L.marker([36.742804950601105, -5.165391164307308]).addTo(map);
    casaOrtega.bindPopup("<b>Casa Ortega</b><br><a href='casaOrtega.html'>Ver más →</a>").openPopup();

var lechuguita = L.marker([36.741576325062205, -5.16460524523921]).addTo(map);
    lechuguita.bindPopup("<b>Bar El Lechuguita</b><br><a href='lechuguita.html'>Ver más →</a>").openPopup();

var tajoRonda = L.marker([36.740758, -5.165889]).addTo(map);
    tajoRonda.bindPopup("<b>Tajo de Ronda</b><br><a href='tajoRonda.html'>Ver más →</a>").openPopup();

var clemente = L.marker([36.738149, -5.163193]).addTo(map);
    clemente.bindPopup("<b>Bar Clemente</b><br><a href='clemente.html'>Ver más →</a>").openPopup();

var donBosco = L.marker([36.73921813480694, -5.166354467637528]).addTo(map);
    donBosco.bindPopup("<b>Casa-Museo Don Bosco</b><br><a href='donBosco.html'>Ver más →</a>").openPopup();

var museoLara = L.marker([36.73944167542143, -5.165168931349993]).addTo(map);
    museoLara.bindPopup("<b>Museo Lara</b><br><a href='museoLara.html'>Ver más →</a>").openPopup();

var mondragon = L.marker([36.73783247837699, -5.166601783905634]).addTo(map);
    mondragon.bindPopup("<b>Palacio de los Mondragones</b><br><a href='mondragon.html'>Ver más →</a>").openPopup();

var mirador = L.marker([36.739519212922474, -5.167515861956823]).addTo(map);
    mirador.bindPopup("<b>Mirador al Tajo</b><br><a href='mirador.html'>Ver más →</a>").openPopup();

var banosArabes = L.marker([36.73898091639711, -5.162839145244155]).addTo(map);
    banosArabes.bindPopup("<b>Baños Árabes</b><br><a href='banosArabes.html'>Ver más →</a>").openPopup();

var paseoMuralla = L.marker([36.737480952360166, -5.1632048150888314]).addTo(map);
    paseoMuralla.bindPopup("<b>Paseo de la muralla del Carmen</b><br><a href='paseoMuralla.html'>Ver más →</a>").openPopup();

var jardinesCuenca = L.marker([36.74055567552319, -5.16405436532996]).addTo(map);
    jardinesCuenca.bindPopup("<b>Jardines de Cuenca</b><br><a href='jardinesCuenca.html'>Ver más →</a>").openPopup();

//Google Maps button
var googleMapsSelector = document.getElementById('google-maps');
var googleButton = document.querySelector('.google-btn');

googleMapsSelector.addEventListener('change', e => {
    if(googleMapsSelector.value=='plazaToros'){
        googleButton.href='https://goo.gl/maps/GEZnpJDmbphU4oQc7'
    }
    if(googleMapsSelector.value=='alameda'){
        googleButton.href='https://goo.gl/maps/uhCMrFPFjTuyxqxQA'
    }
    if(googleMapsSelector.value=='puertaGrande'){
        googleButton.href='https://goo.gl/maps/jwFzpMkDezHjYut27'
    }
    if(googleMapsSelector.value=='casaOrtega'){
        googleButton.href='https://goo.gl/maps/Dmw4eGokSPrWji5H6'
    }
    if(googleMapsSelector.value=='lechuguita'){
        googleButton.href='https://goo.gl/maps/CGVNN2yha3aEd8HC8'
    }
    if(googleMapsSelector.value=='tajoRonda'){
        googleButton.href='https://goo.gl/maps/vtajwPJM5WmRyHV38'
    }
    if(googleMapsSelector.value=='clemente'){
        googleButton.href='https://goo.gl/maps/kknQWjRufphcHzpQ7'
    }
    if(googleMapsSelector.value=='museoLara'){
        googleButton.href='https://goo.gl/maps/FZUhBBtKbyPhMU8eA'
    }
    if(googleMapsSelector.value=='donBosco'){
        googleButton.href='https://goo.gl/maps/qT2qiXjuqrJpthpE8'
    }
    if(googleMapsSelector.value=='mondragon'){
        googleButton.href='https://goo.gl/maps/aTtsT58FS3xszsEy9'
    }
    if(googleMapsSelector.value=='mirador'){
        googleButton.href='https://goo.gl/maps/UinNDBKLzAbpndgY6'
    }
    if(googleMapsSelector.value=='banosArabes'){
        googleButton.href='https://goo.gl/maps/STkBtSMBfaPpBvK16'
    }
    if(googleMapsSelector.value=='paseoMuralla'){
        googleButton.href='https://goo.gl/maps/V6a7ZigspitVP1ce7'
    }
    if(googleMapsSelector.value=='jardinesCuenca'){
        googleButton.href='https://goo.gl/maps/GLtTptkeSjiguRmv6'
    }
})

//Uso del paquete moment.js, instalado a través de npm
const moment = require('moment');

const localTime = moment().format('h:mm:ss A');
document.getElementById('local-time').textContent = `Hora local: ${localTime}`;