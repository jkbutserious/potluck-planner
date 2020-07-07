import { AggregateUsers } from './../src/aggregateUsers.js';
import { User } from '../src/user-object.js';

describe('instantiate new AggregateUser object and add users', () => {
  let userIndex;
  let reusableUser;

  beforeEach(() => {
    userIndex = new AggregateUsers();
    reusableUser = new User('Tyson', 'testAboutMe', 'Portland')
  });

  test('should correctly instantiate new AggregateRecipe object', () => {
    expect(userIndex.users).toEqual([]);
  });

  test('should correctly add user to AggregateUsers object', () => {
    userIndex.addUser(reusableUser);
    expect(userIndex.users).toEqual([reusableUser]);
  });

  test('assigns id to user object when added to AggregateUsers', ()=>{
    userIndex.addUser(reusableUser);
    expect(reusableUser.id).toEqual(1);
  })

  test('deletes user from AggregateUserss', ()=>{
    let user2 = new User('Kyle', 'testAboutMe', 'Seattle')
    userIndex.addUser(reusableUser);
    userIndex.addUser(user2);
    userIndex.deleteUser(reusableUser.id);
    expect(userIndex.users).toEqual([undefined, user2]);
  })
});