function newOwner(name, email) {
    const ss = SpreadsheetApp.openById(vars.id);
    const p = ss;
    SpreadsheetApp.create("deneme");
    Logger.log("Created new owner: "+name+", e-mail adress: "+email);
}

function resetOwner(owner) {
    const ss = SpreadsheetApp.openById(vars.id);
    const pg = ss.getSheetByName("owners");
    pg.getDataRange().getValues();
}