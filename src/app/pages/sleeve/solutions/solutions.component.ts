import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.scss']
})
export class SolutionsComponent implements OnInit {

  private _listServices: any[] = [];
  public get listServices(): any[] {
    return this._listServices;
  }
  public set listServices(v: any[]) {
    this._listServices = v;
  }


  constructor() { }

  ngOnInit() {
  }

  initServices() {
    this.listServices = [
      {
        title: 'NOMINA DE RECURSOS HUMANOS',
        detalles: [{
          icono: '',
          descripcion: 'Ficha general de alumnos con fotografía'
        }, {
          icono: '',
          descripcion: 'Definición flexible de descuentos y prestaciones, por porcentajes, montos, y tablas'
        }, {
          icono: '',
          descripcion: 'Cálculo de prestaciones laborales automatizadas (aguinaldo, Bono 14, indemnizaciones, vacaciones)'
        }, {
          icono: '',
          descripcion: 'Emisión de cheques o generación de información para transferencia electrónica'
        }, {
          icono: '',
          descripcion: 'Historial de capacitación, escolaridad, Referencias laborales, Historial interno, y otra información'
        }, {
          icono: '',
          descripcion: 'Cuenta Corriente de Empleados (anticipos de salaries y préstamos)'
        }, {
          icono: '',
          descripcion: 'Reporte según legislación actual(Reporte de Seguro Social, informe patronal, retenciones de ISR, libro de salarios)'
        }]
      },
      {
        title: 'BANCOS',
        detalles: [{
          icono: '',
          descripcion: 'Manejo de cuentas en múltiples monedas'
        }, {
          icono: '',
          descripcion: 'Informes de Disponibilidad por Compañía o consolidado'
        }, {
          icono: '',
          descripcion: 'Conciliación bancaria automatizada a partir de estado de cuenta electrónica'
        }, {
          icono: '',
          descripcion: 'Captura de Notas de Débito, Crédito y otros movimientos bancarios'
        }, {
          icono: '',
          descripcion: 'Emisión de cheques en lote e individuales'
        }]
      },{
        title: 'PROVEEDORES',
        detalles: [{
          icono: '',
          descripcion: 'Registro y emisión de contraseñas de pago'
        }, {
          icono: '',
          descripcion: 'Proceso de recepción, provisión y autorización de facturas de proveedores'
        }, {
          icono: '',
          descripcion: 'Control de cajas chicas con control restringido por usuario'
        }, {
          icono: '',
          descripcion: 'Registro y emisión de retenciones de ISR'
        }, {
          icono: '',
          descripcion: 'Registro y emisión de exenciones de IVA'
        }, {
          icono: '',
          descripcion: 'Emisión de facturas especiales'
        }, {
          icono: '',
          descripcion: 'Proyección de pagos para elaboración de flujo de caja'
        }]
      },{
        title: 'CONTABILIDAD Y PRESUPUESTOS',
        detalles: [{
          icono: '',
          descripcion: 'Sistema multiempresa con consolidación multinivel y multimoneda'
        }, {
          icono: '',
          descripcion: 'Nomenclatura contable flexible, definida por el usuario'
        }, {
          icono: '',
          descripcion: 'Recepción de asientos contables de todos los módulos auxiliares'
        }, {
          icono: '',
          descripcion: 'Reportes de Estados Financieros y reportería a multiples niveles'
        }, {
          icono: '',
          descripcion: 'Reportes de integración de cuentas'
        }, {
          icono: '',
          descripcion: 'Definición de presupuesto anual'
        }, {
          icono: '',
          descripcion: 'Reportes de Ejecución presupuestal (Real vrs presupuestado)'
        }]
      }
    ]

  }

}
