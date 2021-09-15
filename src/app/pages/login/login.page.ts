import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

usuario={
  username:'',
  password:''
}

  constructor(private router:Router,private alertController:AlertController) { }

  ngOnInit() {
  }

  onSubmit(){
    
    console.log(this.usuario);
    if (this.usuario.username==="wacoldo" && this.usuario.password==="123")
    {
      let navextras:NavigationExtras={
        state:{
          miusuario:this.usuario
        }
      }

      this.router.navigate(['/home'],navextras);
    }
    else{
      console.log("todo mal!!!!")
      let mensaje='Reingrese usuario y/o password';
      this.presentAlert(mensaje);
    }

  }

  async presentAlert(mensaje:string) {
    const alert = await this.alertController.create({
      cssClass: 'personalizada',
      header: 'Error al Ingresar',
      subHeader: 'Datos no válidos',
      message: mensaje,
      buttons: ['OK']
    });

    await alert.present();
  }

}
