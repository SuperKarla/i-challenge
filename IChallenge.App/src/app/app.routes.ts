import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
export const routes: Routes = 
[
    {
        path:'',
        redirectTo:'/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    // {
    //     path: 'data',
    //     component: DataMainComponent
    // },
    // {
    //     path: 'settings',
    //     component: SettingsMainComponent
    // }
];

export const routing = RouterModule.forRoot(routes);