import * as v from 'valibot';

export const contactSchema = v.object({
  name: v.pipe(v.string('Champ requis'), v.nonEmpty('Champ requis')),
  email: v.pipe(v.string('Champ requis'), v.nonEmpty('Champ requis'), v.email('Email invalide')),
  phone: v.optional(v.string()),
  subject: v.pipe(v.string('Champ requis'), v.nonEmpty('Champ requis')),
  message: v.pipe(v.string('Champ requis'), v.nonEmpty('Champ requis')),
  consent: v.pipe(v.boolean(), v.value(true)),
});

export type ContactSchema = v.InferOutput<typeof contactSchema>;
