import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ServiceArea from "@/components/ServiceArea";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Services />
      <ServiceArea />
      <ContactForm />
    </div>
  );
}
