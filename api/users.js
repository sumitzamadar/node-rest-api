var Users = require('../models/users');


module.exports = function(app) {
    // get all users
    app.get('/api/users', function(req, res) {
        Users.find(function(err, result) {
            if (err) {
                throw err;
                return;
            }

            res.send(result);
        });
    });

    // get user by username
    app.get('/api/users/:username', function(req, res) {
        Users.find({username: req.params.username}, function(err, result) {
            if (err) {
                throw err;
                return;
            }

            res.send(result);
        });
    });

    // create or update user
    app.post('/api/users', function(req, res) {
        //update
        if (req.body.id) {
            Users.findByIdAndUpdate(req.body.id, {
                username: req.body.username,
                password: req.body.password,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                emailid: req.body.emailid,
                address: req.body.address
            }, function(err, result) {
                if (err) {
                    throw err;
                    return;
                }

                res.send('Success');
            });
        }

        //create
        else {
            var newUser = Users({
                username: req.body.username,
                password: req.body.password,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                emailid: req.body.emailid,
                address: req.body.address
            });

            newUser.save(function(err, result) {
                if (err) {
                    res.send('Failed!');
                    console.error(err);
                    return;
                }

                res.send('Success.');
 
            });
        }
    });


    // delete
    app.delete('/api/users', function(req, res) {
        Users.findByIdAndRemove(req.body.id, function(err, result) {
            if (err) {
                res.send('Failed!');
                console.error(err);
                return;
            }

            res.send('Success');
        })
    });
};
