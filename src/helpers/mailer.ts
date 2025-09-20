import nodemailer from 'nodemailer';
import User from "@/models/userModels";
import bcryptjs from 'bcryptjs';

export const sendEmail = async({email, emailType, userId}:any) => {
    try {
        // create a hased token
        const hashedToken = await bcryptjs.hash(userId.toString(), 10)

        if (emailType === "VERIFY") {
            await User.findByIdAndUpdate(userId, 
                {verifyToken: hashedToken, verifyTokenExpiry: Date.now() + 3600000})
        } else if (emailType === "RESET"){
            await User.findByIdAndUpdate(userId, 
                {forgotPasswordToken: hashedToken, forgotPasswordTokenExpiry: Date.now() + 3600000})
        }

        //nodemailer - Gmail SMTP
        var transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: process.env.GMAIL_USER,   
              pass: process.env.GMAIL_PASS
            }
        });


        const mailOptions = {
            from: process.env.GMAIL_USER,
            to: email,
            subject: emailType === "VERIFY" ? "Verify your email" : "Reset your password",
            html: `<p>Click <a href="${process.env.domain}/verifyemail?token=${hashedToken}">here</a> to ${emailType === "VERIFY" ? "verify your email" : "reset your password"}
            or copy and paste the link below in your browser. <br> ${process.env.domain}/verifyemail?token=${hashedToken}
            </p>`
        }

        const mailresponse = await transport.sendMail(mailOptions);
        return mailresponse;

    } catch (error:any) {
        console.error("Email sending failed:", error.message);
        throw new Error(error.message);
    }
}