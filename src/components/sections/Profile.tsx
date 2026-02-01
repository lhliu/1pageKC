import { Terminal, Database, Rocket, Quote, MapPin, Building } from 'lucide-react';
import avatar from '../../assets/avatar.png';

export function Profile() {
    return (
        <section id="profile" className="py-24 bg-slate-50 overflow-hidden relative">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/50 skew-x-12 translate-x-32" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

                    {/* Left Column: Image & Quick Stats */}
                    <div className="lg:col-span-5 relative">
                        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/20 border-4 border-white transform rotate-2 hover:rotate-0 transition-all duration-500">
                            <img
                                src={avatar}
                                alt="持家男子 KC"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                            <div className="absolute bottom-6 left-6 text-white">
                                <div className="text-2xl font-bold">KC Liu</div>
                                <div className="text-blue-200 text-sm font-medium tracking-wide">Agile Solopreneur</div>
                            </div>
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl border border-blue-100 hidden md:block">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                                    <Terminal className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-xs text-slate-500 font-medium">Tech Experience</div>
                                    <div className="text-lg font-bold text-slate-900">20+ Years</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Story & Philosophy */}
                    <div className="lg:col-span-7 space-y-8">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-medium mb-4">
                                <Rocket className="w-3 h-3" />
                                <span>Pivot at 50</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                                從國際原廠 PM <br />
                                轉身成為 <span className="text-blue-600">房產理性分析者</span>
                            </h2>
                            <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                                <p>
                                    我是 KC，一個 50 歲的 Solopreneur。
                                </p>
                                <p>
                                    過去 20 年，我在 <strong className="text-slate-900">IBM, Google, Microsoft</strong> 等科技巨頭擔任專案經理，習慣用嚴謹的數據與敏捷 (Agile) 思維來解決複雜問題。
                                </p>
                                <p>
                                    離開職場舒適圈後，我發現房地產市場充滿了資訊不對稱與感性話術。這讓我決定將科技業的「理性驗證」帶入房產分析——不談虛無的願景，只看真實的數據與居住體驗。
                                </p>
                            </div>
                        </div>

                        {/* Experience Grid */}
                        <div className="grid grid-cols-2 gap-4 pt-4">
                            <div className="p-4 bg-white rounded-xl border border-slate-200 hover:border-blue-400 transition-colors">
                                <div className="text-slate-400 mb-2">
                                    <Database className="w-5 h-5" />
                                </div>
                                <div className="font-bold text-slate-900">Data-Driven</div>
                                <div className="text-sm text-slate-500">以數據驅動決策</div>
                            </div>
                            <div className="p-4 bg-white rounded-xl border border-slate-200 hover:border-blue-400 transition-colors">
                                <div className="text-slate-400 mb-2">
                                    <Quote className="w-5 h-5" />
                                </div>
                                <div className="font-bold text-slate-900">Truth-First</div>
                                <div className="text-sm text-slate-500">只說真實的話</div>
                            </div>
                            <div className="p-4 bg-white rounded-xl border border-slate-200 hover:border-blue-400 transition-colors">
                                <div className="text-slate-400 mb-2">
                                    <Building className="w-5 h-5" />
                                </div>
                                <div className="font-bold text-slate-900">Pragmatic</div>
                                <div className="text-sm text-slate-500">務實看待房地產</div>
                            </div>
                            <div className="p-4 bg-white rounded-xl border border-slate-200 hover:border-blue-400 transition-colors">
                                <div className="text-slate-400 mb-2">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div className="font-bold text-slate-900">On-Site</div>
                                <div className="text-sm text-slate-500">以實測代替評論</div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    );
}
