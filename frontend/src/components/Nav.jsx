import { NavLink } from 'react-router-dom';
import { SiGithub, SiInstagram, SiFacebook } from 'react-icons/si';

const Nav = () => {

  const contact = [
            {href: 'https://github.com/ziora-lawrence', label: 'github', Icon: SiGithub },
            {href: 'https://instagram.com/shadowthe_creator', label: 'instagram', Icon: SiInstagram },
            {href: 'https://facebook.com/ziora.lawrence', label: 'facebook', Icon: SiFacebook },
          ];
  return (
    <header className="sticky top-0 z-10 mx-auto mt-6 w-[min(1200px,calc(100%-2rem))] rounded-full border border-white/40 bg-stone-100/70 px-6 py-3 shadow-sm backdrop-blur-md">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-2xl font-bold tracking-tight text-stone-700">Iwuji</h1>

        <nav className="hidden items-center gap-2 md:flex">
          {[
            ['Home', '/'],
            ['About', '/about'],
            ['Projects', '/projects'],
            ['Contact', '/contact'],
          ].map(([label, to]) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-semibold transition ${
                  isActive
                    ? 'bg-olive-200 text-olive-900'
                    : 'text-stone-700 hover:bg-stone-200/80 hover:text-stone-900'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-4 text-stone-700">
          {contact.map(({href, label, Icon}) => (
            <a key={href} href={href} target='_blank' rel='noopener noreferrer' aria-label={label} className="transition hover:text-olive-700">
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Nav;
