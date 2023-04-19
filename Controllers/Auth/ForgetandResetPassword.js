const user = require('../../Models/Account')


exports.forgotPassword = async (req, res) => {
    try {
        const { Email } = req.body;

        const User = await user.findOne({ Email });
        if (!User) {
            return res.status(400).json({ message: 'User not found' });
        }
        const token = jwt.sign({ userId: User._id }, process.env.JWTSECRET, { expiresIn: '15m' });

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: email,
                pass: password,
            },
        });

        const mailOptions = {
            from: email,
            to: Email,
            subject: 'Réinitialisation de votre mot de passe',
            html: `
          <p>Cliquez sur le lien ci-dessous pour réinitialiser votre mot de passe :</p>
          <a  href="http://localhost:4000/resetPassword/${token}">Réinitialiser votre mot de passe</a>
        `,
        };

        await transporter.sendMail(mailOptions);

        res.json({ message: 'Password reset link sent to your email' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

exports.resetPassword = async (req, res) => {
    const { NewPassword } = req.body;
    const { token } = req.params

    try {

        const decoded = jwt.verify(token, process.env.JWTSECRET)
        const userfound = await user.findById(decoded.userId)
        if (!userfound) {
            return res.status(404).send({ message: 'User not found' });
        }

        await user.findByIdAndUpdate(userfound._id, { Password: NewPassword })

        res.status(200).send({ message: 'Password reset successfully' });
    } catch (error) {
        console.log(error);
        res.status(400).send({ message: 'Invalid token' });
    }
}