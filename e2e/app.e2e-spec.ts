import { RonnieAngular2Page } from './app.po';

describe('ronnie-angular2 App', () => {
  let page: RonnieAngular2Page;

  beforeEach(() => {
    page = new RonnieAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
