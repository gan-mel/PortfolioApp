import { Component, OnInit,  Output, EventEmitter  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() onPosted = new EventEmitter();

  constructor( private formBuilder: FormBuilder, private auth: AuthService) { }
  form: FormGroup;

  public datepickerOptions: Pickadate.DateOptions = {
  clear: 'Clear', // Clear button text
  close: 'Ok',    // Ok button text
  today: 'Today', // Today button text
  closeOnClear: true,
  closeOnSelect: false,
  format: 'dddd, dd mmm, yyyy', // Visible date format (defaulted to formatSubmit if provided otherwise 'd mmmm, yyyy')
  formatSubmit: 'yyyy-mm-dd',   // Return value format (used to set/get value)
  onClose: () => alert('Close has been invoked.'),
  onOpen: () => alert('Open has been invoked.'),
  selectMonths: true, // Creates a dropdown to control month
  selectYears: 10,    // Creates a dropdown of 10 years to control year,
};

public dateOfBirth = '2017-08-12';


  register = {
    first : '',
    email : '',
    last : '',
    password : ''
  };

  result;

  submitted = false;

  errorMessages = {
    input: {
      required: 'This field is required.',
    },
    select: {
      required: 'This field is required.',
    },
    datepicker: {
      required: 'This field is required.',
    },
    timepicker: {
      required: 'This field is required.',
    },
  };

  buildForm() {
    this.form = this.formBuilder.group({
      first: [this.register.first],
      email: [this.register.email, Validators.required],
      last: [this.register.last, Validators.required],
      password: [this.register.password, Validators.required]
    });
  }



  onSubmit(): void {
    if (!this.form.valid) {
      
      return;
    }
    this.submitted = true;
    this.register = Object.assign({}, this.form.value);
    // console.log(this.register);

      this.auth.registerNew(this.register)
           // .subscribe(didReg => this.result = didReg);

    //  .subscribe(didReg => this.result = didReg);
      this.onPosted.emit(this.register);
      

}

  ngOnInit() {
    this.buildForm();
  }

}
