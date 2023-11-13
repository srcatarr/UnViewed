const languages = {
    lang: "",
    tr: {
        email: {
            subject: "Girişinizi doğrulayın.",
            htmlBody: "Güvenlik kodunuz: SECURE_CODE"
        },
        login: {
            email_placeholder: "E-Posta Adresiniz",
            empty_email_err: "Lütfen bir e-posta adresi giriniz.",
            wrong_email_err: "Lütfen gerçek bir e-posta adresi giriniz.",
            information: "Lavabo sahiplerinin bu panel üzerinden giriş yapması gerekmektedir.",
            button_val: "Giriş Yap",
            header: "Giriş"
        }
    },
    en: {
        email: {
            subject: "Access your log in.",
            htmlBody: "Your security code: SECURE_CODE"
        },
        login: {
            email_placeholder: "E-Mail Adress",
            empty_email_err: "Please enter e-mail adress.",
            wrong_email_err: "Lütfen gerçek bir e-posta adresi giriniz.",
            information: "Lavabo sahiplerinin bu panel üzerinden giriş yapması gerekmektedir.",
            button_val: "Log In",
            header: "Log In"
        }
    }
}

function translate(p0, p1) {
    var a = languages[vars.lang];
    var b = a[p0];
    return b[p1];
}

function getTransScript() {
    return languages[scriptProperties.getProperty("lang")];
}