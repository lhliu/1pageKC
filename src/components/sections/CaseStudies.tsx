import { TrendingUp, PlayCircle } from 'lucide-react';

const cases = [
    {
        title: '1坪少100萬，每天花3.5小時通勤值得嗎？',
        category: '大通勤時代系列',
        stats: '25.2萬次 觀看',
        description: '地獄級通勤：從淡海新巿鎮到信義區，到底要多久？象山−濱海義山｜漫遊淡海',
        image: 'https://img.youtube.com/vi/08MjSTBf1DA/maxresdefault.jpg',
        link: 'https://youtu.be/08MjSTBf1DA'
    },
    {
        title: '50歲賣掉住了15年的家，2025年回顧',
        category: '資產配置與人生轉折',
        stats: '15.3萬次 觀看',
        description: '今年又換工作，人生下半場持續尋找第三隻腳。',
        image: 'https://img.youtube.com/vi/Wys7NFKNeuI/maxresdefault.jpg',
        link: 'https://youtu.be/Wys7NFKNeuI'
    },
    {
        title: '區域深度實測：新店、竹北、A7',
        category: '區域指南',
        stats: '12-13萬次 觀看',
        description: '包含新店央北、竹北、青埔、土城與 A7 等地，成為特定區域購屋者的必看指南。',
        image: 'https://i.ytimg.com/vi/RA3ZweY0x2I/maxresdefault.jpg',
        link: 'https://www.youtube.com/playlist?list=PLf68IwKfUnaraTxGr17O0KMMpeG4USyDE'
    },
];

export function CaseStudies() {
    return (
        <section id="cases" className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
                            實際案例
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl">
                            我們擅長捕捉社會趨勢，並將其轉化為具備長尾流量的熱門影片。
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cases.map((item) => (
                        <div
                            key={item.title}
                            className="group cursor-pointer"
                            onClick={() => item.link !== '#' && window.open(item.link, '_blank')}
                        >
                            <div className="relative aspect-video rounded-xl overflow-hidden mb-4 border border-slate-200">
                                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10" />
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute bottom-3 right-3 z-20 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full flex items-center text-xs text-white">
                                    <PlayCircle className="w-3 h-3 mr-1" />
                                    Watch
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="flex items-center justify-between text-xs font-medium">
                                    <span className="text-blue-600 uppercase tracking-wider">{item.category}</span>
                                    <div className="flex items-center text-slate-500">
                                        <TrendingUp className="w-3 h-3 mr-1" />
                                        {item.stats}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-slate-600 line-clamp-2">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
