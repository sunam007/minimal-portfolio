import Container from "@/components/layout/Container";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative bg-black border-t border-white/10 py-20 sm:py-24"
    >
      <Container className="space-y-10 sm:space-y-12">
        <header className="space-y-4">
          <p className="text-xs sm:text-sm font-medium uppercase tracking-[0.25em] text-white/50">
            Get In Touch
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white">
            Contact
          </h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Left: Contact Information */}
          <div>
            <ContactInfo />
          </div>

          {/* Right: Contact Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
