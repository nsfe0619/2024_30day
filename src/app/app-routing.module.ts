import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { SettingComponent } from './pages/setting/setting.component';

const routes: Routes = [
    {
        path: 'main',
        component: MainComponent,
    },
    {
        path: 'setting',
        component: SettingComponent,
    },
    {
        path: '**',
        component: MainComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
