import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import Card from "../../components/common/Card";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormValues) => {
    console.log(data);
    alert("Message sent! (Check console for data)");
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
      <Card className="p-6">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <Input
            label="Name"
            error={!!errors.name}
            helperText={errors.name?.message}
            {...register("name")}
          />
          <Input
            label="Email"
            error={!!errors.email}
            helperText={errors.email?.message}
            {...register("email")}
          />
          <Input
            label="Message"
            multiline
            rows={4}
            error={!!errors.message}
            helperText={errors.message?.message}
            {...register("message")}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            className="bg-blue-600 hover:bg-blue-700"
          >
            Send Message
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default ContactPage;
