import Button from './button';

function HeroCTA() {
  return (
    <div className="flex gap-6 md:text-xl">
      <Button href="https://www.linkedin.com/in/kevyyar/">Contact Me</Button>
      <Button href="#projects" className="bg-white text-black border border-gray-200">
        View Projects
      </Button>
    </div>
  );
}

export default HeroCTA;
