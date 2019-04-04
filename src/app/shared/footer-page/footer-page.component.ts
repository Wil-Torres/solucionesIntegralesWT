import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-page',
  templateUrl: './footer-page.component.html',
  styles: [`
  #footer .widget .title {
    border-bottom-color: red;
  }
  #footer .widget .title {
    font-family: Ubuntu,sans-serif;
    font-size: 20px;
    font-weight: 700;
    padding-bottom: 23px;
    margin-bottom: 25px;
    border-bottom: 1px solid red;
    opacity: .62;
    letter-spacing: 1px;
    position: relative;
  }
  #footer h1, #footer h2, #footer h3, #footer h4, #footer h5, #footer h6 {
    color: inherit;
  }

  .footer-title{
    font-family: 'Verdana';
  }
  `]
})
export class FooterPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
