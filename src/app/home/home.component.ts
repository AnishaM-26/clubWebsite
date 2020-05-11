import { Component, OnInit } from '@angular/core';
import { ParticlesConfig } from './particles-config';

declare let particlesJS: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loadScripts() {
    const dynamicScripts = [
      "assets/js/loader.js",
      "assets/js/jquery.min.js",
      "assets/js/jquery.easing.1.3.js",
      "assets/js/jquery.waypoints.min.js",
      "assets/js/jquery.flexslider-min.js",
      "assets/js/jquery.countTo.js",
      "assets/js/bootstrap.min.js",
      "assets/js/sticky-kit.min.js",
      "assets/js/owl.carousel.min.js",
      "assets/js/main.js",


    ];
    for (let i = 0; i < dynamicScripts.length; i++) {
      const node = document.createElement('script');
      node.src = dynamicScripts[i];
      node.type = 'text/javascript';
      node.async = false;
      node.charset = 'utf-8';
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }

  constructor() {
    this.loadScripts();
   }

  ngOnInit(): void {
    this.invokeParticles();
  }
  public invokeParticles(): void {
    particlesJS('particles-js', ParticlesConfig, function() {});
  }

}
