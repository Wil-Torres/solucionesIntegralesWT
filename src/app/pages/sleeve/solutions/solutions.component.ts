import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  private _listSolutions : any[] = [];
  public get listSolutions() : any[] {
    return this._listSolutions;
  }
  public set listSolutions(v : any[]) {
    this._listSolutions = v;
  }
  


  constructor(private router: ActivatedRoute) {
    
  }

  ngOnInit() {
    this.initServices()
    this.router.params.subscribe(param => {
      if (param['id']){
        this.listSolutions = this.listServices[param['id']];
      }
    })
  }

  initServices() {
    this.listServices = [
      {
        id: 1,
        descripcion: 'ACCOUNTING',
        img: '../../../../assets/images/solutions/pensamientoDigital.png',
        descripcionProducto: `
        APLICACIÓN CONTABLE WEB:
        Contamos con una aplicacion web la cual tiene como objetivo llevar el control contable de tu organizacion
        esta basada en estandares contables, la aplicacion es multiempresa, esta se encuntra seccionada por los siguientes modulos.
        `,
        detalles: [
          {
            title: 'NOMINA DE RECURSOS HUMANOS',
            detalles: [{
              icono: 'far fa-images fa-2x',
              descripcion: 'Ficha general de alumnos con fotografía'
            }, {
              icono: 'fas fa-chart-pie fa-2x',
              descripcion: 'Definición flexible de descuentos y prestaciones, por porcentajes, montos, y tablas'
            }, {
              icono: 'far fa-calendar-alt fa-2x',
              descripcion: 'Cálculo de prestaciones laborales automatizadas (aguinaldo, Bono 14, indemnizaciones, vacaciones)'
            }, {
              icono: 'fas fa-keyboard fa-2x',
              descripcion: 'Emisión de cheques o generación de información para transferencia electrónica'
            }, {
              icono: 'fas fa-briefcase fa-2x',
              descripcion: 'Historial de capacitación, escolaridad, Referencias laborales, Historial interno, y otra información'
            }, {
              icono: 'fas fa-calculator fa-2x',
              descripcion: 'Cuenta Corriente de Empleados (anticipos de salaries y préstamos)'
            }, {
              icono: 'fas fa-calculator fa-2x',
              descripcion: 'Reporte según legislación actual(Reporte de Seguro Social, informe patronal, retenciones de ISR, libro de salarios)'
            }]
          },
          {
            title: 'BANCOS',
            detalles: [{
              icono: 'fas fa-dollar-sign fa-2x',
              descripcion: 'Manejo de cuentas en múltiples monedas'
            }, {
              icono: 'fas fa-university fa-2x',
              descripcion: 'Informes de Disponibilidad por Compañía o consolidado'
            }, {
              icono: 'fas fa-university fa-2x',
              descripcion: 'Conciliación bancaria automatizada a partir de estado de cuenta electrónica'
            }, {
              icono: 'fas fa-chart-bar fa-2x',
              descripcion: 'Captura de Notas de Débito, Crédito y otros movimientos bancarios'
            }, {
              icono: 'fas fa-university fa-2x',
              descripcion: 'Emisión de cheques en lote e individuales'
            }]
          }, {
            title: 'PROVEEDORES',
            detalles: [{
              icono: 'fas fa-chart-line fa-2x',
              descripcion: 'Registro y emisión de contraseñas de pago'
            }, {
              icono: 'fas fa-bars fa-2x',
              descripcion: 'Proceso de recepción, provisión y autorización de facturas de proveedores'
            }, {
              icono: 'far fa-clock fa-2x',
              descripcion: 'Control de cajas chicas con control restringido por usuario'
            }, {
              icono: 'fas fa-bars fa-2x',
              descripcion: 'Registro y emisión de retenciones de ISR'
            }, {
              icono: 'fas fa-university fa-2x',
              descripcion: 'Registro y emisión de exenciones de IVA'
            }, {
              icono: 'far fa-file-powerpoint fa-2x',
              descripcion: 'Emisión de facturas especiales'
            }, {
              icono: 'fas fa-chart-line fa-2x',
              descripcion: 'Proyección de pagos para elaboración de flujo de caja'
            }]
          }, {
            title: 'CONTABILIDAD Y PRESUPUESTOS',
            detalles: [{
              icono: 'fas fa-pound-sign fa-2x',
              descripcion: 'Sistema multiempresa con consolidación multinivel y multimoneda'
            }, {
              icono: 'fas fa-users fa-2x',
              descripcion: 'Nomenclatura contable flexible, definida por el usuario'
            }, {
              icono: 'fas fa-briefcase fa-2x',
              descripcion: 'Recepción de asientos contables de todos los módulos auxiliares'
            }, {
              icono: 'fas fa-calculator fa-2x',
              descripcion: 'Reportes de Estados Financieros y reportería a multiples niveles'
            }, {
              icono: 'fas fa-chart-bar fa-2x',
              descripcion: 'Reportes de integración de cuentas'
            }, {
              icono: 'fas fa-dollar-sign fa-2x',
              descripcion: 'Definición de presupuesto anual'
            }, {
              icono: 'fas fa-bars fa-2x',
              descripcion: 'Reportes de Ejecución presupuestal (Real vrs presupuestado)'
            }]
          }
        ]
      },
      {
        id: 2,
        descripcion: 'PORTAL WEB',
        detalles: [
          {
            title: 'PORTALES WEB',
            detalles: [{
              icono: 'fas fa-blog fa-2x',
              descripcion: 'Elaboración de Blog personales'
            }, {
              icono: 'fab fa-internet-explorer fa-2x',
              descripcion: 'Portales web, Landing Page, LeadPage'
            }, {
              icono: 'fab fa-facebook fa-2x',
              descripcion: 'Community Manager Facebook'
            }, {
              icono: 'fab fa-instagram fa-2x',
              descripcion: 'Community Manager Instragram'
            }, {
              icono: 'fab fa-twitter-square fa-2x',
              descripcion: 'Community Manager Twitter'
            }, {
              icono: 'fas fa-bars fa-2x',
              descripcion: 'Posicionamiento web.'
            }]
          }
        ]
      },
      {
        id: 3,
        descripcion: 'CORE',
        detalles: [
          {
            title: 'PORTALES WEB',
            detalles: [{
              icono: 'fas fa-blog fa-2x',
              descripcion: 'Elaboración de Blog personales'
            }, {
              icono: 'fab fa-internet-explorer fa-2x',
              descripcion: 'Portales web, Landing Page, LeadPage'
            }, {
              icono: 'fab fa-facebook fa-2x',
              descripcion: 'Community Manager Facebook'
            }, {
              icono: 'fab fa-instagram fa-2x',
              descripcion: 'Community Manager Instragram'
            }, {
              icono: 'fab fa-twitter-square fa-2x',
              descripcion: 'Community Manager Twitter'
            }, {
              icono: 'fas fa-share-alt-square fa-2x',
              descripcion: 'Posicionamiento web.'
            }]
          }
        ]
      },
      {

        id: 4,
        descripcion: 'MOBILE',
        detalles: [
          {
            title: 'PORTALES WEB',
            detalles: [{
              icono: 'fas fa-blog fa-2x',
              descripcion: 'Elaboración de Blog personales'
            }, {
              icono: 'fab fa-internet-explorer fa-2x',
              descripcion: 'Portales web, Landing Page, LeadPage'
            }, {
              icono: 'fab fa-facebook fa-2x',
              descripcion: 'Community Manager Facebook'
            }, {
              icono: 'fab fa-instagram fa-2x',
              descripcion: 'Community Manager Instragram'
            }, {
              icono: 'fab fa-twitter-square fa-2x',
              descripcion: 'Community Manager Twitter'
            }, {
              icono: 'fas fa-share-alt-square fa-2x',
              descripcion: 'Posicionamiento web.'
            }]
          }
        ]

      },
      {
        id: 5,
        descripcion: 'MOODLE',
        img: '../../../../assets/images/solutions/pensamientoDigital.png',
        descripcionProducto: `
        APLICACIÓN WEB: Esta es una interfaz que le servirá al maestro para crear cursos, subir
        contenido, crear cuestionarios y medir el rendimiento de cada alumno como a nivel global.
        APLICACIÓN MOVIL: En este sistema el alumno podrá ver videos, documentos, realizar
        cuestionarios y ver el avance de la materia a la que se le fue asignado.
        En conclusión, nuestro producto es ofrecer una plataforma educativa para optimizar el
        aprendizaje como la evaluación para docentes y estudiantes.
        `,
        detalles: [
          {
            title: 'PLATAFORMA MOODLE',
            detalles: [{
              icono: 'fas fa-bars fa-2x',
              descripcion: 'Registro de Tareas'
            }, {
              icono: 'fas fa-bars fa-2x',
              descripcion: 'Consultas'
            }, {
              icono: 'fas fa-bars fa-2x',
              descripcion: 'Foros, blog, o diarios'
            }, {
              icono: 'fas fa-bars fa-2x',
              descripcion: 'cuestionarios'
            }, {
              icono: 'fas fa-bars fa-2x',
              descripcion: 'recursos'
            }, {
              icono: 'fas fa-bars fa-2x',
              descripcion: 'Encuestas.'
            }, {
              icono: 'fas fa-bars fa-2x',
              descripcion: 'Wiki.'
            }, {
              icono: 'fas fa-bars fa-2x',
              descripcion: 'Talleres.'
            }, {
              icono: 'fas fa-bars fa-2x',
              descripcion: 'Base de datos.'
            }, {
              icono: 'fas fa-bars fa-2x',
              descripcion: 'SCORM.'
            }, {
              icono: 'fas fa-bars fa-2x',
              descripcion: 'Lecciones.'
            }, {
              icono: 'fas fa-bars fa-2x',
              descripcion: 'Glosarios.'
            }, {
              icono: 'fas fa-bars fa-2x',
              descripcion: 'Mantenimiento de Cursos, alumnos, catedraticos.'
            }]
          }
        ]
      }]

  }

}
