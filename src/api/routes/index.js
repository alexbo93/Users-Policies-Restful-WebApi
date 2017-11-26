import userRoutes from './user_routes';
import policyRoutes from './policy_routes';

// Let's export routes for each object
export default (app, db) => {
  userRoutes(app, db);
  policyRoutes(app, db);
}
