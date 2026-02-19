import emailjs from "@emailjs/browser";

// initialisation of emailJS
export const initEmailJs = () => {
  emailjs.init({
    publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
  });
};
