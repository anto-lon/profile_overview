import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { AccountComponent } from './account.component';
import { SettingsComponent } from './settings/settings.component';
import {AddressInformationComponent} from "./address-information/address-information.component";
import {PersonalInformationComponent} from "./personal-information/personal-information.component";
import {OtherInformationComponent} from "./other-information/other-information.component";


const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    children: [
      {
        path: 'overview',
        component: OverviewComponent,
      },
      {
        path: 'settings',
        component: SettingsComponent,
      },
      {
        path: 'addressInformation',
        component: AddressInformationComponent,
      },
      {
        path: 'personalInformation',
        component: PersonalInformationComponent,
      },
      {
        path: 'otherInformation',
        component: OtherInformationComponent,
      },
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: '**', redirectTo: 'overview', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}
