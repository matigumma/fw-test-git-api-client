class Github {
    constructor(clientId, clientSecret){
        this.clientId = clientId;
        this.clientSecret = clientSecret;
        this.repos_limit = 7;
        this.repos_sort = "created: asc";
    }
    async fetchUser(userId) {
        const data = await fetch(`http://api.github.com/users/${userId}?client_id=${this.clientId}&client_secret=${this.clientSecret}`);
        const repos = await fetch(`http://api.github.com/users/${userId}/repos?client_id=${this.clientId}&client_secret=${this.clientSecret}&per_page=${this.repos_limit}&sort=${this.repos_sort}`);

        const userData = await data.json();
        const reposData = await repos.json();

        return {
            userData,
            reposData
        };
    }

}
module.exports=Github;