import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UtilsService } from '../../services/utils.service';
import { RouterModule } from '@angular/router';

import  {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
const material = [ MatButtonModule, MatIconModule ];

@Component({
  selector: 'app-login',
  imports: [FormsModule, ReactiveFormsModule, RouterModule, material],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  //services
  utilsService = inject(UtilsService);

  //form
  profileForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });
    
  //vars
  photoAvatar = signal('../../assets/images/photo-user.png');

  onSubmit() {
    const key = new Date().getTime();
    const user = {id: key, nome: this.profileForm.value.firstName, photoAvatar: this.photoAvatar()};

    // add user no localstorage
    this.utilsService.saveInLocalStorage('user', user);
    this.utilsService.routerLink('/home');
    console.log(user);
  }

  getImg(){
    return "background-image: url('"+this.photoAvatar()+"');"
  }

   // //=========== Tirar/Selecionar Photo ==========
   async takeImage(){
    console.log('Tirar/Selecionar Photo');
    let dataUrl = (await this.utilsService.takePicture('Sua Imagem para o app')).dataUrl;
    const photoAvatar = String(dataUrl);
    this.photoAvatar.update(() => photoAvatar);
    //this.firebaseService.addPhotoAvatar(photoAvatar);
  }


}

