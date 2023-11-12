const out = {
    href: "",
    title: "",
    constructor: (href, title) => {
        this.href = href;
        this.title = title;
    },
    val: () => {
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
        const o = HtmlService.createHtmlOutputFromFile("admin");
        o
            .setSandboxMode(HtmlService.SandboxMode.IFRAME)
            .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
            .setTitle("Admin");
        return o;
    } else {
        const o = HtmlService.createHtmlOutputFromFile("index");
        o
            .setSandboxMode(HtmlService.SandboxMode.IFRAME)
            .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
            .setTitle("Server-Side");
        return o;
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

function getPanelPage() {
    const o = HtmlService.createHtmlOutputFromFile("panel");
    return o.getContent();
} function getAdminPage() {
    const o = HtmlService.createHtmlOutputFromFile("admin");
    return o.getContent();
}