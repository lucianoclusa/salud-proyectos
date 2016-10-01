import { OsdeSaludoAngular2Page } from './app.po';

describe('osde-saludo-angular2 App', function() {
  let page: OsdeSaludoAngular2Page;

  beforeEach(() => {
    page = new OsdeSaludoAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
