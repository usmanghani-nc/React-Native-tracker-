const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    }
})

// this will call when we save new user 
// this functio  will hash with salt out
// user password and store in database.
userSchema.pre('save', function (next) {
    const user = this;

    // if user didnt modified thir password
    if (!user.isModified('password')) next();

    // genrataing salt 
    bcrypt.genSalt(10, (err, salt) => {
        if (err) next(err);

        bcrypt.hash(user.password, salt, (err, hash) => {
            if (err) next(err);
            // Store hash in database
            user.password = hash
            next()
        })
    })

})

//To verify the password later on:
// when we try to log in with password we campare with database password
userSchema.methods.comparePassword = function (candidatePassword) {

    // this user = data base user obj
    const user = this;

    // candidatePassword the one who is type his pass 
    // ex 123456 and we match with user pass in database 

    return new Promise((resolve, reject) => {
        bcrypt.compare(candidatePassword, user.password, (err, isMatch) => {

            if (err) reject(err)
            if (!isMatch) reject(false)

            resolve(true)
        })
    })
}


mongoose.model("User", userSchema)