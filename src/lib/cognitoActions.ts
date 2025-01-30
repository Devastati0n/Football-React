import { redirect } from "next/navigation";
import {
  signUp,
  confirmSignUp,
  signIn,
  signOut,
  resendSignUpCode,
  autoSignIn,
  updateUserAttribute,
  type UpdateUserAttributeOutput,
  confirmUserAttribute,
  updatePassword,
  resetPassword,
  confirmResetPassword,
} from "aws-amplify/auth";
import { getErrorMessage } from "@/utils/get-error-message";



//1. sets up sign-up process by getting username & user attributes set
//button submit redirects to confirmation page for verify email code
export async function handleSignUp(
  prevState: string | undefined,
  formData: FormData
){
  try {
     await signUp({
      username: String(formData.get("email")),
      password: String(formData.get("password")),
      options: {
        userAttributes: {
          email: String(formData.get("email")),
          name: String(formData.get("name")),
        },
        // optional
        //autoSignIn: true,
      },
    });
  } catch (error) {
    return getErrorMessage(error);
  }
  redirect("/auth/confirm-signup");
}


//2 resend email verification code and shows status on screen after click 
export async function handleSendEmailVerificationCode(
  prevState: { message: string; errorMessage: string },
  formData: FormData
) {
  let currentState;
  try {
    await resendSignUpCode({
      username: String(formData.get("email")),
    });
    currentState = {
      ...prevState,
      message: "Code sent successfully",
    };
  } catch (error) {
    currentState = {
      ...prevState,
      errorMessage: getErrorMessage(error),
    };
  }
  return currentState;
}

//3.confirms the account checks username against confirmation code 
export async function handleConfirmSignUp(
  prevState: string | undefined,
  formData: FormData
) {
  try {
     await confirmSignUp({
      username: String(formData.get("email")),
      confirmationCode: String(formData.get("code")),
    });
    //await autoSignIn();
  } catch (error) {
    return getErrorMessage(error);
  }
  redirect("/auth/login");
}
 
//4.Signs a user in redirects or resends confirmation because account is not verified
export async function handleSignIn(
  prevState: string | undefined,
  formData: FormData
) {
  let redirectLink = "/dashboard";
  try {
    const { nextStep } = await signIn({
      username: String(formData.get("email")),
      password: String(formData.get("password")),
    });
    if (nextStep.signInStep === "CONFIRM_SIGN_UP") {
      await resendSignUpCode({
        username: String(formData.get("email")),
      });
      redirectLink = "/auth/confirm-signup";
    }
  } catch (error) {
    return getErrorMessage(error);
  }
  redirect(redirectLink);
}

//5.Signs user out. 
export async function handleSignOut() {
  try {
    await signOut();
  } catch (error) {
    console.log(getErrorMessage(error));
  }
  redirect("/auth/login");
}

//6.Prepares to update user attributes needs another function to complete
//the passed function forces confirmation to be verified for update. 
export async function handleUpdateUserAttribute(
  prevState: string,
  formData: FormData
) {
  let attributeKey = "name";
  let attributeValue;
  let currentAttributeValue;

  if (formData.get("email")) {
    attributeKey = "email";
    attributeValue = formData.get("email");
    currentAttributeValue = formData.get("current_email");
  } else {
    attributeValue = formData.get("name");
    currentAttributeValue = formData.get("current_name");
  }
  if (attributeValue === currentAttributeValue) {
    return "";
  }try {
    const output = await updateUserAttribute({
      userAttribute: {
        attributeKey: String(attributeKey),
        value: String(attributeValue),
      },
    });
    return handleUpdateUserAttributeNextSteps(output);
  } catch (error) {
    console.log(error);
    return "error";
  }
}

//7.forces verification for attribute update. 
function handleUpdateUserAttributeNextSteps(output: UpdateUserAttributeOutput) {
  const { nextStep } = output;

  switch (nextStep.updateAttributeStep) {
    case "CONFIRM_ATTRIBUTE_WITH_CODE":
      const codeDeliveryDetails = nextStep.codeDeliveryDetails;
      return `Confirmation code was sent to ${codeDeliveryDetails?.deliveryMedium}.`;
    case "DONE":
      return "success";
  }
}

//8.checks to see if sent code is correct before updating. 
export async function handleConfirmUserAttribute(
  prevState: "success" | "error" | undefined,
  formData: FormData
) {
  const code = formData.get("code");
  if (!code) {
    return;
  }try {
    await confirmUserAttribute({
      userAttributeKey: "email",
      confirmationCode: String(code),
    });
  } catch (error) {
    console.log(error);
    return "error";
  }
  return "success";
}


//9.When logged in updates password old password neccessary to make new password. 
export async function handleUpdatePassword(
  prevState: "success" | "error" | undefined,
  formData: FormData
) {
  const currentPassword = formData.get("current_password");
  const newPassword = formData.get("new_password");

  if (currentPassword === newPassword) {
    return;
  }try {
    await updatePassword({
      oldPassword: String(currentPassword),
      newPassword: String(newPassword),
    });
  } catch (error) {
    console.log(error);
    return "error";
  }
  return "success";
}

//10.resets password when logged out, after entering email sends code 
// redirects to a page that requires code
export async function handleResetPassword(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    await resetPassword({ username: String(formData.get("email")) });
  } catch (error) {
    return getErrorMessage(error);
  }
  redirect("/auth/reset-password/confirm");
}

//11.Type in new password and code to update password
export async function handleConfirmResetPassword(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    await confirmResetPassword({
      username: String(formData.get("email")),
      confirmationCode: String(formData.get("code")),
      newPassword: String(formData.get("password")),
    });
  } catch (error) {
    return getErrorMessage(error);
  }
  redirect("/auth/login");
}





//[handleSignUp /=>/ handleSendEmailVerificationCode /=>/ handleConfirmSignUp] 
// => handleSignIn => handleSignOut 
//=> [handleUpdateUserAttribute /=>/ handleUpdateUserAttributeNextSteps => handleConfirmUserAttribute]
//=> handleUpdatePassword /=>/ [handleResetPassword => handleConfirmResetPassword]

//(nextStep.updateAttributeStep) case "CONFIRM_ATTRIBUTE_WITH_CODE":
//nextStep.codeDeliveryDetails;  codeDeliveryDetails?.deliveryMedium}
//nextStep.signInStep === "CONFIRM_SIGN_UP"





