import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  readonly REGEX = /^[a-zA-Z0-9!_ @#$%^&*()_+\-=\[\]{};'`’–:"\\|,.<>\/?]*$/;
  passwordControl = new FormControl('', [Validators.required, Validators.maxLength(15), Validators.pattern(this.REGEX)]);
  emailControl = new FormControl('', [Validators.required, Validators.email]);
  isValidMode: boolean;
  wrongIdentification: boolean = false;

  constructor(private router: Router, private fb: FormBuilder) {}
  ngOnInit(): void {
    this.initForm();
  }
  
  initForm() {
    this.loginForm = this.fb.group({
      email: this.emailControl,
      password: this.passwordControl
    });

  }
  onSubmit() {
    if(this.loginForm.valid) {
      if(environment.userEmail == this.emailControl.value && environment.userPassword == this.passwordControl.value){
              this.isValidMode = false;
      this.router.navigate(['/jokes']);
      }
      else {
        this.wrongIdentification = true
      }
    }
    this.isValidMode = true;
  }


}
