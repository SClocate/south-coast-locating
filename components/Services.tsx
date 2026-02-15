import { Scan, Radio, Waves, Zap, Droplets, Construction } from 'lucide-react';

const services = [
    {
        title: "Ground Penetrating Radar (GPR)",
        description: "Advanced radar technology to map underground utilities, voids, and structures non-destructively.",
        icon: Scan,
        discoverable: ["PVC Pipes", "Concrete Structures", "Voids", "Tree Roots", "And More"]
    },
    {
        title: "Electromagnetic Locating",
        description: "Precise tracing of conductive services including power cables and metallic pipes.",
        icon: Radio,
        discoverable: ["Electrical Cables", "Telecommunication Lines", "Copper Pipes"]
    },
    {
        title: "Acoustic Leak Detection",
        description: "Pinpoint accuracy for finding water leaks in pressurized pipes, minimizing excavation.",
        icon: Waves,
        discoverable: ["Water Leaks", "Pressurized Systems", "Hidden Bursts"]
    },
    {
        title: "Cable & Pipe Location",
        description: "Comprehensive locating of all major utility types ensuring safe excavation.",
        icon: Zap,
        discoverable: ["Power", "Data/NBN", "Gas", "Water", "Sewer", "Stormwater"]
    }
];

export default function Services() {
    return (
        <section id="services" className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Services</h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Using the latest technology to ensure you know exactly what lies beneath the surface.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-slate-100">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                                <service.icon className="text-blue-600 w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                            <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                                {service.description}
                            </p>
                            <div>
                                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">We Discover:</h4>
                                <div className="flex flex-wrap gap-2">
                                    {service.discoverable.map((item, i) => (
                                        <span key={i} className="inline-block bg-slate-100 text-slate-700 text-xs px-2 py-1 rounded">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
