import { expect } from 'chai';
import '../src/data/users.js';
import { 
  getUser, 
  // averageStepGoal 
} from '../src/scripts.js';
import testData from './testData.js';

const users = testData.users;
describe('User Data', () => {
  it('should return a user\'s data, given their ID', () => {
    const id = 9;
    const user = getUser(users, id);
    expect(user).to.equal(users[8])
  });

  it('should be able to return a different user', () => {
    const id = 3;
    const user = getUser(users, id);
    expect(user).to.equal(users[2])
  })

  // it('should calculate the average step goal for a set of users', () => {
  //   const groupGoal = averageStepGoal(users)
  //   expect(groupGoal).to.equal(6500)
  // })
});