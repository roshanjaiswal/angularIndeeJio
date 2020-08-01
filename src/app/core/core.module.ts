import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../../environments/environment';


import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'; 
import { InMemCarPoolService } from '../data/in-mem-car-pool.service';

@NgModule({
  declarations: [NavbarComponent, HeaderComponent],
  imports: [CommonModule, 
            RouterModule, 
            HttpClientModule, 
            !environment.production ? HttpClientInMemoryWebApiModule.forRoot(
              InMemCarPoolService ) : []
          ],
  exports: [NavbarComponent, HeaderComponent, RouterModule, HttpClientModule]
})
export class CoreModule { }
