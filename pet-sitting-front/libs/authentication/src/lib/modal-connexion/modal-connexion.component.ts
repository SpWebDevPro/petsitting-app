import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsModalRef, BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ModalInscriptionComponent } from '../modal-inscription/modal-inscription.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input'; 
import {  NavBarService, UserService, UtilService } from '@pet-sitting-front/services';
import { UserModel }  from '@pet-sitting-front/services';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@Component({
  selector: 'pet-sitting-front-modal-connexion',
  standalone: true,
  imports: [CommonModule, ModalModule, MatFormFieldModule, MatInputModule, MatAutocompleteModule, ReactiveFormsModule,
     FormsModule, FontAwesomeModule
  ],
  providers: [BsModalService],
  templateUrl: './modal-connexion.component.html',
  styleUrl: './modal-connexion.component.scss',
})
export class ModalConnexionComponent{
  email!: string;
  password!: string;
  title!: string;
  closeBtnName!: string;
  list: any[] = [];
  isErrorLogin : boolean = false ;
  isErrorPassw : boolean = false ;
  faSpinner = faSpinner;
  filteredOptions!: string[];
  buttonLoading!: boolean;
  constructor(public bsModalRef: BsModalRef, private modalService: BsModalService,
    private  userService: UserService, private  navBarService: NavBarService, private utilService: UtilService) {


    }

  userConnected !: UserModel;



openInscriptionModal() {
  this.bsModalRef.hide();
  const initialState = {
    list: [
      'Open a modal with component',
      'Pass your data',
      'Do something else',
      '...'
    ],
    title: 'Créer un compte'
  };
  this.bsModalRef = this.modalService.show(ModalInscriptionComponent, {initialState});
  this.bsModalRef.content.closeBtnName = 'Close';
}
 
logIn(){

this.buttonLoading = true;

 const passwordEncryted =  this.utilService.aesEncrypt(this.password) ;

 this.userService.login(this.email, passwordEncryted).subscribe({
  complete: () => {}, // completeHandler
  error: () => {this.isErrorLogin = true;
   this. buttonLoading = false;
  },    // errorHandler 
  next: (data) => { 
    this. userConnected =  data
    if(this.userConnected != null &&! undefined &&this.userConnected.id != null) {
     
      localStorage.setItem('IsAuthentified', 'true');
      localStorage.setItem('UserConnected', this.userConnected.id?.toString());
  
      this.navBarService.display();
     this.buttonLoading = false;
      this.bsModalRef.hide();
  
     
  
    } 
    else {
      this.isErrorPassw = true ;
      this. buttonLoading = false;
      this.navBarService.hide();
    }
  }}
 )};     





    



}
