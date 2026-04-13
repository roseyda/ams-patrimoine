import type { ContactSchema } from '~~/shared/schemas/contact';

const sleep = (m: number) => new Promise((r) => setTimeout(r, m));

export default async function handleNewContact(newContact: ContactSchema) {
  // TODO: persist the contact request or forward it to an email provider.

  await sleep(3000);
  console.log('[contacts] new submission', newContact);
}
