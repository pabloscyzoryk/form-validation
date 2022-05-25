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
        } else {
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
        } else {
            submit.setAttribute('disabled', 'disabled');
            submit.classList.remove('active');
        }
    }
}

// InputIcon class

class InputIcon {
    constructor(div, callback, secondCallback, changeIcon) {
        this.order = 1;
        this.element = div.querySelector('i svg');
        this.icon = this.element.innerHTML;
        this.changeIcon = changeIcon;

        this.element.addEventListener('click', () => {
            if(this.order%2 == 0) {
                secondCallback();
                this.element.innerHTML = this.icon;
            } else {
                callback();
                this.element.innerHTML = this.changeIcon;
            }
            
            this.order++;
        });
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
const passwordIcon = new InputIcon(document.querySelector('.input-icon'), () => { password.element.setAttribute('type', 'text') }, () => {password.element.setAttribute('type', 'password')}, `<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="currentColor" d="M2,5.27L3.28,4L20,20.72L18.73,22L15.65,18.92C14.5,19.3 13.28,19.5 12,19.5C7,19.5 2.73,16.39 1,12C1.69,10.24 2.79,8.69 4.19,7.46L2,5.27M12,9A3,3 0 0,1 15,12C15,12.35 14.94,12.69 14.83,13L11,9.17C11.31,9.06 11.65,9 12,9M12,4.5C17,4.5 21.27,7.61 23,12C22.18,14.08 20.79,15.88 19,17.19L17.58,15.76C18.94,14.82 20.06,13.54 20.82,12C19.17,8.64 15.76,6.5 12,6.5C10.91,6.5 9.84,6.68 8.84,7L7.3,5.47C8.74,4.85 10.33,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C12.69,17.5 13.37,17.43 14,17.29L11.72,15C10.29,14.85 9.15,13.71 9,12.28L5.6,8.87C4.61,9.72 3.78,10.78 3.18,12Z" /></svg>` );

// form submit event

form.addEventListener('submit', e => {
    e.preventDefault();
    const userOne = new User(form.email.value, form.password.value);
    console.log(`email: ${userOne.email}, password: ${userOne.password}`);
    
    // reason why people use framework
    div.innerHTML = `<div class="h1-wrapper">
                        <h1> Logged in! <br> Now I got your password :)</h1>
                    </div> 
                        <form> 
                            <div class="input-wrapper"> 
                                <input type="submit" name="submit" id="submit" value="Log out" class="active"> 
                            </div> 
                        </form>`;
});