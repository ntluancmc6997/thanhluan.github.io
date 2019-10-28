import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { LoginService } from '../login.service';
import { ExportToCsv } from 'export-to-csv';
import { User } from 'src/app/models/user.model'
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-dashbroad',
  templateUrl: './dashbroad.component.html',
  styleUrls: ['./dashbroad.component.scss']
})
export class DashbroadComponent implements OnInit {
  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }
  //download CSV 
  downloadCSV() {
    const options = {
      showLabels: true,
      showTitle: true,
      title: 'My Awesome CSV',
      useTextFile: false,
      useBom: true,
      useKeysAsHeaders: true,
      headers: User[''],

    };
    const csvExporter = new ExportToCsv(options);
    csvExporter.options.filename = 'myCSV';
    csvExporter.generateCsv(this.loginService.Users);
  }
  //Download PDF
  download() {

    var data = document.getElementById('contentToConvert');
    html2canvas(data).then(canvas => {
      var imgWidth = 100;
      var pageHeight = 295;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;
      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF  
      var position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      pdf.save('MyPdf.pdf');
    });
  }
//print 
  printPage() {
    window.print();
  }
}
