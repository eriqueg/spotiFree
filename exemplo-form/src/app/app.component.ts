import { Component, OnInit } from '@angular/core';
import { Contact } from './model/contact.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  //list of the all contacts
  allContacts = []

  //object of a new contact
  //will be bound to the form's inputs
  contact = new Contact()

  // this method is defined in the OnInit interface
  //It's executed when the component is loaded
  //to be used you must add "Implements OnInit" to the class declaration
  ngOnInit(){
      this.loadlist()
  }

  save(){
    this.allContacts.push(this.contact)
    this.savelist()
    this.contact = new Contact

    
  }

  savelist(){
    //save list on localstorage
    //stingfy converts JS object in string because localStorage supports only string values
    localStorage.setItem("contact-list", JSON.stringify(this.allContacts))
  }

  loadlist(){
    //get object of the local storage
    let list = localStorage.getItem("contact-list")
    //if there no lists saved, result will be null
    if(list){

      //if it find anythinq contact convrts for JSOn and object
      this.allContacts = JSON.parse(list)
    }
  }




}
