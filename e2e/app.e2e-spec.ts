import { TodoRxPage } from './app.po';

describe('todo-rx App', () => {
  let page: TodoRxPage;

  beforeEach(() => {
    page = new TodoRxPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
