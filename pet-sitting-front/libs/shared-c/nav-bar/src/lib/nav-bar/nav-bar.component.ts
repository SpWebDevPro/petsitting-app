import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsModalRef, BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { ModalConnexionComponent } from '@pet-sitting-front/authentication';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import {
  BookingModel,
  BookingService,
  BookingStatuEnum,
  NavBarService,
} from '@pet-sitting-front/services';
import { Subscription } from 'rxjs';
import { Route, RouterModule } from '@angular/router';
import { faBell, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BookingNotificationComponent } from '@pet-sitting-front/sitter';

@Component({
  selector: 'pet-sitting-front-nav-bar',
  standalone: true,
  imports: [
    CommonModule,
    ModalModule,
    ModalConnexionComponent,
    MatIconModule,
    MatMenuModule,
    RouterModule,
    FontAwesomeModule,
    BookingNotificationComponent,
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
  providers: [BsModalService],
})
export class NavBarComponent implements OnDestroy {
  isAuthenitified!: boolean;
  bsModalRef!: BsModalRef;
  showPrfileDrop!: boolean;
  subscription: Subscription;
  faBell = faBell;
  currentUserID!: number;

  notifCount!: number;
  listBookingPending!: BookingModel[];
  constructor(
    private modalService: BsModalService,
    private navBarService: NavBarService,
    private bookingService: BookingService
  ) {
    this.isAuthentified();
    if (this.isAuthenitified) this.navBarService.display();

    this.subscription = this.navBarService.showProfilDrop.subscribe((value) => {
      if (value) this.getBookingPending();
      this.showPrfileDrop = value;
    });
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

  logOut() {
    localStorage.setItem('IsAuthentified', 'false');
    localStorage.setItem('UserConnected', '');

    this.navBarService.hide();
  }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  isAuthentified() {
    const isAuthenitifiedString = localStorage.getItem('IsAuthentified');
    const userIDString = localStorage.getItem('UserConnected');

    this.currentUserID = Number(userIDString);
    this.isAuthenitified =
      isAuthenitifiedString != null &&
      !undefined &&
      isAuthenitifiedString != 'false' &&
      userIDString != null &&
      userIDString != undefined
        ? JSON.parse(isAuthenitifiedString)
        : false;
  }

  getBookingPending() {
    this.bookingService
      .getBookingOfSitterByStatus(this.currentUserID, BookingStatuEnum.PENDING)
      .subscribe({
        complete: () => {}, // completeHandler
        error: (err) => {
          console.log(err);
        }, // errorHandler
        next: (data) => {
          this.notifCount = data.length;
          this.listBookingPending = data;
        },
      });
  }

  accepteBooking($event: boolean, bookingId: number) {
    const status = $event
      ? BookingStatuEnum.ACCEPTED
      : BookingStatuEnum.REJECTED;
    this.bookingService.updateBookingStatus(bookingId, status).subscribe({
      next: (value) => {
        this.listBookingPending = this.listBookingPending.filter(
          (b) => b.id !== bookingId
        );

        this.notifCount -= 1;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
