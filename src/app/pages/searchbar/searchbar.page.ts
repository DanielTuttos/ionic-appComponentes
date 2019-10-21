import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {

  albumes: any[] = [];

  textoBuscar: string;

  constructor(private dataServices: DataService) { }

  ngOnInit() {
    this.dataServices.getSlbumes()
      .subscribe((albumes: any) => {
        //console.log(albumes);
        this.albumes = albumes;
      });
  }

  buscar(event) {
    //console.log(event);
    this.textoBuscar = event.detail.value;
  }

}
