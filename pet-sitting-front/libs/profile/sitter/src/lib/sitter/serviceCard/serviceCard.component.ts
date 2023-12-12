import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceModel } from '@pet-sitting-front/services';
@Component({
  selector: 'pet-sitting-front-service-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './serviceCard.component.html',
  styleUrl: './serviceCard.component.scss',
})
export class ServiceCardComponent {
  @Input()
  sitterService!: ServiceModel;

  onModifyClick() {
    console.log("j'ai cliqué sur modifier");
  }

  onDeleteClick() {
    console.log("j'ai cliqué sur supprimer");
  }
}
