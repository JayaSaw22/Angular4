import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';
import { DataService } from './services/data.service';
import { HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
//import { TableComponent } from './table/table.component';


@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    LoginComponent,
    LogoutComponent,
  //  TableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
