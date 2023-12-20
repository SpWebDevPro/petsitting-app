import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupService } from '@pet-sitting-front/services';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'pet-sitting-front-validation-popup',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatFormFieldModule,
    MatInputModule],
  templateUrl: './validation-popup.component.html',
  styleUrl: './validation-popup.component.scss',
})
export class ValidationPopupComponent {

  constructor(private popupService: PopupService) {}

  openPopup() {
    this.popupService.openPopup();
  }

  closeDialog(){
    
  }
}
