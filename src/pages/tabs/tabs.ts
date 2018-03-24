import { Component } from '@angular/core';

import { ProfilePage } from '../profile/profile';
import { HomePage } from '../home/home';
import { NotificationPage } from '../notifications/notifications';
import { SearchPage } from '../search/search';
// import { FeedPage } from '../feed/feed';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  
  HomeRoot = HomePage;
  ProfileRoot = ProfilePage;
  NotificationRoot = NotificationPage;
  SearchRoot = SearchPage;
//  tab3Root = FeedPage;

  constructor() {

  }
}
