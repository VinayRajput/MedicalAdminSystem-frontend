import {Component, OnInit} from '@angular/core';
import {PatientService} from "../patient.service";
import {Patient} from "../patient";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent implements OnInit{
  patients:MatTableDataSource<Patient> = new MatTableDataSource<Patient>();
  displayedColumns: string[] = ['name','age','bloodType','prescription','dose','fees','urgency'];

  constructor(private patientService:PatientService) {}

  ngOnInit():void{
    this.getPatients()
  }

  getPatients() {
    this.patientService.getPatientList().subscribe(data => this.patients.data=data)
  }
}
