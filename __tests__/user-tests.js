import { User } from '../src/user-object.js'
describe('should include all tests related to the user object', () => {
  let userObject;

  beforeEach(() => {
    const description = "Likes long walks on the beach"
    userObject = new User("Kyle", description, "Portland, OR");
  });

  test('should properly instantiate new user object', () => {
    expect(userObject.name).toEqual("Kyle");
    expect(userObject.recipes).toEqual([]);
    expect(userObject.aboutMe).toEqual("Likes long walks on the beach");
    expect(userObject.location).toEqual("Portland, OR");
  });
})