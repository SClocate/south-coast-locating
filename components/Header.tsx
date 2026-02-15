import Link from 'next/link';
import { Menu, Phone, Mail } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
    
          <span className="text-xl font-bold text-blue-900 tracking-tight">
            South Coast Locating
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#services"
            className="text-sm font-medium text-slate-600 hover:text-blue-900 transition-colors"
          >
            Services
          </a>
          <a
            href="#service-area"
            className="text-sm font-medium text-slate-600 hover:text-blue-900 transition-colors"
          >
            Service Area
          </a>
          <a
            href="#contact"
            className="text-sm font-medium text-slate-600 hover:text-blue-900 transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          {/* Email */}
          <a
            href="mailto:southcoastlocating@gmail.com"
            className="hidden md:flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-blue-900"
          >
            <Mail className="h-4 w-4" />
            southcoastlocating@gmail.com
          </a>

          {/* Phone */}
          <a
            href="tel:0429633618"
            className="hidden md:flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-blue-900"
          >
            <Phone className="h-4 w-4" />
            0429 633 618
          </a>

          <a
            href="#quote"
            className="hidden md:inline-flex h-9 items-center justify-center rounded-md bg-orange-500 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-orange-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            Get Quote
          </a>

          <button className="md:hidden p-2 text-slate-600">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Menu</span>
          </button>
        </div>
      </div>
    </header>
  );
}
