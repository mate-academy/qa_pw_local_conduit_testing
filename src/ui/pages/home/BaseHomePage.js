import { BasePage } from '../BasePage';
import { ROUTES } from '../../constants/pageRoutes';
import { GlobalFeedTab } from '../../components/GlobalFeedTab';

export class BaseHomePage extends BasePage {
  constructor(page, userId = 0) {
    super(page, userId);
    this._url = ROUTES.home;
    this.globalFeed = new GlobalFeedTab(this.page, userId);
  }
}
