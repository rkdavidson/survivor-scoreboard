(this["webpackJsonpsurvivor-scoreboard"]=this["webpackJsonpsurvivor-scoreboard"]||[]).push([[0],{15:function(e,t,a){},22:function(e,t,a){e.exports=a(33)},32:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(17),i=a.n(o),l=(a(15),a(6)),s=a(5);var c=function(e){var t=e.className,a=e.hasFire,n=e.points,o=void 0===n?null:n;return r.a.createElement("div",{className:["h-8 flex justify-center items-center content-center -mt-3 rounded-full bg-white",a?"w-8 -mr-1":"px-4 mr-1",t].join(" ")},a&&r.a.createElement("span",{className:"text-lg font-bold text-center tracking-tighter"},"\ud83d\udd25"),!a&&r.a.createElement("span",{className:"text-sm font-medium text-gray-900 text-center"},null!==o?"".concat(o," pts"):"\ud83d\udca8"))};function d(e){var t=e.tribe,a=t.name,n=t.colors;return r.a.createElement("p",{className:"text-lg font-bold leading-none"},r.a.createElement("span",{className:"rounded text-xs px-2 font-bold tracking-wide",style:{background:n.light,color:n.dark}},a.toUpperCase()))}function m(e){var t=e.className,a=e.tribe,n=a.name,o=a.colors;return r.a.createElement("span",{className:"rounded px-4 py-1 mt-3 text-md font-bold tracking-widest shadow ".concat(t),style:{background:o.light,color:o.dark}},n.toUpperCase())}var h={opacity:.8,filter:"grayscale(100%) contrast(65%) brightness(115%)",userSelect:"none"};var u=function(e){var t=e.player,a=t.id,n=t.profile,o=n.firstName,i=n.lastName,l=n.age,m=n.occupation,u=n.currentResidence,p=(n.hometown,t.currentTribe),f=t.hasFire,b=t.hiddenIdols,g=t.points,y=Object(s.f)();return r.a.createElement("div",{className:"w-1/2 px-2 mb-6 relative ".concat(f?void 0:"opacity-75"),onClick:function(){y.push("/player/".concat(a))}},r.a.createElement("div",{className:"rounded-lg overflow-hidden shadow-md bg-white border-2 border-gray-400",style:f?{borderColor:p.colors.light}:void 0},r.a.createElement("img",{className:"object-cover object-top h-40 w-full",src:"".concat("https://rkdavidson.github.io/survivor-scoreboard","/images/cast/").concat(o,"-").concat(i,".jpg"),alt:"".concat(o," ").concat(i),style:f?void 0:h}),r.a.createElement(c,{className:"absolute top-0 right-0",hasFire:f,points:g}),r.a.createElement("div",{className:"p-2 pb-3 ".concat(f?"bg-white":"bg-gray-100")},r.a.createElement("div",{className:"flex justify-between content-center items-center"},r.a.createElement("p",{className:"text-lg font-semibold"},o," ","\ud83d\uddff".repeat(b)),r.a.createElement(d,{tribe:p})),r.a.createElement("p",{className:"text-xs font-medium text-gray-700 mt-2 hidden"},r.a.createElement("span",{className:"font-bold"},"Age")," ",r.a.createElement("span",null,l),r.a.createElement("br",null),r.a.createElement("span",null,m),r.a.createElement("br",null),r.a.createElement("span",null,u),r.a.createElement("br",null)))))};function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createElement("path",{d:"M15 9a3 3 0 0 0 3-3h2a5 5 0 0 1-5.1 5 5 5 0 0 1-3.9 3.9V17l5 2v1H4v-1l5-2v-2.1A5 5 0 0 1 5.1 11H5a5 5 0 0 1-5-5h2a3 3 0 0 0 3 3V4H2v2H0V2h5V0h10v2h5v4h-2V4h-3v5z"}),g=function(e){var t=e.svgRef,a=e.title,n=f(e,["svgRef","title"]);return r.a.createElement("svg",p({viewBox:"0 0 20 20",ref:t},n),a?r.a.createElement("title",null,a):null,b)},y=r.a.forwardRef((function(e,t){return r.a.createElement(g,p({svgRef:t},e))})),w=(a.p,["","1st","2nd","3rd","4th","5th","6th","7th","8th"]);function v(e){var t=e.owner,a=e.members,n=e.totalPoints,o=e.standing;return r.a.createElement("section",{className:"pb-2 mb-12 shadow-lg bg-gray-100"},r.a.createElement("div",{className:"flex justify-between items-center mb-6 px-8 py-4 bg-white shadow"},r.a.createElement("h2",{className:"text-3xl font-black leading-tight text-teal-900"},1===o?r.a.createElement("span",{className:"flex text-base font-bold text-teal-600 align-center items-center"},r.a.createElement(y,{className:"inline-block w-4 h-4 fill-current text-orange-400 mr-1"})," 1st"):r.a.createElement("span",{role:"img","aria-label":w[o],className:"block text-base font-bold text-blue-600"},w[o]),t),r.a.createElement("span",{className:"inline-block rounded-full px-4 py-1 mr-2 bg-yellow-200 text-xl font-semibold text-orange-600 shadow"},n," pts")),r.a.createElement("section",{className:"px-4"},r.a.createElement("div",{className:"flex flex-wrap -mx-2"},r.a.createElement(u,{player:a[0]}),r.a.createElement(u,{player:a[1]}),r.a.createElement(u,{player:a[2]}),r.a.createElement(u,{player:a[3]}))))}var I=function(e){e.season,e.cast,e.tribes;var t=e.ourGame;return r.a.createElement("section",{className:"container mx-auto pb-4"},t.teams.map((function(e,t){return r.a.createElement(v,{key:e.id,totalPoints:e.totalPoints,owner:e.owner,members:e.members,standing:"bench"===e.id?0:t+1})})))},k=a(21);function N(){return(N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function E(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var x=r.a.createElement("path",{d:"M7.05 9.293L6.343 10 12 15.657l1.414-1.414L9.172 10l4.242-4.243L12 4.343z"}),j=function(e){var t=e.svgRef,a=e.title,n=E(e,["svgRef","title"]);return r.a.createElement("svg",N({viewBox:"0 0 20 20",ref:t},n),a?r.a.createElement("title",null,a):null,x)},O=r.a.forwardRef((function(e,t){return r.a.createElement(j,N({svgRef:t},e))}));a.p;function B(e){var t=e.player,a=(t.id,t.profile),n=a.firstName,o=a.lastName,i=a.age,l=a.occupation,s=a.currentResidence,d=a.hometown,h=t.currentTribe,u=t.hasFire,p=t.points,f={Age:i,Occupation:l,Hometown:d,"Current Residence":s};return r.a.createElement("div",null,r.a.createElement("h1",{className:"mb-4 text-2xl text-center font-black text-gray-800"},"".concat(t.profile.firstName," ").concat(t.profile.lastName)),r.a.createElement("div",{className:"flex relative justify-center items-end m-auto w-3/4 mb-6"},r.a.createElement("img",{className:"object-cover rounded-lg object-center shadow-lg border-4",src:"".concat("https://rkdavidson.github.io/survivor-scoreboard","/images/cast/").concat(n,"-").concat(o,".jpg"),alt:"".concat(n," ").concat(o),style:{borderColor:h.colors.light}}),r.a.createElement(c,{className:"absolute top-0 right-0",hasFire:u,points:p}),r.a.createElement(m,{className:"absolute mt-3",tribe:h})),r.a.createElement("div",{className:"mt-2 break-words text-md text-gray-800"},Object.entries(f).map((function(e){var t=Object(k.a)(e,2),a=t[0],n=t[1];return r.a.createElement("div",{key:a,className:"flex justify-between content-center items-start mb-2 leading-tight"},r.a.createElement("span",{className:"w-1/3 text-right pr-4 font-bold"},a),r.a.createElement("span",{className:"w-2/3"},n))}))))}var R=function(e){var t=e.cast,a=Object(s.g)().playerId,n=t.find((function(e){return e.id===a}));return r.a.createElement("section",{className:"mt-4 px-4 pb-12"},r.a.createElement(l.b,{to:"/",className:"text-teal-600 inline-flex align-center content-center"},r.a.createElement(O,{className:"w-6 h-6 inline-block fill-current"})," Back"),r.a.createElement(B,{player:n}))};var P=function(e){var t=e.season;return r.a.createElement("section",{className:"border-b-2 border-teal-400"},r.a.createElement(l.b,{to:"/"},r.a.createElement("img",{src:"".concat("https://rkdavidson.github.io/survivor-scoreboard","/images/masthead-3.jpg"),alt:"S39"})),r.a.createElement("div",{className:"mb-2 px-8 pt-4 pb-6 hidden",style:{backgroundColor:"rgb(21, 20, 28)"}},r.a.createElement("p",{className:"text-sm text-center leading-tight font-bold text-blue-200"},"Season ".concat(t.number),"\u2002\u2022\u2002","".concat(t.displayDate),r.a.createElement("br",null),r.a.createElement("span",{className:"text-xl font-extrabold text-blue-100"},t.name))))};a(32);var F=a(10),T=a(20),W=a(9);function C(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function S(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?C(a,!0).forEach((function(t){Object(T.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):C(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var M,A=W.season,D=W.tribes,L=W.ourGame,G=W.cast;function J(e,t,a){return e.map((function(e){return t.find((function(t){return t.id===e}))}))}G=Object(F.a)((M=D,G.map((function(e){return S({},e,{currentTribe:M.find((function(t){return t.id===e.currentTribe}))})}))));var H=Object(F.a)(L.teams).sort((function(e,t){return t.totalPoints-e.totalPoints})),V=H.find((function(e){return"bench"===e.id}));L.teams=[].concat(Object(F.a)(H.filter((function(e){return"bench"!==e.id}))),[V]),L.teams=L.teams.map((function(e){return S({},e,{members:J(e.members,G).sort((function(e,t){return e.hasFire&&t.hasFire?0:!e.hasFire&&t.hasFire?1:e.hasFire&&!t.hasFire?-1:e.points>t.points?-1:1}))})}));var Y={season:A,cast:G,tribes:D,ourGame:L},z=Y.season,K=Y.cast,q=Y.tribes,U=Y.ourGame;var Q=function(){return r.a.createElement(l.a,{basename:"survivor-scoreboard"},r.a.createElement(P,{season:z}),r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/player/:playerId"},r.a.createElement(R,{cast:K})),r.a.createElement(s.a,{path:["/","/scores"]},r.a.createElement(I,{season:z,tribes:q,cast:K,ourGame:U}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e){e.exports=JSON.parse('{"season":{"number":39,"name":"Island of the Idols","displayDate":"Fall, 2019"},"tribes":[{"id":"vokai","active":true,"name":"Vokai","colors":{"light":"rgb(215, 181, 228)","dark":"rgb(120, 51, 130)"}},{"id":"lairo","active":true,"name":"Lairo","colors":{"light":"rgb(255, 216, 183)","dark":"rgb(190, 60, 35)"}}],"ourGame":{"teams":[{"id":"ryan","owner":"Ryan","members":["lauren","jamal","jack","dean"],"totalPoints":7},{"id":"carolyn","owner":"Carolyn","members":["aaron","missy","tommy","jason"],"totalPoints":6},{"id":"keith","owner":"Keith","members":["molly","tom","karishma","kellee"],"totalPoints":7},{"id":"gina","owner":"Gina","members":["janet","elaine","noura","elizabeth"],"totalPoints":0},{"id":"bench","owner":"\ud83d\udcba Bench","members":["ronnie","dan","vince","chelsea"],"totalPoints":8}]},"cast":[{"id":"aaron","profile":{"firstName":"Aaron","lastName":"Meredith","age":"36","hometown":"Uncasville, Connecticut","currentResidence":"Warwick, Rhode Island","occupation":"Gym Owner","threeWords":"Attractive, intelligent, and strong.","selfBio":"I flat out want this! I have to come in with a STRONG social game because I will have a huge target on my back as a physical threat. I know how to work people, get people to know me, like me, and trust me."},"currentTribe":"vokai","hasFire":true,"hiddenIdols":0,"points":0},{"id":"chelsea","profile":{"firstName":"Chelsea","lastName":"Walker","age":"26","hometown":"Marlton, New Jersey","currentResidence":"Los Angeles, California","occupation":"Digital Content Creator","threeWords":"Driven, competitive, and scrappy.","selfBio":"I\'ve been underestimated my entire life, and the second you tell me I can\'t do something, I\'m going to do my damnedest to prove everyone wrong. I know what it\'s like to be at the bottom. Things might not always go my way, but I\'ve learned to push through the challenges and work my way to the top. I\'m tenacious, a hard worker, and I don\'t take anything for granted. Applying to the show for so many years has made me stronger, and hungrier to win. I have something to prove, and I will win because I have the passion and desire to do so."},"currentTribe":"lairo","hasFire":false,"hiddenIdols":0,"points":4},{"id":"dan","profile":{"firstName":"Dan","lastName":"Spilo","age":"48","hometown":"New York, New York","currentResidence":"Los Angeles, California","occupation":"Talent Manager","threeWords":"Hardworking, articulate, and charming.","selfBio":"I think I have the basic, if not superior, physicality to be useful to the Tribe. More importantly, I have an incredible ability to know what people need and to make them feel good, and to make myself critical in their success."},"currentTribe":"vokai","hasFire":true,"hiddenIdols":0,"points":0},{"id":"dean","profile":{"firstName":"Dean","lastName":"Kowalski","age":"28","hometown":"Westfield, New Jersey","currentResidence":"New York, New York","occupation":"Tech Sales","threeWords":"Jovial, observant, and likeable.","selfBio":"Self-awareness is one of the most important leadership characteristics. My social intelligence will allow me to read when to go big and when to fall back. I strongly believe in my ability to get along with and be liked by a variety of different people. This will allow me to build strong, diverse alliances. Additionally, my athletic and puzzle abilities will make me a threat within challenges. My experience working in sales will fuel my persuasion within my alliances."},"currentTribe":"lairo","hasFire":true,"hiddenIdols":0,"points":0},{"id":"elaine","profile":{"firstName":"Elaine","lastName":"Stott","age":"41","hometown":"Woodbine, Kentucky","currentResidence":"Rockholds, Kentucky","occupation":"Factory Worker","threeWords":"Independent, stubborn, and kind.","selfBio":"I think people will underestimate me. I think with my people skills and my ability to relate to different types of people, I will be able to befriend them or gain their trust. I would be overlooked because I wouldn\'t be a threat, but an ally."},"currentTribe":"vokai","hasFire":true,"hiddenIdols":0,"points":0},{"id":"elizabeth","profile":{"firstName":"Elizabeth","lastName":"Beisel","age":"26","hometown":"Saunderstown, Rhode Island","currentResidence":"Saunderstown, Rhode Island","occupation":"Olympic Medalist","threeWords":"Gregarious, competitive, and loyal.","selfBio":"I\'m physically, mentally, and socially strong. I can easily connect with people\u2014my alliances will be strong and help carry me through the game. I can win individual Immunity due to my strength as an athlete. I\'m a tough girl who will fight until the end."},"currentTribe":"vokai","hasFire":true,"hiddenIdols":0,"points":0},{"id":"jack","profile":{"firstName":"Jack","lastName":"Nichting","age":"23","hometown":"Newport News, Virginia","currentResidence":"Harrisonburg, Virginia","occupation":"Graduate Student","threeWords":"Determined, dreamer, and social.","selfBio":"I can navigate anyone and every social scenario. I understand I will be a target for people, and I do not take that lightly. I will get rid of anyone I view as a threat to me, without moral qualms. At the same time, I will be intentional in trying to remain more in the background and not viewed as a threat. Finally, if it came to life or death in a challenge, my smarts, physical ability, and focus will always make me a fierce competitor."},"currentTribe":"lairo","hasFire":false,"hiddenIdols":0,"points":7},{"id":"jamal","profile":{"firstName":"Jamal","lastName":"Shipman","age":"33","hometown":"Jersey City, New Jersey","currentResidence":"Providence, Rhode Island","occupation":"Admissions Counselor","threeWords":"Balanced, inquisitive, and present.","selfBio":"I\'ve been intensely studying this game. I feel like I have a good handle on what to do in order to give myself the best shot at making it to the end with enough goodwill to get votes. People will be happy to write my name at the end."},"currentTribe":"lairo","hasFire":true,"hiddenIdols":0,"points":0},{"id":"janet","profile":{"firstName":"Janet","lastName":"Carbin","age":"59","hometown":"Neptune, New Jersey","currentResidence":"Palm Bay, Florida","occupation":"Chief Lifeguard","threeWords":"Aggressive, enthusiastic, and vivacious","selfBio":"Because I can read people and I have the necessary skills, athletically and socially."},"currentTribe":"lairo","hasFire":true,"hiddenIdols":0,"points":0},{"id":"jason","profile":{"firstName":"Jason","lastName":"Linden","age":"32","hometown":"New York, New Yrok","currentResidence":"New York, New Yrok","occupation":"Personal Injury Lawyer","threeWords":"Charismatic, determined, and direct.","selfBio":"Survivor is a relationship-based game. First, I will develop the relationships needed to win the game. I have a deep and fundamental understanding of human communication and connection. I have an uncanny ability to make strangers feel at ease. I disarm them with humor and self-deprecation. But I reinforce the connections with true and sincere interest and care. I will build relationships that will not only take me further into the game, but will win me the votes at the Final Tribal Council. Second, I will take control of my game and lead my allies to make favorable decisions to my game. I am a natural leader. Third, I will outwork my competition; I am an animal. I am resilient and hardworking. When I start something, I NEED to finish it."},"currentTribe":"vokai","hasFire":false,"hiddenIdols":0,"points":6},{"id":"karishma","profile":{"firstName":"Karishma","lastName":"Patel","age":"37","hometown":"Philadelphia, Pennsylvania","currentResidence":"Houston, Texas","occupation":"Personal Injury Lawyer","threeWords":"Reliable, impulsive, and charismatic.","selfBio":"I feel like I was born to play this game. I\'ve always craved challenges that help me learn more about myself, and I know deep down that I do have the physical, mental, and social skills to outlast, outwit, and outplay anyone. My job and my life experiences have trained me exactly how to win. I am hungry to be out in the wild, pushing myself to the edge, and doing things I never dreamed I could do. In the end, surviving this game means something more valuable than money to me."},"currentTribe":"lairo","hasFire":true,"hiddenIdols":0,"points":0},{"id":"kellee","profile":{"firstName":"Kellee","lastName":"Kim","age":"29","hometown":"Costa Mesa, California","currentResidence":"Philadelphia, Pennsylvania","occupation":"MBA Student","threeWords":"Fun, energetic, and driven.","selfBio":"My pain tolerance is high, and I love to make difficult things fun. With a pinch of luck and a good \\"meat shield,\\" I\'ll win."},"currentTribe":"lairo","hasFire":true,"hiddenIdols":0,"points":0},{"id":"lauren","profile":{"firstName":"Lauren","lastName":"Beck","age":"28","hometown":"Bakersfield, California","currentResidence":"Glendale, California","occupation":"Nanny","threeWords":"Bubbly, adaptable, and diligent.","selfBio":"My ability to connect with others is astronomical, I just love people! I have the physical and mental ability to see myself through to the very end. People tend to underestimate me which will definitely work in my favor. I plan to be the second black woman to win this game, hands down."},"currentTribe":"vokai","hasFire":true,"hiddenIdols":0,"points":0},{"id":"missy","profile":{"firstName":"Missy","lastName":"Byrd","age":"24","hometown":"Decatur, Georgia","currentResidence":"Tacoma, Washington","occupation":"Air Force Veteran","threeWords":"Relentless, clever, and decently dope.","selfBio":"Beyonc\xe9 wrote a song about surviving so I have to honor Queen B."},"currentTribe":"vokai","hasFire":true,"hiddenIdols":0,"points":0},{"id":"molly","profile":{"firstName":"Molly","lastName":"Byman","age":"27","hometown":"Boston, Massachusetts","currentResidence":"Durham, North Carolina","occupation":"Law Student","threeWords":"Competitive, resilient, and vibrant.","selfBio":"I am smart, strong, and not annoying. Discomfort and being dirty don\'t bother me. I can fit in anywhere and form relationships with anyone. Being the oldest child and being a teacher taught me how to manage chaos, how to be adaptable and considerate to others\' needs, and how to use subtle powers of persuasion to get people to do what I want."},"currentTribe":"vokai","hasFire":false,"hiddenIdols":0,"points":2},{"id":"noura","profile":{"firstName":"Noura","lastName":"Salman","age":"36","hometown":"Bethesda, Maryland","currentResidence":"North Potomac, Maryland","occupation":"Entrepreneur","threeWords":"Ambitious, passionate, and energetic.","selfBio":"I\'m multidimensional and not just one thing or person. I\'m a nerd, jock, and model with brains, brawn, and beauty. Most importantly, I have the social skills needed to both win and influence people, and a relentless drive to go after what I want."},"currentTribe":"vokai","hasFire":true,"hiddenIdols":0,"points":0},{"id":"ronnie","profile":{"firstName":"Ronnie","lastName":"Bardah","age":"35","hometown":"Brockton, Massachusetts","currentResidence":"Henderson, Nevada","occupation":"Pro Poker Player","threeWords":"Resilient, analytical, and savvy.","selfBio":"Because of the life I have already survived. It was a crazy rough neighborhood I grew up in, but I made it out and I have even traveled to 30 countries since then. I am also a beast at physical challenges. I have a very strong social game and, thanks to my poker skills, I will be able to read people well and will blindside the \\"blindsiders.\\" I will be able to break hearts when I need to, even my own. The relationships will be real, but the ultimate goal will always be Sole Survivor."},"currentTribe":"lairo","hasFire":false,"hiddenIdols":0,"points":1},{"id":"tom","profile":{"firstName":"Tom","lastName":"Laidlaw","age":"60","hometown":"\ud83c\udde8\ud83c\udde6 Brampton, Ontario","currentResidence":"Greenwich, Connecticut","occupation":"Former NHL Player","threeWords":"Disciplined, dedicated, and stubborn.","selfBio":"I know how to build an alliance and win challenges and then do whatever it takes to win."},"currentTribe":"lairo","hasFire":false,"hiddenIdols":0,"points":5},{"id":"tommy","profile":{"firstName":"Tommy","lastName":"Sheehan","age":"26","hometown":"Bayville, New York","currentResidence":"Long Beach, New York","occupation":"4th Grade Teacher","threeWords":"Outgoing, competitive, and goofy.","selfBio":"I am physical and can win challenges, but that won\'t win Survivor. What wins Survivor is the time spent opening up and connecting to people. When you have real connections with people they will keep you around longer. Also, I am there to win the game. I see myself finding idols, making moves, and leading blindsides."},"currentTribe":"vokai","hasFire":true,"hiddenIdols":0,"points":0},{"id":"vince","profile":{"firstName":"Vince","lastName":"Moua","age":"27","hometown":"Merced, California","currentResidence":"Palo Alto, California","occupation":"Admissions Counselor","threeWords":"Shamelessly-me, quick-witted, and not-afraid-to-flip-tables.","selfBio":"I have accumulated grit from the challenges that I\u2019ve faced throughout my life and have always been able to gain the trust and confidence of others. I believe I can use my unassuming image and 209 vernacular to fool others into believing that I am not an immediate threat. However, I\'d say I\'m pretty crafty and will be able to use my smarts to create plans and execute votes that will eliminate anyone I feel is a threat to my game (if you\'re not with me, you\'re dead to me). I also understand how to deal with big egos and personal quirks and can use my social skills to build confidence among all characters. Lastly, I\'ve got quite a mouth and can smack the Jury with an award-winning final Tribal Council speech to guarantee my win."},"currentTribe":"lairo","hasFire":false,"hiddenIdols":0,"points":3}]}')}},[[22,1,2]]]);
//# sourceMappingURL=main.391840dc.chunk.js.map