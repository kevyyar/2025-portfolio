import ContactForm from './contact-form';

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-black md:text-7xl mb-4">Get in Touch</h2>
          <p className="text-gray-500 leading-relaxed md:text-xl max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>
        <ContactForm />
      </div>
    </footer>
  );
}

export default Footer;