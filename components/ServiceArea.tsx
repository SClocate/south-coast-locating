import { Map } from 'lucide-react';

const areas = [
    "Kiama",
    "Kangaroo Valley",
    "Moss Vale",
    "Bomaderry",
    "Nowra",
    "Huskisson",
    "Jervis Bay",
    "Ulladulla",
    "Batemans Bay"
];

export default function ServiceArea() {
    return (
        <section id="service-area" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Content */}
                    <div className="flex-1">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                            Servicing the <span className="text-blue-900">South Coast</span>
                        </h2>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            We provide precise and reliable underground service locating for your project needs. Need to dig? Not sure what's below? Want to mitigate the risk of costly damages? Contact South Coast Locating today.
                            From the Highlands to the Coast, our team is ready to locate your underground services.
                        </p>

                        <div className="bg-slate-50 border border-slate-100 rounded-xl p-8">
                            <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                                <Map className="w-5 h-5 text-orange-500" />
                                Service Locations Include
                            </h3>
                            <ul className="flex flex-wrap gap-3">
                                {areas.map((area, index) => (
                                    <li key={index} className="bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                                        {area}
                                    </li>
                                ))}
                                <li className="bg-blue-50 border border-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                                    And everywhere in between
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Visual/Map Placeholder - using a gradient pattern for now which looks clean */}
                    <div className="flex-1 h-[400px] bg-slate-100 rounded-2xl overflow-hidden relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 opacity-50" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center p-8">
                                <img
                    src="https://images.unsplash.com/photo-1736122593306-89292fd7ea0a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Dial before you dig"
                    className="w-full h-full object lower"
                />
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
