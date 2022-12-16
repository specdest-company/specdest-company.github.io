import "./contact.css"
import { useEffect } from 'react';
import { ContactUs, ContactUsForm } from '../ui-components';
import { ContactUsFormInputValues } from '../ui-components/ContactUsForm';
import { sendEmail } from '../utils/sendEmail';
import { useReCaptcha } from '../utils/useRecaptcha';

const ContactPage = () => {
  // load google recaptcha3 script
  const recaptcha = useReCaptcha();
  useEffect(() => {
    recaptcha.load();
  }, []);
  const onSubmit = (fields: ContactUsFormInputValues) => {
    // Example function to trim all string inputs
    const updatedFields: ContactUsFormInputValues = {};
    (Object.keys(fields)  as Array<keyof typeof fields> ).forEach((key) => {
      const value = fields[key]
      if (typeof value === 'string') {
        updatedFields[key] = value.trim();
      } else {
        updatedFields[key] = value;
      }
    });

    recaptcha.execute({ action: 'click' }).then(async (token) => {
      // TODO token を用いた処理
      // return updatedFields
      await sendEmail({
        recapchaToken: token,
        customerName: updatedFields.name || "",
        emailAddress: updatedFields.email || "",
        message: updatedFields.detail || "",
        companyName: updatedFields.companyName,
        companyUrl: updatedFields.companyUrl,
        department: updatedFields.department,
        phone: updatedFields.phoneNUmber,
      });
    });
  };
  return (
    <ContactUs
      overrides={{
        PolicyTextWrapper: {
          overflow: 'scroll',
        },
      }}
      width="100%"
      form={
        <ContactUsForm
          overrides={{
            ContactUsForm: {
              style: {
                alignSelf: 'stretch',
              },
            },
          }}
          onSubmit={onSubmit}
        />
      }
    />
  );
};

export default ContactPage