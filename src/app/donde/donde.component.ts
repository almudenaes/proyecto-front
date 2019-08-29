import { Component, OnInit, ViewChild } from '@angular/core';
declare var google;


@Component({
  selector: 'app-donde',
  templateUrl: './donde.component.html',
  styleUrls: ['./donde.component.css']
})
export class DondeComponent implements OnInit {
  @ViewChild('googleMap', { static: false }) gMapElement: any;
  map: any;

  directionsService: any; // te guia para llevar a algun sitio
  directionsDisplay: any;

  ngOnInit() {


    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log("hola");
        // console.log(position.coords);
        this.loadMap(position.coords);
      }, this.showError);
    } else {
      console.log('La he liao parda');
    }
  }

  loadMap(currentCoords) {

    this.directionsService = new google.maps.DirectionsService();
    this.directionsDisplay = new google.maps.DirectionsRenderer();

    let mapProps = {
      center: new google.maps.LatLng(currentCoords.latitude, currentCoords.longitude), //CON ESTO SE CREA EL OBJETO
      zoom: 17,
      mapTypeId: google.maps.MapTypeId.HYBRID //ROADMAP, SATELLITE, TERRAIN
    }
    this.map = new google.maps.Map(this.gMapElement.nativeElement, mapProps);

    this.directionsDisplay.setMap(this.map); //a directionsDisplay se le indica cual es su mapa
    let marker = new google.maps.Marker({
      position: mapProps.center,
      title: 'toy aki',
      animation: google.maps.Animation.DROP //BOUNCE
    });
    marker.setMap(this.map);
  }

  showError(error) {

    switch (error.code) {
      case error.PERMISSION_DENIED: {
        console.log('El usuario no permite localizarte');
        break;
      }
      case error.POSITION_UNAVAILABLE: {
        console.log('La posicion no esta disponible');
        break;
      }
      case error.TIMEOUT: {
        console.log('Se ha terminado el timepo de espera');
        break;
      }
      case error.UNKNOWN_ERROR: {
        console.log('ka pachao?');
        break;
      }
    }
  }


}
