import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsModalRef, BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { ModalConnexionComponent } from '@pet-sitting-front/authentication';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {  NavBarService } from '@pet-sitting-front/services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'pet-sitting-front-nav-bar',
  standalone: true,
  imports: [CommonModule, ModalModule, ModalConnexionComponent , MatIconModule, MatMenuModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
  providers: [BsModalService]
})
export class NavBarComponent implements OnDestroy {

  isAuthenitified !: boolean;
  bsModalRef!: BsModalRef;
  showPrfileDrop !: boolean;
  subscription : Subscription;
  constructor(private modalService: BsModalService, private navBarService: NavBarService) {
this.isAuthentified();
if(this.isAuthenitified)
this.navBarService.display();
this.subscription = this.navBarService.showProfilDrop.subscribe((value)=>

this.showPrfileDrop = value)
  }


 
  openModalWithComponent() {
    const initialState = {
      list: [
        'Open a modal with component',
        'Pass your data',
        'Do something else',
        '...'
      ],
      title: 'Connexion'
    };
    this.bsModalRef = this.modalService.show(ModalConnexionComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
  }


  logOut(){
  
localStorage.setItem('IsAuthentified', 'false');
localStorage.setItem('UserConnected', '');

this.navBarService.hide();
;
  }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  isAuthentified(){
    const  isAuthenitifiedString = localStorage.getItem('IsAuthentified');
    const  userIDString = localStorage.getItem('UserConnected');

   this.isAuthenitified= isAuthenitifiedString != null && ! undefined && isAuthenitifiedString!= 'false'&&
   userIDString!= null && userIDString !=undefined? JSON.parse(isAuthenitifiedString) : false ;
   


  }
}
