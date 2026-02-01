import { BarChart3, MapPin, Users } from 'lucide-react';

const features = [
    {
        name: '理性數據導向',
        description: '提供透明、可驗證的房價與時間成本分析，拒絕憑空臆測。',
        icon: BarChart3,
    },
    {
        name: '真實場景實測',
        description: '透過親身走訪，解決購屋者最核心的「通勤」與「生活機能」痛點。',
        icon: MapPin,
    },
    {
        name: '深耕決策影響力',
        description: '成為受眾在進行大額資產配置時，最值得信賴的參考指標。',
        icon: Users,
    },
];

export function About() {
    return (
        <section id="positioning" className="py-24 bg-slate-50 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
                        頻道定位
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        理性、真實、且具深度影響力的居住指南。「持家男子 KC」不僅是一個房產頻道，更是現代家庭的居住決策顧問。
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature) => (
                        <div
                            key={feature.name}
                            className="relative p-8 rounded-2xl bg-white border border-slate-200 hover:border-blue-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/5 group"
                        >
                            <div className="absolute top-0 right-0 -mr-3 -mt-3 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-2xl group-hover:from-blue-500/20 transition-all" />

                            <div className="inline-flex items-center justify-center p-3 bg-blue-50 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                                <feature.icon className="h-8 w-8 text-blue-600" aria-hidden="true" />
                            </div>

                            <h3 className="text-xl font-semibold text-slate-900 mb-3">
                                {feature.name}
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
