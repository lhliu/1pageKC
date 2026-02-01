import { Building, Train, Home } from 'lucide-react';

const services = [
    {
        title: '建案/代銷深度開箱',
        desc: '運用 KC 的專業背景，進行客觀的產品優勢分析（如格局、建材、區域發展趨勢），建立品牌信任度。',
        icon: Building,
    },
    {
        title: '「軌道經濟」專題實測',
        desc: '結合品牌建案，進行真實的交通工具實測與通勤壓力分析，直接連結剛需受眾的購屋動機。',
        icon: Train,
    },
    {
        title: '高品質家居與科技家電',
        desc: '利用高比例的電視收視特性 (46%)，針對重視生活品質的家庭客群，進行高質感的生活場景植入。',
        icon: Home,
    },
];

export function Cooperation() {
    return (
        <section id="cooperation" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">
                        合作方案建議
                    </h2>
                    <p className="text-lg text-slate-600">
                        多元整合行銷，確保 brand 訊息精準傳達給高品質受眾。
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {services.map((service) => (
                        <div key={service.title} className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:border-blue-500/30 transition-colors text-center hover:shadow-lg hover:shadow-blue-900/5">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white border border-slate-200 mb-6 text-blue-500 shadow-sm">
                                <service.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-lg font-semibold text-slate-900 mb-4">{service.title}</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                {service.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
