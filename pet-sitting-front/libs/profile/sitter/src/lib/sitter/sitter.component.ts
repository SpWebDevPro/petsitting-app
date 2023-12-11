import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesListComponent } from './serviceList/serviceList.component';
import { DataSitterComponent } from './dataSitter/dataSitter.component';
import { DataSitterFormComponent } from './dataSitterForm/dataSitterForm.component';

@Component({
  selector: 'pet-sitting-front-sitter',
  standalone: true,
  imports: [
    CommonModule,
    DataSitterComponent,
    DataSitterFormComponent,
    ServicesListComponent,
  ],
  templateUrl: './sitter.component.html',
  styleUrl: './sitter.component.scss',
})
export class SitterComponent {
  displayForm: boolean = false;

  onModifyClick() {
    console.log("j'ai cliqué sur modifier");
    this.displayForm = !this.displayForm;
  }
}
