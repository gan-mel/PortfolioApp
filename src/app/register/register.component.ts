import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

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

  constructor() { }

  ngOnInit() {
  }

}
