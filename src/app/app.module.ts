import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './views/home/home.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { ListaEquipamentosComponent } from './views/home/lista-equipamentos/lista-equipamentos.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import { LocalPipe } from './shared/pipe/local.pipe'
import {MatDialogModule} from '@angular/material/dialog';
import { MatNativeDateModule } from '@angular/material/core';
import {MatInputModule}  from '@angular/material/input';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListaEquipamentosComponent,
    LocalPipe
  ],
  imports: [
    MatInputModule,
    MatNativeDateModule,
    MatDialogModule,
    MatTableModule,
    MatTabsModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  providers: [
    LocalPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
