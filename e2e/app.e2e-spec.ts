import { CryptosNg2d3Page } from './app.po';

describe('cryptos-ng2d3 App', () => {
  let page: CryptosNg2d3Page;

  beforeEach(() => {
    page = new CryptosNg2d3Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
