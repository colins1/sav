import read from '../js/reader';
import json from '../js/parser';

jest.setTimeout(10000);

test('testing', (done) => {
  read()
    .then((response) => json(response))
    .then((data) => {
      expect(data).toEqual('{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}');
      done();
    });
});