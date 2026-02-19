"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Mail,
  Clock,
  Handshake,
  Instagram,
  Youtube,
  Twitter,
  ArrowRight,
  Check,
} from "lucide-react";
import { FadeInUp, motion } from "@/components/motion";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { initEmailJs } from "@/assets/javascript/emailJs";

import emailjs from "@emailjs/browser";

const socialLinks = [
  {
    name: "YouTube",
    href: "https://www.youtube.com/@LaFumetta",
    icon: Youtube,
  },
  {
    name: "Twitter",
    href: "https://x.com/lafumetta?s=21",
    icon: Twitter,
  },
];

const contactSchema = yup.object({
  name: yup.string().required("Le nom est requis"),
  email: yup.string().email("Email invalide").required("L'email est requis"),
  subject: yup.string().required("Le sujet est requis"),
  message: yup
    .string()
    .required("Le message est requis")
    .max(600, "Le message ne peut dépasser 600 caractères"),
});

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    clearErrors,
    watch,
    setError,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    resolver: yupResolver(contactSchema),
  });

  const messageValue = watch("message", "");

  useEffect(() => {
    initEmailJs();
  }, []);

  const onSubmit = async (values) => {
    clearErrors();
    setIsSubmitting(true);
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        values,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      );
      reset();
      setIsSubmitted(true);
    } catch (error) {
      setError("root", {
        message: "Une erreur est survenue. Veuillez réessayez",
      });
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="px-6 py-16 md:py-24">
        <FadeInUp className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl">
            Travaillons ensemble
          </h1>
          <p className="text-muted-foreground mx-auto max-w-xl text-lg leading-relaxed md:text-xl">
            Décrivez votre projet, vos objectifs et vos délais. Je vous
            répondrai rapidement.
          </p>
        </FadeInUp>
      </section>

      {/* Contact Form Section */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_380px] lg:gap-16">
            {/* Form */}
            <FadeInUp delay={0.1} className="order-2 lg:order-1">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="bg-secondary/50 rounded-2xl p-12 text-center"
                >
                  <div className="bg-foreground text-background mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full">
                    <Check className="h-8 w-8" />
                  </div>
                  <h2 className="mb-3 text-2xl font-medium">Message envoyé</h2>
                  <p className="text-muted-foreground mb-3">
                    Merci pour votre message. Je vous répondrai sous 24-48h.
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Actualisez la page pour envoyer un nouveau message.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium">
                        Nom
                      </Label>
                      <Input
                        {...register("name")}
                        id="name"
                        name="name"
                        placeholder="Votre nom"
                        className="bg-background border-border focus:border-foreground h-12 px-4 transition-colors"
                      />

                      {errors.name && (
                        <p className="text-destructive text-sm">
                          {errors.name.message}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium">
                        Email
                      </Label>
                      <Input
                        {...register("email")}
                        id="email"
                        name="email"
                        type="email"
                        placeholder="votre@email.com"
                        className="bg-background border-border focus:border-foreground h-12 px-4 transition-colors"
                      />
                      {errors.email && (
                        <p className="text-destructive text-sm">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-sm font-medium">
                      Sujet
                    </Label>
                    <Input
                      {...register("subject")}
                      id="subject"
                      name="subject"
                      placeholder="Ex: Projet motion design pour lancement produit"
                      className="bg-background border-border focus:border-foreground h-12 px-4 transition-colors"
                    />
                    {errors.subject && (
                      <p className="text-destructive text-sm">
                        {errors.subject.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium">
                      Message
                    </Label>

                    <div className="relative">
                      <Textarea
                        {...register("message")}
                        id="message"
                        name="message"
                        placeholder="Parlez-moi de votre projet, vos objectifs, vos délais, vos prix..."
                        className="bg-background border-border focus:border-foreground min-h-[120px] resize-y px-4 py-3 transition-colors"
                        maxLength={600}
                      />
                      <div className="absolute right-3 bottom-3 text-xs text-gray-400">
                        {messageValue.length}/600
                      </div>
                    </div>

                    {errors.message && (
                      <p className="text-destructive text-sm">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {errors.root && (
                    <p className="text-destructive text-sm">
                      {errors.root.message}
                    </p>
                  )}

                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className={`${isSubmitting ? "cursor-not-allowed" : "cursor-pointer"} group relative h-12 w-full overflow-hidden px-8 text-base sm:w-auto`}
                    >
                      <span
                        className={`inline-flex items-center gap-2 transition-transform duration-300 ${isSubmitting ? "-translate-y-10 opacity-0" : ""}`}
                      >
                        Envoyer le message
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                      {isSubmitting && (
                        <span className="absolute inset-0 flex items-center justify-center">
                          <span className="border-background/30 border-t-background h-5 w-5 animate-spin rounded-full border-2" />
                        </span>
                      )}
                    </Button>
                  </motion.div>
                </form>
              )}
            </FadeInUp>

            {/* Sidebar Info */}
            <FadeInUp delay={0.2} className="order-1 lg:order-2">
              <div className="space-y-8 lg:sticky lg:top-32">
                {/* Email */}
                <div className="group">
                  <p className="text-muted-foreground mb-3 text-sm tracking-widest uppercase">
                    Email
                  </p>
                  <a
                    href="mailto:umar.kukarkhoev@gmail.com"
                    className="hover:text-muted-foreground inline-flex items-center gap-3 text-lg transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                    <span className="relative">
                      umar.kukarkhoev@gmail.com
                      <span className="bg-foreground absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 transition-transform group-hover:scale-x-100" />
                    </span>
                  </a>
                </div>

                {/* Info badges */}
                <div className="border-border space-y-4 border-t pt-4">
                  <div className="text-muted-foreground flex items-center gap-3">
                    <Clock className="h-4 w-4 shrink-0" />
                    <span className="text-sm">Réponse sous 24-48h</span>
                  </div>
                  <div className="text-muted-foreground flex items-center gap-3">
                    <Handshake className="h-4 w-4 shrink-0" />
                    <span className="text-sm">
                      Ouvert aux collaborations et missions freelance
                    </span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="border-border border-t pt-4">
                  <p className="text-muted-foreground mb-4 text-sm tracking-widest uppercase">
                    Réseaux sociaux
                  </p>
                  <div className="flex gap-3">
                    {socialLinks.map((social) => (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="border-border hover:bg-foreground hover:text-background hover:border-foreground flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300"
                        aria-label={social.name}
                      >
                        <social.icon className="h-5 w-5" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
