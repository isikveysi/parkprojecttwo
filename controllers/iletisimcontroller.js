const errorWrapper = require("../helpers/error/errorWrapper");
const CustomError = require("../helpers/error/customError");
const sendMail = require("../helpers/libraries/sendEmail");

const iletisimcontroller = errorWrapper(async (req,res,next) => {

    const name = req.body.name;
    const email = req.body.email;
    const konu = req.body.konu;
    const message = req.body.message;    
    

    const emailTemplate = `
            <h3>${konu}</h3>
            <p>${name}</p>
            <p>${email}</p>
             <p>${message}</p>  
        
    `;
    try {
        await sendMail({
            from: "veysi.isik188@gmail.com", 
            to: "veysi.isik188@gmail.com", 
            subject: name,
            html: emailTemplate
        });
        return res.status(200)
        .json({
            success : true,
            message : "Email Sent",
         
        });
    }
    catch(err) {       

        return next(new CustomError("Email Could Not Be Sent",500));
    }    
});

const getiletisim = errorWrapper(async (req,res,next) => {
    return res.status(200).json({
        success : true,
        message : "Email Sent",
        data:"iletisim çalıdtı"
    });
     
});
module.exports = {
    iletisimcontroller,
    getiletisim
};