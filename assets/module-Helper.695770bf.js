import{r as m,g as k,a as h,c as r,h as i,u as z,j as _,v,F as y,k as j,p as w,l as q,t as E}from"./vendor.7d0746b2.js";import{_ as I}from"./index.e0a63cd4.js";var c=["a","ai","an","ang","ao","ba","bai","ban","bang","bao","bei","ben","beng","bi","bian","biang","biao","bie","bin","bing","bo","bu","ca","cai","can","cang","cao","ce","cei","cen","ceng","cha","chai","chan","chang","chao","che","chen","cheng","chi","chong","chou","chu","chua","chuai","chuan","chuang","chui","chun","chuo","ci","cong","cou","cu","cuan","cui","cun","cuo","da","dai","dan","dang","dao","de","dei","den","deng","di","dia","dian","diao","die","din","ding","diu","dong","dou","du","duan","dui","dun","duo","e","ei","en","eng","er","fa","fan","fang","fei","fen","feng","fiao","fo","fou","fu","ga","gai","gan","gang","gao","ge","gei","gen","geng","gong","gou","gu","gua","guai","guan","guang","gui","gun","guo","ha","hai","han","hang","hao","he","hei","hen","heng","hm","hng","hong","hou","hu","hua","huai","huan","huang","hui","hun","huo","ji","jia","jian","jiang","jiao","jie","jin","jing","jiong","jiu","ju","juan","jue","jun","ka","kai","kan","kang","kao","ke","kei","ken","keng","kong","kou","ku","kua","kuai","kuan","kuang","kui","kun","kuo","la","lai","lan","lang","lao","le","lei","len","leng","li","lia","lian","liang","liao","lie","lin","ling","liu","lo","long","lou","lu","luan","lun","luo","lv","lve","m","ma","mai","man","mang","mao","me","mei","men","meng","mi","mian","miao","mie","min","ming","miu","mo","mou","mu","n","na","nai","nan","nang","nao","ne","nei","nen","neng","ng","ni","nia","nian","niang","niao","nie","nin","ning","niu","nong","nou","nu","nuan","nun","nuo","nv","nve","o","ou","pa","pai","pan","pang","pao","pei","pen","peng","pi","pian","piao","pie","pin","ping","po","pou","pu","qi","qia","qian","qiang","qiao","qie","qin","qing","qiong","qiu","qu","quan","que","qun","ran","rang","rao","re","ren","reng","ri","rong","rou","ru","rua","ruan","rui","run","ruo","sa","sai","san","sang","sao","se","sen","seng","sha","shai","shan","shang","shao","she","shei","shen","sheng","shi","shou","shu","shua","shuai","shuan","shuang","shui","shun","shuo","si","song","sou","su","suan","sui","sun","suo","ta","tai","tan","tang","tao","te","tei","teng","ti","tian","tiao","tie","ting","tong","tou","tu","tuan","tui","tun","tuo","wa","wai","wan","wang","wei","wen","weng","wo","wong","wu","xi","xia","xian","xiang","xiao","xie","xin","xing","xiong","xiu","xu","xuan","xue","xun","ya","yan","yang","yao","ye","yi","yin","ying","yo","yong","you","yu","yuan","yue","yun","za","zai","zan","zang","zao","ze","zei","zen","zeng","zha","zhai","zhan","zhang","zhao","zhe","zhei","zhen","zheng","zhi","zhong","zhou","zhu","zhua","zhuai","zhuan","zhuang","zhui","zhun","zhuo","zi","zong","zou","zu","zuan","zui","zun","zuo"];const f=t=>(w("data-v-7bab0b23"),t=t(),q(),t),R={class:"overflow-x-hidden overflow-y-hidden"},S=["value"],V=f(()=>i("p-corn",null,"\u62FC\u97F3\u5217\u8868",-1)),B=f(()=>i("p-corn",null,"\u5168\u5C40\u89C4\u5219",-1)),U=["onUpdate:modelValue","tabindex"],$=["value"],D={setup(t){const l={l:(n,a)=>n.length==a,r:(n,a)=>RegExp(a).test(n),m:(n,a)=>RegExp(`^${a}$`).test(n),c:(n,a)=>RegExp(`[${a}]`).test(n)},g=m(`# a e i o u v
!c `),o=m([]);for(let n=0;n<4;n++)o.value.push(`l 
`);const b=(n,a)=>{var d;const[u,...e]=n.toLowerCase().split(" "),s=u.startsWith("!"),p=e.length?(d=l[u.replace(/!/,"")])==null?void 0:d.call(l,a,...e):!0;return s?!p:p},x=k(()=>o.value.map(n=>{const a=(n.trim()+`
`+g.value.trim()).split(`
`).filter(u=>u&&!u.startsWith("#"));return a.length?c.filter(u=>{for(const e of a)if(!b(e,u))return!1;return!0}).join(`
`):c.join(`
`)}));return(n,a)=>(h(),r("module",R,[i("p-rule",null,[i("textarea",{value:z(c).join(`
`),full:"",readonly:""},null,8,S),V]),i("p-rule",null,[_(i("textarea",{"onUpdate:modelValue":a[0]||(a[0]=u=>g.value=u),full:""},null,512),[[v,g.value]]),B]),(h(!0),r(y,null,j(o.value,(u,e)=>(h(),r("p-rule",{key:e},[_(i("textarea",{"onUpdate:modelValue":s=>o.value[e]=s,rule:"",tabindex:e+2},null,8,U),[[v,o.value[e]]]),i("textarea",{value:z(x)[e],result:"",readonly:""},null,8,$),i("p-corn",null,"\u7B2C"+E(e+1)+"\u4E2A\u62FC\u97F3",1)]))),128))]))}};var L=I(D,[["__scopeId","data-v-7bab0b23"]]);export{L as default};