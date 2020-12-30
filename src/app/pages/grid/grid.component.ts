import { Component, OnInit } from '@angular/core';
import { ComponentInfoService } from '../../services/component-info.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit {
  constructor(private componentInfoService: ComponentInfoService) {
    this.componentInfoService.updateComponentHeading('Grid');
  }

  ngOnInit(): void {}
}
