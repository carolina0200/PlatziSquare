import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { ResaltarDirective } from './directives/resaltar.directive';
import { ContarClickDirective } from './directives/contar-clicks.directive';
import { Routes, RouterModule } from '@angular/router'
import { DetalleComponent } from './detalle/detalle.component';
import { LugaresComponent } from './lugares/lugares.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LugaresService } from './services/lugares.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { CrearComponent } from './crear/crear.component';
import { HttpModule } from '@angular/http';

const appRoutes: Routes = [
  { path: '', component: LugaresComponent },
  { path: 'lugares', component: LugaresComponent }, 
  { path: 'detalle/:id', component: DetalleComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'crear/:id', component: CrearComponent },

]
export const firebaseConfig = {
  apiKey: "AIzaSyDB3Jp5ntCjpl2AhIzoSTaqCfP7tdIp628",
  authDomain: "platzisquare-1526404504196.firebaseapp.com",
  databaseURL: "https://platzisquare-1526404504196.firebaseio.com",
  storageBucket: "platzisquare-1526404504196.appspot.com",
  messagingSenderId: "253776258924"

};
@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective,
    ContarClickDirective,
    DetalleComponent,
    LugaresComponent,
    ContactoComponent,
    CrearComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDfZnWz78rP7bJZmL9vCkvd5q1TJDuXvoM'
      
    }),
    RouterModule.forRoot(appRoutes)

  ],
  providers: [LugaresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
