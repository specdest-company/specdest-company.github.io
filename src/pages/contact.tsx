import { sendEmail } from '../utils/sendEmail';
import { useReCaptcha } from '../utils/useRecaptcha';

import ContactCard from '@/components/ContactCard/ContactCard';
import HeroTitle from '@/components/HeroTitle';
import InputField from '@/components/InputField/InputField';
import {
  contact_card_data,
  form_fields,
  contact_hero_data,
} from '@/locales/contacts';
import { LanguageContext } from '@/utils/language';
import { debugLog, sendErrorMessage, sendlogMessage } from '@/utils/logger';
import { FormEvent, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

// // Get Form field information from locales folder dynamically

const Contact = () => {
  const recaptcha = useReCaptcha();
  const navigate = useNavigate();

  const { language } = useContext(LanguageContext);
  const formFields = form_fields[language];
  const cardData = contact_card_data[language];
  const heroData = contact_hero_data[language];
  const handleSubmit = (event: FormEvent) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();

    // Cast the event target to an html form
    const form = event.target as HTMLFormElement;

    // Get data from the form.
    const data: Record<string, unknown> = {};

    formFields.forEach((field) => {
      const objKey = field.name;
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      const ovjValue = form[objKey].value as string;
      const pair = { [objKey]: ovjValue };
      Object.assign(data, pair);
    });

    debugLog('Form data: ', data);
    recaptcha
      .execute({ action: 'click' })
      .then(async (token: string) => {
        // TODO token を用いた処理
        // return updatedFields
        // await sendEmail({
        //   recapchaToken: token,
        //   customerName: updatedFields.name || '',
        //   emailAddress: updatedFields.email || '',
        //   message: updatedFields.detail || '',
        //   companyName: updatedFields.companyName,
        //   companyUrl: updatedFields.companyUrl,
        //   department: updatedFields.department,
        //   phone: updatedFields.phoneNumber,
        // });
        try {
          const res = await sendEmail({
            updatedFields: {
              recapchaToken: token,
              ...data,
            },
          });
          if (res.status === 200) {
            sendlogMessage('Your message has been successfully submitted.');

            navigate('/contact-sent');
          } else {
            sendErrorMessage('Something went wrong, please try again.', res);
          }
        } catch (err) {
          sendErrorMessage('Something went wrong, please try again.', err);
        }
      })
      .catch((err) => {
        sendErrorMessage('Error: ', err);
      });
  };

  return (
    <div className="tile">
      <div className="container m-auto">
        <div className="pb-32 lg:px-0 px-5">
          <HeroTitle
            sub_title={heroData.sub_title}
            title={heroData.title}
            desc={heroData.description}
          />

          <form
            className="flex flex-col pt-10 max-w-[800px] mx-auto"
            onSubmit={handleSubmit}>
            {formFields.map((field, idx) => (
              <InputField
                key={idx}
                label={field.label}
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
                required={field.required}
              />
            ))}

            <button
              className="bg-primary p-4 text-white md:w-[343px] w-full h-[55px] font-bold mt-10 mx-auto"
              type="submit">
              Send
            </button>
          </form>

          <div className="2xl:text-[1.5rem] xl:text-[1.375rem] lg:text-[1.25rem] md:text-[1.125rem] font-bold text-primary mx-auto mt-20 text-center">
            OUR CONTACTS
          </div>
          <div className="md:flex justify-between">
            {cardData.map((card, idx) => (
              <ContactCard
                key={idx}
                image={card.image}
                title={card.title}
                info={card.info}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
