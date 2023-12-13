import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from '@pet-sitting-front/nav-bar';

@Component({
  standalone: true,
  imports: [ RouterModule, NavBarComponent],
  selector: 'pet-sitting-front-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'pet-sitting-front';
}
