import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // resul=null;
  // dato=null;

  constructor() {}
  resul=""
  solucion=''

  dato=[];
  dato2=[];

  bandera=1;
  ngOnInt(){

  }
  num(num){
    this.dato.push(num);
    if(this.bandera!=0){
      this.resul=this.resul+num
    }else{
      this.resul=num
      this.bandera=1
      
    }
    
  }
  borrar(){
  this.dato=[]

  this.dato2=[]
  this.resul="0"
  this.solucion=''
  }
  operar(signo){
    this.dato.push(signo);
    this.resul=this.resul+signo

  }
  slucion(){
    //alert("operando")

    this.solucion=eval(this.dato.join(''))
    this.resul=this.solucion
    this.dato2=this.dato
    //alert(this.solucion)
    this.bandera=0

  }
}

