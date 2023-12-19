import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataSitterComponent } from './dataSitter/dataSitter.component';
import { ServicesListComponent } from './serviceList/serviceList.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModel, UserService } from '@pet-sitting-front/services';
import { EMPTY, Observable, catchError } from 'rxjs';
import { BsModalRef, BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { ModalConnexionComponent } from '@pet-sitting-front/authentication';

@Component({
  selector: 'pet-sitting-front-public-sitter',
  standalone: true,
  imports: [
    CommonModule,
    DataSitterComponent,
    ServicesListComponent,
    FontAwesomeModule,
    ModalModule,
    ModalConnexionComponent,
  ],
  templateUrl: './publicSitter.component.html',
  styleUrl: './publicSitter.component.scss',
  providers: [BsModalService],
})
export class PublicSitterComponent implements OnInit {
  //TODO : improvement : the selected service should
  //be displayed first in the list

  //propriétés d'affichage
  titleSectionInfos: string = 'Informations';
  bsModalRef!: BsModalRef;

  //propriétés passées aux enfants serviceList et datasitter
  displaySitterProfileButtons = false;
  userId!: number;
  user$!: Observable<UserModel>;
  selectedServiceId!: number;
  titleSectionServices: string = 'Toutes les prestations';

  isUserAuthenticated: string | null = 'false';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private modalService: BsModalService
  ) {}

  ngOnInit() {
    if (localStorage.getItem('IsAuthentified') !== null) {
      this.isUserAuthenticated = localStorage.getItem('IsAuthentified');
    }
    this.route.params.subscribe((params) => {
      this.userId = params['userId'];
      this.selectedServiceId = params['serviceId'];
    });
    if (this.userId) {
      this.user$ = this.userService.getUserById(this.userId).pipe(
        catchError((error) => {
          console.error(error);
          return EMPTY;
        })
      );
    }
  }

  ngDoCheck() {
    if (localStorage.getItem('IsAuthentified') !== null) {
      this.isUserAuthenticated = localStorage.getItem('IsAuthentified');
    }
  }

  getServiceBookingId(serviceId: number) {
    console.log('[public sitter], le servieId cliqué est ', serviceId);
    //ok si le user est connecté je navigue vers booking
    if (this.isUserAuthenticated === 'true') {
      this.router.navigate(['booking', serviceId]);
    }
    //sinon je lpropose de se connecter
    else {
      this.openModalWithComponent();
    }
  }

  openModalWithComponent() {
    const initialState = {
      list: [
        'Open a modal with component',
        'Pass your data',
        'Do something else',
        '...',
      ],
      title: 'Connexion',
    };
    this.bsModalRef = this.modalService.show(ModalConnexionComponent, {
      initialState,
    });
    this.bsModalRef.content.closeBtnName = 'Close';
  }
}
