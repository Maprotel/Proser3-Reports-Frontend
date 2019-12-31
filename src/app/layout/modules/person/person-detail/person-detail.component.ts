
// Angular
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

// Vendor
import { TRANSLOCO_SCOPE } from '@ngneat/transloco';

// Services
import { PersonService } from 'src/shared/services';
import { ToastrService } from 'ngx-toastr';

import { PersonModel } from 'src/shared/models';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.s.scss'],
  providers: [{ provide: TRANSLOCO_SCOPE, useValue: 'person' }]
})
export class PersonDetailComponent implements OnInit {


  constructor(
    private personService: PersonService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.personService.formData = {
      personId: null,
      personFullName: '',
      personTypeName: '',
      personTypeId: '',
      personChk: 0,
      personContactInfo: '',
    }
  }

  onSubmit(form: NgForm) {
    if (form.value.personId > 0) {
      this.updateRecord(form);
    } else {
      this.insertRecord(form);
    }
  }

  insertRecord(form: NgForm) {
    this.personService.postRecord(form.value).subscribe(res => {
      this.toastr.success('Inserted successfully', 'Person Register')
      this.personService.list = [form.value]
      this.resetForm();
    });
  }

  updateRecord(form: NgForm) {
    this.personService.putRecord(form.value).subscribe(res => {
      this.toastr.info('Updated successfully', 'Person Register')
      this.resetForm();
      this.personService.list = [form.value]
      // this.oneRecord(item);
    });
  }


  listRecords() {
    this.personService.getRecords().subscribe(res => {
      this.personService.list = res;
    });
  }


  // oneRecord(item: PersonModel) {
  //   this.personService.getSingleRecord(item).subscribe(res => {
  //     this.personService.list = res;
  //   });
  // }

}
