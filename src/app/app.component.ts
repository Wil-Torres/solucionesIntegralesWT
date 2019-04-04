import { Component, OnInit, Input } from '@angular/core';
import { NgxUiLoaderService, Loader } from 'ngx-ui-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Soluciones Integrales';
  constructor(private ngxUiLoaderService: NgxUiLoaderService) { 
    this.ngxUiLoaderService.startLoader('loader-01'); // start foreground spinner of the loader "loader-01" with 'default' taskId
  }

  ngOnInit() {
        // Stop the foreground loading after 5s
        setTimeout(() => {
          this.ngxUiLoaderService.stopLoader('loader-01'); // stop foreground spinner of the loader "loader-01" with 'default' taskId
        }, 1000);
  }
  fgSlideChange(delay: number, taskId: string = 'default') {
    
    
    // Stop the foreground loading after 5s
    setTimeout(() => {
      this.ngxUiLoaderService.stopLoader('loader-01'); // stop foreground spinner of the loader "loader-01" with 'default' taskId
    }, 1000);
  }

  
}
