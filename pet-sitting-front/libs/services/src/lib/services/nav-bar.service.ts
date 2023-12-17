import { Injectable } from '@angular/core';
import {  BehaviorSubject } from 'rxjs';

@Injectable({providedIn : 'root',})
export class NavBarService {

 showProfilDrop !: BehaviorSubject<boolean>
 constructor(){
this.showProfilDrop = new BehaviorSubject(false);
 }
  
 hide(){

  this.showProfilDrop.next(false);
 }
 display(){
  this.showProfilDrop.next(true);
 }

}