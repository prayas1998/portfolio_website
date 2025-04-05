import ContactInfo from "./contact/ContactInfo";
import ContactForm from "./contact/ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="py-12 bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-heading">Contact Me</h2>
          <p className="text-foreground/70 mt-4 max-w-2xl mx-auto">
            Let's connect! Reach out for opportunities, collaborations, or just to say hello
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mt-8 max-w-5xl mx-auto">
          {/* Contact Information */}
          <ContactInfo />

          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
