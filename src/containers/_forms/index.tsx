import { useForm } from "@mantine/form";
import { componentsInitValues, componentsValidation } from "./_schemes";
import dynamic from "next/dynamic";
import { Button } from "@mantine/core";

const Input = dynamic(() => import("@components/ui/input"));
const ErrorMessage = dynamic(
  () => import("@components/ui/input/error-message")
);

export default function ComponentsForm() {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: componentsInitValues,
    validate: componentsValidation,
  });

  return (
    <form
      className="flex flex-col gap-y-4"
      onSubmit={form.onSubmit((values) => {
        console.log(values);
      })}
    >
      <div className="space-y-2">
        <Input
          name="password"
          id="password"
          label="Password"
          placeholder="********"
          type="password"
          key={form.key("password")}
          {...form.getInputProps("password")}
        />
        <ErrorMessage formError={form.errors.password} />
      </div>

      <div className="space-y-2">
        <Input
          name="repeat_password"
          id="repeat_password"
          label="Repeat Password"
          placeholder="********"
          type="password"
          key={form.key("repeat_password")}
          {...form.getInputProps("repeat_password")}
        />
        <ErrorMessage formError={form.errors.repeat_password} />
      </div>

      <Button type="submit">Submit</Button>
    </form>
  );
}
