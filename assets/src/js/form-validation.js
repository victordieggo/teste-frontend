/* =====================================================================
 * NEWSLETTER FORM VALIDATION
 * ===================================================================*/
/*global window, document, setTimeout*/

(function () {

    'use strict';

    var body = document.body,
        form = body.querySelector('#newsletter-form');

    function inputError(element, message) {
        var parent, notice;
        parent = element.parentElement;
        parent.classList.add('input-error');
        notice = parent.querySelector('.notice-error');
        if (notice === null) {
            notice = document.createElement('p');
            notice.className = 'notice notice-error';
            parent.appendChild(notice);
        }
        notice.innerHTML = message;
    }

    function inputValid(element) {
        var parent, notice;
        parent = element.parentElement;
        parent.classList.remove('input-error');
        notice = parent.querySelector('.notice-error');
        if (notice !== null) {
            parent.removeChild(notice);
        }
    }

    function validateName(name) {
        name = name.replace(/ /g, '');
        var regex = /^[a-záàâãéèêíïóôõöúçñ ]+$/i;
        if (regex.test(name)) {
            return true;
        }
        return false;
    }

    function validateEmail(email) {
        var regex = /\b[A-Z0-9\-]+@(?:[A-Z0-9\-]+\.)+[A-Z]{2,20}\b/gi;
        if (regex.test(email)) {
            return true;
        }
        return false;
    }

    function disableForm(option) {
        var elements = form.querySelectorAll('input, button');
        Array.prototype.forEach.call(elements, function (element) {
            element.disabled = option;
        });
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        var name = form.querySelector('input[name=name]'),
            email = form.querySelector('input[name=email]'),
            sucess;

        Array.prototype.forEach.call([name, email], function (input) {
            if (input.value.length === 0) {
                inputError(input, "'" + input.name + "' is required field.");
                form.querySelector('.input-error input').focus();
                return;
            }
            if (input.name === 'name' && validateName(input.value) === false) {
                inputError(input, 'Please enter your name.');
                form.querySelector('.input-error input').focus();
                return;
            }
            if (input.name === 'email' && validateEmail(input.value) === false) {
                inputError(input, 'Please enter a valid email address.');
                form.querySelector('.input-error input').focus();
                return;
            }
            inputValid(input);
        });

        if (!form.querySelector('.input-error') && !form.querySelector('.sucess-message')) {
            body.querySelector(':focus').blur();
            form.classList.add('form-sucess');
            disableForm(true);
            setTimeout(function () {
                form.classList.remove('form-sucess');
                sucess = document.createElement('p');
                sucess.className = 'notice notice-sucess';
                sucess.innerHTML = 'Thank you ' + name.value + ', you successfully joined our newsletter.';
                form.appendChild(sucess);
                setTimeout(function () {
                    disableForm(false);
                    form.removeChild(sucess);
                    form.reset();
                }, 5000);
            }, 1000);
        }

    });

}());
