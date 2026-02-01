import { Quote, Star } from 'lucide-react';

export function Testimonials() {
    const reviews = [
        {
            content: "我是從美國 relocate 回台灣，我在 KC 的頻道看到他介紹央北重劃區，這正是我喜歡且期待居住的環境，最終我在 2025 年底買了央北的預售案。",
            author: "Alex Lin",
            role: "外商工程師",
            tags: ["央北重劃區", "海歸置產"]
        },
        {
            content: "我一直想在藍線上置產，無奈台北巿和板橋的房價都太高了，從 KC 的頻道認識到運校重劃區，不只符合捷運需求，價格也可接受，最後買了房，期待 2027 年交屋。",
            author: "Scott Xie",
            role: "專案經理",
            tags: ["運校重劃區", "藍線捷運宅"]
        },
        {
            content: "看房一直是我的興趣，KC 的頻道優點是會看房子周圍的環境，這幫我做了不少功課，加快了我的購屋決策。",
            author: "Mr. M",
            role: "律師",
            tags: ["環境實測", "購屋決策"]
        }
    ];

    return (
        <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-30 pointer-events-none">
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50" />
                <div className="absolute top-1/2 right-0 w-64 h-64 bg-slate-50 rounded-full blur-3xl opacity-50" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
                        網友的真實反饋
                    </h2>
                    <p className="text-lg text-slate-600">
                        來自真實觀眾的購屋旅程分享
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, idx) => (
                        <div key={idx} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 hover:-translate-y-1 relative group">
                            <Quote className="absolute top-6 right-6 w-8 h-8 text-blue-100 group-hover:text-blue-200 transition-colors" />

                            <div className="flex gap-1 text-yellow-500 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-current" />
                                ))}
                            </div>

                            <p className="text-slate-700 leading-relaxed mb-8 relative z-10 min-h-[5rem]">
                                "{review.content}"
                            </p>

                            <div className="pt-6 border-t border-slate-200">
                                <div className="font-bold text-slate-900">{review.author}</div>
                                <div className="text-sm text-slate-500 mt-1">{review.role}</div>
                                <div className="flex gap-2 mt-4">
                                    {review.tags.map(tag => (
                                        <span key={tag} className="text-xs bg-white border border-slate-200 px-2 py-1 rounded-md text-slate-500">
                                            #{tag}
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
