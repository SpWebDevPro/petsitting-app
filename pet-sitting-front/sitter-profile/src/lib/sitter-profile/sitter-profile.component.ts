import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateDataSitterComponent } from '@pet-sitting-front/update-data-sitter';

@Component({
  selector: 'pet-sitting-front-sitter-profile',
  standalone: true,
  imports: [CommonModule, UpdateDataSitterComponent],
  templateUrl: './sitter-profile.component.html',
  styleUrl: './sitter-profile.component.css',
})
export class SitterProfileComponent {}
