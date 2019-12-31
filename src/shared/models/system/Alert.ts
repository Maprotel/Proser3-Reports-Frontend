export class AlertModel {
  alertTitle?: string;
  alertText?: string;
  alertShow?: boolean;
  alertType?: string;

  constructor() {
    this.alertTitle = 'Proser';
    this.alertText = 'All systems working';
    this.alertShow = false;
    this.alertType = 'success';
  }

  onResetAlert() {
    console.clear();
    {
      this.alertTitle = '';
      this.alertText = '';
      this.alertShow = false;
      this.alertType = '';
    }
  }

  onAlertError(error) {
    this.alertTitle = "Error del servidor";
    this.alertText = (error.statusText);
    this.alertShow = true;
    this.alertType = "alert alert-danger alert-dismissible fade show";
  }

  onSpanishError(text) {
    let result = text
    text = 'Unknown Error' ? 'Error desconocido (revise si el backend está funcionando)' : text;
    return result
  }
}
