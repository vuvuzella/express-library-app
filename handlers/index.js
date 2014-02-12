/*
 * route handler for index
 *
 */
var content = {title : 'NSP Library', header : 'NSP Library System', message : 'Welcome to the NSP Library System'};

exports.index = function(req, res) {
    res.render('index', content);
};
