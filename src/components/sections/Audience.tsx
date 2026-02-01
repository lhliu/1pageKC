import { Tv, Briefcase, Monitor, Smartphone, Users, TrendingUp, FileText, Zap } from 'lucide-react';
import channelData from '../../data/channel.json';
import { Carousel } from '../ui/Carousel';
import img1 from '../../assets/audience/img1.png';
import img2 from '../../assets/audience/img2.png';
import img3 from '../../assets/audience/img3.png';
import img4 from '../../assets/audience/img4.png';
import img5 from '../../assets/audience/img5.jpg';

const audienceImages = [img1, img2, img3, img4, img5];

export function Audience() {
    return (
        <section id="audience" className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Data Highlights Bar */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 shadow-xl text-white transform -translate-y-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-blue-500/50">
                        <div className="p-4">
                            <div className="text-4xl font-bold mb-2">{channelData.monthlyViews}</div>
                            <div className="text-blue-100 font-medium">近 28 天觀看次數</div>
                            <div className="text-xs text-blue-200 mt-1 opacity-80">流量穩定，持續曝光</div>
                        </div>
                        <div className="p-4">
                            <div className="text-4xl font-bold mb-2">{channelData.monthlyWatchTime}</div>
                            <div className="text-blue-100 font-medium">單月累積觀看時數</div>
                            <div className="text-xs text-blue-200 mt-1 opacity-80">高黏著度，深度溝通</div>
                        </div>
                        <div className="p-4">
                            <div className="text-4xl font-bold mb-2">{channelData.monthlyGrowth}</div>
                            <div className="text-blue-100 font-medium">單月新增訂閱</div>
                            <div className="text-xs text-blue-200 mt-1 opacity-80">受眾擴大，持續圈粉</div>
                        </div>
                    </div>
                </div>
            </div>

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
                                        <div>
                                            <span className="text-slate-600 font-medium block">35-64歲 (資產累積期)</span>
                                            <span className="text-xs text-slate-400">主力消費與決策世代</span>
                                        </div>
                                        <span className="text-3xl font-bold text-slate-900">69.4<span className="text-lg text-slate-500 ml-1">%</span></span>
                                    </div>
                                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden flex">
                                        <div className="h-full bg-blue-600" style={{ width: '26.3%' }} title="35-44" />
                                        <div className="h-full bg-blue-500" style={{ width: '25.6%' }} title="45-54" />
                                        <div className="h-full bg-blue-400" style={{ width: '17.5%' }} title="55-64" />
                                    </div>
                                    <div className="flex justify-between text-[10px] text-slate-400 mt-1 px-1">
                                        <span>35-44</span>
                                        <span>45-54</span>
                                        <span>55-64</span>
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
                                    <p className="text-sm text-slate-500 mt-1">
                                        TV ({channelData.deviceDistribution.TV}) + PC + Tablet
                                    </p>
                                </div>
                                <Monitor className="w-8 h-8 text-blue-500 opacity-20" />
                            </div>
                            <div className="text-4xl font-bold text-blue-600 mb-2">76.6<span className="text-2xl text-blue-400">%</span></div>
                            <p className="text-xs text-slate-400">近八成觀眾使用大螢幕，且電視佔比最高(46%)，證明為家庭客廳共同決策</p>

                            {/* Visual Bar for Devices */}
                            <div className="mt-4 flex h-2 rounded-full overflow-hidden bg-slate-100">
                                <div className="bg-blue-600" style={{ width: '46.1%' }} title="TV" />
                                <div className="bg-blue-400" style={{ width: '21.6%' }} title="PC" />
                                <div className="bg-blue-300" style={{ width: '8.9%' }} title="Tablet" />
                            </div>
                            <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                                <span>TV</span>
                                <span>PC</span>
                                <span>Pad</span>
                            </div>
                        </div>

                        {/* Proof: Geography & Interests */}
                        <div className="grid grid-cols-1 gap-4">
                            {/* Region Proof */}
                            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                                        <Briefcase className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-lg">受眾分佈驗證</h4>
                                        <p className="text-xs text-slate-500">台灣主力 + 高消費力海外華人</p>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    {channelData.topRegions.map((region, idx) => (
                                        <div key={idx} className="flex items-center justify-between">
                                            <span className="text-slate-700 font-medium flex items-center gap-2">
                                                {region.name}
                                                <span className="text-[10px] px-1.5 py-0.5 bg-slate-100 text-slate-500 rounded-full">{region.tag}</span>
                                            </span>
                                            <div className="flex items-center gap-3 w-1/2">
                                                <div className="h-2 bg-slate-100 rounded-full flex-1 overflow-hidden">
                                                    <div
                                                        className={`h-full rounded-full ${idx === 2 ? 'bg-indigo-500' : 'bg-blue-500'}`}
                                                        style={{ width: region.value }}
                                                    />
                                                </div>
                                                <span className="text-sm font-bold text-slate-900 w-8">{region.value}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Interest Proof */}
                            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between gap-4">
                                <div className="flex items-center gap-3">
                                    <TrendingUp className="w-5 h-5 text-blue-500" />
                                    <span className="font-medium text-slate-700">高度重疊興趣</span>
                                </div>
                                <div className="flex gap-2">
                                    {channelData.topInterests.map((interest, i) => (
                                        <span key={i} className="text-xs font-medium px-2 py-1 bg-blue-50 text-blue-700 rounded-md border border-blue-100">
                                            {interest}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
