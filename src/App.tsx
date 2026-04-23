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
  Sparkles
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

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center text-white font-bold text-lg tracking-tighter">TC</div>
            <span className="font-bold tracking-tight text-slate-900 uppercase text-sm">Yung-Cheng Tsai</span>
          </div>
          <div className="flex gap-8 text-xs font-bold text-slate-500 uppercase tracking-[0.2em]">
            <a href="#about" className="hover:text-indigo-600 transition-colors border-b-2 border-transparent hover:border-indigo-600 pb-1">關於</a>
            <a href="#skills" className="hover:text-indigo-600 transition-colors border-b-2 border-transparent hover:border-indigo-600 pb-1">技能</a>
            <a href="#projects" className="hover:text-indigo-600 transition-colors border-b-2 border-transparent hover:border-indigo-600 pb-1">專案</a>
            <a href="#contact" className="hover:text-indigo-600 transition-colors border-b-2 border-transparent hover:border-indigo-600 pb-1">聯絡</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/taitung/1920/1080?blur=1" 
            alt="Taitung Landscape" 
            className="w-full h-full object-cover opacity-10 scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-slate-50" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-600 text-[11px] font-bold uppercase tracking-widest rounded-full mb-8 border border-indigo-100">
              Personal Portfolio / Ph.D Candidate
            </span>
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-6 text-slate-900 leading-[0.9]">
              蔡詠丞 <span className="text-indigo-600">.</span>
            </h1>
            <p className="text-slate-600 text-xl md:text-2xl font-medium mb-10 max-w-2xl mx-auto leading-relaxed underline decoration-indigo-200 decoration-4 underline-offset-4">
              "買車找我 | 不需告知父母 | 強力過件 | e04 | 67 |"
            </p>
            <div className="flex justify-center gap-6">
              <button className="bg-indigo-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 active:scale-95">
                了解更多故事
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* About Section */}
      <Section id="about" className="bg-white rounded-3xl my-10 shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
        <div className="grid md:grid-cols-3 gap-16 items-center">
          <div className="md:col-span-1">
            <div className="aspect-[4/5] rounded-2xl bg-slate-100 border-4 border-white overflow-hidden shadow-2xl relative group">
              <img 
                src="https://picsum.photos/seed/profile/800/1200" 
                alt="蔡詠丞" 
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
          <div className="md:col-span-2 py-4">
            <span className="text-indigo-600 font-bold text-xs uppercase tracking-widest mb-4 block">Background & Education</span>
            <h2 className="text-4xl font-extrabold text-slate-900 mb-8 leading-tight">學歷背景</h2>
            <div className="flex items-start gap-6 mb-10 p-6 bg-slate-50 rounded-2xl border border-slate-100 transition-hover hover:border-indigo-200">
              <div className="mt-1 bg-indigo-600 p-3 rounded-xl shadow-lg shadow-indigo-100">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900">國立高雄科技大學</h3>
                <p className="text-slate-600 font-medium mt-1">航運管理系 博士班 在讀</p>
                <p className="text-slate-400 text-sm mt-1 uppercase tracking-wider font-bold">Ph.D in Shipping and Transportation Management</p>
              </div>
            </div>
            <p className="text-slate-600 leading-relaxed text-lg font-medium">
              大家好，我是蔡詠丞。目前專注於航運與物流管理的深度研究。雖然我在學術界打滾，但我也有豐富的「社會經驗」。我擁有一顆強大的心臟（與幽默感），能夠應對各種挑戰——無論是複雜的運輸模型還是各種 G8 客人。
            </p>
          </div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills" className="bg-slate-50">
        <div className="grid md:grid-cols-2 gap-20">
          <div>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600">
                <Languages className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">語言能力</h2>
            </div>
            <div className="space-y-8">
              {languages.map((lang, index) => (
                <div key={index} className="group">
                  <div className="flex justify-between items-end mb-3">
                    <span className="text-slate-900 font-bold group-hover:text-indigo-600 transition-colors uppercase text-sm tracking-wide">{lang.name}</span>
                    <span className="text-indigo-600 font-extrabold text-xs bg-indigo-50 px-2 py-0.5 rounded uppercase tracking-tighter">{lang.level}</span>
                  </div>
                  <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden shadow-inner">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: lang.level === "精通" ? "95%" : lang.level === "普通" ? "60%" : "30%" }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + index * 0.1, duration: 1.2, ease: "easeOut" }}
                      className="h-full bg-indigo-600 shadow-[0_0_8px_rgba(79,70,229,0.4)]"
                    />
                  </div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-2">{lang.sub}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600">
                <Briefcase className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">專業技能</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {humorousSkills.map((skill, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ y: -4 }}
                  className="p-5 rounded-2xl bg-white border border-slate-200 flex flex-col gap-3 transition-all hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-50"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-slate-50 p-2.5 rounded-xl text-slate-500 group-hover:text-indigo-600 transition-colors">
                      {skill.icon}
                    </div>
                    <span className="text-slate-800 font-bold text-sm tracking-tight">{skill.title}</span>
                  </div>
                  <p className="text-slate-500 text-xs font-medium leading-relaxed pl-1">{skill.desc}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-8 p-6 rounded-2xl bg-indigo-600 text-white shadow-xl shadow-indigo-200 relative overflow-hidden">
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

      {/* Projects Section */}
      <Section id="projects">
        <div className="mb-16 text-center">
          <span className="text-indigo-600 font-bold text-xs uppercase tracking-widest mb-4 block">Selected Works</span>
          <h2 className="text-5xl font-extrabold text-slate-900 mb-4 tracking-tighter">實習與專案</h2>
          <div className="w-20 h-1.5 bg-indigo-600 mx-auto rounded-full" />
        </div>

        <div className="group relative rounded-[2rem] overflow-hidden bg-white border border-slate-200 transition-all hover:shadow-3xl hover:shadow-slate-300/40 p-4">
          <div className="grid md:grid-cols-2 gap-8 h-full">
            <div className="flex flex-col h-full bg-slate-50 rounded-[1.5rem] overflow-hidden border border-slate-100">
              <div className="p-8 pb-4">
                <div className="flex gap-2 mb-6 overflow-x-auto pb-2 scrollbar-none">
                  {travelProject.days.map((day, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveDay(i)}
                      className={`px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition-all whitespace-nowrap ${
                        activeDay === i 
                          ? "bg-indigo-600 text-white shadow-lg shadow-indigo-100 scale-105" 
                          : "bg-white text-slate-400 hover:text-slate-600 border border-slate-200 shadow-sm"
                      }`}
                    >
                      {day.day}
                    </button>
                  ))}
                </div>
                <div className="flex justify-between items-center mb-6">
                  <h4 className="text-2xl font-black text-slate-900 tracking-tight">
                    {travelProject.days[activeDay].date} 行程精華
                  </h4>
                  <div className="bg-indigo-50 text-indigo-600 px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest border border-indigo-100">
                    Day {activeDay + 1}
                  </div>
                </div>
              </div>
              
              <div className="flex-1 overflow-y-auto p-8 pt-0 space-y-6">
                {travelProject.days[activeDay].items.map((item, i) => (
                  <motion.div 
                    key={`${activeDay}-${i}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4 group/item"
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-indigo-600 shadow-sm group-hover/item:border-indigo-600 transition-colors shrink-0">
                        {item.icon}
                      </div>
                      {i !== travelProject.days[activeDay].items.length - 1 && (
                        <div className="w-px h-full bg-slate-200 my-2" />
                      )}
                    </div>
                    <div className="pb-4">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest">{item.time}</span>
                      </div>
                      <p className="text-slate-900 font-bold text-sm tracking-tight mb-1 group-hover/item:text-indigo-600 transition-colors uppercase italic">{item.activity}</p>
                      <p className="text-slate-500 text-xs font-medium leading-relaxed">{item.note}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="p-4 md:p-8 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 mb-6 bg-slate-50 px-4 py-2 rounded-full border border-slate-100">
                <MapPin className="w-4 h-4 text-indigo-600" />
                <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">{travelProject.date}</span>
              </div>
              <h3 className="text-4xl font-extrabold mb-8 text-slate-900 leading-[1.1]">{travelProject.title}</h3>
              
              <div className="mb-12 space-y-6 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">預算分析 Budget Breakdown</p>
                {budgetItems.map((item, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between text-[11px] font-bold text-slate-600">
                      <span>{item.label}</span>
                      <span className="text-indigo-600">NT$ {item.amount.toLocaleString()}</span>
                    </div>
                    <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(item.amount / 8800) * 100}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.1, duration: 1.2, ease: "circOut" }}
                        className={`h-full bg-slate-400 group-hover:bg-indigo-600 transition-colors duration-500 rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                <div className="flex flex-col">
                  <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Total Estimated</span>
                  <span className="text-3xl font-black text-indigo-600 tracking-tighter">{travelProject.budgetTotal}</span>
                </div>
                <button className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-slate-800 transition-all shadow-xl shadow-slate-200 self-stretch sm:self-center justify-center">
                  下載完整手冊 <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Footer / Contact */}
      <footer id="contact" className="bg-slate-900 pt-32 pb-16 text-center text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
        
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <span className="text-indigo-400 font-black text-xs uppercase tracking-[0.3em] mb-6 block">Ready to Connect?</span>
          <h2 className="text-6xl md:text-8xl font-black mb-12 tracking-tighter leading-none">與我聯絡 <span className="text-indigo-500">.</span></h2>
          
          <div className="group inline-block">
            <a 
              href="mailto:a111182136@nkust.edu.tw" 
              className="flex items-center gap-6 text-2xl md:text-5xl font-bold text-slate-300 hover:text-white transition-all mb-4"
            >
              <div className="bg-indigo-600 p-4 rounded-2xl group-hover:rotate-12 transition-transform">
                <Mail className="w-8 h-8 md:w-12 md:h-12" />
              </div>
              <span className="border-b-4 border-indigo-500 pb-2">
                a111182136@nkust.edu.tw
              </span>
            </a>
          </div>

          <div className="mt-20 flex justify-center gap-10">
            {[
              { icon: <Linkedin className="w-7 h-7" />, label: "LinkedIn" },
              { icon: <Instagram className="w-7 h-7" />, label: "Instagram" },
              { icon: <Facebook className="w-7 h-7" />, label: "Facebook" },
              { icon: <Youtube className="w-7 h-7" />, label: "YouTube" }
            ].map((social, i) => (
              <a 
                key={i} 
                href="#" 
                className="text-slate-500 hover:text-indigo-400 transition-all transform hover:scale-125"
              >
                {social.icon}
                <span className="sr-only">{social.label}</span>
              </a>
            ))}
          </div>

          <div className="mt-32 pt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-black uppercase tracking-[0.4em] text-slate-600">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-slate-800 rounded flex items-center justify-center text-slate-400 font-bold">TC</div>
              <span>DESIGNED FOR 蔡詠丞 | © 2024</span>
            </div>
            <div className="flex gap-10">
              <span className="hover:text-indigo-500 cursor-none transition-colors">禁止與我聯絡 (JUST KIDDING)</span>
              <span>POWERED BY LOGISTICS & RESEARCH</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
