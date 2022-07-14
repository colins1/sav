import json from './parser';
import read from './reader';

export default class GameSavingLoader {
  load() {
    return new Promise((resolve) => resolve(read()))
      .then((response) => {
        return json(response);
      })
      .then((response) => JSON.parse(response));
  }
}