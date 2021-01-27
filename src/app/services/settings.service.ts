import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

      //Archivo que se encuantra en el index.html
      public linkTheme = document.querySelector('#theme');
    
      constructor() { 
        //enviamos al index el tema seleccionado o el por defecto
        const url = localStorage.getItem('theme') || "./assets/css/colors/purple.css";
        this.linkTheme.setAttribute('href', url);
      }
    
      //cabia el tema 
      changeTheme(theme: string) {
        const url = `./assets/css/colors/${theme}.css`;
        this.linkTheme.setAttribute('href', url);
        localStorage.setItem('theme', url);
        this.checkCurrentTheme();
    }
    
    //se agrega la palomita la cual esta en la clase working
    checkCurrentTheme() {
      
       const links = document.querySelectorAll('.selector');
    
          links.forEach(elem => {
     
           elem.classList.remove('working');
           const btnTheme = elem.getAttribute('data-theme');
           const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;
           const currentTheme = this.linkTheme.getAttribute('href');
       
           if(btnThemeUrl === currentTheme) {
               elem.classList.add('working');
           }
     
      });
     
     }
}
