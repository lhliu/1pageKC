import { Search, Compass, Zap, CheckCircle2 } from 'lucide-react';

export function Workflow() {
    const steps = [
        {
            icon: Compass,
            title: "環境對焦",
            subtitle: "Environment",
            desc: "不同於傳統銷售只談建案規格，我們花更多時間探討區域發展、各項建設與生活機能的真實樣貌。",
        },
        {
            icon: Search,
            title: "素人視角",
            subtitle: "Authentic",
            desc: "不追求廣告級的精修畫面，堅持用最真實、無濾鏡的鏡頭語言，降低廣告感，建立觀眾的最強信任。",
        },
        {
            icon: Zap,
            title: "實地核實",
            subtitle: "On-Site",
            desc: "親自走訪基地現場，實測通勤時間、棟距與嫌惡設施，挖掘那些只看圖面無法發現的真實細節。",
        },
        {
            icon: CheckCircle2,
            title: "價值對齊",
            subtitle: "Alignment",
            desc: "透過真實不隱瞞的優缺點分析，為您篩選出真正認同價值的精準買家，達成雙贏。",
        }
    ];

    return (
        <section className="py-20 bg-slate-900 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
                    <div className="inline-block px-3 py-1 rounded-full bg-blue-900/50 border border-blue-500/30 text-blue-300 text-xs font-medium mb-4">
                        Real & Authentic
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
                        Agile 敏捷合作模式
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl">
                        拒絕過度包裝。我們專注於真實的居住體驗與環境實測，用最素人的視角，呈現最真實的優缺點。
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-slate-800 z-0" />

                    {steps.map((step, idx) => (
                        <div key={idx} className="relative z-10 group">
                            <div className="w-24 h-24 rounded-2xl bg-slate-800 border-2 border-slate-700 group-hover:border-blue-500 group-hover:bg-slate-800/80 group-hover:shadow-lg group-hover:shadow-blue-500/20 transition-all duration-300 flex items-center justify-center mb-6 relative">
                                <div className="absolute -top-3 -right-3 w-8 h-8 bg-slate-900 border border-slate-700 rounded-full flex items-center justify-center text-sm font-bold text-slate-500 group-hover:text-blue-400 group-hover:border-blue-500 transition-colors">
                                    {idx + 1}
                                </div>
                                <step.icon className="w-10 h-10 text-slate-500 group-hover:text-blue-400 transition-colors" />
                            </div>

                            <div className="pr-4">
                                <div className="text-blue-400 text-xs font-bold tracking-wider uppercase mb-1">{step.subtitle}</div>
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">{step.title}</h3>
                                <p className="text-sm text-slate-400 leading-relaxed">
                                    {step.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
