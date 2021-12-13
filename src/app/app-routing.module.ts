import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogModule } from './modules/blog/blog.module';
import { ContactModule } from './modules/contact/contact.module';
import { EventsModule } from './modules/events/events.module';
import { HomeModule } from './modules/home/home.module';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then((m) => HomeModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./modules/contact/contact.module').then((m) => ContactModule)
  },
  {
    path: 'events',
    loadChildren: () => import('./modules/events/events.module').then((m) => EventsModule)
  },
  {
    path: 'blog',
    loadChildren: () => import('./modules/blog/blog.module').then((m) => BlogModule)
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
