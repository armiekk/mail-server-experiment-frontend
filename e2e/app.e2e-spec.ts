import { MailExperimentPage } from './app.po';

describe('mail-experiment App', () => {
  let page: MailExperimentPage;

  beforeEach(() => {
    page = new MailExperimentPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
