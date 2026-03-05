import { BasePage } from '../BasePage';
import { ROUTES } from '../../constants/pageRoutes';
import { GlobalFeedTab } from '../../components/GlobalFeedTab';
import { ExternalHeader } from '../../components/header/ExternalHeader';

export class ExternalHomePage extends BasePage {
  constructor(page, userId = 0) {
    super(page, userId);
    this._url = ROUTES.home;
    this.header = new ExternalHeader(this.page, userId);
    this.globalFeed = new GlobalFeedTab(this.page, userId);
  }
}
