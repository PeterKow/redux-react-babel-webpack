/**
 * Created by Peter on 29/08/15.
 */
module.exports = function(app, passport) {

  // route for home page
  app.get('/', function(req, res) {
    res.render('index.ejs'); // load the index.ejs file
  });

  // route for login form
  // route for processing the login form
  // route for signup form
  // route for processing the signup form

  // route for showing the profile page
  app.get('/profile', function(req, res) {
    const response = req.user ? req.user : {}
    console.log('res -- profile', response)
    return res.send(response);
  });

  // route for logging out
  app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
  });

  // =====================================
  // TWITTER ROUTES ======================
  // =====================================
  // route for twitter authentication and login

  app.get('/auth/twitter', passport.authenticate('twitter'));

  // handle the callback after twitter has authenticated the user
  app.get('/auth/twitter/callback',
    passport.authenticate('twitter', {
    successRedirect : '/profileMe',
    failureRedirect : '/login'
  }))

  //  function (req, res, next) {
  //  passport.authenticate('twitter',
  //    function(err, user, info) {
  //      console.log('err,', err)
  //      console.log('user,', user)
  //      console.log('info,', info)
  //      res.user = user;
  //      return res.redirect('/user?id=' + user.id + '&token=' + user.token);
  //    }
  //   )(req, res, next)
  //  }
  //);

};

//{
//  successRedirect : '/',
//    failureRedirect : '/login'
//}

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

  // if user is authenticated in the session, carry on
  if (req.isAuthenticated())
    return next();

  // if they aren't redirect them to the login page
  res.redirect('/login');
}