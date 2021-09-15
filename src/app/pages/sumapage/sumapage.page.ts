import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-sumapage',
  templateUrl: './sumapage.page.html',
  styleUrls: ['./sumapage.page.scss'],
})
export class SumapagePage implements OnInit {

  n1:number;
  n2:number;

  a:number;
  b:number;

  constructor(private alertController:AlertController) { }

  ngOnInit() {
  }

  async Sumar() {
    let res=this.n1+this.n2;
    const alert = await this.alertController.create({
      
      header: 'Resultado',
      message: res.toString(),
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }


  async onSubmit(form)
  {

    console.log({form});
    const alert = await this.alertController.create({
      
      header: 'Resultado con Form',
      message: (this.a+this.b).toString(),
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
}
