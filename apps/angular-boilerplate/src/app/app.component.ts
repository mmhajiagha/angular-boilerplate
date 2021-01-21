import {Component} from '@angular/core';
import {NgxTranslateService} from '@angular-boilerplate/angular-boilerplate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private readonly ngxTranslateService: NgxTranslateService) {
    this.ngxTranslateService.setup();
  }
}
