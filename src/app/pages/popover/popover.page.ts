import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopinfoComponent } from 'src/app/components/popinfo/popinfo.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor(private popoverCrtl: PopoverController) { }

  ngOnInit() {
  }

  async mostrarPop(evento) {
    const popover = await this.popoverCrtl.create({
      component: PopinfoComponent,
      event: evento,
      mode:'ios',
      backdropDismiss: false
    });
    await popover.present();

    //const {data} =await popover.onDidDismiss(); //ejecutala cuando se ha cerrado
    const {data} =await popover.onWillDismiss(); //cuando esta a punto de cerrarse ejecuta esta opcion

    console.log('padre: ', data);
  }

}
