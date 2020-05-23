// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'project';
// }

import { Component, ViewChild, OnInit } from '@angular/core';
import { NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
// For MDB Angular Free
import { NavbarModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md'

import { AccountService } from './_services';
import { User } from './_models';

@Component({ selector: 'app-root', templateUrl: 'app.component.html',
styleUrls: ['./app.component.css'] })
export class AppComponent implements OnInit {
    @ViewChild('ngcarousel', { static: true }) ngCarousel: NgbCarousel;
    slideActivate(ngbSlideEvent: NgbSlideEvent) {
        console.log(ngbSlideEvent.source);
        console.log(ngbSlideEvent.paused);
        console.log(NgbSlideEventSource.INDICATOR);
        console.log(NgbSlideEventSource.ARROW_LEFT);
        console.log(NgbSlideEventSource.ARROW_RIGHT);
      }

    title = 'project';
    user: User;

    constructor(private accountService: AccountService) {
        this.accountService.user.subscribe(x => this.user = x);
    }
    ngOnInit() { }

  // Move to specific slide
  navigateToSlide(item) {
    this.ngCarousel.select(item);
    console.log(item)
  }

  // Move to previous slide
  getToPrev() {
    this.ngCarousel.prev();
  }

  // Move to next slide
  goToNext() {
    this.ngCarousel.next();
  }

  // Pause slide
  stopCarousel() {
    this.ngCarousel.pause();
  }

  // Restart carousel
  restartCarousel() {
    this.ngCarousel.cycle();
  }

    logout() {
        this.accountService.logout();
    }
}