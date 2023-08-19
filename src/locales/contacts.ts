export const contact_hero_data = {
  title: 'Let us know how we can HELP',
  sub_title: 'CONTACT US',
  description: 'Reach Out and Let Us Know How We Can Bring Your Ideas to Life.',
};

export const form_fields = [
  {
    label: 'Company Name',
    name: 'companyName',
    type: 'text',
    placeholder: 'Input company name here...',
    required: true,
  },
  {
    label: 'Company web site URL',
    name: 'companyUrl',
    type: 'text',
    placeholder: 'https://specdest.com',
    required: true,
  },
  {
    label: 'Position (Department)',
    name: 'position',
    type: 'text',
    placeholder: 'Enter your Position (Department)',
    required: true,
  },
  {
    label: 'Full Name',
    name: 'fullName',
    type: 'text',
    placeholder: 'Enter your full name...',
    required: true,
  },
  {
    label: 'Phone Number',
    name: 'phoneNumber',
    type: 'tel',
    // pattern="[0-9]{3}-[0-9]{8}",
    placeholder: '123-12345678',
    required: true,
  },
  {
    label: 'E-Mail',
    name: 'email',
    type: 'email',
    placeholder: 'Enter your email...',
    required: true,
  },
  {
    label: 'Message',
    name: 'message',
    type: 'text',
    placeholder: 'Enter your message here...',
    required: true,
  },
];

export const contact_card_data = [
  {
    image: '/contact_call_us.svg',
    title: 'Call us:',
    info: '050-5896-5929',
  },
  {
    image: '/contact_mail_us.svg',
    title: 'Mail us:',
    info: 'spedcest@example.com',
  },
  {
    image: '/contact_visit_us.svg',
    title: 'Visit us:',
    info: '115,Street, City, Country ',
  },
];
