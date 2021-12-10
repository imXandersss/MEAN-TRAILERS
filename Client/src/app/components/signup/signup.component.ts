import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user={
    email: '',
    password:'',
    username: ''
  }

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {}

  signUp(){
    this.authService.singUp(this.user)
      .subscribe(
      res =>{
        console.log(res);//token
        localStorage.setItem('token', res);
        this.router.navigate(['/private']);
        //TODO: Revisar a que ruta se supone que debe redireccionnar
      },
      err => console.log(err)
    )
  }

}
