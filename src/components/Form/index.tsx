import { Button } from '../Button';
import { Input } from '../Input';

import { useFormController } from './formController';

export function Form() {
  const { handleSubmit, register, errors, isSubmitting } = useFormController();

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">
        Entre em{' '}
        <span className="relative before:content-[''] before:z-[-1] before:absolute before:bottom-0 before:h-2 before:w-full before:bg-yellow-300">
          contato
        </span>
      </h2>

      <label htmlFor="name" className="flex flex-col gap-2">
        <span className="text-sm font-medium">Nome</span>
        <Input type="text" placeholder="John" id="name" {...register('name', { required: true })} />
      </label>
      <p className="text-sm text-red-500">{errors.find((error) => error.path[0] === 'name')?.message}</p>

      <label htmlFor="email" className="flex flex-col gap-2">
        <span className="text-sm font-medium">Email</span>
        <Input type="email" placeholder="john.doe@mail.com" id="email" {...register('email', { required: true })} />
      </label>
      <p className="text-sm text-red-500">{errors.find((error) => error.path[0] === 'email')?.message}</p>

      <label htmlFor="message" className="flex flex-col gap-2">
        <span className="text-sm font-medium">Mensagem</span>
        <textarea
          placeholder="Olá, Kauê! Tudo bem?"
          id="message"
          className="py-2 px-4 boder-zinc-100 bg-zinc-50 outline-yellow-400"
          {...register('message', { required: true })}
        />
      </label>
      <p className="text-sm text-red-500">{errors.find((error) => error.path[0] === 'message')?.message}</p>

      <Button type="submit" isLoading={isSubmitting}>
        Enviar
      </Button>
    </form>
  );
}
