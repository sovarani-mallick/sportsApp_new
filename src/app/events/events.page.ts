import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }
  Back(){
    this.navCtrl.back();
  }

}
