import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { TranslateService } from '@ngx-translate/core';
import imageMapResize from 'image-map-resizer';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  lang:any;
  langNew:any;
  constructor(public translate:TranslateService,private storage: Storage,private platform: Platform,private localNotifications: LocalNotifications,public navCtrl: NavController,private media: Media) {
 
  }
 ngOnInit() {
   alert("asdasdasdasd")
   }
}
