import { AppoinmentsService } from './../../Services/appoinments.service';
import { Component, OnInit } from '@angular/core';
import { Appoinment } from 'src/app/Model/appoinment';

@Component({
  selector: 'app-appoinment',
  templateUrl: './appoinment.component.html',
  styleUrls: ['./appoinment.component.css']
})
export class AppoinmentComponent implements OnInit {

  // createdAppoinemt: Appoinment;
  public successMsg: string;
  public errorMsg: string;
  public appoinmentDate: string;
  public name: string;
  public email: string;

  constructor(private appoinmentsService: AppoinmentsService) { }

  ngOnInit() {
  }

  createAppoinment() {
    this.successMsg = '';
    this.errorMsg = '';
    this.appoinmentsService.createAppoinment(this.appoinmentDate, this.name, this.email)
    .subscribe((createdAppoinemt: Appoinment) => {
      this.appoinmentDate = '';
      this.name = '';
      this.email = '';
      // const appoinmentDate = new Date(createdAppoinemt.appoinmentDate).toDateString();
      this.successMsg = `Appointment booked succesfully on ${this.appoinmentDate}`;
    },
    (error: ErrorEvent) => {
      this.errorMsg = error.error.message;
    })
  }

}
