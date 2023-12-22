import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ValidationPopupComponent } from '@pet-sitting-front/popup';

@Injectable({
  providedIn: 'root',
})
export class PopupService {
  constructor(private dialog: MatDialog) {}

  openPopup() {
    this.dialog.open(ValidationPopupComponent);
  }
  closePopup() {
    this.dialog.closeAll();
  }
}
