import { BasePage } from '../BasePage';
import { GlobalFeedTab } from '../../components/GlobalFeedTab';

export class BaseHomePage extends BasePage {
  constructor(page, userId = 0) {
    super(page, userId);

    // URL strony głównej pobrany z env
    this._url = process.env.HOME_ROUTE;

    this.globalFeed = new GlobalFeedTab(this.page, userId);
  }
}
