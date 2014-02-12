/*
 * route handler for users.js
 *
 */
exports.users = function(req, res) {
    res.render('hello');
};
exports.list = function(req, res) {
    res.send('This will show a list.');
};
