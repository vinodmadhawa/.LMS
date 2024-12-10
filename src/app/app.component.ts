import { Component, NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { Router,RouterOutlet } from '@angular/router';

import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, 
    RouterOutlet, 
    SharedModule,
    AuthModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'LMS';
}
