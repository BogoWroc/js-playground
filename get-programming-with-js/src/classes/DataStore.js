class DataStore {
    constructor() {
        console.log("DataStore");
    }

    fetch() {
        return "origin";
    }
}

class TeamStore extends DataStore {
    constructor() {
        super();
        console.log("TeamStore");
    }

    addUserToTeam(teamId, userId) {
        // add user to team
    }

    removeUserFromTeam(teamId, userId) {
        // remove user from team
    }
    
    fetch() {
        console.log(super.fetch());
        console.log("modified");
    }
}

const teamStore = new TeamStore();
teamStore.fetch();