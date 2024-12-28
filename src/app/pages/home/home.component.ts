import { Component, inject, OnInit, signal } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { UtilsService } from '../../services/utils.service';
import { UserMessageComponent } from './components/user-message/user-message.component';

import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';

const Material = [MatIconModule, MatButtonModule];

@Component({
  selector: 'app-home',
  imports: [FormsModule, ReactiveFormsModule, Material, HeaderComponent, FooterComponent, UserMessageComponent],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  utilService = inject(UtilsService);
  user = signal({ nome: '', photoAvatar: '', idade: 0 });
  msgDig = signal(true);
  msg = signal('');

  listMessage = signal([
    {photoAvatar: '../../../assets/images/photo-user.png', msg: 'Oi estou aqui bla bla bla!', userMsg: false}
  ])

  ngOnInit() {
    const user = (this.utilService.getFromLocalStorage('user'));
    if (user) {
      this.user.update(() => user);
    } else {
      console.log('sem user');
    }
    
  }

  //form
  msgForm = new FormGroup({
    message: new FormControl('', [Validators.required, Validators.minLength(2)]), 
  });

  onSubmit() {
    this.msg.update(() => String(this.msgForm.value.message) );
    this.msgDig.update(() => false);
    this.addListMessage(this.user().photoAvatar, this.msg(), true);
    this.msgForm.reset();
    console.log(this.listMessage());
  }

  addListMessage(photoAvatar: string, msg: string, userMsg: boolean) {
    this.listMessage.update(listMessage => [...listMessage, {photoAvatar, msg, userMsg}]);  
    console.log(this.user().photoAvatar);
  }


}
