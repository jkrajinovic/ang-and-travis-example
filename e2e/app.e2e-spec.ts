import { NgTravisPage } from './app.po';

describe('ng-travis App', () => {
  let page: NgTravisPage;

  beforeEach(() => {
    page = new NgTravisPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
