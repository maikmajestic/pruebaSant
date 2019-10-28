import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	document.getElementById('name').onkeypress=function(e){
	    if(("abcdefghijklmnopqrstuvwxyz ").indexOf(String.fromCharCode(e.keyCode))===-1){
	        e.preventDefault();
	        document.getElementById('name-error').innerHTML = 'Only put letters please';
	        return false;
	    }
  	}
  	document.getElementById('age').onkeypress=function(e){
  		const charCode = (e.which) ? e.which : e.keyCode;
  		if (charCode > 31 && (charCode < 48 || charCode > 57)) {
  			document.getElementById('age-error').innerHTML = 'Only put numbers please';
      		return false;
    	}
	}
  }

}
