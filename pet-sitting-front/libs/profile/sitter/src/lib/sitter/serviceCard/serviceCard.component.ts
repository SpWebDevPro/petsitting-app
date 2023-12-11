import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Service } from './../../../../../../models/src/lib/models/serviceType';

@Component({
  selector: 'pet-sitting-front-service-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './serviceCard.component.html',
  styleUrl: './serviceCard.component.scss',
})
export class ServiceCardComponent {
  @Input()
  sitterService!: Service;

  onModifyClick() {
    console.log("j'ai cliqué sur modifier");
  }

  onDeleteClick() {
    console.log("j'ai cliqué sur supprimer");
  }
}
