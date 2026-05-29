import { BasePage } from '../BasePage';
import { ROUTES } from '../../constants/pageRoutes';
import { GlobalFeedTab } from '../../components/GlobalFeedTab';
import { YourFeedTab } from '../../components/YourFeedTab';
import { InternalHeader } from '../../components/header/InternalHeader';

export class InternalHomePage extends BasePage {
  constructor(page, userId = 0) {
    super(page, userId);
    this._url = ROUTES.home;
    this.header = new InternalHeader(this.page, userId);
    this.globalFeed = new GlobalFeedTab(this.page, userId);
    this.yourFeed = new YourFeedTab(this.page, userId);
  }
}
