import { useFormWithSchemaBuilder } from "@codingspark/react-form-toolbox";
import { DevTool } from "@hookform/devtools";
import React from "react";
import { InputPassword } from "../../form/components/InputPassword";
import { NGButton } from "../../ui/components/NGButton";

export const LoginForm: React.FC = () => {
  const form = useFormWithSchemaBuilder((yup) =>
    yup.object({
      email: yup.string().required("Email obligatoire"),
      password: yup
        .string()
        .min(5, "Min 5 characters")
        .max(8, "Min 8 chars")
        .required("password obligatoire"),
    })
  );

  return (
    <form
      className="flex flex-col mt-20 border w-full"
      onSubmit={form.handleSubmit(
        function (data) {
          console.log(data);
        },
        function (data) {
          console.log(data);
        }
      )}
    >
      <div>
        <input type="email" {...form.register("email")} /> e-mail
        {form.formState.errors.email && (
          <p>{form.formState.errors.email.message}</p>
        )}
      </div>
      <InputPassword
        label="Password"
        register={form.register("password")}
        error={form.formState.errors.password}
      />
      <NGButton type="submit" title="Connexion" onPress={() => {}} />
      <DevTool control={form.control} />
    </form>
  );
};
