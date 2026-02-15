import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-200 py-12">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Company Info */}
                <div className="space-y-4">
                    <h3 className="text-xl font-bold text-white">South Coast Locating</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                        Professional underground service locating across the South Coast.
                        Using advanced GPR and electromagnetic technology to keep your project safe.
                    </p>
                </div>

                {/* Contact Details */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white">Contact Us</h3>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-2">
                            <Phone className="h-4 w-4 text-orange-500" />
                            <div className="flex flex-col">
                                <a href="tel:0429633618" className="hover:text-white transition-colors">0429 633 618</a>
                                <a href="tel:0478664404" className="hover:text-white transition-colors">0478 664 404</a>
                            </div>
                        </li>
                        <li className="flex items-start gap-2">
                            <MapPin className="h-4 w-4 text-orange-500 mt-1" />
                            <span>
                                Servicing Kiama, Kangaroo Valley, Nowra, Jervis Bay, Batemans Bay & Surrounds
                            </span>
                        </li>
                    </ul>
                </div>

                {/* Quick Links / Services */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white">Services</h3>
                    <ul className="space-y-2 text-sm text-slate-400">
                        <li>Ground Penetrating Radar (GPR)</li>
                        <li>Electromagnetic Locating</li>
                        <li>Acoustic Leak Detection</li>
                        <li>Cable & Pipe Location</li>
                        <li>Gas & Water Line Tracing</li>
                    </ul>
                </div>
            </div>
            <div className="container mx-auto px-4 mt-12 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
                © {new Date().getFullYear()} South Coast Locating. All rights reserved.
            </div>
        </footer>
    );
}
