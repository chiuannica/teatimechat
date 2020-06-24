let getHomepage = (req, res) => {
    return res.render("homepage.ejs");
};
let getLogin = (req, res) => {
    return res.render("login.ejs");
};

module.exports = {
    getLogin: getLogin,
    getHomepage: getHomepage
};
