import {mapStateToProps} from '../UserHeader';

const user1 = {
    id: 2,
    name: 'Bob'
};

const user2 = {
    id: 10,
    name: 'John'
};

describe('UserHeader component', () => {
    it('should mapStateToProps properly', () => {


        const state = {
            users: [user1, user2]
        };


        const ownProps = {
            userId: 2
        };


        expect(mapStateToProps(state, ownProps)).toEqual({user: user1});
    });


});