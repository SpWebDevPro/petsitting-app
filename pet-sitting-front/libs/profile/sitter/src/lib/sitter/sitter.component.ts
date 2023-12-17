import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesListComponent } from './serviceList/serviceList.component';
import { DataSitterComponent } from './dataSitter/dataSitter.component';
import { DataSitterFormComponent } from './dataSitterForm/dataSitterForm.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';

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

  //propriétés passés à l'enfant serviceList
  displaySitterProfileButtons = true;
  userId = 4;
  //user!: UserModel;
  titleSectionServices: string = 'Mes services';

  onModifyClick() {
    this.displayForm = !this.displayForm;
  }
}
