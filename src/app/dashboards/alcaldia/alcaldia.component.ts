import { animate, state, style, transition, trigger } from '@angular/animations';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-alcaldia',
  templateUrl: './alcaldia.component.html',
  styleUrls: ['./alcaldia.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class AlcaldiaComponent implements OnInit {
  expandedElement: PeriodicElementx | null = null;


  dataSourcex = ELEMENT_DATAx;
  columnsToDisplayx = ['Departamento', 'Nómina', 'Rol'];


  displayedColumns = ['position', 'name', 'weight'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  displayedColumns2 = ['position', 'name', 'weight'];
  dataSource2 = new MatTableDataSource<Element>(ELEMENT_DATA2);
  displayedColumns3 = ['position', 'name', 'weight'];
  dataSource3 = new MatTableDataSource<Element>(ELEMENT_DATA3);
  subtitle: string = '';

  ngOnInit(): void {
  }

  // This is line chart
  // bar chart
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    barThickness: 10
  };

  public barChartLabels: string[] = [
    '2011',
    '2012',
    '2013',
    '2014',
    '2015',
    '2016',
    '2017'
  ];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData: any[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Tasas' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Alcabalas' },
    { data: [43, 57, 78, 34, 51, 23, 90], label: 'Plusvalia' },
    { data: [67, 73, 23, 37, 82, 46, 10], label: 'Arrendamiento' }
  ];
  public barChartColors: Array<any> = [
    { backgroundColor: 'rgb(22, 152, 109)' },
    { backgroundColor: 'rgb(255, 235, 59)' },
    { backgroundColor: '#fdddca' },
    { backgroundColor: '#e5b468' },
  ];
  // Doughnut
  public doughnutChartLabels: string[] = [
    'Tasas',
    'Alcabalas',
    'Plusvalia',
    'Arrendamiento'
  ];
  public doughnutChartData: number[] = [350, 450, 100, 240];
  public doughnutChartType = 'doughnut';

  // Radar
  public radarChartLabels: string[] = [
    'Eating',
    'Drinking',
    'Sleeping',
    'Designing',
    'Coding',
    'Cycling',
    'Running'
  ];
  public radarChartData: any = [
    { data: [65, 59, 90, 81, 56, 55, 40], label: 'Alcabalas' },
    { data: [28, 48, 40, 19, 96, 27, 100], label: 'Plusvalia' }
  ];
  public radarChartType = 'radar';
  public radarChartColors: Array<any> = [
    {
      backgroundColor: 'rgb(195, 232, 220)',
      borderColor: 'rgb(22, 152, 109)'
    },
    {
      backgroundColor: 'rgb(255, 244, 143)',
      borderColor: 'rgb(255, 235, 59)'
    }
  ];
  // Pie
  public pieChartLabels: string[] = [
    'Tasas',
    'Alcabalas',
    'Plusvalia',
    'Arrendamiento'
  ];
  public pieChartData: number[] = [300, 500, 100, 260];
  public pieChartType = 'pie';

  // PolarArea
  public polarAreaChartLabels: string[] = [
    'Tasas',
    'Alcabalas',
    'Plusvalia',
    'Arrendamiento'
  ];
  public polarAreaChartData: number[] = [300, 500, 140, 270];
  public polarAreaLegend = true;

  public polarAreaChartType = 'polarArea';

  // lineChart
  public lineChartData: Array<any> = [
    { data: [65, 39, 80, 15, 76, 35, 40], label: 'Alcabalas' },
    { data: [18, 58, 20, 69, 16, 27, 90], label: 'Plusvalia' }
  ];
  public lineChartLabels: Array<any> = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July'
  ];
  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartColors: Array<any> = [
    {
      // grey
      backgroundColor: 'rgb(195, 232, 220)',
      borderColor: 'rgb(22, 152, 109)',
      pointBackgroundColor: 'rgb(22, 152, 109)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(22, 152, 108)'
    },
    {
      // dark grey
      backgroundColor: 'rgb(255, 244, 143)',
      borderColor: 'rgb(255, 235, 59)',
      pointBackgroundColor: 'rgb(255, 235, 59)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 235, 58)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';

  // events
  public chartClicked(e: any): void {
    // console.log(e);
  }

  public chartHovered(e: any): void {
    // console.log(e);
  }

  public randomize(): void {
    // Only Change 3 values
    const data = [
      Math.round(Math.random() * 100),
      59,
      80,
      Math.random() * 100,
      56,
      Math.random() * 100,
      40
    ];
    const clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }

  ngAfterViewInit() { }


}

export interface Element {
  name: string;
  position: string;
  weight: string;
}

const ELEMENT_DATA: Element[] = [
  { position: 'Poblacion de Ventanas', name: '45000', weight: '' },
  { position: 'Urbana', name: '20250', weight: '45%' },
  { position: 'Rural', name: '24750', weight: '55%' }
];

const ELEMENT_DATA2: Element[] = [
  { position: "$ 1'506.479", name: '$ 902.631', weight: '60%' },
];

const ELEMENT_DATA3: Element[] = [
  { position: "Navidad", name: '$ 150,618.50', weight: '17%' },
  { position: "Evento caridad", name: '$ 120,494.80', weight: '13%' },
  { position: "Evento Musical", name: '$ 75,309.25', weight: '8%' },
  { position: "Evento patriota", name: '$ 301,237.00', weight: '33%' },
  { position: "Campaña concientizacion", name: '$ 256,051.45	', weight: '28%' },
  { position: "Total", name: '$ 903,711.00', weight: '100%' },
];

export interface PeriodicElementx {
  Nómina: string;
  Departamento: string;
  Rol: string;
  personas: string;
  edad: string;
  fechaNacimiento: string,
  telefono: string
}

const ELEMENT_DATAx: PeriodicElementx[] = [
  {
    Departamento: 'Adm',
    Nómina: 'William',
    Rol: 'Jefe',
    personas: '2',
    edad: '35',
    fechaNacimiento: '25/06/1987',
    telefono: '0991847645'
  }, {
    Departamento: 'Fin',
    Nómina: 'Enrique',
    Rol: 'Jefe',
    personas: '1',
    edad: '35',
    fechaNacimiento: '25/06/1987',
    telefono: '0991847645'
  }, {
    Departamento: 'Planeacion',
    Nómina: 'Maria',
    Rol: 'Jefe',
    personas: '5',
    edad: '35',
    fechaNacimiento: '25/06/1987',
    telefono: '0991847645'
  }, {
    Departamento: 'Movilizacion',
    Nómina: 'Pedro',
    Rol: 'Jefe',
    personas: '1',
    edad: '35',
    fechaNacimiento: '25/06/1987',
    telefono: '0991847645'
  }, {
    Departamento: 'Contable',
    Nómina: 'Luis',
    Rol: 'Jefe',
    personas: '2',
    edad: '35',
    fechaNacimiento: '25/06/1987',
    telefono: '0991847645'
  }, {
    Departamento: 'Catastro',
    Nómina: 'Eugenia',
    Rol: 'Jefe',
    personas: '2',
    edad: '35',
    fechaNacimiento: '25/06/1987',
    telefono: '0991847645'
  }
];