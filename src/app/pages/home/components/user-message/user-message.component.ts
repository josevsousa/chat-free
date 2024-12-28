import { Component, input } from '@angular/core';

import {MatIconModule} from '@angular/material/icon';

const Material = [MatIconModule]
@Component({
  selector: 'user-message',
  imports: [Material],
  templateUrl: './user-message.component.html',
  styleUrl: './user-message.component.scss'
})
export class UserMessageComponent {
  photoAvatar = input('');
  userMsg = input(true);
  msg = input('messagem enviada');
}
