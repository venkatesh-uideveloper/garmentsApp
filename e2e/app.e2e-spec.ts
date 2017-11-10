import { GarmentsAppPage } from './app.po';

describe('garments-app App', () => {
  let page: GarmentsAppPage;

  beforeEach(() => {
    page = new GarmentsAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
