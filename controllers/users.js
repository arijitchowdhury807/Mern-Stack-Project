const User = require("../models/user");

module.exports.renderSignupform = (req,res) =>{
    res.render("users/signup.ejs");
};

module.exports.signup = async(req,res) => {
   
    
    try {
        let {username,email,password} = req.body;
        // Create a new user instance with email and username
        const newUser = new User({ email, username });

        // Use passport-local-mongoose's register method to save the user with password
        const registeredUser = await User.register(newUser, password); // Register user with password
        console.log(registeredUser);
        req.login(registeredUser,(err) =>{
            if(err){
                return next(err);
            }
             // Flash a success message
        req.flash("success", "Welcome to Wanderlust");

        // Redirect to the listings page after successful registration
        res.redirect("/listings");
        });
        
    } catch (err) {
        // Handle errors (e.g., if email already exists, username already exists, etc.)
        console.error(err);
        req.flash("error", "Registration failed. Please try again.");
        res.redirect("/signup");
    }
};

module.exports.renderLoginForm = (req,res) =>{
    res.render("users/login.ejs");
};

module.exports.login = async(req,res) =>{
    req.flash("success", "Welcome to Wanderlust");

        // Redirect to the listings page after successful registration
        let redirectUrl = res.locals.redirectUrl || "/listings";
        res.redirect(redirectUrl); 

};

module.exports.logout = (req,res,next) =>{
    req.logout((err) =>{
        if(err){
            return next(err);
        }
        req.flash("success","You are logged out");
        res.redirect("/listings");
    });

}