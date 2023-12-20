import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserModel, UserService } from '@pet-sitting-front/services';
import { EMPTY, Observable, catchError } from 'rxjs';
import { AnimalComponent } from '@pet-sitting-front/animal';

@Component({
  selector: 'pet-sitting-front-parent',
  standalone: true,
  imports: [CommonModule, AnimalComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
})
export class ParentComponent {
  //propriétés d'affichage
  titleSectionAnimaux: string = 'Mes animaux';

  userId!: number;
  user$!: Observable<UserModel>;

  constructor(private userService: UserService) {}

  ngOnInit() {
    if (localStorage.getItem('UserConnected') !== null) {
      this.userId = +localStorage.getItem('UserConnected')!;
    }

    if (this.userId) {
      this.user$ = this.userService.getUserById(this.userId).pipe(
        catchError((error) => {
          console.error(error);
          return EMPTY;
        })
      );
    }
  }
}
