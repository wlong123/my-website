import { NgModule } from '../../node_modules/@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';

const appRoutes: Routes = [
    // { path: '', component: AppComponent },
    { path: 'test', component: HeaderComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
