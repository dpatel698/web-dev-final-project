
const profile = (state = {}, action) => {
    switch (action.type) {
        case 'update-profile':
            return(action.profile)
        case 'profile-logout':
            return({})
        default:
            return(state);
    }

};

export default profile;
