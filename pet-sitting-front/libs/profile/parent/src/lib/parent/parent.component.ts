import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pet-sitting-front-parent',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
})
export class ParentComponent {}
