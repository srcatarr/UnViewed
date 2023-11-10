class out {
    href;
    title;
    constructor (href, title) {
        this.href = href;
        this.title = title;
    }
    val() {
        const o = HtmlService.createHtmlOutputFromFile(this.href);
        o
            .setSandboxMode(HtmlService.SandboxMode.IFRAME)
            .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
            .setTitle(this.title);
        return o;
    }
}
let secCode = Math.floor(Math.random() * 1000000);

function doGet(e) {
    vars.lang = e.parameter.lang;
    if (e.parameter.page === "admin") {
        const exit = new out("admin", "Admin");
        return exit.val();
    } else {
        const exit = new out("index", "Server-side");
        return exit.val();
    }
}

function login(mail) {
    vars.mail = mail;
    const ss = SpreadsheetApp.openById(vars.id);
    const s = ss.getSheetByName("malls");
    s.getDataRange().getValues().forEach(element => {
        if (element[0] === mail)
            MailApp.sendEmail({
                to: mail,
                subject: translate("email", "subject"),
                htmlBody: translate("emil", "htmlBody").replace(
                    "SECURE_CODE", secCode
                ),
                noReply: true,
            })
    })
}

function controlSecCode(code) {
    if (code === secCode) {
        vars.isLoggedIn = true;
        return true;
    }
    else return false;
}

function getMallData() {
    if (vars.isLoggedIn) {
        const ss = SpreadsheetApp.openById(vars.id);
        const s = ss.getSheetByName("malls");
        s.getDataRange().getValues().forEach(element => {
            if (element[0] === vars.mail)
                return element;
        })
    } else return false;
}