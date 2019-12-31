import { Component, OnInit, Input } from "@angular/core";
import { AlertModel } from "src/shared/models";

@Component({
  selector: "app-alert-stripe",
  templateUrl: "./alert.component.html",
  styleUrls: ["./alert.component.scss"]
})
export class AlertComponent implements OnInit {
  // @Input() alertMessage: AlertModel;  alertError;

  @Input() alertError;
  @Input() alertMessage: AlertModel;

  showDetail

  constructor(
  ) {
    this.alertMessage = new AlertModel()
    console.log('alertMessage', this.alertMessage);
  }

  ngOnInit() {
  }

  onShowHideDetail() {
    this.showDetail = !this.showDetail
  }

  close(alert: AlertModel) {
    this.alertMessage;
  }

}
