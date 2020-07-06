import { AggregateUsers } from './../src/aggregateUsers.js';

describe('instantiate new AggregateUser object and add users', () => {
  let userIndex;
  let user;

  beforeEach(() => {
    userIndex = new AggregateUsers();
    user = 'Hannah'
  });

  test('should correctly instantiate new AggregateRecipe object', () => {
    expect(userIndex.users).toEqual([]);
  });

});