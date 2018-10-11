import { BlogHomeComponent } from './blog-home/blog-home.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';


const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: HomePageComponent},
    { path: 'blog', component: BlogHomeComponent}
];

export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);
