import { inject, Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
    router = inject(Router);

    // ============ Router Link =============
    routerLink(url: string) {
      return this.router.navigateByUrl(url);
    }

    // ========== Camera ==========
    takePicture(promptLabelHeader: string) {
      console.log("to aqui!!");
      return Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Prompt,
        promptLabelHeader,
        promptLabelPhoto: 'Selecione uma imagen',
        promptLabelPicture: 'Tirar uma photo'
      });
    };

    // ============ Localstore  =============
    saveInLocalStorage(key: string, value: any) {
      return localStorage.setItem(key, JSON.stringify(value));
    }
    getFromLocalStorage(key: string) {
      return JSON.parse(localStorage.getItem(key)!);
    }
    delFromLocalStorage(key: string) {
      return localStorage.removeItem(key);
    }
}
