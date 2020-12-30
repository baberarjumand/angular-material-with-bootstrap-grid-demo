import { ComponentInfoService } from './../../services/component-info.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  constructor(private componentInfoService: ComponentInfoService) {
    this.componentInfoService.updateComponentHeading('Table');
  }

  ngOnInit(): void {}
}
