
// Angular
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

// Vendor
import { TRANSLOCO_SCOPE } from '@ngneat/transloco';

// Services
import { EmployeeService } from 'src/shared/services';
import { ToastrService } from 'ngx-toastr';

import { EmployeeModel } from 'src/shared/models';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  providers: [{ provide: TRANSLOCO_SCOPE, useValue: 'employee' }]
})
export class EmployeeComponent implements OnInit {


  constructor(
    private employeeService: EmployeeService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.employeeService.formData = {
      employeeId: null,
      employeeFullName: '',
      employeeCode: '',
      employeeMobile: '',
      employeePosition: '',
    }
  }

  onSubmit(form: NgForm) {
    if (form.value.employeeId > 0) {
      this.updateRecord(form);
    } else {
      this.insertRecord(form);
    }
  }

  insertRecord(form: NgForm) {
    this.employeeService.postRecord(form.value).subscribe(res => {
      this.toastr.success('Inserted successfully', 'Employee Register')
      this.employeeService.list = [form.value]
      this.resetForm();
    });
  }

  updateRecord(form: NgForm) {
    this.employeeService.putRecord(form.value).subscribe(res => {
      this.toastr.info('Updated successfully', 'Employee Register')
      this.resetForm();
      this.employeeService.list = [form.value]
      // this.oneRecord(item);
    });
  }


  listRecords() {
    this.employeeService.getRecords().subscribe(res => {
      this.employeeService.list = res;
    });
  }


  // oneRecord(item: EmployeeModel) {
  //   this.employeeService.getSingleRecord(item).subscribe(res => {
  //     this.employeeService.list = res;
  //   });
  // }

}
