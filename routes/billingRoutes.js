const 
    keys = require('../config/keys'),
    stripe = require('stripe')(keys.stripeSecretKey),
    requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
    app.post('/api/stripe', requireLogin, async (req, res) => {  
        const charge = await stripe.charges.create({
            amount: 1500,
            currency: 'usd',
            source: req.body.id, // obtained with Stripe.js
            description: 'Pago de creditos',
            receipt_email: 'gerardo.estrada.dg@gmail.com'
        });
        req.user.credits += 15;
        const user = await req.user.save();
        res.send(user);
    });
}


