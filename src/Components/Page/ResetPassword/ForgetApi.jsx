import axios from "axios";

function Forget_password(res) {

    let data = axios.post(`https://sweede.app/UserPanel/ForgetPasswordAPI/`,
        res
    );

    return data;

}
function Forget_Otp(Otp,Email) {
    let data = axios.post(`https://sweede.app/UserPanel/ValidateOTPForgetPassword/`,
        
    {
        otp:Otp,
        email:Email
    }
    );

    return data;
}

function ConfirmPassword(Email,password) {
    let data = axios.post(`https://sweede.app/UserPanel/VerifyOtpForgetPassword/ `,
        
    {
        email:Email,
        new_password :password
    }
    );

    return data;
}




export { Forget_password , Forget_Otp , ConfirmPassword }