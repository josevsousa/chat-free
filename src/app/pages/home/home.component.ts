import { Component, inject, OnInit, signal } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  utilService = inject(UtilsService);
  user = signal({ nome: '', photoAvatar: '', id: 0 });

  ngOnInit() {
    const user = (this.utilService.getFromLocalStorage('user'));
    if (user) {
      this.user.update(() => user);
      console.log(this.user());
    } else {
      console.log('sem user');
    }
    
  }

}
