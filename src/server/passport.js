/**
 * Created by Peter on 26/08/15.
 */
import passport from 'passport';
import { Strategy as LocalStrategy } from  'passport-local'
import { Strategy as TwitterStrategy } from  'passport-twitter'
import flash from 'connect-flash'
import session from 'express-session';

import User from  './model/user.model'

export function init(app){
// required for passport
  app.use(session({ secret: 'thisismyamazingsecretgrifi' })); // session secret
  app.use(passport.initialize());
  app.use(passport.session()); // persistent login sessions
  app.use(flash()); // use connect-flash for flash messages stored in session
}