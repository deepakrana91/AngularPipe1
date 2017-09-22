import { AngularPipe1Page } from './app.po';

describe('angular-pipe1 App', () => {
  let page: AngularPipe1Page;

  beforeEach(() => {
    page = new AngularPipe1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
