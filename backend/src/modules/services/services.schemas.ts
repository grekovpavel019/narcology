import * as z from "zod";

export const serviceSchema = z.object({
    description: z.string().min(1),
    sub: z.string().optional().nullable(),
    price: z.number().nonnegative().finite(),
    category: z.enum(['Консультация', 'Детоксикация', 'Лечение', 'Реабилитация']),
    audience: z.enum(['Пациент', 'Родственники', 'Сопровождающий']),
    format: z.enum(['В клинике', 'На дому', 'Амбулаторно', 'В стационаре']),
});

export const serviceIdSchema = z.coerce.number().positive().int();