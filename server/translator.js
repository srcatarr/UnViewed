const languages = {
    tr: {
        email: {
            subject: "Girişinizi doğrulayın.",
            htmlBody: "Güvenlik kodunuz: SECURE_CODE"
        }
    }
}

function translate(p0, p1) {
    var a = languages[vars.lang];
    var b = a[p0];
    return b[p1];
}