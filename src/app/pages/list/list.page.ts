import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { IonList, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  usuarios: Observable<any>;

  @ViewChild('lista', {static: false}) lista: IonList;

  constructor(private dataServices: DataService, private toastCrtl: ToastController) { }

  ngOnInit() {
    this.usuarios = this.dataServices.getUsers();
  }

  async presentToast(message:string) {
    const toast = await this.toastCrtl.create({
      message,
      duration: 2000
    });
    toast.present();
  }

  favorite(user) {
    //console.log('Favorite', user);
    this.presentToast('Guardo en Favoritos');
    this.lista.closeSlidingItems();
  }

  share(user) {
    //console.log('Share', user);
    this.presentToast('Compartido');
    this.lista.closeSlidingItems();
  }

  borrar(user) {
    //console.log('Borrar', user);
    this.presentToast('Borrado');
    this.lista.closeSlidingItems();
  }

}
