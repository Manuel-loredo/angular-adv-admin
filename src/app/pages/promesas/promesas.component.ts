import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html'
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
    this.getUsuarios().then(usuarios => {
          console.log(usuarios);
    });
    // const promesa = new Promise( (resolve, rejects) => {
          
    //       if(false){
    //         resolve('Fin del Init');
    //       }else {
    //           rejects('Algo salio mal');
    //       }
      
    // });

    // promesa.then( (mensaje) => {
    //       console.log(mensaje);
    // }).catch( err => { 
    //   console.log(err); 
    // });

  }

  getUsuarios() {

    return new Promise(resolve => {
     
      fetch('https://reqres.in/api/users')
      .then(resp => resp.json() )
      .then( body => resolve( body.data));

    });
  
      
  
  }

}
