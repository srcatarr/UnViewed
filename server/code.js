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
    const ss = SpreadsheetApp.openById(vars.id);
    const s = ss.getSheetByName("malls");
    s.getDataRange().getValues().forEach(element => {
        if (element[0] === mail)
            MailApp.sendEmail({
                to: mail,
                subject: translate("email.subject"),
                htmlBody: translate("emil.htmlBody").replace(
                    "SECURE_CODE", Math.floor(Math.random() * 1000000)
                ),
                noReply: true,
            })
    })
}