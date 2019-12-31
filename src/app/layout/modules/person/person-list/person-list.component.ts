// Angular
import { Component, OnInit, PipeTransform, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { DecimalPipe } from '@angular/common';

// Vendor
import { Observable } from "rxjs";
import { ToastrService } from 'ngx-toastr';
import { map, startWith } from 'rxjs/operators';
import { ExportToCsv } from 'export-to-csv';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TRANSLOCO_SCOPE } from '@ngneat/transloco';


// Models
import { PersonModel } from 'src/shared/models';
import { AlertModel } from 'src/shared/models';

// Services
import { PersonService } from 'src/shared/services';


@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.s.scss'],
  providers: [{ provide: TRANSLOCO_SCOPE, useValue: 'person' }]
})
export class PersonListComponent implements OnInit {
  @Output() alertBack: EventEmitter<AlertModel> = new EventEmitter()

  alertMessage: AlertModel;

  rows

  page = 1;
  pageSize = 4;
  collectionSize = 0;

  // Search
  filter = new FormControl('');
  findInList

  // Export data
  options = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalSeparator: '.',
    showLabels: true,
    showTitle: false,
    title: 'Person register',
    useTextFile: false,
    useBom: true,
    useKeysAsHeaders: false,
    headers: [
      'Id', 'Nombre', 'Código', 'Movil', 'Cargo'
    ]
  };

  csvExporter = new ExportToCsv(this.options);

  // Icons
  faTimes = faTimes;

  // Modal
  public modal: NgbActiveModal
  selectedRow

  constructor(
    private personService: PersonService,
    private toastr: ToastrService,
    private modalService: NgbModal,
  ) {
    this.alertMessage = new AlertModel();


  }

  ngOnInit() {
    this.onGetRecords();

  }



  onGetRecords() {
    this.clearForm();
    this.personService.getRecords().subscribe(
      res => {
        this.personService.list = res
        this.personService.fullList = res
        this.collectionSize = res.length
        this.alertMessage = new AlertModel()
      }, error => {
        console.log('ERROR in LIST');

        this.alertMessage.alertShow = true;
        this.alertMessage.alertTitle = 'Error del servidor'
        this.alertMessage.alertText = 'No se puede conectar al servidor'
        this.alertMessage.alertType = 'danger'
        this.alertBack.emit(this.alertMessage);
        console.log('this.alertMessage', this.alertMessage);

      }

    );
  }

  onDeleteRecord(person: PersonModel) {
    console.log('person', person);

    this.personService.deleteRecord(person).subscribe(res => {
      this.toastr.warning('Deleted successfully', 'Person Register');
      this.onGetRecords();
    });

    this.modal.close()
  }

  populateForm(person: PersonModel) {
    this.personService.formData = Object.assign({}, person);
    this.selectedRow = Object.assign({}, person);
  }

  unPopulateForm() {
    let person = new PersonModel()
    this.personService.formData = Object.assign({}, person);
    this.selectedRow = Object.assign({}, person);

  }

  /******************** */

  /// search

  onSearch(findInList) {
    if (findInList.length > 0) {
      this.personService.list = this.search(findInList)
    }
    else {
      this.personService.list = this.personService.fullList
    }
  }

  onSort(event) {
    return event
  }


  search(text: string): PersonModel[] {
    return this.personService.fullList.filter(person => {
      const term = text.toLowerCase();
      return (
        person.personFullName.toLowerCase().includes(term) ||
        person.personTypeName.toLowerCase().includes(term) ||
        person.personTypeId.toLowerCase().includes(term) ||
        person.personContactInfo.toLowerCase().includes(term)
      )
    });
  }

  clearForm() {
    this.personService.formData = new PersonModel();
  }

  // Export data

  onExportToCsv() {
    this.csvExporter.generateCsv(this.personService.list);
  }

  open(name: string) {
    this.modal = this.modalService.open(name);
  }

}
