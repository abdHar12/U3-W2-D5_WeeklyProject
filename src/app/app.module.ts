import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TodoPageComponent } from './components/todo-page/todo-page.component';
import { DonePageComponent } from './components/done-page/done-page.component';

export const AppRoutes: Routes = [
  { path: '', component: TodoPageComponent },
  { path: 'done-page', component: DonePageComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TodoPageComponent,
    DonePageComponent,
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(AppRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
