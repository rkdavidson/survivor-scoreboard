(this["webpackJsonpsurvivor-scoreboard"]=this["webpackJsonpsurvivor-scoreboard"]||[]).push([[0],{14:function(e,a,t){},21:function(e,a,t){e.exports=t(32)},26:function(e,a,t){},32:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),i=t(16),r=t.n(i),l=(t(14),t(18)),s=t(5),c=(t(26),t(8)),d=t(12),m=t(17),h={opacity:.7,filter:"saturate(8%) contrast(65%) brightness(115%)",userSelect:"none"};var u=function(e){var a=e.player,t=(a.id,a.profile),n=t.firstName,i=t.lastName,r=t.age,l=t.occupation,s=t.currentResidence,c=(t.hometown,a.currentTribe),d=a.hasFire,m=a.hiddenIdols,u=a.points;return o.a.createElement("div",{className:"w-1/2 px-2 relative"},o.a.createElement("div",{className:"rounded-lg overflow-hidden shadow-md bg-white border-2 border-gray-400",style:d?{borderColor:c.colors.light}:void 0},o.a.createElement("img",{className:"object-cover object-top h-40 w-full",src:"images/cast/".concat(n,"-").concat(i,".jpg"),alt:"".concat(n," ").concat(i),style:d?void 0:h}),o.a.createElement("div",{className:"absolute top-0 right-0 w-".concat(d?"8":"16"," h-8 flex justify-center items-center content-center -mt-3 -mr-1 rounded-full bg-").concat(d?"orange-200":"white"," shadow")},d&&o.a.createElement("span",{className:"text-lg font-bold text-center tracking-tighter"},"\ud83d\udd25"),!d&&o.a.createElement("span",{className:"text-md font-medium text-gray-900 text-center tracking-tighter"},u," pts")),o.a.createElement("div",{className:"p-2 pb-3 ".concat(d?"bg-white":"bg-gray-100")},o.a.createElement("div",{className:"flex justify-between content-center items-center"},o.a.createElement("p",{className:"text-lg font-bold"},n," ","\ud83d\uddff".repeat(m)),o.a.createElement("p",{className:"text-lg font-bold leading-none"},o.a.createElement("span",{className:"rounded text-xs px-2 font-medium",style:{background:c.colors.light,color:c.colors.dark}},c.name))),o.a.createElement("p",{className:"text-xs font-medium text-gray-700 mt-2 hidden"},o.a.createElement("span",{className:"font-bold"},"Age")," ",o.a.createElement("span",null,r),o.a.createElement("br",null),o.a.createElement("span",null,l),o.a.createElement("br",null),o.a.createElement("span",null,s),o.a.createElement("br",null)))))},p=["","1st","2nd","3rd","4th","5th","6th","7th","8th"];function g(e){var a=e.owner,t=e.members,n=e.totalPoints,i=e.standing;t.sort((function(e,a){return e.hasFire&&a.hasFire?0:!e.hasFire&&a.hasFire?1:e.hasFire&&!a.hasFire?-1:e.points>a.points?-1:1}));return o.a.createElement("section",{className:"pb-8 mb-12 shadow-lg bg-gray-100"},o.a.createElement("div",{className:"flex justify-between items-center mb-6 px-8 py-4 bg-white shadow"},o.a.createElement("h2",{className:"text-3xl font-black leading-tight text-blue-900"},1===i?o.a.createElement("span",{role:"img","aria-label":"1st place",className:"block text-base font-bold text-blue-600"},"\ud83d\udc51 1st"):o.a.createElement("span",{role:"img","aria-label":p[i],className:"block text-base font-bold text-blue-600"},p[i]),a),o.a.createElement("span",{className:"inline-block rounded-full px-4 py-1 mr-2 bg-yellow-200 text-xl font-semibold text-orange-600 shadow"},n," pts")),o.a.createElement("section",{className:"px-4"},o.a.createElement("div",{className:"flex -mx-2 mb-6"},o.a.createElement(u,{player:t[0]}),o.a.createElement(u,{player:t[1]})),o.a.createElement("div",{className:"flex -mx-2"},o.a.createElement(u,{player:t[2]}),o.a.createElement(u,{player:t[3]}))))}function b(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function w(e,a,t){return e.map((function(e){var n=a.find((function(a){return a.id===e}));return function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?b(t,!0).forEach((function(a){Object(m.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}({},n,{currentTribe:t.find((function(e){return e.id===n.currentTribe}))})}))}var f=function(e){e.season;var a=e.cast,t=e.tribes,n=e.ourGame,i=Object(d.a)(n.teams).sort((function(e,a){return a.totalPoints-e.totalPoints})),r=i.find((function(e){return"bench"===e.id})),l=[].concat(Object(d.a)(i.filter((function(e){return"bench"!==e.id}))),[r]);return o.a.createElement("div",{className:"container mx-auto pt-8 pb-4"},l.map((function(e,n){var i=w(e.members,a,t);return o.a.createElement(g,{key:e.id,totalPoints:e.totalPoints,owner:e.owner,members:i,standing:"bench"===e.id?0:n+1})})))};var y=function(e){var a=e.season;return o.a.createElement("section",{className:"flex justify-start p-4 py-6 mb-6 bg-blue-800 shadow-lg"},o.a.createElement("div",null,o.a.createElement("img",{src:"images/season-logo.png",className:"w-20"})),o.a.createElement("div",{className:"flex items-center px-4"},o.a.createElement("p",{className:"text-sm leading-tight font-bold text-blue-200"},"Season ".concat(a.number),"\u2002\u2022\u2002","".concat(a.displayDate),o.a.createElement("br",null),o.a.createElement("span",{className:"text-xl font-extrabold text-blue-100"},a.name))))},v=c.season,I=c.tribes,k=c.cast,N=c.ourGame;var E=function(){return o.a.createElement(l.a,null,o.a.createElement(y,{season:v}),o.a.createElement(s.c,null,o.a.createElement(s.a,{path:"/about"},o.a.createElement("h2",null,"About")),o.a.createElement(s.a,{path:"/users"},o.a.createElement("h2",null,"Users")),o.a.createElement(s.a,{path:"/"},o.a.createElement(f,{season:v,tribes:I,cast:k,ourGame:N}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e){e.exports=JSON.parse('{"season":{"number":39,"name":"Island of the Idols","displayDate":"Fall, 2019"},"tribes":[{"id":"vokai","active":true,"name":"Vokai","colors":{"light":"rgb(215, 181, 228)","dark":"rgb(120, 51, 130)"}},{"id":"lairo","active":true,"name":"Lairo","colors":{"light":"rgb(255, 216, 183)","dark":"rgb(190, 60, 35)"}}],"ourGame":{"teams":[{"id":"ryan","owner":"Ryan","members":["lauren","jamal","jack","dean"],"totalPoints":7},{"id":"carolyn","owner":"Carolyn","members":["aaron","missy","tommy","jason"],"totalPoints":6},{"id":"keith","owner":"Keith","members":["molly","tom","karishma","kellee"],"totalPoints":7},{"id":"gina","owner":"Gina","members":["janet","elaine","noura","elizabeth"],"totalPoints":0},{"id":"bench","owner":"\ud83e\ude91 Bench","members":["ronnie","dan","vince","chelsea"],"totalPoints":8}]},"cast":[{"id":"aaron","profile":{"firstName":"Aaron","lastName":"Meredith","age":"36","hometown":"Uncasville, Connecticut","currentResidence":"Warwick, Rhode Island","occupation":"Gym Owner","threeWords":"Attractive, intelligent, and strong.","selfBio":"I flat out want this! I have to come in with a STRONG social game because I will have a huge target on my back as a physical threat. I know how to work people, get people to know me, like me, and trust me."},"currentTribe":"vokai","hasFire":true,"hiddenIdols":0,"points":0},{"id":"chelsea","profile":{"firstName":"Chelsea","lastName":"Walker","age":"26","hometown":"Marlton, New Jersey","currentResidence":"Los Angeles","occupation":"Digital Content Creator","threeWords":"Driven, competitive, and scrappy.","selfBio":"I\'ve been underestimated my entire life, and the second you tell me I can\'t do something, I\'m going to do my damnedest to prove everyone wrong. I know what it\'s like to be at the bottom. Things might not always go my way, but I\'ve learned to push through the challenges and work my way to the top. I\'m tenacious, a hard worker, and I don\'t take anything for granted. Applying to the show for so many years has made me stronger, and hungrier to win. I have something to prove, and I will win because I have the passion and desire to do so."},"currentTribe":"lairo","hasFire":false,"hiddenIdols":0,"points":4},{"id":"dan","profile":{"firstName":"Dan","lastName":"Spilo","age":"48","hometown":"New York City","currentResidence":"Los Angeles","occupation":"Talent Manager","threeWords":"Hardworking, articulate, and charming.","selfBio":"I think I have the basic, if not superior, physicality to be useful to the Tribe. More importantly, I have an incredible ability to know what people need and to make them feel good, and to make myself critical in their success."},"currentTribe":"vokai","hasFire":true,"hiddenIdols":0,"points":0},{"id":"dean","profile":{"firstName":"Dean","lastName":"Kowalski","age":"28","hometown":"Westfield, New Jersey","currentResidence":"New York City","occupation":"Tech Sales","threeWords":"Jovial, observant, and likeable.","selfBio":"Self-awareness is one of the most important leadership characteristics. My social intelligence will allow me to read when to go big and when to fall back. I strongly believe in my ability to get along with and be liked by a variety of different people. This will allow me to build strong, diverse alliances. Additionally, my athletic and puzzle abilities will make me a threat within challenges. My experience working in sales will fuel my persuasion within my alliances."},"currentTribe":"lairo","hasFire":true,"hiddenIdols":0,"points":0},{"id":"elaine","profile":{"firstName":"Elaine","lastName":"Stott","age":"41","hometown":"Woodbine, Kentucky","currentResidence":"Rockholds, Kentucky","occupation":"Factory Worker","threeWords":"Independent, stubborn, and kind.","selfBio":"I think people will underestimate me. I think with my people skills and my ability to relate to different types of people, I will be able to befriend them or gain their trust. I would be overlooked because I wouldn\'t be a threat, but an ally."},"currentTribe":"vokai","hasFire":true,"hiddenIdols":0,"points":0},{"id":"elizabeth","profile":{"firstName":"Elizabeth","lastName":"Beisel","age":"26","hometown":"Saunderstown, RI","currentResidence":"Saunderstown, RI","occupation":"Olympic Medalist","threeWords":"Gregarious, competitive, and loyal.","selfBio":"I\'m physically, mentally, and socially strong. I can easily connect with people\u2014my alliances will be strong and help carry me through the game. I can win individual Immunity due to my strength as an athlete. I\'m a tough girl who will fight until the end."},"currentTribe":"vokai","hasFire":true,"hiddenIdols":0,"points":0},{"id":"jack","profile":{"firstName":"Jack","lastName":"Nichting","age":"23","hometown":"Newport News, Virginia","currentResidence":"Harrisonburg, Virginia","occupation":"Graduate Student","threeWords":"Determined, dreamer, and social.","selfBio":"I can navigate anyone and every social scenario. I understand I will be a target for people, and I do not take that lightly. I will get rid of anyone I view as a threat to me, without moral qualms. At the same time, I will be intentional in trying to remain more in the background and not viewed as a threat. Finally, if it came to life or death in a challenge, my smarts, physical ability, and focus will always make me a fierce competitor."},"currentTribe":"lairo","hasFire":false,"hiddenIdols":0,"points":7},{"id":"jamal","profile":{"firstName":"Jamal","lastName":"Shipman","age":"33","hometown":"Jersey City, New Jersey","currentResidence":"Providence, Rhode Island","occupation":"Admissions Counselor","threeWords":"Balanced, inquisitive, and present.","selfBio":"I\'ve been intensely studying this game. I feel like I have a good handle on what to do in order to give myself the best shot at making it to the end with enough goodwill to get votes. People will be happy to write my name at the end."},"currentTribe":"lairo","hasFire":true,"hiddenIdols":0,"points":0},{"id":"janet","profile":{"firstName":"Janet","lastName":"Carbin","age":"59","hometown":"Neptune, New Jersey","currentResidence":"Palm Bay, Florida","occupation":"Chief Lifeguard","threeWords":"Aggressive, enthusiastic, and vivacious","selfBio":"Because I can read people and I have the necessary skills, athletically and socially."},"currentTribe":"lairo","hasFire":true,"hiddenIdols":0,"points":0},{"id":"jason","profile":{"firstName":"Jason","lastName":"Linden","age":"32","hometown":"New York City","currentResidence":"New York City","occupation":"Personal Injury Lawyer","threeWords":"Charismatic, determined, and direct.","selfBio":"Survivor is a relationship-based game. First, I will develop the relationships needed to win the game. I have a deep and fundamental understanding of human communication and connection. I have an uncanny ability to make strangers feel at ease. I disarm them with humor and self-deprecation. But I reinforce the connections with true and sincere interest and care. I will build relationships that will not only take me further into the game, but will win me the votes at the Final Tribal Council. Second, I will take control of my game and lead my allies to make favorable decisions to my game. I am a natural leader. Third, I will outwork my competition; I am an animal. I am resilient and hardworking. When I start something, I NEED to finish it."},"currentTribe":"vokai","hasFire":false,"hiddenIdols":0,"points":6},{"id":"karishma","profile":{"firstName":"Karishma","lastName":"Patel","age":"37","hometown":"Hometown:\xa0Philadelphia","currentResidence":"Houston","occupation":"Personal Injury Lawyer","threeWords":"Reliable, impulsive, and charismatic.","selfBio":"I feel like I was born to play this game. I\'ve always craved challenges that help me learn more about myself, and I know deep down that I do have the physical, mental, and social skills to outlast, outwit, and outplay anyone. My job and my life experiences have trained me exactly how to win. I am hungry to be out in the wild, pushing myself to the edge, and doing things I never dreamed I could do. In the end, surviving this game means something more valuable than money to me."},"currentTribe":"lairo","hasFire":true,"hiddenIdols":0,"points":0},{"id":"kellee","profile":{"firstName":"Kellee","lastName":"Kim","age":"29","hometown":"Costa Mesa, California","currentResidence":"Philadelphia","occupation":"MBA Student","threeWords":"Fun, energetic, and driven.","selfBio":"My pain tolerance is high, and I love to make difficult things fun. With a pinch of luck and a good \\"meat shield,\\" I\'ll win."},"currentTribe":"lairo","hasFire":true,"hiddenIdols":0,"points":0},{"id":"lauren","profile":{"firstName":"Lauren","lastName":"Beck","age":"28","hometown":"Bakersfield, California and Rochester Hills, Michigan","currentResidence":"Glendale, California","occupation":"Nanny","threeWords":"Bubbly, adaptable, and diligent.","selfBio":"My ability to connect with others is astronomical, I just love people! I have the physical and mental ability to see myself through to the very end. People tend to underestimate me which will definitely work in my favor. I plan to be the second black woman to win this game, hands down."},"currentTribe":"vokai","hasFire":true,"hiddenIdols":0,"points":0},{"id":"missy","profile":{"firstName":"Missy","lastName":"Byrd","age":"24","hometown":"Decatur, Georgia","currentResidence":"Tacoma, Washington","occupation":"Air Force Veteran","threeWords":"Relentless, clever, and decently dope.","selfBio":"Beyonc\xe9 wrote a song about surviving so I have to honor Queen B."},"currentTribe":"vokai","hasFire":true,"hiddenIdols":0,"points":0},{"id":"molly","profile":{"firstName":"Molly","lastName":"Byman","age":"27","hometown":"Boston","currentResidence":"Durham, North Carolina","occupation":"Law Student","threeWords":"Competitive, resilient, and vibrant.","selfBio":"I am smart, strong, and not annoying. Discomfort and being dirty don\'t bother me. I can fit in anywhere and form relationships with anyone. Being the oldest child and being a teacher taught me how to manage chaos, how to be adaptable and considerate to others\' needs, and how to use subtle powers of persuasion to get people to do what I want."},"currentTribe":"vokai","hasFire":false,"hiddenIdols":0,"points":2},{"id":"noura","profile":{"firstName":"Noura","lastName":"Salman","age":"36","hometown":"London / Bethesda, MD","currentResidence":"North Potomac, MD","occupation":"Entrepreneur","threeWords":"Ambitious, passionate, and energetic.","selfBio":"I\'m multidimensional and not just one thing or person. I\'m a nerd, jock, and model with brains, brawn, and beauty. Most importantly, I have the social skills needed to both win and influence people, and a relentless drive to go after what I want."},"currentTribe":"vokai","hasFire":true,"hiddenIdols":0,"points":0},{"id":"ronnie","profile":{"firstName":"Ronnie","lastName":"Bardah","age":"35","hometown":"Brockton, Massachusetts","currentResidence":"Henderson, Nevada","occupation":"Pro Poker Player","threeWords":"Resilient, analytical, and savvy.","selfBio":"Because of the life I have already survived. It was a crazy rough neighborhood I grew up in, but I made it out and I have even traveled to 30 countries since then. I am also a beast at physical challenges. I have a very strong social game and, thanks to my poker skills, I will be able to read people well and will blindside the \\"blindsiders.\\" I will be able to break hearts when I need to, even my own. The relationships will be real, but the ultimate goal will always be Sole Survivor."},"currentTribe":"lairo","hasFire":false,"hiddenIdols":0,"points":1},{"id":"tom","profile":{"firstName":"Tom","lastName":"Laidlaw","age":"60","hometown":"Brampton, Ontario, Canada","currentResidence":"Greenwich, Connecticut","occupation":"Former NHL Player","threeWords":"Disciplined, dedicated, and stubborn.","selfBio":"I know how to build an alliance and win challenges and then do whatever it takes to win."},"currentTribe":"lairo","hasFire":false,"hiddenIdols":0,"points":5},{"id":"tommy","profile":{"firstName":"Tommy","lastName":"Sheehan","age":"26","hometown":"Bayville, New York","currentResidence":"Long Beach, New York","occupation":"4th Grade Teacher","threeWords":"Outgoing, competitive, and goofy.","selfBio":"I am physical and can win challenges, but that won\'t win Survivor. What wins Survivor is the time spent opening up and connecting to people. When you have real connections with people they will keep you around longer. Also, I am there to win the game. I see myself finding idols, making moves, and leading blindsides."},"currentTribe":"vokai","hasFire":true,"hiddenIdols":0,"points":0},{"id":"vince","profile":{"firstName":"Vince","lastName":"Moua","age":"27","hometown":"Merced, California","currentResidence":"Palo Alto, California","occupation":"Admissions Counselor","threeWords":"Shamelessly-me, quick-witted, and not-afraid-to-flip-tables.","selfBio":"I have accumulated grit from the challenges that I\u2019ve faced throughout my life and have always been able to gain the trust and confidence of others. I believe I can use my unassuming image and 209 vernacular to fool others into believing that I am not an immediate threat. However, I\'d say I\'m pretty crafty and will be able to use my smarts to create plans and execute votes that will eliminate anyone I feel is a threat to my game (if you\'re not with me, you\'re dead to me). I also understand how to deal with big egos and personal quirks and can use my social skills to build confidence among all characters. Lastly, I\'ve got quite a mouth and can smack the Jury with an award-winning final Tribal Council speech to guarantee my win."},"currentTribe":"lairo","hasFire":false,"hiddenIdols":0,"points":3}]}')}},[[21,1,2]]]);
//# sourceMappingURL=main.e4bdba2e.chunk.js.map