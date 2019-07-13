class UI {
    constructor(){
        this.profile = document.getElementById('profile');
        this.repos = document.getElementById('repositories');
    }
    showAlerts(message, color){
        const div = document.createElement('div');
        div.className = color;
        div.appendChild(document.createTextNode(message));
        const content = document.querySelector('.row');
        content.insertBefore(div, content.firstChild);
    }
    clearAlerts() {
        const alert = document.querySelector('.alert');
        if(alert){
            alert.remove();
        }
    }
    showRepositories(respositories){
        let template = '';
        respositories.forEach(repo => {
            template += `
                <div class="card card-body mt-2 animated bounceInUp">
                    <div class="row">
                        <div class="col-md-6">
                            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                        </div>
                        <div class="col-md-6">
                            <span class="badge badge-primary">
                                Lang: ${repo.language}
                            </span>
                        </div>
                    </div>
                </div>
            `;
        });
        this.repos.innerHTML = template;
    }
    showProfile(user){
        this.profile.innerHTML = `
            <div class="card mt-2 animated bounceInLeft">
                    <img src="${user.avatar_url}" class="card-img-top" alt="avatar" />
                    <div class="card-body">
                        <h3 class="card-title">${user.login}</h3>
                        <a href="${user.html_url}" class="btn btn-outline-primary btn-block" target="_blank" >Github Profile</a>
                        <span class="badge badge-success">
                            Followers ${user.followers}
                        </span>
                        <span class="badge">
                            Following ${user.following}
                        </span>
                    </div>
            </div>
        `;
    }
}
module.exports = UI;