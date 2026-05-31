/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from "motion/react";
import { 
  GraduationCap, 
  Languages, 
  Briefcase, 
  MapPin, 
  Mail, 
  Instagram, 
  Facebook, 
  Linkedin, 
  Youtube,
  Utensils,
  Smartphone,
  ExternalLink,
  ChevronRight,
  Sparkles,
  FileText
} from "lucide-react";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const Section = ({ children, className = "", id }: SectionProps) => (
  <motion.section 
    id={id}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className={`py-20 px-6 max-w-5xl mx-auto ${className}`}
  >
    {children}
  </motion.section>
);

export default function App() {
  const languages = [
    { name: "英文 (English)", level: "精通", sub: "TOEIC 900" },
    { name: "日文 (Japanese)", level: "略懂", sub: "初級階段" },
    { name: "韓文 (Korean)", level: "普通", sub: "TOPIK I" },
    { name: "台語 (Taiwanese)", level: "精通", sub: "會喔去台東用得到" },
  ];

  const humorousSkills = [
    { title: "專業疊盤子", desc: "兩隻手收完整桌空盤，效率驚人", icon: <Utensils className="w-5 h-5" /> },
    { title: "策略性點餐", desc: "精準推銷促銷與高效率出餐菜點", icon: <Smartphone className="w-5 h-5" /> },
    { title: "極致洗碗術", desc: "流程簡潔、快速且保證絕對乾淨", icon: <Utensils className="w-5 h-5" /> },
    { title: "利益極大化", desc: "熟稔公司規範，合法爭取個人所需權益", icon: <Briefcase className="w-5 h-5" /> },
    { title: "奧客終結者", desc: "優雅地讓對方吃鱉，佔不到便宜且無法客訴", icon: <Sparkles className="w-5 h-5" /> },
  ];

  const budgetItems = [
    { label: "住宿費 (Accommodation)", amount: 8800, color: "bg-stone-400" },
    { label: "餐飲美食 (Dining)", amount: 3450, color: "bg-stone-500" },
    { label: "活動伴手禮 (Souvenirs)", amount: 1970, color: "bg-stone-600" },
    { label: "交通油資 (Transport)", amount: 1300, color: "bg-stone-700" },
  ];

  const travelProject = {
    title: "台東慢活深度旅程",
    date: "4/3 - 4/6",
    days: [
      {
        day: "Day 1",
        date: "4/3",
        items: [
          { time: "12:00", activity: "強強廚房 (台東市正氣路)", note: "午餐：必點南瓜燉飯 (建議 2 週前訂位)", icon: <Utensils className="w-4 h-4" /> },
          { time: "14:30", activity: "台東森林公園 (華泰路)", note: "騎單車漫遊琵琶湖，享受森林芬多精", icon: <MapPin className="w-4 h-4" /> },
          { time: "18:00", activity: "鐵花村 (新生路)", note: "晚餐：逛在地慢市集，聽原民駐唱", icon: <Utensils className="w-4 h-4" /> },
          { time: "住宿", activity: "THE GAYA HOTEL", note: "頂樓無邊際泳池可俯瞰台東市區夜景", icon: <Briefcase className="w-4 h-4" /> },
        ]
      },
      {
        day: "Day 2",
        date: "4/4",
        items: [
          { time: "10:30", activity: "池上伯朗大道 (池上鄉)", note: "稻浪洗禮，騎電輔車找金城武樹拍照", icon: <MapPin className="w-4 h-4" /> },
          { time: "13:00", activity: "芭洋Amis美饌 (大禹嶺)", note: "午餐：預約制原民無菜單料理", icon: <Utensils className="w-4 h-4" /> },
          { time: "18:30", activity: "星星部落 (卑南鄉富源)", note: "晚餐：低消 $60，泡麵配台東百萬夜景", icon: <Utensils className="w-4 h-4" /> },
          { time: "住宿", activity: "禾風新棧度假飯店", note: "離星星部落最近，看完夜景下山只需 12 分鐘", icon: <Briefcase className="w-4 h-4" /> },
        ]
      },
      {
        day: "Day 3",
        date: "4/5",
        items: [
          { time: "10:00", activity: "加路蘭遊憩區 (台11線)", note: "東海岸最美裝置藝術與太平洋海景", icon: <MapPin className="w-4 h-4" /> },
          { time: "13:30", activity: "旗遇海味 (成功漁港)", note: "午餐：現撈旗魚、生魚片精緻料理", icon: <Utensils className="w-4 h-4" /> },
          { time: "18:30", activity: "講蜜蜜小餐館 (金崙村)", note: "晚餐：特色搖搖飯，感受排灣族慢食", icon: <Utensils className="w-4 h-4" /> },
          { time: "住宿", activity: "金讚溫泉飯店", note: "房內私人黃金溫泉，陽台看星空海景", icon: <Briefcase className="w-4 h-4" /> },
        ]
      },
      {
        day: "Day 4",
        date: "4/6",
        items: [
          { time: "10:00", activity: "華源天空之鏡 (太麻里)", note: "蓄水池映照太平洋，絕美天空之鏡倒影", icon: <MapPin className="w-4 h-4" /> },
          { time: "12:00", activity: "鼎倫牛肉麵 (金崙路)", note: "午餐：南迴超人氣麵館 (現場排隊約 30 分)", icon: <Utensils className="w-4 h-4" /> },
          { time: "15:00", activity: "多良車站 & 伴手禮採買", note: "觀看火車過山洞海邊景觀，隨後啟程返家", icon: <MapPin className="w-4 h-4" /> },
        ]
      }
    ],
    budgetTotal: "NT$ 15,520"
  };

  const [activeDay, setActiveDay] = React.useState(0);
  const [activeTab, setActiveTab] = React.useState<'home'|'skills'|'presentations'>('home');

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-emerald-200 selection:text-emerald-950">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-stone-200 shadow-sm">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('home')}>
            <div className="w-8 h-8 bg-emerald-800 rounded flex items-center justify-center text-white font-bold text-lg tracking-tighter">TC</div>
            <span className="font-bold tracking-tight text-stone-900 uppercase text-sm">Yung-Cheng Tsai</span>
          </div>
          <div className="flex gap-8 text-xs font-bold text-stone-500 uppercase tracking-[0.2em]">
            <button onClick={() => setActiveTab('home')} className={`hover:text-emerald-800 transition-colors border-b-2 pb-1 ${activeTab === 'home' ? 'text-emerald-800 border-emerald-800' : 'border-transparent hover:border-emerald-800'}`}>首頁</button>
            <button onClick={() => setActiveTab('skills')} className={`hover:text-emerald-800 transition-colors border-b-2 pb-1 ${activeTab === 'skills' ? 'text-emerald-800 border-emerald-800' : 'border-transparent hover:border-emerald-800'}`}>專業技能</button>
            <button onClick={() => setActiveTab('presentations')} className={`hover:text-emerald-800 transition-colors border-b-2 pb-1 ${activeTab === 'presentations' ? 'text-emerald-800 border-emerald-800' : 'border-transparent hover:border-emerald-800'}`}>作業</button>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        {activeTab === 'home' && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            {/* Hero Section */}
            <div className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-white">
              <div className="absolute inset-0 z-0">
                <img 
                  src="https://picsum.photos/seed/taitung/1920/1080?blur=1" 
                  alt="Taitung Landscape" 
                  className="w-full h-full object-cover opacity-10 scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-stone-50" />
              </div>

              <div className="relative z-10 text-center px-6 max-w-4xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <span className="inline-block px-4 py-1.5 bg-emerald-50 text-emerald-800 text-[11px] font-bold uppercase tracking-widest rounded-full mb-8 border border-emerald-200">
                    Personal Portfolio / Ph.D Candidate
                  </span>
                  <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-6 text-stone-900 leading-[0.9]">
                    蔡詠丞 <span className="text-emerald-800">.</span>
                  </h1>
                  <p className="text-stone-600 text-xl md:text-2xl font-medium mb-10 max-w-2xl mx-auto leading-relaxed underline decoration-emerald-300 decoration-4 underline-offset-4">
                    "買車找我 | 不需告知父母 | 強力過件 | e04 | 67 |"
                  </p>
                </motion.div>
              </div>
            </div>

            {/* About Section */}
            <Section id="about" className="bg-white rounded-3xl my-10 shadow-xl shadow-stone-200/50 border border-stone-100 overflow-hidden">
              <div className="grid md:grid-cols-3 gap-16 items-center">
                <div className="md:col-span-1">
                  <div className="aspect-[4/5] rounded-2xl bg-stone-100 border-4 border-white overflow-hidden shadow-2xl relative group">
                    <img 
                      src="/profile.jpg.jpg" 
                      alt="蔡詠丞" 
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-emerald-800/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                <div className="md:col-span-2 py-4">
                  <span className="text-emerald-800 font-bold text-xs uppercase tracking-widest mb-4 block">Background & Education</span>
                  <h2 className="text-4xl font-extrabold text-stone-900 mb-8 leading-tight">學歷與背景</h2>
                  <div className="flex items-start gap-6 mb-10 p-6 bg-stone-50 rounded-2xl border border-stone-100 transition-hover hover:border-emerald-300">
                    <div className="mt-1 bg-emerald-800 p-3 rounded-xl shadow-lg shadow-emerald-200">
                      <GraduationCap className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-stone-900">國立高雄科技大學</h3>
                      <p className="text-stone-600 font-medium mt-1">航運管理系 博士班 在讀</p>
                      <p className="text-stone-400 text-sm mt-1 uppercase tracking-wider font-bold">Ph.D in Shipping and Transportation Management</p>
                    </div>
                  </div>
                  <p className="text-stone-600 leading-relaxed text-lg font-medium">
                    大家好，我是蔡詠丞。目前專注於航運與物流管理的深度研究。雖然我在學術界打滾，但我也有豐富的「社會經驗」。我擁有一顆強大的心臟（與幽默感），能夠應對各種挑戰——無論是複雜的運輸模型還是各種 G8 客人。
                  </p>
                </div>
              </div>
            </Section>
          </motion.div>
        )}

        {activeTab === 'skills' && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Section id="skills" className="bg-stone-50">
              <div className="mb-16 text-center">
                <span className="text-emerald-800 font-bold text-xs uppercase tracking-widest mb-4 block">Capabilities</span>
                <h2 className="text-5xl font-extrabold text-stone-900 mb-4 tracking-tighter">持有證照與特長</h2>
                <div className="w-20 h-1.5 bg-emerald-800 mx-auto rounded-full" />
              </div>

              {/* Certifications (New Block) */}
              <div className="mb-20">
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-10 h-10 bg-emerald-200 rounded-lg flex items-center justify-center text-emerald-800">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-extrabold tracking-tight text-stone-900">航海人員專業證照</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { title: "基本安全", desc: "具備海上求生、防火與應急基本能力，確保航行基本安全。" },
                    { title: "保全意識", desc: "提升對海盜、恐怖威脅等海上安全事件的敏銳度與防範意識。" },
                    { title: "保全職責", desc: "具備執行與督導船舶保全任務之專業職責能力。" },
                    { title: "醫療急救", desc: "熟悉海上突發傷病之緊急處置與醫療急救技術。" },
                    { title: "進階滅火", desc: "掌握船隻各類火災的高階撲救與指揮控制技能。" },
                    { title: "救生艇筏", desc: "熟練操作並指揮海上救生艇筏，保障遇險撤離安全。" }
                  ].map((cert, index) => (
                    <motion.div 
                      key={index}
                      whileHover={{ y: -4 }}
                      className="p-6 rounded-2xl bg-white border border-stone-200 transition-all hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-50 flex flex-col h-full gap-2"
                    >
                      <div className="flex items-center gap-3 mb-1">
                        <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 font-bold shrink-0 text-sm">
                          {index + 1}
                        </div>
                        <h3 className="font-bold text-stone-900 hover:text-emerald-700 transition-colors">{cert.title}</h3>
                      </div>
                      <p className="text-stone-500 text-sm leading-relaxed pl-11">{cert.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-20">
                <div>
                  <div className="flex items-center gap-4 mb-10">
                    <div className="w-10 h-10 bg-emerald-200 rounded-lg flex items-center justify-center text-emerald-800">
                      <Languages className="w-6 h-6" />
                    </div>
                    <h2 className="text-3xl font-extrabold tracking-tight text-stone-900">語言能力</h2>
                  </div>
                  <div className="space-y-8">
                    {languages.map((lang, index) => (
                      <div key={index} className="group">
                        <div className="flex justify-between items-end mb-3">
                          <span className="text-stone-900 font-bold group-hover:text-emerald-800 transition-colors uppercase text-sm tracking-wide">{lang.name}</span>
                          <span className="text-emerald-800 font-extrabold text-xs bg-emerald-50 px-2 py-0.5 rounded uppercase tracking-tighter">{lang.level}</span>
                        </div>
                        <div className="w-full h-2 bg-stone-200 rounded-full overflow-hidden shadow-inner">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: lang.level === "精通" ? "95%" : lang.level === "普通" ? "60%" : "30%" }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 + index * 0.1, duration: 1.2, ease: "easeOut" }}
                            className="h-full bg-emerald-800 shadow-[0_0_8px_rgba(79,70,229,0.4)]"
                          />
                        </div>
                        <p className="text-[10px] text-stone-400 font-bold uppercase tracking-widest mt-2">{lang.sub}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-4 mb-10">
                    <div className="w-10 h-10 bg-emerald-200 rounded-lg flex items-center justify-center text-emerald-800">
                      <Briefcase className="w-6 h-6" />
                    </div>
                    <h2 className="text-3xl font-extrabold tracking-tight text-stone-900">特長與實戰經驗</h2>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {humorousSkills.map((skill, index) => (
                      <motion.div 
                        key={index}
                        whileHover={{ y: -4 }}
                        className="p-5 rounded-2xl bg-white border border-stone-200 flex flex-col gap-3 transition-all hover:border-emerald-500 hover:shadow-xl hover:shadow-emerald-50"
                      >
                        <div className="flex items-center gap-4">
                          <div className="bg-stone-50 p-2.5 rounded-xl text-stone-500 group-hover:text-emerald-800 transition-colors">
                            {skill.icon}
                          </div>
                          <span className="text-stone-800 font-bold text-sm tracking-tight">{skill.title}</span>
                        </div>
                        <p className="text-stone-500 text-xs font-medium leading-relaxed pl-1">{skill.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                  <div className="mt-8 p-6 rounded-2xl bg-emerald-800 text-white shadow-xl shadow-emerald-300 relative overflow-hidden">
                    <div className="absolute -right-4 -bottom-4 opacity-10 rotate-12">
                      <Sparkles className="w-24 h-24" />
                    </div>
                    <p className="font-bold text-sm italic relative z-10">
                      * 以上技能均經過實戰演練，保證 G8 客人回頭率為 0%。
                    </p>
                  </div>
                </div>
              </div>
            </Section>
          </motion.div>
        )}

        {activeTab === 'presentations' && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Section id="projects">
              <div className="mb-16 text-center">
                <span className="text-emerald-800 font-bold text-xs uppercase tracking-widest mb-4 block">Course Assignments</span>
                <h2 className="text-5xl font-extrabold text-stone-900 mb-4 tracking-tighter">作業</h2>
                <div className="w-20 h-1.5 bg-emerald-800 mx-auto rounded-full mb-8" />
                <p className="text-stone-500 max-w-2xl mx-auto font-medium">包含我在學術或是實習過程中的各種提案、報告。</p>
              </div>

              <div className="grid xl:grid-cols-2 gap-8 mb-12">
                {/* 行程精華 */}
                <div className="group relative rounded-[2rem] overflow-hidden bg-white border border-stone-200 transition-all hover:shadow-3xl hover:shadow-stone-300/40 p-4 flex flex-col">
                  <div className="grid md:grid-cols-2 gap-8 h-full flex-1">
                    <div className="flex flex-col h-full bg-stone-50 rounded-[1.5rem] overflow-hidden border border-stone-100">
                      <div className="p-6 pb-4">
                        <div className="flex gap-2 mb-6 overflow-x-auto pb-2 scrollbar-none">
                          {travelProject.days.map((day, i) => (
                            <button
                              key={i}
                              onClick={() => setActiveDay(i)}
                              className={`px-4 py-2 rounded-xl font-bold text-xs uppercase tracking-widest transition-all whitespace-nowrap ${
                                activeDay === i 
                                  ? "bg-emerald-800 text-white shadow-lg shadow-emerald-200 scale-105" 
                                  : "bg-white text-stone-400 hover:text-stone-600 border border-stone-200 shadow-sm"
                              }`}
                            >
                              {day.day}
                            </button>
                          ))}
                        </div>
                        <div className="flex justify-between items-center mb-4">
                          <h4 className="text-xl font-black text-stone-900 tracking-tight">
                            {travelProject.days[activeDay].date} 精華
                          </h4>
                          <div className="bg-emerald-50 text-emerald-800 px-2 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest border border-emerald-200">
                            Day {activeDay + 1}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex-1 overflow-y-auto p-6 pt-0 space-y-5">
                        {travelProject.days[activeDay].items.map((item, i) => (
                          <motion.div 
                            key={`${activeDay}-${i}`}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex gap-4 group/item"
                          >
                            <div className="flex flex-col items-center">
                              <div className="w-8 h-8 rounded-full bg-white border border-stone-200 flex items-center justify-center text-emerald-800 shadow-sm group-hover/item:border-emerald-800 transition-colors shrink-0">
                                {item.icon}
                              </div>
                              {i !== travelProject.days[activeDay].items.length - 1 && (
                                <div className="w-px h-full bg-stone-200 my-2" />
                              )}
                            </div>
                            <div className="pb-2">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="text-[10px] font-black text-emerald-800 uppercase tracking-widest">{item.time}</span>
                              </div>
                              <p className="text-stone-900 font-bold text-sm tracking-tight mb-1 group-hover/item:text-emerald-800 transition-colors uppercase italic">{item.activity}</p>
                              <p className="text-stone-500 text-xs font-medium leading-relaxed">{item.note}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="p-2 flex flex-col justify-center">
                      <div className="inline-flex items-center gap-2 mb-4 bg-stone-50 px-3 py-1.5 rounded-full border border-stone-100 self-start">
                        <MapPin className="w-3 h-3 text-emerald-800" />
                        <span className="text-stone-500 text-[10px] font-bold uppercase tracking-widest">{travelProject.date}</span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold mb-6 text-stone-900 leading-[1.1]">{travelProject.title}</h3>
                      
                      <div className="mb-8 space-y-4 bg-stone-50 p-5 rounded-2xl border border-stone-100">
                        <p className="text-[10px] font-black text-stone-400 uppercase tracking-[0.2em] mb-3">預算分析</p>
                        {budgetItems.map((item, i) => (
                          <div key={i} className="space-y-1.5">
                            <div className="flex justify-between text-[11px] font-bold text-stone-600">
                              <span>{item.label}</span>
                              <span className="text-emerald-800">NT$ {item.amount.toLocaleString()}</span>
                            </div>
                            <div className="w-full h-1.5 bg-stone-200 rounded-full overflow-hidden">
                              <motion.div 
                                initial={{ width: 0 }}
                                whileInView={{ width: `${(item.amount / 8800) * 100}%` }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 + i * 0.1, duration: 1.2, ease: "circOut" }}
                                className={`h-full bg-stone-400 group-hover:bg-emerald-800 transition-colors duration-500 rounded-full`}
                              />
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="pt-6 border-t border-stone-100 flex flex-col">
                        <span className="text-stone-400 text-[10px] font-bold uppercase tracking-widest">Total Estimated</span>
                        <span className="text-2xl font-black text-emerald-800 tracking-tighter">{travelProject.budgetTotal}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* PDF Presentation Embed */}
                <div className="group relative rounded-[2rem] overflow-hidden bg-white border border-stone-200 transition-all hover:shadow-3xl hover:shadow-stone-300/40 p-6 flex flex-col h-[600px] xl:h-auto">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                        <h3 className="text-2xl font-black text-stone-900 mb-1">台東慢活深度旅行 簡報</h3>
                        <p className="text-stone-500 text-sm font-medium">完整版簡報預覽</p>
                    </div>
                    <div className="bg-emerald-50 text-emerald-800 px-3 py-1 flex items-center gap-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest border border-emerald-200">
                        <FileText className="w-3 h-3" />
                        PDF
                    </div>
                  </div>
                  
                  <div className="flex-1 rounded-xl overflow-hidden border border-stone-200 bg-stone-50 relative flex items-center justify-center group/pdf">
                      <iframe 
                        src="/Taitung_Slow_Travel_2024.pdf" 
                        className="w-full h-full absolute inset-0 z-10" 
                        title="台東慢活深度旅行簡報"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }} 
                      />
                      
                      {/* Hover Overlay for Sandboxed Security Block workaround */}
                      <div className="absolute inset-0 bg-stone-800/80 backdrop-blur-sm z-20 flex flex-col items-center justify-center opacity-0 group-hover/pdf:opacity-100 transition-opacity duration-300">
                        <FileText className="w-16 h-16 text-emerald-400 mb-4" />
                        <p className="text-white font-bold mb-6 text-lg">在預覽環境中 PDF 可能會被封鎖</p>
                        <a 
                          href="/Taitung_Slow_Travel_2024.pdf" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-emerald-500 text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-emerald-400 hover:scale-105 transition-all shadow-lg"
                        >
                          點此在新分頁完整開啟簡報 <ExternalLink className="w-5 h-5" />
                        </a>
                      </div>

                      <div className="text-center p-6 z-0">
                          <ExternalLink className="w-12 h-12 text-stone-300 mx-auto mb-4" />
                          <p className="text-stone-500 font-bold mb-2">正在載入 PDF 簡報...</p>
                          <p className="text-stone-400 text-xs">如果有顯示「Chrome 已封鎖這個網頁」<br/>可以將滑鼠移至此處開啟</p>
                      </div>
                  </div>
                </div>
              </div>

              {/* 其他作業區塊：概念影片 */}
              <div className="max-w-4xl mx-auto">
                <div className="group relative rounded-[2rem] overflow-hidden bg-white border border-stone-200 transition-all hover:shadow-3xl hover:shadow-stone-300/40 p-6 sm:p-8 flex flex-col">
                  <div className="flex justify-between items-start mb-8">
                    <div>
                        <h3 className="text-2xl font-black text-stone-900 mb-1">台東慢活深度旅行 - 概念影片</h3>
                        <p className="text-stone-500 text-sm font-medium">基於旅程主題製作的視覺展演</p>
                    </div>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-6">
                    {[
                      { src: "/video1.mp4", title: "池上稻浪的視覺洗禮" },
                      { src: "/video2.mp4", title: "城市綠洲與市區夜景" },
                      { src: "/video3.mp4", title: "太平洋海岸與黃金之泉" },
                      { src: "/video4.mp4", title: "絕美倒影與鐵道風光" }
                    ].map((video, idx) => (
                      <div key={idx} className="flex flex-col gap-2">
                        <div className="rounded-xl overflow-hidden bg-stone-900 aspect-video relative border border-stone-200 shadow-sm flex items-center justify-center">
                          <video src={video.src} className="w-full h-full object-cover" controls playsInline preload="metadata">
                            <source src={video.src} type="video/mp4" />
                            您的瀏覽器不支援影片播放。
                          </video>
                        </div>
                        <p className="text-sm font-bold text-stone-700 pl-1">{video.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 個人3D模型 */}
              <div className="max-w-4xl mx-auto mt-8">
                <div className="group relative rounded-[2rem] overflow-hidden bg-white border border-stone-200 transition-all hover:shadow-3xl hover:shadow-stone-300/40 p-6 sm:p-8 flex flex-col items-center">
                  <div className="flex flex-col items-center mb-8 text-center">
                    <h3 className="text-2xl font-black text-stone-900 mb-1">個人3D模型</h3>
                    <p className="text-stone-500 text-sm font-medium">個人數位立體形象展示與靜態對照</p>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6 w-full">
                    {/* 3D Model Image */}
                    <div className="flex flex-col gap-3 items-center">
                      <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden bg-stone-50 border border-stone-200 shadow-inner flex items-center justify-center relative p-4 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iI2ZmZmZmZiIvPgo8Y2lyY2xlIGN4PSIxMCIgY3k9IjEwIiByPSIxIiBmaWxsPSIjZTFlMWUxIi8+Cjwvc3ZnPg==')]">
                          <img 
                            src="/3d-model.png" 
                            alt="個人3D模型靜態圖" 
                            className="w-full h-full object-contain z-10 relative drop-shadow-xl"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                              e.currentTarget.nextElementSibling?.classList.remove('hidden');
                            }}
                          />
                          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 hidden">
                              <p className="text-stone-400 text-xs">缺少 <code>3d-model.png</code></p>
                          </div>
                      </div>
                      <p className="text-sm font-bold text-stone-700">3D 模型彩現</p>
                    </div>

                    {/* 3D Model Video */}
                    <div className="flex flex-col gap-3 items-center">
                      <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden bg-stone-900 border border-stone-200 shadow-inner flex items-center justify-center relative">
                          <video 
                            src="/model-spin.mp4" 
                            className="w-full h-full object-cover" 
                            autoPlay loop muted playsInline
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                              e.currentTarget.nextElementSibling?.classList.remove('hidden');
                            }}
                          >
                            <source src="/model-spin.mp4" type="video/mp4" />
                          </video>
                          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 hidden">
                              <p className="text-stone-500 text-xs">缺少 <code>model-spin.mp4</code></p>
                          </div>
                      </div>
                      <p className="text-sm font-bold text-stone-700">動態旋轉展示</p>
                    </div>

                    {/* Original Photo */}
                    <div className="flex flex-col gap-3 items-center">
                      <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden bg-stone-50 border border-stone-200 shadow-inner flex items-center justify-center relative">
                          <img 
                            src="/original-photo.jpg" 
                            alt="原始參考相片" 
                            className="w-full h-full object-cover z-10 relative"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                              e.currentTarget.nextElementSibling?.classList.remove('hidden');
                            }}
                          />
                          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 hidden">
                              <p className="text-stone-400 text-xs">缺少 <code>original-photo.jpg</code></p>
                          </div>
                      </div>
                      <p className="text-sm font-bold text-stone-700">原圖對照</p>
                    </div>
                  </div>
                  
                  <div className="mt-8 bg-emerald-50 rounded-xl p-4 text-center border border-emerald-100 w-full">
                    <p className="text-emerald-800 text-xs sm:text-sm font-medium">
                      個人 3D 模型與靜態照片的對照，展示從平面照片到立體數位形象的轉換過程。
                    </p>
                  </div>
                </div>
              </div>
            </Section>
          </motion.div>
        )}

      </main>

      {/* Footer / Contact */}
      <footer id="contact" className="bg-stone-900 pt-20 pb-12 text-center text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-700/50 to-transparent" />
        
        <div className="max-w-5xl mx-auto px-6 relative z-10 block">
          
          <div className="group inline-block">
            <a 
              href="mailto:a111182136@nkust.edu.tw" 
              className="flex items-center gap-3 text-lg md:text-2xl font-bold text-stone-300 hover:text-white transition-all mb-4"
            >
              <Mail className="w-6 h-6 text-emerald-600" />
              <span>
                a111182136@nkust.edu.tw
              </span>
            </a>
          </div>

          <div className="mt-16 pt-12 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-black uppercase tracking-[0.4em] text-stone-600">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-stone-800 rounded flex items-center justify-center text-stone-400 font-bold">TC</div>
              <span>DESIGNED FOR 蔡詠丞 | © 2024</span>
            </div>
            <div className="flex gap-10">
              <span className="hover:text-emerald-700 cursor-none transition-colors">禁止與我聯絡 (JUST KIDDING)</span>
              <span>POWERED BY LOGISTICS & RESEARCH</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
