import { Routes } from '@angular/router';
import { Home } from './home/home';
import { AppPage } from './shared/app-page/app-page';
import { SharedPrivacyPolicy } from './shared/privacy-policy/privacy-policy';
import { SharedSupport } from './shared/support/support';
import { SharedMarketing } from './shared/marketing/marketing';
import { AuroraPage } from './aurora/aurora';
import { TeamPage } from './team/team';
import { MindfulTennisPage } from './mindful-tennis/mindful-tennis';
import { APPS } from './apps.config';

function appRoutes(slug: string): Routes {
  return [
    { path: slug, component: AppPage, data: { appSlug: slug } },
    { path: `${slug}/privacy-policy`, component: SharedPrivacyPolicy, data: { appSlug: slug } },
    { path: `${slug}/support`, component: SharedSupport, data: { appSlug: slug } },
    { path: `${slug}/marketing`, component: SharedMarketing, data: { appSlug: slug } },
  ];
}

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'aurora', component: AuroraPage },
  { path: 'team', component: TeamPage },

  // Mindful Tennis — custom rich page
  { path: 'mindful-tennis', component: MindfulTennisPage, data: { appSlug: 'mindful-tennis' } },
  { path: 'mindful-tennis/privacy-policy', component: SharedPrivacyPolicy, data: { appSlug: 'mindful-tennis' } },
  { path: 'mindful-tennis/support', component: SharedSupport, data: { appSlug: 'mindful-tennis' } },
  { path: 'mindful-tennis/marketing', component: SharedMarketing, data: { appSlug: 'mindful-tennis' } },

  // All other apps use the generic AppPage template
  ...APPS.filter(app => app.slug !== 'mindful-tennis').flatMap(app => appRoutes(app.slug)),
];
