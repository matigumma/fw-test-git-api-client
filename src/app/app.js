const  UI = require('./ui');
const  Github = require('./github');

const { clientId, clientSecret } = require('./config.json');

const github = new Github(clientId, clientSecret);
const ui = new UI();

document.getElementById('matigumma').addEventListener('click', (e) =>{
    github.fetchUser(e.srcElement.id).then(data => {
        ui.clearAlerts();
        ui.showProfile(data.userData);
        ui.showRepositories(data.reposData);
    })
});
document.getElementById('userForm').addEventListener('submit',(e)=>{
    const input = document.getElementById('textSearch').value;
    if(input !== ""){
        github.fetchUser(input)
        .then(data => {
            if(data.userData.message === "Not Found") {
                ui.clearAlerts();
                ui.showAlerts("user not found", "alert alert-danger col-md-12 mt-2 d-block");
            }else{
                ui.clearAlerts();
                ui.showProfile(data.userData);
                ui.showRepositories(data.reposData);
            }
        });
    }
    e.preventDefault();
});
