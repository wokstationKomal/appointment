import { AppoinmentsService } from './../../Services/appoinments.service';
import { AppoinmentComponent } from './../appoinment/appoinment.component';
import { Component, OnInit } from '@angular/core';
import { Appoinment } from 'src/app/Model/appoinment';
import { mergeMap } from 'rxjs/operators'
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-appoinment-list',
  templateUrl: './appoinment-list.component.html',
  styleUrls: ['./appoinment-list.component.css']
})
export class AppoinmentListComponent implements OnInit {

  public loading = true;
  public errorMsg: string;
  public successMsg: string;
  public appoinments: Appoinment[];
  public columns = ['appoinmentDate', 'name', 'email', 'cancel'];
  apnDate: string;
  // datePipe: any;

  constructor(
    private appoinementsService: AppoinmentsService,
    private datepipe: DatePipe) { }

  ngOnInit() {
    this.appoinementsService.getAppoinemts()
    .subscribe((appoinmets: Appoinment[]) => {
      console.log(appoinmets);
      this.appoinments = appoinmets;
      this.loading = false;
      this.apnDate = this.datepipe.transform(this.appoinments, 'dd.mm.yy');
    },
    (error: ErrorEvent) => {
      this.errorMsg = error.error.message;
      this.loading = false;
    });
  }

  cancelAppoinemet(id: string) {
    this.appoinementsService.canacelAppoinment(id).pipe(
      mergeMap(() => this.appoinementsService.getAppoinemts())
    )
    .subscribe((appoinments: Appoinment[]) => {
      this.appoinments = appoinments;
      this.successMsg = 'Succesfully Canceled';
    },
    (error: ErrorEvent) => {
      this.errorMsg = error.error.message;
    })
  }

}
