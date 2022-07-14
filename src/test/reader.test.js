import read from '../js/reader';

jest.setTimeout(10000);

test('testing', (done) => {
  read()
  .then((data) => {
    expect(data).toBeInstanceOf(ArrayBuffer);
    done();
  });
});