import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { HighchartsService } from '../highcharts.service'

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  @ViewChild('pieChart') public chartE1: ElementRef;
  @ViewChild('areaChart') public chartE2: ElementRef;
  constructor(private highcharts: HighchartsService) { }

  title = 'Example for Angular 7 DataTable';
  dtOptions: DataTables.Settings = {};
  dtUsers =[
    {"id": 102, "name": "Reena",      "status": "1", "residential": "0", "commodity": "0", "expiration": "0", "term": "0", "date": "0", "supplier": "0", "usage": "0"},
    {"id": 101, "name": "Anil",       "status": "1", "residential": "0", "commodity": "0", "expiration": "0", "term": "0", "date": "0", "supplier": "0", "usage": "0"},
    {"id": 103, "name": "Aradhay",    "status": "1", "residential": "0", "commodity": "0", "expiration": "0", "term": "0", "date": "0", "supplier": "0", "usage": "0"},
    {"id": 104, "name": "Dilip",      "status": "0", "residential": "0", "commodity": "0", "expiration": "0", "term": "0", "date": "0", "supplier": "0", "usage": "0"},
    {"id": 105, "name": "Alok",       "status": "0", "residential": "0", "commodity": "0", "expiration": "0", "term": "0", "date": "0", "supplier": "0", "usage": "0"},
    {"id": 106, "name": "Sunil",      "status": "1", "residential": "0", "commodity": "0", "expiration": "0", "term": "0", "date": "0", "supplier": "0", "usage": "0"},
    {"id": 107, "name": "Sushil",     "status": "1", "residential": "0", "commodity": "0", "expiration": "0", "term": "0", "date": "0", "supplier": "0", "usage": "0"},
    {"id": 108, "name": "Sheo",       "status": "0", "residential": "0", "commodity": "0", "expiration": "0", "term": "0", "date": "0", "supplier": "0", "usage": "0"},
    {"id": 109, "name": "Niranjan",   "status": "1", "residential": "0", "commodity": "0", "expiration": "0", "term": "0", "date": "0", "supplier": "0", "usage": "0"},
    {"id": 110, "name": "Lopa",       "status": "0", "residential": "0", "commodity": "0", "expiration": "0", "term": "0", "date": "0", "supplier": "0", "usage": "0"},
    {"id": 111, "name": "Paramanand", "status": "0", "residential": "0", "commodity": "0", "expiration": "0", "term": "0", "date": "0", "supplier": "0", "usage": "0"}
  ];

  pieOption = {
    chart: {
      type: 'pie',
      height: 175,
      backgroundColor: '#1a2574'
    },

    title: { text: null },

    tooltip: {
      trigger: 'none',
      // enabled: false
    },

    credits:{enabled: false},
    colors: ['#fc8f3b', '#12a5ff'],

    plotOptions: {
      pie: {
          allowPointSelect: false,
          paddingTop: 10,
          borderColor: '#1a2574',
          size: '110%',
          innerSize: '40%',
          dataLabels: { enabled: false }
      },
      series: {
        states: {
            hover: {
                enabled: false
            }
        }
      }
    },

    series: [{
      showInLegend: false,
      type: 'pie',
      name: 'YTD',
      data: [
          ['KWH', 222333], // first half of pie
          ['Therm', 32435] // second half of pie
      ]
    }]
  };

  areaOption = {
    chart: {
      type: 'area',
      height: 230,
      backgroundColor: '#1a2574'
    },

    credits:{enabled: false},
    
    title: {
        text: null
    },

    xAxis: {
        categories: [
            'J',
            'F',
            'M',
            'A',
            'M',
            'J',
            'J',
            'A',
            'S',
            'O',
            'N',
            'D'
        ],
        labels: {
          style: {
            color: '#8d92ba',
            fontSize: 14,
            fontFamily: 'Montserrat'
          }
        }
    },

    yAxis: {
        title: {
            text: null
        },
        labels: {
            formatter: function () {
                return '$' + this.value / 1000 + 'k';
            },
            style: {
              color: '#8d92ba',
              fontSize: 14,
              fontFamily: 'Montserrat'
            }
        },
        tickInterval: 5000,
        gridLineColor: '#8d92ba'
    },
    
    tooltip: {
        pointFormat: '<div style="font-size: 14px;">{point.y:,.0f}</div>'
    },

    plotOptions: {
        area: {
            marker: {
                enabled: false,
                symbol: 'circle',
                radius: 2,
                states: {
                    hover: {
                        enabled: true
                    }
                }
            }
        },
        series: {
          lineColor: '#12a5ff',
          fillColor: '#27569caa',
      }
    },

    series: [{
        showInLegend: false,
        name: '',
        data: [3000, 3000, 4000, 4000, 6000, 7000, 7000, 7000, 7000, 7000, 13000, 13000]
    }]
  };

  ngOnInit() {
    this.dtOptions = {
      data:this.dtUsers,
      columns: [
            {title: 'No',            data: 'id'},
            {title: 'DBA Name',      data: 'name'},
            {title: 'Status',        data: 'status' },
            {title: 'Residential',   data: 'residential' },
            {title: 'Commodity',     data: 'commodity' },
            {title: 'Expiration',    data: 'expiration' },
            {title: 'Term',          data: 'term' },
            {title: 'Contract Date', data: 'date' },
            {title: 'Supplier',      data: 'supplier' },
            {title: 'Usage',         data: 'usage' },
          ]
    };

    this.highcharts.createChart(this.chartE1.nativeElement, this.pieOption);
    this.highcharts.createChart(this.chartE2.nativeElement, this.areaOption);
  }
}