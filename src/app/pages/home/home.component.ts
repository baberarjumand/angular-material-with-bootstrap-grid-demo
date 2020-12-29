import { UserAuthService } from './../../services/user-auth.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { HostListener } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild('drawerRef') sidenav: MatDrawer;

  // screenHeight = window.innerHeight;
  screenWidth = window.innerWidth;

  MOBILE_LAYOUT_BREAKPOINT = 1280;
  isMobileLayout: boolean = true;

  constructor(private userAuth: UserAuthService) {
    this.initializeScreenSizeListener();
  }

  @HostListener('window:resize', ['$event'])
  initializeScreenSizeListener(event?) {
    // this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    // console.log('Screen Width:' + this.screenWidth);
    // console.log('Screen Height: ' + this.screenHeight);

    this.updateCurrentLayout(this.screenWidth);
  }

  ngOnInit(): void {}

  updateCurrentLayout(width: number): void {
    if (width <= this.MOBILE_LAYOUT_BREAKPOINT) {
      this.isMobileLayout = true;
    } else {
      this.isMobileLayout = false;
    }

    setTimeout(() => {
      if (this.isMobileLayout) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    }, 10);
  }

  logOut(): void {
    this.userAuth.logOut();
  }
}
