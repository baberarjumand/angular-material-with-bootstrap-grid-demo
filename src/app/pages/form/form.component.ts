import { Component, OnInit } from '@angular/core';
import { ComponentInfoService } from 'src/app/services/component-info.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  constructor(private componentInfoService: ComponentInfoService) {
    this.componentInfoService.updateComponentHeading('Form');
  }

  ngOnInit(): void {}
}
