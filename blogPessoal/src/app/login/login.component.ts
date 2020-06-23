import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { UserLogin } from '../model/UserLogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin: UserLogin = new UserLogin();

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  entrar() {
    this.authService.logar(this.userLogin).subscribe((resp: UserLogin) => {
      this.userLogin = resp;
      localStorage.setItem('token', this.userLogin.token);
      localStorage.setItem('nome', this.userLogin.nome);
      this.router.navigate(['/feed'])
    }, err => {
      alert('Houve um erro ao entrar. verifique o email e a senha, por favor!')
    });
  }

}
