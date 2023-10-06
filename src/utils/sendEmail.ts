/* eslint-disable @typescript-eslint/no-unsafe-member-access */
export interface ContactDetails {
  recapchaToken: string;
  companyName?: string;
  companyUrl?: string;
  department?: string;
  customerName: string;
  emailAddress: string;
  message: string;
  phone?: string;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isContactDetails(data: any): data is ContactDetails {
  return (
    typeof data.customerName === 'string' &&
    typeof data.emailAddress === 'string' &&
    typeof data.message === 'string' &&
    (typeof data.companyName === 'string' || data.companyName === undefined) &&
    (typeof data.companyUrl === 'string' || data.companyUrl === undefined) &&
    (typeof data.department === 'string' || data.department === undefined) &&
    (typeof data.phone === 'string' || data.phone === undefined)
  );
}

if (
  !import.meta.env.VITE_WEB3FORMS_TOKEN ||
  typeof import.meta.env.VITE_WEB3FORMS_TOKEN !== 'string'
) {
  throw new Error('VITE_WEB3FORMS_TOKEN is not defined');
}
const web3formsToken = import.meta.env.VITE_WEB3FORMS_TOKEN;

export const sendEmail = async ({
  updatedFields,
}: {
  updatedFields: Record<string, unknown>;
}) => {
  const data = new FormData();
  if (!isContactDetails(updatedFields)) {
    throw new Error('Invalid contact details');
  }
  data.append('access_key', web3formsToken);
  data.append('customerName', updatedFields.companyName ?? '');
  data.append('emailAddress', updatedFields.emailAddress || '');
  data.append('message', updatedFields.message || '');
  data.append('companyName', updatedFields.companyName ?? '');
  data.append('companyUrl', updatedFields.companyUrl ?? '');
  data.append('department', updatedFields.department ?? '');
  data.append('phone', updatedFields.phone ?? '');

  // web3forms.com no signup required. It's free. up to 250 sumissions per month.
  return fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    body: data,
  });
};
