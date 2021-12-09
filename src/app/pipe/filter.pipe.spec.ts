import { UserFilterPipe } from './filter.pipe';

describe('FilterPipe', () => {
  it('create an instance', () => {
    const pipe = new UserFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
