import { Component } from '@angular/core';
import { MainService } from 'src/app/service/main.service';


@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss'],
})
export class MainViewComponent {
  ngOnInit() {}

  constructor(private mainService: MainService) {}

  newColumn() {
    this.mainService.addColumn();
  }
}
