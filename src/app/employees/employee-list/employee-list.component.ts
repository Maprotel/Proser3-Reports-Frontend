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


// Models
import { EmployeeModel } from 'src/shared/models';
import { AlertModel } from 'src/shared/models';

// Services
import { EmployeeService } from 'src/shared/services';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
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
    title: 'Employee register',
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
    private employeeService: EmployeeService,
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
    this.employeeService.getRecords().subscribe(
      res => {
        this.employeeService.list = res
        this.employeeService.fullList = res
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

  onDeleteRecord(employee: EmployeeModel) {
    console.log('employee', employee);

    this.employeeService.deleteRecord(employee).subscribe(res => {
      this.toastr.warning('Deleted successfully', 'Employee Register');
      this.onGetRecords();
    });

    this.modal.close()
  }

  populateForm(employee: EmployeeModel) {
    this.employeeService.formData = Object.assign({}, employee);
    this.selectedRow = Object.assign({}, employee);
  }

  unPopulateForm() {
    let employee = new EmployeeModel()
    this.employeeService.formData = Object.assign({}, employee);
    this.selectedRow = Object.assign({}, employee);

  }




  /******************** */




  /// search

  onSearch(findInList) {
    if (findInList.length > 0) {
      this.employeeService.list = this.search(findInList)
    }
    else {
      this.employeeService.list = this.employeeService.fullList
    }
  }

  onSort(event) {
    return event
  }


  search(text: string): EmployeeModel[] {
    return this.employeeService.list.filter(employee => {
      const term = text.toLowerCase();
      return (
        employee.employeeFullName.toLowerCase().includes(term) ||
        employee.employeePosition.toLowerCase().includes(term) ||
        employee.employeeMobile.toLowerCase().includes(term)
      )
    });
  }

  clearForm() {
    this.employeeService.formData = new EmployeeModel();
  }

  // Export data

  onExportToCsv() {
    this.csvExporter.generateCsv(this.employeeService.list);
  }

  open(name: string) {
    this.modal = this.modalService.open(name);
  }



}
