import { Component, inject, input} from "@angular/core";
import { RouterLink } from "@angular/router";
import { UtilsService } from "../../services/utils.service";

@Component({
    selector: "app-header",
    imports: [RouterLink],
    templateUrl: "./header.component.html"
})
export class HeaderComponent {
     user = input({nome: '', photoAvatar: ''});
     utilsService = inject(UtilsService);

     getImg(){
        return "background-image: url('"+this.user().photoAvatar+"');"
      }

      logout(){
        localStorage.removeItem('user');
        this.utilsService.routerLink('/login');

      }
}   