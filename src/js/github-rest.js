function github(a, b) {
    this.result = ""
    fetch("https://api.github.com/" + a)
        .then(dat => dat.json())
        .then(json => {
            b(json);
        })
}