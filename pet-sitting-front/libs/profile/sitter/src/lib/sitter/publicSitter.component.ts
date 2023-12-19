import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataSitterComponent } from './dataSitter/dataSitter.component';
import { ServicesListComponent } from './serviceList/serviceList.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ActivatedRoute } from '@angular/router';
import { UserModel, UserService } from '@pet-sitting-front/services';
import { EMPTY, Observable, catchError } from 'rxjs';

@Component({
  selector: 'pet-sitting-front-public-sitter',
  standalone: true,
  imports: [
    CommonModule,
    DataSitterComponent,
    ServicesListComponent,
    FontAwesomeModule,
  ],
  templateUrl: './publicSitter.component.html',
  styleUrl: './publicSitter.component.scss',
})
export class PublicSitterComponent implements OnInit {
  //propriétés d'affichage
  titleSectionInfos: string = 'Informations';

  //propriétés passées aux enfants serviceList et datasitter
  displaySitterProfileButtons = false;
  userId!: number;
  user$!: Observable<UserModel>;
  selectedServiceId!: number;
  titleSectionServices: string = 'Toutes les prestations';

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit() {
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
}
