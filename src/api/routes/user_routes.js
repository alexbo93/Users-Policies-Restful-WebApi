// TODO: Search autodocumented functions methods

export default ({app, db}) => {
  // Generete automatic documentation
  // Get list of all users
  app.get('/users', (req, res) => {
    res.status(200).send('List of users in progress');
  });

  app.get('/users/:id', (req, res) => {
    res.status(200).send(`User with ID: ${req.params.id} is in progress`);
  });

  app.get('/users/:policyId', (req, res) => {
    res.status(200).send('User with ID: ${req.params.policyId} is in progress');
  });
};