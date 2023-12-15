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
  displayForm: boolean = false;
  faPen = faPen;
  userId = 4;

  onModifyClick() {
    console.log("j'ai cliqué sur modifier");
    this.displayForm = !this.displayForm;
  }
}
