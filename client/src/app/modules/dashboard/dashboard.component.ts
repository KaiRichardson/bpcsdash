import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { MatTableDataSource } from '@angular/material/table';
// import { MatPaginator } from '@angular/material/paginator';

export interface Agent {
  employee_id: number;
  name: string;
  title: string;
  language: string;
  specialization: string;
  team: string;
  schedule: string;
  shift: string;
  hire_date: string;
  tph: number;
  cph: number;
}

const ELEMENT_DATA: Agent[] = [
  {
    employee_id: 556,
    name: 'Calida Sand',
    title: 'Team Lead',
    language: 'Afrikaans',
    specialization: 'Hardware',
    team: '11',
    schedule: 'Monday - Friday',
    shift: '8:00 AM - 5:00 PM',
    hire_date: '12/8/2016',
    tph: 8,
    cph: 12,
  },
  {
    employee_id: 575,
    name: 'Napoleon Lukovic',
    title: 'Tech',
    language: 'Ndebele',
    specialization: 'Tech',
    team: 'DOTA 2',
    schedule: 'Sunday - Thursday',
    shift: '8:00 AM - 5:00 PM',
    hire_date: '1/27/2020',
    tph: 6,
    cph: 13,
  },
  {
    employee_id: 866,
    name: 'Kerwinn Elham',
    title: 'Tech',
    language: 'Zulu',
    specialization: 'Dota',
    team: 'CS:GO 1',
    schedule: 'Friday - Monday',
    shift: '7:00 AM - 6:00 PM',
    hire_date: '4/17/2018',
    tph: 17,
    cph: 8,
  },
  {
    employee_id: 1650,
    name: 'Tudor Gorsse',
    title: 'Team Lead',
    language: 'Danish',
    specialization: 'Hardware',
    team: '15',
    schedule: 'Monday - Friday',
    shift: '8:00 AM - 5:00 PM',
    hire_date: '7/7/2017',
    tph: 10,
    cph: 15,
  },
  {
    employee_id: 1688,
    name: 'Tatiania Parsonson',
    title: 'Tech',
    language: 'Estonian',
    specialization: 'CS:GO',
    team: 'ESC 5',
    schedule: 'Tuesday - Saturday',
    shift: '7:00 AM - 6:00 PM',
    hire_date: '11/27/2019',
    tph: 6,
    cph: 19,
  },
  {
    employee_id: 2195,
    name: 'Norton Baroux',
    title: 'Team Lead',
    language: 'Greek',
    specialization: 'Dota',
    team: 'ESC 5',
    schedule: 'Friday - Monday',
    shift: '8:00 AM - 5:00 PM',
    hire_date: '11/1/2017',
    tph: 14,
    cph: 8,
  },
  {
    employee_id: 2353,
    name: 'Grady Poge',
    title: 'Tech',
    language: 'Swahili',
    specialization: 'Billing',
    team: 'Hardware',
    schedule: 'Friday - Monday',
    shift: '8:00 AM - 5:00 PM',
    hire_date: '1/14/2018',
    tph: 18,
    cph: 14,
  },
  {
    employee_id: 2740,
    name: 'Joby Whitemarsh',
    title: 'Tech',
    language: 'Arabic',
    specialization: 'Hardware',
    team: 'CS:GO 1',
    schedule: 'Friday - Monday',
    shift: '7:00 AM - 6:00 PM',
    hire_date: '6/14/2016',
    tph: 17,
    cph: 6,
  },
  {
    employee_id: 2901,
    name: 'Connor Pickton',
    title: 'Tech',
    language: 'Maltese',
    specialization: 'CS:GO',
    team: 'ESC 2',
    schedule: 'Friday - Monday',
    shift: '8:00 AM - 5:00 PM',
    hire_date: '6/26/2016',
    tph: 17,
    cph: 16,
  },
  {
    employee_id: 3101,
    name: 'Parke Reisen',
    title: 'Tech',
    language: 'Amharic',
    specialization: 'Chargeback',
    team: '13',
    schedule: 'Friday - Monday',
    shift: '7:00 AM - 6:00 PM',
    hire_date: '10/12/2017',
    tph: 13,
    cph: 6,
  },
  {
    employee_id: 3369,
    name: 'Wilhelmina Guiness',
    title: 'Tech',
    language: 'Lao',
    specialization: 'CS:GO',
    team: 'Hardware',
    schedule: 'Sunday - Thursday',
    shift: '7:00 AM - 6:00 PM',
    hire_date: '9/20/2019',
    tph: 18,
    cph: 16,
  },
  {
    employee_id: 3390,
    name: 'Glenda Pellingar',
    title: 'Tech',
    language: 'Yiddish',
    specialization: 'Billing',
    team: 'L&D',
    schedule: 'Friday - Monday',
    shift: '8:00 AM - 5:00 PM',
    hire_date: '6/18/2015',
    tph: 12,
    cph: 13,
  },
  {
    employee_id: 3534,
    name: 'Grissel Meddows',
    title: 'Tech',
    language: 'Swahili',
    specialization: 'Hardware',
    team: 'ESC 5',
    schedule: 'Tuesday - Saturday',
    shift: '7:00 AM - 6:00 PM',
    hire_date: '2/14/2018',
    tph: 19,
    cph: 7,
  },
  {
    employee_id: 3539,
    name: 'Minerva Bortolomei',
    title: 'Tech',
    language: 'Hebrew',
    specialization: 'Hardware',
    team: '15',
    schedule: 'Monday - Friday',
    shift: '7:00 AM - 6:00 PM',
    hire_date: '5/18/2020',
    tph: 21,
    cph: 18,
  },
  {
    employee_id: 4926,
    name: 'Sofia Ivanets',
    title: 'Tech',
    language: 'Hindi',
    specialization: 'Dota',
    team: 'ESC 5',
    schedule: 'Tuesday - Saturday',
    shift: '7:00 AM - 6:00 PM',
    hire_date: '10/25/2015',
    tph: 18,
    cph: 6,
  },
  {
    employee_id: 5045,
    name: 'Rob Jamieson',
    title: 'Tech',
    language: 'Khmer',
    specialization: 'Tech',
    team: 'CS:GO 1',
    schedule: 'Tuesday - Saturday',
    shift: '7:00 AM - 6:00 PM',
    hire_date: '3/10/2018',
    tph: 12,
    cph: 10,
  },
  {
    employee_id: 5143,
    name: 'Darn Heiden',
    title: 'Team Lead',
    language: 'Italian',
    specialization: 'Tech',
    team: 'DOTA 2',
    schedule: 'Tuesday - Saturday',
    shift: '8:00 AM - 5:00 PM',
    hire_date: '6/26/2015',
    tph: 7,
    cph: 12,
  },
  {
    employee_id: 5759,
    name: 'Pinchas Drewitt',
    title: 'Tech',
    language: 'French',
    specialization: 'Hardware',
    team: '13',
    schedule: 'Sunday - Thursday',
    shift: '8:00 AM - 5:00 PM',
    hire_date: '3/1/2015',
    tph: 20,
    cph: 13,
  },
  {
    employee_id: 5948,
    name: 'Maybelle Kulis',
    title: 'Tech',
    language: 'Icelandic',
    specialization: 'CS:GO',
    team: '13',
    schedule: 'Monday - Friday',
    shift: '8:00 AM - 5:00 PM',
    hire_date: '11/30/2018',
    tph: 6,
    cph: 18,
  },
  {
    employee_id: 6523,
    name: 'Cary Shaw',
    title: 'Tech',
    language: 'Bislama',
    specialization: 'Hardware',
    team: 'L&D',
    schedule: 'Friday - Monday',
    shift: '7:00 AM - 6:00 PM',
    hire_date: '6/23/2019',
    tph: 11,
    cph: 17,
  },
];

@Component({
  selector: 'app-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  bigChart = [];
  cards = [];
  pieChart = [];

  displayedColumns: string[] = [
    'name',
    'title',
    'language',
    'specialization',
    'team',
    'schedule',
    'shift',
    'hire_date',
    'tph',
    'cph',
  ];
  dataSource = new MatTableDataSource<Agent>(ELEMENT_DATA);

  // @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    this.bigChart = this.dashboardService.bigChart();
    this.cards = this.dashboardService.cards();
    // this.pieChart = this.dashboardService.pieChart();

    // this.dataSource.paginator = this.paginator;
  }
}
