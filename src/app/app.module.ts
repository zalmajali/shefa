import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicAudioModule, WebAudioProvider, CordovaMediaProvider, defaultAudioProviderFactory } from 'ionic-audio3';
//page
import { MyApp } from './app.component';
//plugin
import { MusicControls } from '@ionic-native/music-controls/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { AppRate } from '@ionic-native/app-rate/ngx';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { IonicStorageModule } from '@ionic/storage';
import {IonMarqueeModule} from "ionic-marquee";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormpagesProvider } from '../providers/formpages/formpages';
import { DatePipe } from '@angular/common';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { HTTP } from '@ionic-native/http/ngx';
import { Downloader } from '@ionic-native/downloader/ngx';
@NgModule({
  declarations: [
    MyApp,

  ],
  imports: [
      BrowserModule,
      BrowserAnimationsModule,
      HttpClientModule,
      IonMarqueeModule,
      IonicAudioModule.forRoot(defaultAudioProviderFactory),
      TranslateModule.forRoot({
          loader: {
              provide: TranslateLoader,
              useFactory: (createTranslateLoader),
              deps: [HttpClient]
          }
      }),
    IonicStorageModule.forRoot({
      name: '_mydb',
      driverOrder: ['indexeddb', 'sqlite', 'websql'],

    }),
    IonicModule.forRoot(MyApp,{
          menuType: 'push',
          platforms: {
              ios: {
                  menuType: 'push',
              }
          }
      }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],

  providers: [
    StatusBar,
    SplashScreen,
    Media,
    AndroidPermissions,
      SocialSharing,
      HTTP,
      DatePipe,
      AppRate,
      ScreenOrientation,
      LocalNotifications,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FormpagesProvider,
      InAppBrowser,
    MusicControls,
      Downloader
  ]
})
export class AppModule {}
export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
