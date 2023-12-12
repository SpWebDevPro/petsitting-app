import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from '@pet-sitting-front/nav-bar';
import { HeaderComponent } from '@pet-sitting-front/header';
import { CardServiceComponent } from '../card-service/card-service.component';
@Component({
  selector: 'pet-sitting-front-home',
  standalone: true,
  imports: [CommonModule, NavBarComponent, HeaderComponent, CardServiceComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {


  total: number[] =[ 5,5,5,4,5,5,5,5,5];
}
