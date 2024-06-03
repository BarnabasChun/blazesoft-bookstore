'use client';
import { useEffect } from 'react';
import { Book } from '@/lib/features/books/booksSlice';
import { Button, Field, Fieldset, Label, Legend, Textarea } from '@headlessui/react';
import { useForm } from 'react-hook-form';
import InputField from "@/components/input-field";
import clsx from 'clsx';

type BookFormData = Omit<Book, "id">;
export interface BookFormProps {
  title: string;
  onSubmit(formData: BookFormData): void;
  bookToEdit?: Book | null;
}

function BookForm({ title, onSubmit, bookToEdit }: BookFormProps) {
  const { register, handleSubmit, formState, reset } = useForm<BookFormData>({
    defaultValues: bookToEdit ?? undefined
  });
  const { errors } = formState;

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [formState, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Fieldset className="space-y-6">
        <Legend className="text-lg font-bold">{title}</Legend>

        <InputField
          label="Name"
          isRequired
          {...register("name", { required: "Please enter a name." })}
          errorMessage={errors.name?.message}
        />

        <InputField
          label="Price"
          isRequired
          {...register("price", {
            required: "Please enter a price.",
            valueAsNumber: true,
            validate: (value) => {
              if (isNaN(value)) {
                return "Please enter a valid number.";
              }

              return value >= 0 || "Please enter a positive number.";
            }
          })}
          errorMessage={errors.price?.message}
        />

        <InputField
          label="Category"
          isRequired
          {...register("category", { required: "Please enter a category." })}
          errorMessage={errors.category?.message}
        />

        <Field>
          <Label className="block text-sm font-bold mb-2">Description</Label>
          <Textarea
            className={
              clsx('shadow border mt-3 block w-full resize-none rounded-lg py-1.5 px-3 text-sm/6',
                'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25')
            }
            rows={3}
            {...register("description", { required: false })}
          />
        </Field>
      </Fieldset>

      <div className="mt-6 flex justify-end">
        <Button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Submit
        </Button>
      </div>
    </form>
  );
}

export default BookForm;