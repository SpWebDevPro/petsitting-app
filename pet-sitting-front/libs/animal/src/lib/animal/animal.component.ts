import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'pet-sitting-front-animal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './animal.component.html',
  styleUrl: './animal.component.css',
})



export class AnimalComponent implements OnInit {
  @Input() animal: any; // Adjust the type based on your AnimalModel

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // You can make HTTP requests here to fetch animal data from the backend
  }
}
