class Form {
    constructor(form) {
        this.patterns = {
            name: /^[a-zа-яё]{2,}$/igu,
            phone: /^\+7\(\d{3}\)\d{3}-\d{4}$/,
            email: /^[\w._-]+@\w+\.[a-z]{2,4}$/i
        }

        this.errors = {
            name: 'Имя содержит только буквы',
            phone: 'Телефон подчиняется шаблону +7(000)000-0000',
            email: 'E-mail выглядит как mymail@mail.ru, или my.mail@mail.ru, или my-mail@mail.ru'
        }

        this.errorsClass = 'error-msg';
        this.form = form;
        this.valid = false;
        this._validateForm();
    }

    _validateForm() {
        let errors = [...document.querySelector(this.form).querySelectorAll(`.${this.errorsClass}`)];
        for(let error of errors) {
            error.remove();
        }

        let formFields = [...document.querySelector(this.form).getElementsByTagName('input')];
        for(let field of formFields) {
            this._validate(field);
        }
    }

    _validate(field) {
        if(this.patterns[field.name]) {
            if(!this.patterns[field.name].test(field.value)) {
                field.classList.add('invalid');
                this._addErrorMsg(field);
                this._watchField(field);
            }
        } 
    }

    _addErrorMsg(field) {
        let error = `<div class="${this.errorClass}">${this.errors[field.name]}</div>`;
        field.parentNode.insertAdjacentHTML('beforeend', error);
    }

    _watchField(field) {
        field.addEventListener('input', () => {
            let error = field.parentNode.querySelector(`.${this.errorClass}`);
            if(this.patterns[field.name].test(field.value)){
                field.classList.remove('invalid');
                field.classList.add('valid');
                if(error){
                    error.remove();
                }
            } else {
                field.classList.remove('valid');
                field.classList.add('invalid');
                if(!error){
                    this._addErrorMsg(field);
                }
            }
        })
    }
}