import { Component, OnInit } from '@angular/core';
import{ faContao, faFacebook, faFacebookF, faFacebookMessenger, faFacebookSquare, faInstagram, faInstagramSquare, faProductHunt, faSquareFacebook, faSquareInstagram, faTelegram, faTelegramPlane, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons'
import{faAddressBook, faAddressCard, faContactBook, faCubes, faCubesStacked, faEnvelope, faHistory, faHome, faHomeLg, faHomeLgAlt, faHouse, faImage, faMailBulk, faMap, faMapLocation, faMapLocationDot, faMapMarked, faMapMarkerAlt, faMobile, faPhone, } from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  //contact icons
  faEnvelope=faEnvelope
  faMailBulk=faMailBulk
  faMapMarkerAlt=faMapMarkerAlt
  faMobile=faMobile

  //home icons
  faHome=faHome
  faCubes=faCubes
  faImage=faImage
  faAddressCard=faAddressCard
  faPhone=faPhone

  //social icons
  faInstagram=faInstagramSquare
  faFacebook=faFacebook
  faTelegram=faTelegram
  faYoutube=faYoutube
  faTwitter=faTwitter
  constructor() { }

  ngOnInit(): void {
  }

}
