describe('should include all tests related to the user object', () => {
  let userObject;
  import { User } from '../src/user-object.js'
 
  beforeEach(() => {
    const description = "Likes long walks on the beach"
    userObject = new User("Kyle", ["Recipe 1", "Recipe 2"], description, "Portland, OR");
  });

  test('should properly instantiate new user object', () => {
    expect(userObject.name).toEqual("Kyle");
    expect(userObject.recipes).toEqual(["Recipe 1", "Recipe 2"]);
    expect(userObject.aboutMe).toEqual("Likes long walks on the beach");
    expect(userObject.location).toEqual("Portland, OR");
  });
})