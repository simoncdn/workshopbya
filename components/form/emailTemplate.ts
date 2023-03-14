
import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY as string);

interface IEmailParams {
  to: string;
  from: string;
  name: string;
  email: string;
  message: string;
}

const sendEmail = async (emailParams: IEmailParams) => {
  const email = {
    to: emailParams.to,
    from: emailParams.from,
    templateId: "d-1ad36d78788745dcab3abcad27267857",
    dynamic_template_data:{
      name: emailParams.name,
      email: emailParams.email,
      message: emailParams.message,
    },
  };

  try {
    await sendgrid.send(email);
  } catch (error) {
    console.log(error);
    throw new Error('Email could not be sent, Please try again later');
  }
};


export { sendEmail };