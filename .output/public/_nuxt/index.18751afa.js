import{_ as q,a as L}from"./amido.2b1a0070.js";import{m as M,q as P,s as F,b as d,a as b,V as E,r as h,o as a,c as u,w as g,f as l,e,t as y,v as O,T as W,F as v,i as x,x as N,j as V,p as z,l as J,k as w,y as H}from"./entry.d98840dc.js";import{_ as R,a as K,b as G,c as Y,d as Q,e as X,f as Z,g as ee,h as te,i as se,j as oe,k as ae,l as ne,m as ie,n as re,o as ce,p as le,q as k,r as de,s as _e,t as pe,u as me,v as ge,w as S,x as ue,y as fe,z as he,A as be,B as ye,C as A,D,E as C,F as I,G as ve,H as xe,I as we,J as ke,K as Se}from"./macross.6d39b8ad.js";const Ae=M({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(t,{slots:o,attrs:i}){const p=P(!1);return F(()=>{p.value=!0}),s=>{var m;if(p.value)return(m=o.default)==null?void 0:m.call(o);const r=o.fallback||o.placeholder;if(r)return r();const _=s.fallback||s.placeholder||"",c=s.fallbackTag||s.placeholderTag||"span";return d(c,i,_)}}}),De={name:"LottieAnimation",components:{Lottie:E},props:{animationLink:{type:String,required:!0}}};function Ce(t,o,i,p,s,r){const _=h("Lottie"),c=Ae;return a(),u(c,null,{default:g(()=>[l(_,{animationLink:i.animationLink},null,8,["animationLink"])]),_:1})}const Ie=b(De,[["render",Ce]]),Te={props:{img:{type:String,default:""},alt:{type:String,default:""}},methods:{useAsset(t){return Object.assign({"/assets/css/style.css":R,"/assets/img/advanced-trading-tools.webp":K,"/assets/img/bg-trading-tools.webp":G,"/assets/img/buy-and-trade.webp":Y,"/assets/img/country-icon/eng.png":Q,"/assets/img/crypto-icon/2share.png":X,"/assets/img/crypto-icon/bitcoin-asia.png":Z,"/assets/img/crypto-icon/bitcoin.png":ee,"/assets/img/crypto-icon/dogecoin.png":te,"/assets/img/crypto-icon/ethereum.png":se,"/assets/img/crypto-icon/frog.png":oe,"/assets/img/crypto-icon/metacraft.png":ae,"/assets/img/crypto-icon/moonrock.png":ne,"/assets/img/crypto-icon/musk-doge.png":ie,"/assets/img/crypto-icon/ninjafloki.png":re,"/assets/img/crypto-icon/pappay.png":ce,"/assets/img/crypto-icon/solana.png":le,"/assets/img/faq.webp":k,"/assets/img/getting-started/arrow.png":de,"/assets/img/getting-started/buy-crypto.png":_e,"/assets/img/getting-started/fund.png":pe,"/assets/img/getting-started/sign-up.png":me,"/assets/img/industry-leading-security.webp":ge,"/assets/img/logo/amido.svg":q,"/assets/img/logo/mita-icon.svg":S,"/assets/img/nefa-cc.webp":ue,"/assets/img/partner/background.png":fe,"/assets/img/partner/jtekt-logo.svg":he,"/assets/img/partner/mayora-logo.svg":be,"/assets/img/partner/ocbc-logo.svg":ye,"/assets/img/pattern/ellipse-1.png":A,"/assets/img/pattern/ellipse-2.png":D,"/assets/img/pattern/ellipse-3.png":C,"/assets/img/pattern/star.png":I,"/assets/img/thumbnail.jpg":ve,"/assets/img/timeline/kill_la_kill.jpg":xe,"/assets/img/timeline/level_e.jpg":we,"/assets/img/timeline/macross.jpg":ke})["/assets/"+t]}}},je=["src","alt"];function $e(t,o,i,p,s,r){return a(),d("div",null,[e("img",{src:r.useAsset(`img/partner/${i.img}`),class:"w-[75%] aspect-auto m-4 sm:w-1/2 lg:w-[30rem] lg:m-5 lg:p-4 mx-auto",alt:`${i.img}`},null,8,je)])}const Be=b(Te,[["render",$e]]),Ue={name:"BaseAccordion",props:{accordion:{type:Object,required:!0}},data(){return{selected:!1}}},qe={class:"relative border-b-2 border-gray-200"},Le={class:"flex items-center justify-between"},Me={class:"font-medium"},Pe={key:0,class:"relative overflow-hidden transition-all duration-700",style:{}},Fe={class:"py-2"},Ee={class:"text-sm text-gray-700 tracking-wide leading-relaxed"};function Oe(t,o,i,p,s,r){const _=h("ChevronUpIcon"),c=h("ChevronDownIcon");return a(),d("li",qe,[e("button",{type:"button",class:"w-full py-4 text-left",onClick:o[0]||(o[0]=m=>s.selected=!s.selected)},[e("div",Le,[e("span",Me,y(i.accordion.title),1),s.selected?(a(),u(_,{key:0,size:20})):(a(),u(c,{key:1,size:20}))])]),l(W,{name:"slide"},{default:g(()=>[s.selected?(a(),d("div",Pe,[e("div",Fe,[e("p",Ee,y(i.accordion.description),1)])])):O("",!0)]),_:1})])}const We=b(Ue,[["render",Oe]]);const Ne={name:"IndexPage",data(){return{selected:0,dropdownConcurency:!1,dropdownCrypto:!1,currencySelected:{img:"country-icon/eng.png",name:"USD"},currencies:[{img:"country-icon/eng.png",name:"USD"}],cryptoSelected:{img:"crypto-icon/bitcoin.png",name:"BTC"},cryptocurrencies:[{img:"crypto-icon/bitcoin.png",name:"BTC"}],trendings:[{id:1,name:"Bitcoin",price:43180.13,logo:"bitcoin.png",increase:!0,data:[40,35,60,75,60,75,50]},{id:2,name:"Ethereum",price:3480.65,logo:"ethereum.png",increase:!1,data:[25,30,60,50,80,55,80]},{id:3,name:"Solana",price:150.2,logo:"solana.png",increase:!0,data:[40,45,40,80,50,60,35]},{id:4,name:"Dogecoin",price:.1572,logo:"dogecoin.png",increase:!0,data:[35,70,60,80,50,60,40]}],topGainers:[{id:1,name:"PAPPAY",price:.00374,logo:"pappay.png",increase:!0,data:[30,50,45,60,70,40,45]},{id:2,name:"Bitcoin Asia",price:.02096,logo:"bitcoin-asia.png",increase:!0,data:[25,60,50,60,35,50,70]},{id:3,name:"MoonRock",price:.004907,logo:"moonrock.png",increase:!0,data:[40,35,40,25,50,70,45]},{id:4,name:"NinjaFloki",price:123e-6,logo:"ninjafloki.png",increase:!0,data:[45,35,40,30,25,45,35]}],recents:[{id:1,name:"MetaCraft",price:.0608,logo:"metacraft.png",increase:!1,data:[40,50,45,60,35,40,45]},{id:2,name:"Frog",price:.5875,logo:"frog.png",increase:!1,data:[25,50,45,48,40,60,45]},{id:3,name:"Musk Doge",price:.04041,logo:"musk-doge.png",increase:!0,data:[25,35,60,45,50,45,45]},{id:4,name:"2SHARE",price:1366.24,logo:"2share.png",increase:!0,data:[35,30,60,50,35,45,40]}],accordions:[{title:"Why should I choose NEFA?",description:"We're industry pioneers, having been in the cryptocurrency industry since 2016. We've facilitated more than 21 billion USD worth of transactions on our exchange for customers in over 40 countries. Today, we're trusted by over 8 million customers around the world and have received praise for our easy-to-use app, secure wallet, and range of features."},{title:"How secure is NEFA?",description:"We're industry pioneers, having been in the cryptocurrency industry since 2016. We've facilitated more than 21 billion USD worth of transactions on our exchange for customers in over 40 countries. Today, we're trusted by over million customers around the world and have received praise for our easy-to-use app, secure wallet, and range of features."},{title:"Do I have to buy a whole Bitcoin?",description:"We're industry pioneers, having been in the cryptocurrency industry since 2016. We've facilitated more than 21 billion USD worth of transactions on our exchange for customers in over 40 countries. Today, we're trusted by over million customers around the world and have received praise for our easy-to-use app, secure wallet, and range of features."},{title:"How do I actually buy Bitcoin?",description:"We're industry pioneers, having been in the cryptocurrency industry since 2016. We've facilitated more than 21 billion USD worth of transactions on our exchange for customers in over 40 countries. Today, we're trusted by over million customers around the world and have received praise for our easy-to-use app, secure wallet, and range of features."}]}},methods:{downloadCompanyProfile(){const t=document.createElement("a");t.href="/doc/company_profile.pdf",t.download="doc/company_profile.pdf",t.target="_blank",t.click()}}},n=t=>(z("data-v-b4b02197"),t=t(),J(),t),Ve={class:"w-full"},ze={id:"hero",class:"w-full pb-24"},Je={class:"col-span-12 lg:col-span-6 mt-12 xl:mt-10 space-y-4 sm:space-y-6 px-6 text-center sm:text-left mb-2"},He=n(()=>e("h1",{"data-aos":"fade-right","data-aos-once":"true",class:"text-[2.5rem] sm:text-5xl xl:text-6xl font-bold leading-tight capitalize sm:pr-8 xl:pr-10"},[w(" providing "),e("span",{class:"text-header-gradient"},"Solutions to your business"),w(" with best products and services. ")],-1)),Re=n(()=>e("p",{"data-aos":"fade-down","data-aos-once":"true","data-aos-delay":"300",class:"paragraph hidden sm:block"}," Our Mission to Distribute products and services to businesses by maintaining the highest standard of quality, offering innovation and advanced technologies to ensure costomer satisfactions. ",-1)),Ke={"data-aos":"fade-up","data-aos-once":"true",class:"flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-2"},Ge=n(()=>e("span",null,"Download Our Company Profile",-1)),Ye={class:"hidden sm:block sm:justify-between col-span-12 lg:col-span-6 sm:mt-5"},Qe={"data-aos":"zoom-in","data-aos-once":"true","data-aos-delay":"500",class:"w-full h-[30vh] lg:h-full"},Xe=n(()=>e("img",{"data-aos":"fade-up","data-aos-delay":"300",src:A,class:"hidden sm:block absolute bottom-20 xl:bottom-16 left-4 xl:left-0 w-6"},null,-1)),Ze=n(()=>e("img",{"data-aos":"fade-up","data-aos-delay":"300",src:D,class:"hidden sm:block absolute top-4 sm:top-10 right-64 sm:right-96 xl:right-[40rem] w-6"},null,-1)),et=n(()=>e("img",{"data-aos":"fade-up","data-aos-delay":"300",src:C,class:"hidden sm:block absolute bottom-56 right-40 w-6"},null,-1)),tt=n(()=>e("img",{"data-aos":"fade-up","data-aos-delay":"300",src:I,class:"hidden sm:block absolute bottom-10 sm:bottom-28 right-10 lg:right-0 lg:left-[35rem] w-8"},null,-1)),st={class:"max-w-screen-xl mx-2 sm:mx-auto px-4 sm:px-6 lg:px-0 py-6 pb-8 sm:py-6 rounded-[2.25rem] sm:rounded-xl bg-white shadow-xl sm:shadow-xl transform lg:-translate-y-12","data-aos":"fade-right","data-aos-once":"true","data-aos-delay":"300"},ot={class:"w-full flex flex-col lg:flex-row items-center justify-center"},at={class:"col-span-12 lg:col-span-7"},nt={class:"w-[35rem]"},it=V('<div class="col-span-12 lg:col-span-5 space-y-4 px-4 sm:px-6 mt-5" data-v-b4b02197><h2 class="text-4xl font-semibold" data-v-b4b02197><span class="text-header-gradient" data-v-b4b02197>Introducing</span></h2><p class="paragraph" data-v-b4b02197> PT. AMIDO MAKMOR TULUS SEJATI was humbly established in 1987 initially as the sole distributor for <img class="w-10 inline-block mb-1.5" src="'+S+'" data-v-b4b02197> copiers from Japan and Amida brand Typewriters. Since then we have expanded our business from office domain business such as Document Solutions, Document Security to public doamin business such as Point of Sales Systems and Content Management Services. </p><p class="paragraph" data-v-b4b02197> In 2012, we changed our identity from &quot;PT. AMIDA TULUS SEJATI&quot; to &quot;PT. AMIDO MAKMOR TULUS SEJATI&quot; in comformity to our commitment towards Solutions business in Document as well as Content Management Business which display tremendous growth due to advancement of internet technology. Nevertheless our motto &quot;Always With You&quot; never changed as we remain alongside all our costumers and strive even harder not only to serve well but try to exceed their expectations. </p></div>',1),rt={class:"bg-partner relative max-w-full sm:mx-6 my-24 shadow-xl sm:rounded-2xl overflow-hidden"},ct={class:"w-full px-6 sm:px-0 py-16 flex flex-col items-center justify-center space-y-4 text-center"},lt=n(()=>e("h3",{"data-aos":"flip-down",class:"text-2xl text-neutral-800 font-semibold"},"Our Customers",-1)),dt={"data-aos":"fade-up",class:"flex flex-wrap items-center justify-center"},_t={class:"w-full my-24"},pt=n(()=>e("div",{"data-aos":"fade-right","data-aos-delay":"150",class:"col-span-12 lg:col-span-6"},[e("div",{class:"w-full"},[e("img",{src:k,class:"w-ll",alt:""})])],-1)),mt={"data-aos":"fade-left","data-aos-delay":"150",class:"col-span-12 lg:col-span-6 px-4 sm:px-6 mt-8"},gt=n(()=>e("span",{class:"text-base text-gradient font-semibold uppercase mb-4 sm:mb-2"},"Support",-1)),ut=n(()=>e("h2",{class:"text-3xl sm:text-4xl font-semibold mb-10 sm:mb-6"},"Frequently asked questions",-1)),ft={class:"shadow-box"},ht={class:"w-full my-10 flex justify-center"},bt={"data-aos":"flip-down","data-aos-delay":"150",href:"#navbar",class:"px-6 py-3 flex items-center space-x-2 bg-[#FAFAFA] hover:bg-gray-100 hover:shadow-md border border-[#DDDDDD] rounded-md text-gray-700"},yt=n(()=>e("span",null,"Back to top",-1));function vt(t,o,i,p,s,r){const _=L,c=Ie,m=Se,T=Be,j=We,$=h("ArrowUpIcon"),B=H("smooth-scroll");return a(),d("div",Ve,[e("section",ze,[l(m,null,{default:g(()=>[e("div",Je,[He,Re,e("div",Ke,[l(_,{class:"max-w-full px-6 py-4 bg-inherit text-gradient border border-[#0c66ee] flex items-center justify-center",onClick:r.downloadCompanyProfile},{default:g(()=>[Ge]),_:1},8,["onClick"])])]),e("div",Ye,[e("div",Qe,[l(c,{"animation-link":"https://assets2.lottiefiles.com/packages/lf20_vvtkfqbo.json"})])]),Xe,Ze,et,tt]),_:1})]),e("section",st,[e("div",ot,[e("div",at,[e("div",nt,[l(c,{"animation-link":"https://assets2.lottiefiles.com/packages/lf20_myigw022.json"})])]),it])]),e("section",rt,[e("div",ct,[lt,e("div",dt,[(a(!0),d(v,null,x(["mayora-logo.svg","ocbc-logo.svg","jtekt-logo.svg"],f=>(a(),u(T,{key:f,img:f},null,8,["img"]))),128))])])]),e("section",_t,[l(m,null,{default:g(()=>[pt,e("div",mt,[gt,ut,e("ul",ft,[(a(!0),d(v,null,x(s.accordions,(f,U)=>(a(),u(j,{key:U,accordion:f},null,8,["accordion"]))),128))])])]),_:1})]),e("div",ht,[N((a(),d("a",bt,[yt,l($,{size:20})])),[[B]])])])}const St=b(Ne,[["render",vt],["__scopeId","data-v-b4b02197"]]);export{St as default};
