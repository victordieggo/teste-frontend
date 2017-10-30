/* =====================================================================
 * NEWSLETTER FORM VALIDATION
 * ===================================================================*/
/*global window, document, setTimeout*/

(function () {

    'use strict';

    var body = document.body,
        form = body.querySelector('#newsletter-form');

    function inputError(element, errorMessage) {
        var parent, error;
        parent = element.parentElement;
        parent.classList.add('input-error');
        error = parent.querySelector('.error-message');
        if (error === null) {
            error = document.createElement('p');
            error.className = 'text-small error-message spacer-top-05';
            error.innerHTML = errorMessage;
            parent.appendChild(error);
        } else {
            error.innerHTML = errorMessage;
        }
    }

    function inputValid(element) {
        var parent, error;
        parent = element.parentElement;
        parent.classList.remove('input-error');
        error = parent.querySelector('.error-message');
        if (error !== null) {
            parent.removeChild(error);
        }
    }

    function validateEmail(email) {
        var regex = /\b[A-Z0-9\-]+@(?:[A-Z0-9\-]+\.)+[A-Z]{2,20}\b/gi,
            validation;
        if (regex.test(email)) {
            validation = true;
        } else {
            validation = false;
        }
        return validation;
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        var name = form.querySelector('input[name=name]'),
            email = form.querySelector('input[name=email]'),
            submit,
            sucess,
            sucessMessage;

        Array.prototype.forEach.call([name, email], function (input) {
            if (input.value === '' || input.value === null) {
                inputError(input, 'This field is required.');
                form.querySelector('.input-error input').focus();
                return;
            }
            if (input.name === 'email' && validateEmail(input.value) === false) {
                inputError(input, 'Invalid email address.');
                form.querySelector('.input-error input').focus();
                return;
            }
            inputValid(input);
        });

        if (!form.querySelector('.input-error') && !form.querySelector('.sucess-message')) {

            sucessMessage = 'Thank you <strong>' + name.value + '</strong>, you successfully joined our mailing list using the email <strong>' + email.value + '</strong>.';
            body.querySelector(':focus').blur();
            form.classList.add('form-sucess');
            form.reset();

            submit = form.querySelector('[type="submit"]');
            submit.disabled = true;

            setTimeout(function () {
                form.classList.remove('form-sucess');
                sucess = document.createElement('p');
                sucess.className = 'text-block text-light text-small spacer-top-10 sucess-message';
                sucess.innerHTML = sucessMessage;
                form.appendChild(sucess);
                setTimeout(function () {
                    form.removeChild(sucess);
                    submit.disabled = false;
                }, 17000);
            }, 1000);

        }
    });

}());
