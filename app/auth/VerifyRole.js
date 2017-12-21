import User from '../models/User';

// This method acts as a middleware to check that the caller has permissions
// to perform specific calls to the api. It just verifies that the user is an "admin"
// If it is not it will send back a 403 error.
const verifyRole = (req, res, next) => {
  User.findById(req.userId, (err, user) => {
    if(err)
    return res.status(500).send({ auth: false, message: 'Error verifying user' });
    if(!user || user.length==0)
    return res.status(404).send({auth: false, message: "No authenticated user found"});
    if(user.role=="user")
    return res.status(403).send({auth: false, message: "You don't have permissions to perform this action"});
    next()
  });
}
export default verifyRole;
