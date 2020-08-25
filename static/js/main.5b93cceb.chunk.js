(this["webpackJsonpmd-resume"]=this["webpackJsonpmd-resume"]||[]).push([[0],{111:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(11),c=t.n(i),o=(t(86),t(44)),l=t.n(o),m=t(59),s=t(42),u=t(60),d=t.n(u),p={resumePublicURL:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).RESUME_PUBLIC_URL||"https://raw.githubusercontent.com/gammaSpeck/md-resume/master/public/resume.json"},g=Object(s.b)("appStore/getResume",function(){var e=Object(m.a)(l.a.mark((function e(a,t){var n,r,i,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.rejectWithValue,e.prev=1,e.next=4,d.a.get(p.resumePublicURL);case 4:return r=e.sent,i=r.data,e.abrupt("return",i);case 9:if(e.prev=9,e.t0=e.catch(1),c=e.t0.response){e.next=14;break}throw e.t0;case 14:return e.abrupt("return",n(c));case 15:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(a,t){return e.apply(this,arguments)}}()),E={isLoading:!0,resume:{personalInfo:{fullName:"Madhusoodhanan KM",jobStatus:"Full Stack Developer",avatarPic:"URL",contact:{mobile:"+91-9738575801",email:"madhukm3141@gmail.com",address:"Bengaluru, Karnataka, India",github:"https://github.com/gammaSpeck",linkedIn:"https://linkedin.com/in/madhusoodhanan-km"}},experiences:[{title:"Associate Software Engineer",company:"mscripts",location:"Bengaluru, India",dateRange:"06/2019 - Ongoing",aboutCompany:"Healthcare providers in the US use mscripts to communicate digitally with patients about their health.",summary:{title:"Responsibilities",actions:["Built architectural frameworks in NodeJS and React.js for the company. Frameworks which helps the company's major tech-stack to shift from Java and Angular 1.6 to newer, relevant technologies.","Built micro-services with the serverless framework.","Integrate internally-developed micro-services, as well as marketplace 3rd party modules into our projects.","Admin Console: Designed and built the MVP and launched beta; It is an administrative tool used by each one of our clients and our support teams.","Used Scrum Agile Methodology in my work (Daily Scrum Meetings, Planning Poker, Sprint Backlog, 1on1 meetings."]}},{title:"Software Engineering Intern",company:"mscripts",location:"Bengaluru, India",dateRange:"01/2019 - 06/2019"}],education:[{title:"Bachelors in CS Engineering",institution:"CMRIT",location:"Bengaluru, India",dateRange:"2015-2019",achievements:["",""],grade:"7.3 / 10"},{title:"PUC - PCMB",institution:"Christ Junior College",location:"Bengaluru, India",dateRange:"2013-2015",achievements:[],grade:"84%"},{title:"Secondary Education",institution:"St Thomas Public School",location:"Bengaluru, India",dateRange:"2015",achievements:[],grade:"84%"}],projects:[{title:"Intelligent Intrusion Alerting",dateRange:"03/2018",location:"Coimbatore, India",summary:"A smart system that photographs, identifies and alerts using ML and Image Processing."},{title:"IoT Railway Gate Control",dateRange:"02/2017",location:"Udaipur, India",summary:"A multi-tier IoT system that senses train movements, and automatically closes the railway crossing gate."}],skills:[{group:"Coding languages",list:["Javascript","Typescript","Shell","Python"]},{group:"Backend",list:["Node","Express","AWS","Serverless","Jenkins","Kubernetes","Terraform","MySQL","Redis","MongoDB"]},{group:"Frontend",list:["React","Redux","Next JS","MUI","Bootstrap4","SASS","Less","Webpack4","Babel"]},{group:"Testing frameworks",list:["Jest","Mocha","Swagger.io","Postman"]}],languages:[{name:"English",proficiency:"Advanced"},{name:"Hindi",proficiency:"Proficient"},{name:"Tamil",proficiency:"Intermediate"},{name:"Malayalam",proficiency:"Intermediate"}],socialProfiles:[{name:"GitHub",link:"https://github.com/gammaSpeck"}]}},f=Object(s.c)({name:"appStore",initialState:E,reducers:{setLoader:function(e,a){var t=a.payload;e.isLoading=t}},extraReducers:function(e){e.addCase(g.fulfilled,(function(e,a){var t=a.payload;e.resume=t,e.isLoading=!1})),e.addCase(g.rejected,(function(e,a){var t=a.payload;console.error("Latest Resume could not be fetched",t),e.isLoading=!1}))}}),b=(f.actions.setLoader,Object(s.a)({reducer:{app:f.reducer}})),h=t(8);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var y=t(46),v=t(144),k=t(142),j=t(135),I=t(134),S=t(148),O=t(143),x=t(146),w=t(76),B=t(32),R=t(67),C=t.n(R),N=t(68),P=t.n(N),L=t(63),M=t.n(L),U=t(70),T=t.n(U),W=t(69),F=t.n(W),A=t(149),_=t(136),D=t(62),J=t.n(D),z={mobile:M.a,email:C.a,address:P.a,linkedIn:F.a,github:T.a},K=Object(I.a)((function(e){return Object(S.a)({bold:{fontWeight:"bold"},avatar:{width:e.spacing(20),height:e.spacing(20)},contactInfo:{wordBreak:"break-all"},smallIcon:{fontSize:"1rem"}})})),H=function(){var e=K(),a=Object(h.c)((function(e){return e.app.resume.personalInfo})),t=a.fullName,n=a.jobStatus,i=a.contact,c=Object.entries(i).map((function(a){var t=Object(w.a)(a,2),n=t[0],i=t[1];return r.a.createElement(j.a,{item:!0,xs:12,md:6,container:!0,className:e.contactInfo,key:n,alignItems:"center"},function(e){var a=z[e];return r.a.createElement(a,{color:"primary",style:{fontSize:"1rem",marginRight:".25rem"}})}(n),["github","linkedIn"].includes(n)?r.a.createElement(_.a,{variant:"caption",display:"inline",href:i,target:"_blank",style:{textDecoration:"none"}},i.replace("https://","")):r.a.createElement(B.a,{variant:"caption",display:"inline"},i))}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,{clone:!0,order:{xs:2,sm:1}},r.a.createElement(j.a,{item:!0,xs:12,sm:7},r.a.createElement(B.a,{variant:"h4",gutterBottom:!0,className:e.bold},t),r.a.createElement(B.a,{variant:"h5",gutterBottom:!0,color:"primary",className:e.bold},n),r.a.createElement(j.a,{container:!0,item:!0,xs:12,alignItems:"flex-end",spacing:1},c))),r.a.createElement(x.a,{clone:!0,order:{xs:1,sm:2}},r.a.createElement(j.a,{item:!0,xs:12,sm:5,container:!0,justify:"center",alignItems:"center"},r.a.createElement(j.a,{item:!0},r.a.createElement(A.a,{alt:"Madhu KM",src:J.a,className:e.avatar})))))},V=t(71),G=t.n(V),Q=t(72),$=t.n(Q),q=Object(I.a)((function(e){return Object(S.a)({smallIcon:{fontSize:"1rem"}})})),X=function(e){var a=e.range,t=e.location,n=q();return r.a.createElement(r.a.Fragment,null,r.a.createElement(G.a,{color:"primary",className:n.smallIcon}),r.a.createElement(B.a,{variant:"caption",display:"inline"},a),!!t&&r.a.createElement(r.a.Fragment,null,"\xa0 \xa0",r.a.createElement($.a,{color:"primary",className:n.smallIcon}),r.a.createElement(B.a,{variant:"caption",display:"inline"},t)))},Y=t(137),Z=Object(I.a)((function(e){return Object(S.a)({heading:{textTransform:"uppercase",fontWeight:"bold"},divider:{height:e.spacing(.5),backgroundColor:e.palette.common.black}})})),ee=function(e){var a=e.children,t=Z();return r.a.createElement(r.a.Fragment,null,r.a.createElement(B.a,{variant:"h5",gutterBottom:!0,className:t.heading},a),r.a.createElement(Y.a,{className:t.divider}))},ae=Object(I.a)((function(e){return Object(S.a)({noPadding:{padding:0},projBlock:{margin:e.spacing(0,0,1,0)}})})),te=function(){var e=ae(),a=Object(h.c)((function(e){return e.app.resume})).projects;return r.a.createElement(r.a.Fragment,null,r.a.createElement(ee,null,"Projects"),r.a.createElement(j.a,{container:!0},a.map((function(a){var t=a.title,n=a.dateRange,i=a.location,c=a.summary;return r.a.createElement(j.a,{container:!0,key:t,className:e.projBlock},r.a.createElement(j.a,{item:!0},r.a.createElement(B.a,{variant:"h6"},t)),r.a.createElement(j.a,{item:!0,xs:12,container:!0,alignItems:"center"},r.a.createElement(X,{range:n,location:i})),r.a.createElement(j.a,{item:!0,xs:12,container:!0,alignItems:"center"},r.a.createElement(B.a,{variant:"body1"},c)))}))))},ne=t(138),re=t(151),ie=t(139),ce=t(140),oe=t(73),le=t.n(oe),me=Object(I.a)((function(e){return Object(S.a)({smallIcon:{fontSize:"0.75rem",color:e.palette.common.black},noPadding:{padding:0}})})),se=function(){var e=me(),a=Object(h.c)((function(e){return e.app.resume})).experiences;return r.a.createElement(r.a.Fragment,null,r.a.createElement(ee,null,"Experience"),a.map((function(a){var t=a.title,n=a.company,i=a.dateRange,c=a.location,o=a.aboutCompany,l=a.summary;return r.a.createElement(j.a,{container:!0,spacing:0,key:t},r.a.createElement(j.a,{item:!0,xs:12},r.a.createElement(B.a,{variant:"h6"},t),r.a.createElement(B.a,{variant:"subtitle2",style:{fontWeight:"bold"},color:"primary"},n)),r.a.createElement(j.a,{item:!0,xs:12,container:!0,alignItems:"center"},r.a.createElement(X,{range:i,location:c})),o&&r.a.createElement(j.a,{item:!0},r.a.createElement(B.a,{variant:"body1",gutterBottom:!0},o)),l&&r.a.createElement(j.a,{item:!0},r.a.createElement(B.a,{variant:"body1"},l.title),r.a.createElement(ne.a,{dense:!0},l.actions.map((function(a,t){return r.a.createElement(re.a,{className:e.noPadding,key:t},r.a.createElement(ie.a,{style:{minWidth:"1.2rem"}},r.a.createElement(le.a,{color:"disabled",className:e.smallIcon})),r.a.createElement(ce.a,{primary:a}))})))))})))},ue=Object(I.a)((function(e){return Object(S.a)({smallIcon:{fontSize:"1rem"},noPadding:{padding:0},divider:{margin:e.spacing(0,3)},grade:{wordBreak:"break-all"},eduBlock:{margin:e.spacing(0,0,1,0)}})})),de=function(){var e=ue(),a=Object(h.c)((function(e){return e.app.resume})).education;return r.a.createElement(r.a.Fragment,null,r.a.createElement(ee,null,"Education"),a.map((function(a){var t=a.title,n=a.institution,i=(a.location,a.dateRange),c=(a.achievements,a.grade);return r.a.createElement(j.a,{container:!0,key:t,alignItems:"center",justify:"space-between",className:e.eduBlock},r.a.createElement(j.a,{item:!0,xs:12},r.a.createElement(B.a,{variant:"h6"},t)),r.a.createElement(j.a,{item:!0,xs:5},r.a.createElement(B.a,{variant:"body1"},n),r.a.createElement(j.a,{item:!0,xs:12,container:!0,alignItems:"center"},r.a.createElement(X,{range:i}))),r.a.createElement(Y.a,{orientation:"vertical",flexItem:!0,className:e.divider}),r.a.createElement(j.a,{item:!0,xs:5},r.a.createElement(B.a,{variant:"caption"},c)))})))},pe=t(152),ge=Object(I.a)((function(e){return Object(S.a)({chipRoot:{display:"flex",justifyContent:"flex-start",flexWrap:"wrap","& > *":{margin:e.spacing(.5)}}})})),Ee=function(){var e=ge(),a=Object(h.c)((function(e){return e.app.resume})).skills;return r.a.createElement("div",null,r.a.createElement(ee,null,"Skills"),r.a.createElement(j.a,{container:!0,direction:"column",spacing:1},a.map((function(a){return r.a.createElement(j.a,{item:!0,key:a.group},r.a.createElement(B.a,{variant:"h6",color:"primary"},a.group),r.a.createElement("div",{className:e.chipRoot},a.list.map((function(e){return r.a.createElement(pe.a,{onClick:function(){return null},label:e,key:e})}))))}))))},fe=function(){var e=Object(h.c)((function(e){return e.app.resume})).languages;return r.a.createElement("div",null,r.a.createElement(ee,null,"Languages"),r.a.createElement(j.a,{container:!0,spacing:2},e.map((function(e){var a=e.name,t=e.proficiency;return r.a.createElement(j.a,{item:!0,xs:6,key:a},r.a.createElement(B.a,{variant:"body1"},r.a.createElement("strong",null,a)," - ",t))}))))},be=t(74),he=t.n(be),ye=t(147),ve=t(141),ke=Object(I.a)((function(e){return Object(S.a)({backdrop:{zIndex:e.zIndex.drawer+1,color:"#fff"}})})),je=function(){var e=ke(),a=Object(h.c)((function(e){return e.app})).isLoading;return r.a.createElement(ye.a,{className:e.backdrop,open:a},r.a.createElement(ve.a,{color:"inherit"}))},Ie=Object(I.a)((function(e){var a;return Object(S.a)({app:{backgroundColor:"lightgrey"},container:(a={backgroundColor:e.palette.background.paper,borderStyle:"solid",borderWidth:e.spacing(.1),padding:"3rem"},Object(y.a)(a,e.breakpoints.down("sm"),{padding:"2rem"}),Object(y.a)(a,e.breakpoints.down("xs"),{padding:"1rem"}),a),fab:{margin:e.spacing(2),position:"relative",float:"right",top:"50%"}})})),Se=function(){var e=Ie(),a=Object(h.b)(),t="".concat(window.location.origin,"/resume.pdf");return Object(n.useEffect)((function(){a(g())}),[a]),r.a.createElement("div",{className:e.app},r.a.createElement(k.a,null),r.a.createElement(je,null),r.a.createElement(O.a,{color:"primary","aria-label":"download",className:e.fab,href:t,download:!0},r.a.createElement(he.a,null)),r.a.createElement(v.a,{maxWidth:"md",className:e.container},r.a.createElement(j.a,{container:!0,justify:"space-between",spacing:3,style:{marginBottom:"1rem"}},r.a.createElement(H,null)),r.a.createElement(j.a,{container:!0,justify:"space-between",spacing:3},r.a.createElement(j.a,{item:!0,xs:12,sm:6},r.a.createElement(x.a,{component:"span",m:1,p:1},r.a.createElement(j.a,{container:!0,direction:"column",spacing:3},r.a.createElement(j.a,{item:!0,xs:12},r.a.createElement(se,null)),r.a.createElement(j.a,{item:!0,xs:12},r.a.createElement(de,null))))),r.a.createElement(j.a,{item:!0,xs:12,sm:6},r.a.createElement(x.a,{component:"span",m:1,p:1},r.a.createElement(j.a,{container:!0,direction:"column",spacing:3},r.a.createElement(j.a,{item:!0},r.a.createElement(te,null)),r.a.createElement(j.a,{item:!0},r.a.createElement(Ee,null)),r.a.createElement(j.a,{item:!0},r.a.createElement(fe,null))))))))},Oe=t(145),xe=t(75),we=Object(xe.a)({palette:{primary:{main:"#008CFF"},secondary:{main:"#fcba03"}},typography:{fontFamily:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(",")}});c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h.a,{store:b},r.a.createElement(Oe.a,{theme:we},r.a.createElement(Se,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},62:function(e,a,t){e.exports=t.p+"static/media/avatar.bd328fd2.png"},81:function(e,a,t){e.exports=t(111)},86:function(e,a,t){}},[[81,1,2]]]);
//# sourceMappingURL=main.5b93cceb.chunk.js.map