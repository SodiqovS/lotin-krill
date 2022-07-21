const firstname = document.getElementsByName('firstname')[0];
const email =  document.getElementsByName('email')[0];
const job =  document.getElementsByName('job')[0];
const skills =  document.getElementsByName('skills')[0];
const subject =  document.getElementsByName('subject')[0];
const message =  document.getElementsByName('message')[0];

human = {
    firstname: localStorage.getItem('firstname'),
    email: localStorage.getItem('email'),
    job: localStorage.getItem('job'),
    skills: localStorage.getItem('skills'),
    subject: localStorage.getItem('subject'),
    showInfo: function() {
        info = `Mening ismim : ${this.firstname}
        \nMening elektron pochtam : ${this.email} 
        \nMening kasbim : ${this.job} 
        \nMening Ko'nikmalarim : ${this.skills} 
        \nXat mazmuni : ${this.subject}`;            

        return info
    }
}

message.textContent = human.showInfo();

firstname.addEventListener('input', () => {
    human.firstname = firstname.value;
    message.textContent = human.showInfo();
    localStorage.setItem('firstname', firstname.value);
})

email.addEventListener('input', () => {
    human.email = email.value;
    message.textContent = human.showInfo();
    localStorage.setItem('email', email.value)
})

job.addEventListener('input', () => {
    human.job = job.value;
    message.textContent = human.showInfo();
    localStorage.setItem('job', job.value)

})

skills.addEventListener('input', () => {
    human.skills = skills.value;
    message.textContent = human.showInfo();
    localStorage.setItem('skills', skills.value)
})

subject.addEventListener('input', () => {
    human.subject = subject.value;
    message.textContent = human.showInfo();
    localStorage.setItem('subject', subject.value);
})




