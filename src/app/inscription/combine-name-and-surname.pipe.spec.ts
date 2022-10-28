import { CombineNameAndSurnamePipe } from './combine-name-and-surname.pipe';

describe('CombineNameAndSurnamePipe', () => {
  it('create an instance', () => {
    const pipe = new CombineNameAndSurnamePipe();
    expect(pipe).toBeTruthy();
  });
});
