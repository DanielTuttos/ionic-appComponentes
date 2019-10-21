import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  loading: any;

  constructor(private loadingCtr: LoadingController) { }

  ngOnInit() {


    this.presentLoading('Espere...');


  }

  async presentLoading(mensaje: string) {
    this.loading = await this.loadingCtr.create({
      message: mensaje,
      duration: 2000
    });
    await this.loading.present();
    const { role, data } = await this.loading.onDidDismiss();

    console.log('Loading dismissed!');
  }

}
