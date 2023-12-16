import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceModel } from '@pet-sitting-front/services';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'pet-sitting-front-service-card',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './serviceCard.component.html',
  styleUrl: './serviceCard.component.scss',
})
export class ServiceCardComponent {
  @Input()
  sitterService!: ServiceModel;

  faPen = faPen;
  faTrash = faTrash;

  onModifyClick() {
    console.log("j'ai cliqué sur modifier");
    //TODO
  }

  onDeleteClick() {
    console.log("j'ai cliqué sur supprimer");
    //TODO
  }
}
