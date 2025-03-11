import { GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react';
import Link from 'next/link';

function SocialIcons() {
  return (
    <div className="flex gap-6 md:gap-8">
      <Link
        href="https://github.com/kevyyar"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub Profile"
        className="text-gray-600 hover:text-blue-500 focus:text-blue-500 transition-colors"
      >
        <GithubIcon size={28} />
      </Link>
      <Link
        href="https://www.linkedin.com/in/kevyyar/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn Profile"
        className="text-gray-600 hover:text-blue-500 focus:text-blue-500 transition-colors"
      >
        <LinkedinIcon size={28} />
      </Link>
      <Link
        href="mailto:barretokevin@hotmail.com"
        rel="noopener noreferrer"
        aria-label="Send Email"
        className="text-gray-600 hover:text-blue-500 focus:text-blue-500 transition-colors"
      >
        <MailIcon size={28} />
      </Link>
    </div>
  );
}

export default SocialIcons;
