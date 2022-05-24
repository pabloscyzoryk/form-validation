// DOM
const form = document.querySelector('form');
const submit = document.querySelector('form > .input-wrapper > #submit');
const div = document.querySelector('div.form');

// Input class

class Input {
    constructor(element, regex) {
        this.element = element;
        this.regex = regex;
        this.isCorrect = false;
        
        this.element.addEventListener('keyup', () => {
            this.checkRegex(this.element.value, this.regex);
            this.submitActivation();
        });
    }
    checkRegex(value, regex) {
        if(regex.test(value.trim())) {
            this.element.style.border = "limegreen 3px solid";
            this.isCorrect = true;
        }
        else {
            this.element.style.border = "red 3px solid";
            this.isCorrect = false;
        }
        if(value == '') {
            this.element.style.border = 'none';
        }
    }
    submitActivation() {
        if(login.isCorrect && password.isCorrect) {
            submit.removeAttribute('disabled');
            submit.classList.add('active');
        }
        else {
            submit.setAttribute('disabled', 'disabled');
            submit.classList.remove('active');
        }
    }
}

// user class (may be used for the future)

class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
}

// class init

const login = new Input(document.querySelector('#email'), /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
const password = new Input(document.querySelector('#password'), /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/);

// form submit event

form.addEventListener('submit', e => {
    e.preventDefault();
    const userOne = new User(form.email.value, form.password.value);
    console.log(`email: ${userOne.email}, password: ${userOne.password}`);
    
    // reason why people use react framework
    div.innerHTML = `<div class="h1-wrapper">
                        <h1> Logged in! <br> Now I got your password :)</h1>
                    </div> 
                        <form> 
                            <div class="input-wrapper"> 
                                <input type="submit" name="submit" id="submit" value="Log out" class="active"> 
                            </div> 
                        </form>`;
});