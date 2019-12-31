import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';

import { Router } from "@angular/router";

import { Title } from "@angular/platform-browser";
import { EnvService } from "src/shared/services";

@Component({
  selector: "intro-page",
  templateUrl: "./intro-page.component.html",
  styleUrls: ["./intro-page.component.scss"]
})

export class IntroPageComponent implements OnInit {

  // Identification
  @Input() title;
  @Input() version;
  env;
  clientLogo;
  clientSite;
  externalAssets;


  // Carousel
  // images = [62, 83, 466, 965, 982, 1043, 738].map((n) => `https://picsum.photos/id/${n}/1200/300`);

  images;

  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;

  showNavigationArrows = false;
  showNavigationIndicators = false;

  @ViewChild('carousel', { static: true }) carousel: NgbCarousel;


  constructor(
    private envService: EnvService,
    private router: Router
  ) {
    this.env = this.envService;
    this.externalAssets = this.env.externalAssets
    this.clientLogo = `${this.externalAssets}/img/logos_client/client-logo.png`
    this.images = [
      { title: "My image 1", img: '62-1200x300.jpg' },
      { title: "My image 2", img: '83-1200x300.jpg' },
      { title: "My image 3", img: '466-1200x300.jpg' },
      { title: "My image 4", img: '738-1200x300.jpg' },
      { title: "My image 5", img: '965-1200x300.jpg' },
      { title: "My image 6", img: '982-1200x300.jpg' },
      { title: "My image 7", img: '1043-1200x300.jpg' }
    ]
      .map((n) => {
        let x = JSON.stringify(n.img).replace(/['"]+/g, '')
        return {
          title: n.title,
          img: `${this.externalAssets}/img/intro/${x}`
        };
      });
  }

  ngOnInit() {
  }

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }


  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }

}
