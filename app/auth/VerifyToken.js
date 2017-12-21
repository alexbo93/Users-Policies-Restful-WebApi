import jwt from 'jsonwebtoken';
import config from '../../config';

const verifyToken = (req, res, next) => {
  console.log('entro en verifyToken');
  const token = req.headers['x-access-token'];
  if (!token)
    return res.status(403).send({ auth: false, message: 'No token provided.' });
  jwt.verify(token, config.dev.auth.clientSecret, function(err, decoded) {
    if (err)
    return res.status(500).send({ auth: false, message: 'Authentication failure' });
    // if everything good, save to request for use in other routes
    req.userId = decoded.id;
    next();
  });
}
export default verifyToken;