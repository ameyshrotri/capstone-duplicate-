const btn = document.getElementById('but');
const inputs = document.querySelector('form');

btn.addEventListener('click', () => {
  Email.send({
    Host : "smtp.mailtrap.io",
    Username : "1704df77843f6d",
    Password : "49e9197abe8c15",
    To : 'xyz@gmail.com',
    From : inputs.elements["email"].value,
    Subject: 'Contect',
    Body: inputs.elements["message"].value + "<br>" + inputs.elements["name"].value + "<br>"
  }).then(msg => alert("Successfully sended the email"))
})