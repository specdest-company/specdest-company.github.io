export const contact_hero_data = {
  en: {
    title: 'Let us know how we can HELP',
    sub_title: 'CONTACT US',
    description:
      'Reach Out and Let Us Know How We Can Bring Your Ideas to Life.',
  },
  ja: {
    title: 'どのようにお手伝いできますか？',
    sub_title: 'CONTACT US',
    description:
      'Reach Out and Let Us Know How We Can Bring Your Ideas to Life.',
  },
};

export const form_fields = {
  en: {
    companyName: {
      label: 'Company Name',
      type: 'text',
      placeholder: 'Input company name here...',
      required: false,
    },
    companyUrl: {
      label: 'Company web site URL',
      type: 'text',
      placeholder: 'https://specdest.com',
      required: false,
    },
    position: {
      label: 'Position (Department)',
      type: 'text',
      placeholder: 'Enter your Position (Department)',
      required: false,
    },
    customerName: {
      label: 'Full Name',
      type: 'text',
      placeholder: 'Enter your full name...',
      required: true,
    },
    phoneNumber: {
      label: 'Phone Number',
      type: 'tel',
      placeholder: '123-12345678',
      required: false,
    },
    emailAddress: {
      label: 'E-Mail',
      type: 'email',
      placeholder: 'Enter your email...',
      required: true,
    },
    message: {
      label: 'Message',
      type: 'textarea',
      placeholder: 'Enter your message here...',
      required: true,
    },
  },
  ja: {
    companyName: {
      label: '会社名',
      type: 'text',
      placeholder: '会社名を入力してください...',
      required: false,
    },
    companyUrl: {
      label: '会社のURL',
      type: 'text',
      placeholder: 'https://specdest.com',
      required: false,
    },
    position: {
      label: '役職（部署）',
      type: 'text',
      placeholder: '役職を入力してください...',
      required: false,
    },
    customerName: {
      label: '氏名',
      type: 'text',
      placeholder: '氏名を入力してください...',
      required: true,
    },
    phoneNumber: {
      label: '電話番号',
      type: 'tel',
      placeholder: '電話番号を入力してください...',
      required: false,
    },
    emailAddress: {
      label: 'メールアドレス',
      type: 'email',
      placeholder: 'メールアドレスを入力してください...',
      required: true,
    },
    message: {
      label: 'メッセージ',
      type: 'textarea',
      placeholder: 'メッセージを入力してください...',
      required: true,
    },
  },
};

export const contact_card_data = {
  en: [
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
      info: 'Tokyo, Minato, Aoyama 3-1-36 6F',
    },
  ],
  ja: [
    {
      image: '/contact_call_us.svg',
      title: 'Call us:',
      info: '050-5896-5929',
    },
    {
      image: '/contact_mail_us.svg',
      title: 'Mail us:',
      info: 'info@spedcest.com',
    },
    {
      image: '/contact_visit_us.svg',
      title: 'Visit us:',
      info: '東京都港区南青山3丁目1番36号青山丸竹ビル6F',
    },
  ],
};
