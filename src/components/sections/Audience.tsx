import { Briefcase, Monitor, Users, FileText } from 'lucide-react';
import { Carousel } from '../ui/Carousel';
import img1 from '../../assets/audience/img1.png';
import img2 from '../../assets/audience/img2.png';
import img3 from '../../assets/audience/img3.png';
import img4 from '../../assets/audience/img4.png';
import img5 from '../../assets/audience/img5.jpg';

const audienceImages = [img1, img2, img3, img4, img5];

export function Audience() {
    return (
        <section id="audience" className="py-24 bg-slate-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
                        受眾分析：科技與金融背景的決策者
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        後台數據證實，我們的觀眾多為理性導向的高薪族群，習慣透過深度研究進行高單價消費決策。
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Feature Block: Demographics (4 cols) */}
                    <div className="lg:col-span-4 space-y-6">
                        {/* Gender & Age Combined Card */}
                        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm h-full hover:shadow-lg transition-all duration-300">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-blue-100 rounded-xl text-blue-600">
                                    <Users className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900">黃金客群輪廓</h3>
                            </div>

                            <div className="space-y-8">
                                <div>
                                    <div className="flex justify-between items-end mb-2">
                                        <span className="text-slate-600 font-medium">男性受眾 (理性決策)</span>
                                        <span className="text-3xl font-bold text-slate-900">69<span className="text-lg text-slate-500 ml-1">%</span></span>
                                    </div>
                                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-blue-600 w-[69%]" />
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-between items-end mb-2">
                                        <span className="text-slate-600 font-medium">35-54歲 (職涯黃金期)</span>
                                        <span className="text-3xl font-bold text-slate-900">70.8<span className="text-lg text-slate-500 ml-1">%</span></span>
                                    </div>
                                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-blue-500 w-[70.8%]" />
                                    </div>
                                </div>

                                <div className="pt-4 border-t border-slate-100">
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        這群人處於人生累積財富的高峰期，是房地產與高階消費品的主力買家。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Feature Block: Carousel (Visual Proof) (4 cols) */}
                    <div className="lg:col-span-4">
                        <div className="relative h-full min-h-[400px] rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/10 border border-slate-200 bg-white">
                            <Carousel images={audienceImages} />
                            <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-slate-900/90 to-transparent pt-20">
                                <p className="text-white font-bold text-lg">深受中堅世代信賴</p>
                                <p className="text-blue-200 text-sm mt-1">重視規格與性價比的技術型買家</p>
                            </div>
                        </div>
                    </div>

                    {/* Feature Block: Verification Metrics (4 cols) */}
                    <div className="lg:col-span-4 space-y-6">
                        {/* Device Preference */}
                        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h4 className="font-bold text-slate-900 text-lg">大螢幕深度研究</h4>
                                    <p className="text-sm text-slate-500 mt-1">TV + PC 觀看佔比</p>
                                </div>
                                <Monitor className="w-8 h-8 text-blue-500 opacity-20" />
                            </div>
                            <div className="text-4xl font-bold text-blue-600 mb-2">65<span className="text-2xl text-blue-400">%</span></div>
                            <p className="text-xs text-slate-400">客廳效應顯著，適合家庭共同決策</p>
                        </div>

                        {/* Tech Affinity Grid (2x2 mini cards) */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:border-blue-300 transition-colors col-span-2 flex items-center gap-4">
                                <Briefcase className="w-8 h-8 text-blue-500" />
                                <div>
                                    <div className="text-lg font-bold text-slate-900">高含金量職業背景</div>
                                    <div className="text-xs text-slate-500">科技業工程師以及高薪受薪階級</div>
                                </div>
                            </div>
                            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:border-blue-300 transition-colors col-span-2 flex items-center gap-4">
                                <FileText className="w-8 h-8 text-blue-500" />
                                <div>
                                    <div className="text-lg font-bold text-slate-900">硬核內容需求</div>
                                    <div className="text-xs text-slate-500">完播率高，偏好深度分析</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
