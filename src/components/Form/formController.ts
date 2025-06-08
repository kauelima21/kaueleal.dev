import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { z, type ZodIssue } from 'zod';
import { sendMessage } from '../../controllers/messages';
import { useState } from 'react';

const schema = z.object({
  name: z
    .string()
    .nonempty({ message: 'Nome é obrigatório' })
    .min(3, { message: 'Nome deve ter no mínimo 3 caracteres' })
    .max(128, { message: 'Nome deve ter no máximo 128 caracteres' }),
  email: z.string().nonempty({ message: 'Email é obrigatório' }).email({ message: 'Email inválido' }),
  message: z
    .string()
    .nonempty({ message: 'Mensagem é obrigatória' })
    .min(3, { message: 'Mensagem deve ter no mínimo 3 caracteres' })
    .max(255, { message: 'Mensagem deve ter no máximo 255 caracteres' }),
});

export function useFormController() {
  const {
    register,
    reset,
    handleSubmit: hookFormSubmit,
    formState: { isSubmitting },
  } = useForm();
  const [errors, setErrors] = useState<ZodIssue[]>([]);

  const handleSubmit = hookFormSubmit(async (data) => {
    const { success, data: validatedData, error } = schema.safeParse(data);

    if (!success) {
      setErrors(error.errors);
      return;
    }

    try {
      await sendMessage(validatedData);
      toast.success('Mensagem enviada com sucesso!');
      reset();
    } catch (err) {
      toast.error('Ops! Não consegui enviar a mensagem...');
    }
  });

  return { handleSubmit, register, errors, isSubmitting };
}
