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
  en: [
    {
      label: 'Company Name',
      name: 'companyName',
      type: 'text',
      placeholder: 'Input company name here...',
      required: false,
    },
    {
      label: 'Company web site URL',
      name: 'companyUrl',
      type: 'text',
      placeholder: 'https://specdest.com',
      required: false,
    },
    {
      label: 'Position (Department)',
      name: 'position',
      type: 'text',
      placeholder: 'Enter your Position (Department)',
      required: false,
    },
    {
      label: 'Full Name',
      name: 'customerName',
      type: 'text',
      placeholder: 'Enter your full name...',
      required: true,
    },
    {
      label: 'Phone Number',
      name: 'phone',
      type: 'tel',
      // pattern="[0-9]{3}-[0-9]{8}",
      placeholder: '123-12345678',
      required: false,
    },
    {
      label: 'E-Mail',
      name: 'emailAddress',
      type: 'email',
      placeholder: 'Enter your email...',
      required: true,
    },
    {
      label: 'Message',
      name: 'message',
      type: 'textarea',
      placeholder: 'Enter your message here...',
      required: true,
    },
  ],
  ja: [
    {
      label: '会社名',
      name: 'companyName',
      type: 'text',
      placeholder: '会社名を入力してください...',
      required: false,
    },
    {
      label: '会社のURL',
      name: 'companyUrl',
      type: 'text',
      placeholder: 'https://specdest.com',
      required: false,
    },
    {
      label: '役職（部署）',
      name: 'position',
      type: 'text',
      placeholder: '役職を入力してください...',
      required: false,
    },
    {
      label: '氏名',
      name: 'fullName',
      type: 'text',
      placeholder: '氏名を入力してください...',
      required: true,
    },
    {
      label: '電話番号',
      name: 'phoneNumber',
      type: 'tel',
      // pattern="[0-9]{3}-[0-9]{8}",
      placeholder: '電話番号を入力してください...',
      required: false,
    },
    {
      label: 'メールアドレス',
      name: 'email',
      type: 'email',
      placeholder: 'メールアドレスを入力してください...',
      required: true,
    },
    {
      label: 'メッセージ',
      name: 'message',
      type: 'textarea',
      placeholder: 'メッセージを入力してください...',
      required: true,
    },
  ],
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
