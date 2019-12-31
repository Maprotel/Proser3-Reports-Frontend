// Angular
import { Component, OnInit, Input, OnDestroy } from '@angular/core';

// Vendor
import { Observable, Subscription, timer } from "rxjs";
import { TRANSLOCO_SCOPE } from '@ngneat/transloco';

// Models
import { AlertModel } from 'src/shared/models';

// Services
import { PersonService } from 'src/shared/services';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
  providers: [{ provide: TRANSLOCO_SCOPE, useValue: 'person' }]
})
export class PersonComponent implements OnInit {

  alertMessage: AlertModel;

  // Timer
  timerConnected;

  // Subscription
  private subscription: Subscription = new Subscription();

  constructor(
    private personService: PersonService,
  ) {
    this.alertMessage = new AlertModel();
    this.timerConnected = 0;
  }

  ngOnInit() {
    this.onRepeat();
  }

  // Finish
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  // Real time repeat
  onRepeat() {
    let timerComponent = timer(1000, 5000);
    let timerClock = timer(1000, 1000);

    this.onPing();
    this.subscription.add(
      timerComponent.subscribe(() => {
        this.onPing();
      })
    );

    timerClock.subscribe(() => {
      this.timerConnected = this.timerConnected + 1;
    });
  }

  onAlertBack(event) {
    this.alertMessage = event
  }

  onPing() {
    this.personService.ping().subscribe(
      res => {
        this.alertMessage.alertShow = false;
      }, error => {
        this.alertMessage.alertShow = true;
        this.alertMessage.alertTitle = 'Error del servidor'
        this.alertMessage.alertText = 'No se puede conectar al servidor (ping)'
        this.alertMessage.alertType = 'danger'
      });
  }

}
