const validate = (obj) => {

    return new Promise((resolve, reject) => {
        const { first_name, last_name, mobile_number, email, password, password_confirm } = obj;

        const nameRegex = /^(?=.{1,20}$)[a-zA-Z]+(?:['_.\s][a-z]+)*$/;
        const mobileRegex = /^(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$/;
        const emailRegex = /[-.\w]+@([\w-]+\.)+[\w-]{2,20}/i;
        const passwordRegex = /(?=^.{8,20}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\s).*$/;

        if (!nameRegex.test(first_name)) {
            reject('Please input valid first name')
        }

        if (!nameRegex.test(last_name)) {
            reject('Please input valid last name')
        }

        if (!mobileRegex.test(mobile_number)) {
            reject('please input valid mobile number')
        }

        if (!emailRegex.test(email)) {
            reject('Please input valid email')
        }

        if (!passwordRegex.test(password)) {
            reject('Password MUST be 8-20 characters long. Password should contain letters (at least 1 UPPERCASE and lowercase), numbers and symbols.')
        }

        if (password != password_confirm) {
            reject('Passwords do not match')
        }
        resolve('New user details satisfy all validation checks')
    })
};

module.exports = validate;