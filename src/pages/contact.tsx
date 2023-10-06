import { sendEmail } from '../utils/sendEmail';
import { useReCaptcha } from '../utils/useRecaptcha';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import ContactCard from '@/components/ContactCard/ContactCard';
import HeroTitle from '@/components/HeroTitle';
import {
  contact_card_data,
  form_fields,
  contact_hero_data,
} from '@/locales/contacts';
import { LanguageContext } from '@/utils/language';
import { debugLog, sendErrorMessage, sendlogMessage } from '@/utils/logger';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const FormSchema = z.object({
  companyName: z.string(),
  companyUrl: z.union([z.literal(''), z.string().trim().url()]),
  position: z.string(),
  customerName: z.string().min(1, {
    message: '入力してください',
  }),
  phoneNumber: z.string(),
  emailAddress: z.string().email().min(5, {
    message: 'メールアドレスを入力してください',
  }),
  message: z.string().min(2, {
    message: 'メッセージを入力してください',
  }),
});

const Contact = () => {
  const recaptcha = useReCaptcha();
  const navigate = useNavigate();

  const { language } = useContext(LanguageContext);
  const formFields = form_fields[language];

  const cardData = contact_card_data[language];
  const heroData = contact_hero_data[language];

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      companyName: '',
      companyUrl: '',
      position: '',
      customerName: '',
      phoneNumber: '',
      emailAddress: '',
      message: '',
    },
  });

  const handleSubmit = (data: z.infer<typeof FormSchema>) => {
    debugLog('Form data: ', data);
    recaptcha
      .execute({ action: 'click' })
      .then(async (token: string) => {
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

  useEffect(() => {
    recaptcha.load();
  }, [recaptcha]);

  return (
    <div className="tile">
      <div className="container m-auto">
        <div className="pb-32 lg:px-0 px-5">
          <HeroTitle
            sub_title={heroData.sub_title}
            title={heroData.title}
            desc={heroData.description}
          />
          <Form {...form}>
            <form
              className="flex flex-col pt-10 max-w-[800px] mx-auto gap-8"
              onSubmit={form.handleSubmit(handleSubmit)}>
              <FormField
                control={form.control}
                name="companyName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold text-lg text-primary">
                      {formFields.companyName.label}
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="h-12"
                        placeholder={formFields.companyName.placeholder}
                        required={formFields.companyName.required}
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="companyUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold text-lg text-primary">
                      {formFields.companyUrl.label}
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="h-12"
                        placeholder={formFields.companyUrl.placeholder}
                        required={formFields.companyUrl.required}
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="position"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold text-lg text-primary">
                      {formFields.position.label}
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="h-12"
                        placeholder={formFields.position.placeholder}
                        required={formFields.position.required}
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="customerName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold text-lg text-primary">
                      {formFields.customerName.label}
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="h-12"
                        placeholder={formFields.customerName.placeholder}
                        required={formFields.customerName.required}
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold text-lg text-primary">
                      {formFields.phoneNumber.label}
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="h-12"
                        placeholder={formFields.phoneNumber.placeholder}
                        required={formFields.phoneNumber.required}
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="emailAddress"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold text-lg text-primary">
                      {formFields.emailAddress.label}
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="h-12"
                        placeholder={formFields.emailAddress.placeholder}
                        required={formFields.emailAddress.required}
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold text-lg text-primary">
                      {formFields.message.label}
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder={formFields.message.placeholder}
                        required={formFields.message.required}
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <button
                className="bg-primary p-4 text-white md:w-[343px] w-full h-[55px] font-bold mt-10 mx-auto"
                type="submit">
                Send
              </button>
            </form>
          </Form>
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
