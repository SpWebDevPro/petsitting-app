import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesListComponent } from './serviceList/serviceList.component';
import { DataSitterComponent } from './dataSitter/dataSitter.component';
import { DataSitterFormComponent } from './dataSitterForm/dataSitterForm.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { EMPTY, Observable, catchError } from 'rxjs';
import { UserModel, UserService } from '@pet-sitting-front/services';

@Component({
  selector: 'pet-sitting-front-sitter',
  standalone: true,
  imports: [
    CommonModule,
    DataSitterComponent,
    DataSitterFormComponent,
    ServicesListComponent,
    FontAwesomeModule,
  ],
  templateUrl: './sitter.component.html',
  styleUrl: './sitter.component.scss',
})
export class SitterComponent {
  //propriétés d'affichage
  displayForm: boolean = false;
  faPen = faPen;
  titleSectionInfos: string = 'Mes informations';

  //propriétés passées aux enfants serviceList et dataSitter
  displaySitterProfileButtons = true;
  userId!: number;
  user$!: Observable<UserModel>;
  titleSectionServices: string = 'Mes services';

  constructor(private userService: UserService) {}

  ngOnInit() {
    if (localStorage.getItem('UserConnected') !== null) {
      this.userId = +localStorage.getItem('UserConnected')!;
    }

    if (this.userId) {
      this.user$ = this.userService.getUserById(this.userId).pipe(
        catchError((error) => {
          console.error(error);
          return EMPTY;
        })
      );
    }
  }

  onModifyClick() {
    this.displayForm = !this.displayForm;
  }
}
