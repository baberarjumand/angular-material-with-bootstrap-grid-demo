import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ComponentInfoService {
  currentComponentHeading = 'Home';

  constructor() {}

  updateComponentHeading(str: string): void {
    this.currentComponentHeading = str;
  }
}
