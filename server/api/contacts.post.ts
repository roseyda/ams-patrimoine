import * as v from 'valibot';
import { contactSchema } from '~~/shared/schemas/contact';
import handleNewContact from '../service/contactService';

// Source - https://stackoverflow.com/a/48882182
// Posted by Harry, modified by community. See post 'Timeline' for change history
// Retrieved 2026-04-13, License - CC BY-SA 4.0

function isAllowedOrigin(event: Parameters<Parameters<typeof defineEventHandler>[0]>[0]) {
  const origin = getRequestHeader(event, 'origin') ?? getRequestHeader(event, 'referer');
  if (!origin) return false;

  const host = getRequestHeader(event, 'host');
  if (!host) return false;

  try {
    const { host: originHost } = new URL(origin);
    return originHost === host;
  } catch {
    return false;
  }
}

export default defineEventHandler(async (event) => {
  if (!isAllowedOrigin(event)) {
    throw createError({
      statusCode: 403,
    });
  }

  const parse = v.safeParse(contactSchema, await readBody(event));

  if (!parse.success) {
    throw createError({
      statusCode: 400,
      message: 'Données invalides',
    });
  }

  await handleNewContact(parse.output);
});
