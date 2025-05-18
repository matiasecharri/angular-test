import { Routes } from '@angular/router';
import { KypScreenComponent } from './pages/kyp-screen/kyp-screen.component';

export const routes: Routes = [
  { path: 'KYP', component: KypScreenComponent },
  { path: 'Summary', component: KypScreenComponent },
  { path: 'Tasks', component: KypScreenComponent },
  { path: 'Deals', component: KypScreenComponent },
  { path: 'Activity', component: KypScreenComponent },
  { path: 'Master Commissions', component: KypScreenComponent },
  { path: 'Affiliate Statement', component: KypScreenComponent },
  { path: 'Settings', component: KypScreenComponent },
  { path: 'API', component: KypScreenComponent },
  { path: 'Postback', component: KypScreenComponent },
  { path: 'Campaigns', component: KypScreenComponent },
  { path: 'Rebate', component: KypScreenComponent },
];