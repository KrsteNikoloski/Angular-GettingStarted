import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from './components/home/welcome.component';

const routes: Routes = [
    { path: 'welcome', component: WelcomeComponent },
    { path: '', pathMatch: 'full', redirectTo: 'welcome' },
    { path: '**', pathMatch: 'full', redirectTo: 'welcome' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
