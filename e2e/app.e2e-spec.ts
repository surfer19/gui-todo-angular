import { TodoAngularGuiPage } from './app.po';

describe('todo-angular-gui App', function() {
  let page: TodoAngularGuiPage;

  beforeEach(() => {
    page = new TodoAngularGuiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
