import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  images = [
    '../../../assets/usingcart1.jpg',
    '../../../assets/usingcart2.jpg',
    '../../../assets/usingcart3.png'
  ];

  currentSlide = 0;
  translateXValue = 0;

  nextSlide() {
    if (this.currentSlide < this.images.length - 1) {
      this.currentSlide++;
    } else {
      this.currentSlide = 0;
    }
    this.updateTranslateX();
  }

  prevSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    } else {
      this.currentSlide = this.images.length - 1;
    }
    this.updateTranslateX();
  }

  updateTranslateX() {
    this.translateXValue = -this.currentSlide * 600; // Assuming 600px slide width
  }
}
