import{a as x,o,b as d,e,t as D,r as c,c as p,f as s,w as h,C as w,v as $,T as k,k as a,j as N,h as C,F as A}from"./entry.d98840dc.js";import{_ as B,a as I}from"./amido.2b1a0070.js";const S={props:{name:{type:String,required:!0},url:{type:String,required:!0}}},T={class:"w-full"},z=["href"];function M(i,n,l,u,t,_){return o(),d("li",T,[e("a",{class:"md:px-4 py-2 text-sm bg-transparent rounded-lg text-[#666666] hover:text-gray-900 focus:outline-none focus:shadow-outline",href:l.url},D(l.name),9,z)])}const J=x(S,[["render",M]]),j={name:"BaseNavbar",data(){return{open:!1,dropdownNavbar:!1}},methods:{dropdownToggler(){this.dropdownNavbar=!this.dropdownNavbar}}},F={id:"navbar",class:"relative z-10 w-full text-neutral-800"},L={class:"flex flex-col max-w-screen-xl px-8 mx-auto lg:items-center lg:justify-between lg:flex-row py-4"},P={class:"flex flex-col lg:flex-row items-center space-x-4 xl:space-x-8"},R={class:"w-full flex flex-row items-center justify-between py-6"},U=e("div",null,[e("img",{src:B,class:"w-20 xl:w-24",alt:"Amido Logo"})],-1),V={class:"relative group"},E=e("span",null,"Products",-1),K={key:0,class:"flex lg:absolute flex-col max-w-42 py-1 lg:bg-white rounded-md lg:shadow-md pl-2 lg:pl-0"},O=e("li",null,[e("a",{href:"/products/multifunction_printers",class:"block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100"},"Multifunction Printers")],-1),q=e("li",null,[e("a",{href:"/products/production_printers",class:"block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100"},"Production Printers")],-1),H=[O,q];function W(i,n,l,u,t,_){const r=c("SegmentIcon"),m=c("CloseIcon"),f=J,b=c("ChevronUpIcon"),y=c("ChevronDownIcon"),g=I;return o(),d("nav",F,[e("div",L,[e("div",P,[e("div",R,[U,e("button",{class:"rounded-lg lg:hidden focus:outline-none focus:shadow-outline",onClick:n[0]||(n[0]=v=>t.open=!t.open)},[t.open?(o(),p(m,{key:1,size:24})):(o(),p(r,{key:0,size:24}))])]),s(k,{name:"transform-fade-down"},{default:h(()=>[e("ul",{class:w([[t.open?"flex":"hidden lg:flex"],"w-full h-auto flex flex-col flex-grow lg:items-center pb-4 lg:pb-0 lg:justify-end lg:flex-row origin-top xl:space-x-2 space-y-3 lg:space-y-0"])},[s(f,{name:"Home",url:"/"}),s(f,{name:"Business",url:"/business"}),s(f,{name:"Solutions",url:"/solutions"}),e("li",V,[e("button",{class:"md:px-4 py-2 text-sm bg-transparent rounded-lg text-[#666666] hover:text-gray-900 focus:outline-none focus:shadow-outline flex items-center",onClick:n[1]||(n[1]=v=>t.dropdownNavbar=!t.dropdownNavbar)},[E,t.dropdownNavbar?(o(),p(b,{key:0,size:16})):(o(),p(y,{key:1,size:16}))]),t.dropdownNavbar?(o(),d("ul",K,H)):$("",!0)])],2)]),_:1})]),e("div",{class:w([[t.open?"flex":"hidden lg:flex"],"space-x-3"])},[s(g,{class:"px-8 xl:px-10 py-3 mt-2 bg-inherit text-gradient border border-[#0c66ee]"},{default:h(()=>[a(" Login ")]),_:1}),s(g,{class:"px-8 xl:px-10 py-3 mt-2 bg-gradient-to-r from-[#468ef9] to-[#0c66ee] text-white"},{default:h(()=>[a(" Sign Up ")]),_:1})],2)])])}const G=x(j,[["render",W]]),Q={name:"BaseFooter"},X={class:"max-w-screen-xl px-8 mx-auto"},Y={class:"w-full border-y border-[#DDDDDD]"},Z={class:"grid xl:grid-cols-3 xl:justify-between lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1"},ee=N('<div class="md:w-full lg:w-full lg:border-r w-full sm:w-1/2 xl:w-fit sm:px-16 py-6 sm:py-12 border-t sm:border-t xl:border-r border-[#DDDDDD]" data-aos="fade-up" data-aos-once="true" data-aos-delay="300"><h2 class="text-xl sm:text-2xl font-semibold mb-10 sm:mb-6">Head Office :</h2><p class="paragraph text-left xl:text-left">Jln. Daan Mogot KM. 11 No. 7</p><p class="paragraph text-left xl:text-left">Jakarta Barat 11710, Indonesia</p><p class="paragraph text-left xl:text-left">Tel. (021) 5436 6111, 5436 6222</p><p class="paragraph text-left xl:text-left">Fax. (021) 5436 6030 / 40</p></div><div class="md:w-full lg:w-full lg:border-r w-full sm:w-1/2 xl:w-fit sm:px-16 py-6 sm:py-12 border-t sm:border-t xl:border-r border-[#DDDDDD]" data-aos="fade-down" data-aos-once="true" data-aos-delay="600"><h2 class="text-xl sm:text-2xl font-semibold mb-10 sm:mb-6">Branch Cikarang Area :</h2><p class="paragraph text-left xl:text-left">Jln. Niaga Raya Kav. AA3 Blok. B No. 23 Ruko CBD Jababeka</p><p class="paragraph text-left xl:text-left">Cikarang Bekasi, Jaw Barat</p><p class="paragraph text-left xl:text-left">Tel. (021) 2908 3865</p></div>',2),te={class:"md:w-full md:border-t lg:w-full sm:px-10 py-6 sm:py-12 w-full sm:w-1/2 xl:w-[22rem] space-y-4 sm:border-t border-[#DDDDDD]","data-aos":"fade-right","data-aos-once":"true","data-aos-delay":"900"},oe=e("h5",{class:"text-sm font-medium text-[#666666] focus:outline-none focus:shadow-outline"},"Newsletter",-1),se=e("p",{class:"text-sm text-[#666666] focus:outline-none focus:shadow-outline"},[a(" Never miss anything crypto when "),e("br",{class:"sm:hidden"}),a("you're on the go ")],-1),ne={class:"flex items-center space-x-2"},ae=e("input",{type:"text",class:"w-full px-2 py-4 sm:py-3 rounded-lg sm:rounded-md text-sm focus:outline-none border border-[#AAAAAA] placeholder-[#888]",placeholder:"Enter your email"},null,-1),le={class:"bg-blue-gradient px-4 py-4 sm:py-3 rounded-md text-white hover:shadow-md transition duration-300"},re=e("div",{class:"py-4 sm:py-2 text-center text-sm text-[#666666] hover:text-gray-900"}," © Copyright 2023 PT. AMIDO MAKMOR TULUS SEJATI. ",-1),ce=e("div",{class:"py-4 sm:py-2 text-center text-sm text-[#666666] hover:text-gray-900"},[a(" Made with "),e("span",{class:"text-red-500"},"♥"),a(" by "),e("a",{href:"https://www.linkedin.com/in/andiwinata87",class:"text-blue-500"},"Andi Winata")],-1);function de(i,n,l,u,t,_){const r=c("ArrowRightIcon");return o(),d("footer",X,[e("div",Y,[e("div",Z,[ee,e("div",te,[oe,se,e("div",ne,[ae,e("button",le,[s(r,{size:20})])])])])]),re,ce])}const ie=x(Q,[["render",de]]);const pe={name:"DefaultLayout"},xe={class:"text-neutral-800"};function ue(i,n,l,u,t,_){const r=G,m=ie;return o(),d(A,null,[s(r),e("main",xe,[C(i.$slots,"default")]),s(m)],64)}const fe=x(pe,[["render",ue]]);export{fe as default};