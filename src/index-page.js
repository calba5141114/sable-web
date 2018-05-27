window.sr = ScrollReveal();
sr.reveal('.foo');
let formButton = document.getElementById('form_input_button');
let email = document.getElementById('email_input');
let textMain = document.getElementById('text_input');

class handleMessage {
    constructor(email = 'Empty Email Field', subject = "Empty Subject Field", text = 'Empty Text Field') {
        this.email = email;
        this.text = text;
        this.subject = subject;
        let tempMessage = {
            email: this.email,
            content: {
                subject: this.subject,
                text: this.text
            }
        };
        return tempMessage;
    }
}
;


formButton.onclick = () => {

    alert('test')

}

