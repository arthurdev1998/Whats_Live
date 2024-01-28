import { Component, inject } from '@angular/core';
import { UserService } from '../../user.service';
import { User } from '../../../models/user.model';
import { catchError, of, take } from 'rxjs';
import { AsyncPipe } from '@angular/common';


@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})

export class LoginPageComponent {

  private userService = inject(UserService);
  protected users$ = this.userService.getUser()
    .pipe(catchError(err => {
      console.log('Deu ERRO PORRA', err);
      return of([])
    }));

  protected users: User[] = [];

  constructor() {
    this.users$.pipe(take(1))
      .subscribe(x => this.users = x);
    // o take é um unsubscrive: após a primeira resposta, será limpado da ram
    console.log("oi");
    this.users$.subscribe(x => console.log(x));
  }
}