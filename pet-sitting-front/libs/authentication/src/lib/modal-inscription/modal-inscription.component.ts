import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsModalRef } from 'ngx-bootstrap/modal';
import {
  UserModel,
  RoleEnum,
  NavBarService,
  UtilService,
} from '@pet-sitting-front/services';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '@pet-sitting-front/services';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'pet-sitting-front-modal-inscription',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, FontAwesomeModule],
  templateUrl: './modal-inscription.component.html',
  styleUrl: './modal-inscription.component.scss',
})
export class ModalInscriptionComponent {
  title!: string;
  closeBtnName!: string;
  list: any[] = [];
  isanErrorReccord!: boolean;
  faSpinner = faSpinner;
  buttonLoading!: boolean;
  user: UserModel = {};
  isSitter: boolean = false;
  constructor(
    public bsModalRef: BsModalRef,
    private userService: UserService,
    private navBarService: NavBarService,
    private utilService: UtilService
  ) {}

  userConnected!: UserModel;

  createAccount() {
    this.user.role = this.isSitter ? RoleEnum.SITTER : RoleEnum.PARENT;
    this.user.pays = 'france';
    this.user.status = 'AVAILABLE';
    this.buttonLoading = true;
    this.user.password = this.utilService.aesEncrypt(this.user.password ?? '');
    this.userService.createUser(this.user).subscribe({
      complete: () => {}, // completeHandler
      error: () => {
        this.buttonLoading = false;
        this.isanErrorReccord = true;
      }, // errorHandler
      next: (data) => {
        this.userConnected = data;

        if (
          this.userConnected != null &&
          this.userConnected.id != null &&
          this.userConnected != undefined
        ) {
          localStorage.setItem('IsAuthentified', 'true');
          localStorage.setItem(
            'UserConnected',
            this.userConnected.id.toString()
          );
          this.navBarService.display();
          this.bsModalRef.hide();
        } else {
          this.isanErrorReccord = true;
          this.buttonLoading = false;
        }
      },
    });
  }
}
