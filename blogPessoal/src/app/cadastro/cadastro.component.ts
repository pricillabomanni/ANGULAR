import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { UserLogin } from '../model/UserLogin';
import { User } from '../model/User';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  user: User = new User;
  senha: string 
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  conferirSenha(event: any){
    this.senha = event.target.value;

  }

  cadastrar(){
    if(this.senha === this.user.senha){
      this.authService.cadastrar(this.user).subscribe((resp: User) => {
        this.user = resp;
        alert("Usuario cadastrado com sucesso");
      this.router.navigate(['/login'])
      })
    }else {
      alert("As senhas são diferentes!")
    }
    
  }

}
