import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { FormFields } from '../shared/interface/formfields';
@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {
  public registerForm: FormGroup;
  public formFields: FormFields;
  public submitted = false;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this._formBuilder.group({
      fullName: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]),
      email: new FormControl('', [Validators.email]),
      phoneNumber: new FormControl('', [Validators.pattern('^[0-9]*$')]),
      pwd: new FormControl('', [Validators.pattern('(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$')])
    });
  }

  public submitForm() {
    this.submitted = true;
      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }
      alert('SUCCESS!! :-)');
  }

}
