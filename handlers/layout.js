
var content = {title : 'NSP Library',
                header: 'NSP Library System',
                nav   : '<table id="table-nav"></table>'};

/*
 *  Possible structure of the content object
 *  {
 *      navBar : {},    // dom structure for the nav bar
 *      mainContent : {}    // default dom structure for the main content view
 *  };
 *
 */

function generateNavBar(admin) {    // probably a flag for admin rights?
    if (admin == true) {
        /* generate dom object for admin */
    }
    else {
        /* generate dom object for user */
    }
    return {};  // return the generated dom object
};

exports.layout = function(req, res) {
    // var navBarContents = generateNavBar(req.params.admin);  // rename req.params.admin into more cryptic name
    res.render('layout', content);
};
