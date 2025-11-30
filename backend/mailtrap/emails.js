import { VERIFICATION_EMAIL_TEMPLATE,PASSWORD_RESET_REQUEST_TEMPLATE, PASSWORD_RESET_SUCCESS_TEMPLATE} from "./emailTemplates.js";
import { mailtrapClient, sender } from "./mailtrap.config.js";

export const sendVerificationEmail =async (email,verificationToken) =>{
    const recipient = [{email}];
    try {
        
        const response = await mailtrapClient.send({
            from:sender,
            to : recipient,
            subject : "Verify your email",
            html :VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}",verificationToken),
            category : "Email Verification"
        })

        console.log("Email send Successfully",response);

    } catch (error) {
        console.log("Error sending Verification ",error);
        throw new Error(`Error sending Email :  ${error}`);
    }
}

export const sendWelcomeEmail = async (email,name) =>{
    const recipient = [{email}]
    try {
       const response =  await mailtrapClient.send({
            from :sender,
            to : recipient,
            template_uuid:"d2cfab96-3af7-4267-8ab3-d3ab0188fbe3",
             template_variables: {
            "company_info_name": "CarLink",
            "name": name,
    }

        });

        console.log(`Email is sent Successfully`,response);
    } catch (error) {
        console.log("error Failed Sending Welcome Email",error);
    }
}


export const sendResetPasswordEmail = async (email, resetUrl) => {
    const recipient = [{ email }];
    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: "Reset Your Password", // must include subject
            html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetUrl),
            category: "Password Reset"
        });

        console.log("Email sent successfully", response);
    } catch (error) {
        console.log("Error Sending Forgot password Email", error);
        throw new Error(`Error sending Email: ${error}`);
    }
};


export const sendResetSuccessEmail = async (email) => {
    const recipient = [{email}];
    try {
        const response = await mailtrapClient.send({
            from : sender,
            to : recipient,
            Subject : "Password Reset Successfull",
            html: PASSWORD_RESET_SUCCESS_TEMPLATE,
            category:"Password Reset Success "
        })

        console.log("Email Sent Successfully Password Reset",response);
    } catch (error) {
        console.log("Error Reseting password", error);
        throw new Error(`Error Reseting password: ${error}`);
    }
}