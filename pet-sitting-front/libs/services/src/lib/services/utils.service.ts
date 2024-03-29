
import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})

export class UtilService {
 
    encryptSecretKey : string = "petSitting";// must store in the database :p 


     aesEncrypt(data : string) {
        const iv = 'I8zyA4lVhMCaJ5Kg';
        const cipher = CryptoJS.AES.encrypt(data, CryptoJS.enc.Utf8.parse(this.encryptSecretKey), {
          iv: CryptoJS.enc.Utf8.parse(iv),
          mode: CryptoJS.mode.CBC
        });
      
        return cipher.toString();
      }
       aesDecrypt(data : string) {
        const iv = 'I8zyA4lVhMCaJ5Kg';
        const decipher = CryptoJS.AES.decrypt(data, CryptoJS.enc.Utf8.parse(this.encryptSecretKey), {
          iv: CryptoJS.enc.Utf8.parse(iv),
          mode: CryptoJS.mode.CBC
        });
      
        return decipher.toString();
      }


      getDaysBetweenTwoDates(start : Date, end : Date) : number{
        return Math.floor((Date.UTC(end.getFullYear(), end.getMonth(), end.getDate()) - Date.UTC(start.getFullYear(), start.getMonth(), start.getDate()) ) /(1000 * 60 * 60 * 24));

      }
      }

     