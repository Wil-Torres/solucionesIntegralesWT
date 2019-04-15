import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styles: [`
.fondo-contacto{
    color: #000!important;
    background-color: #9e9e9e!important;
}
.fondo-contacto-opciones{
    color: #fff!important;
    background-color: #616161!important;
}
.fondo-contacto-principal {
    color: #fff!important;
    background-color: #009688!important;
}
.boton-negro{
    color: #fff!important;
    background-color: #000!important;
}
.boton-negro:hover{
    color: #000!important;
    background-color: #ccc!important;
}
.pd-24{
    padding-top: 24px!important;
    padding-bottom: 24px!important;
}
.pd-16{
    padding-top: 16px!important;
    padding-bottom: 16px!important;
}
.font-25{
    font-size: 25px!important
}`]
})
export class ContactUsComponent implements OnInit {

  
  private _objeto : any = {};
  public get objeto() : any {
    return this._objeto;
  }
  public set objeto(v : any) {
    this._objeto = v;
  }
  

  constructor() { }

  ngOnInit() {
  }

  guardar(){
    alert("su mensaje ha sido enviado.")
  }

}
