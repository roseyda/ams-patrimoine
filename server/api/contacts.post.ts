import * as v from 'valibot';
import { contactSchema } from '~~/shared/schemas/contact';
import handleNewContact from '../service/contactService';

// Source - https://stackoverflow.com/a/48882182
// Posted by Harry, modified by community. See post 'Timeline' for change history
// Retrieved 2026-04-13, License - CC BY-SA 4.0

export default defineEventHandler(async (event) => {
  const parse = v.safeParse(contactSchema, await readBody(event));

  if (!parse.success) {
    throw createError({
      statusCode: 400,
      message: 'Données invalides',
    });
  }

  await handleNewContact(parse.output);
});
