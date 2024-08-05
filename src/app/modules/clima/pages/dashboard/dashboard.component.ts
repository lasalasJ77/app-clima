import { Component } from '@angular/core';
import { ClimaService } from '../../../../api/services/clima/clima.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  urlImagen = 'https://image.flaticon.com/icons/png/512/1116/1116453.png';
  ciudad = '';
  tempetura = 0;
  humedad = 0;
  clima = '';
  query = false;
  loading = false;
  mostrarError = false;

  constructor(private _climaService: ClimaService) { }

  ngOnInit(): void {
  }

  obtenerClima() {
    this.query = false;
    this.loading = true;

    this._climaService.getClima(this.ciudad).subscribe(data => {
      this.loading = false;
      this.query = true;
      this.tempetura = data.main.temp - 273
      this.humedad = data.main.humidity
      this.clima = data.weather[0].main
    }, error => {
      console.log(error);
      this.loading = false;
      this.error();
    })
  }

  error() {
    this.mostrarError = true;
    setTimeout(() => {
      this.mostrarError = false;
      this.ciudad = '';
    }, 3000);
  }

}
