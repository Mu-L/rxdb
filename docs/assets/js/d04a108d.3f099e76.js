"use strict";(self.webpackChunkrxdb=self.webpackChunkrxdb||[]).push([[2853],{1916:(e,t,i)=>{i.d(t,{C:()=>a});var n=i(6540),r=i(792),o=i(106),s=i(4848);const l=e=>{let{isHovered:t}=e;return(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"56",height:"56",style:{opacity:t?1:.7,transition:"opacity 0.1s ease"},viewBox:"0 0 24 24",strokeWidth:t?2.5:2,children:[(0,s.jsx)("circle",{cx:"12",cy:"12",r:"10",stroke:"white",fill:"rgba(255,20,147,0.8)"}),(0,s.jsx)("polygon",{points:"10 8 16 12 10 16",fill:"white"})]})},a=e=>{let{videoId:t,title:i,duration:a,startAt:d}=e;const[c,p]=(0,n.useState)(!1),[h,u]=(0,n.useState)(!1);return(0,s.jsxs)("div",{style:{width:"260px",borderRadius:"16px",borderStyle:"solid",borderWidth:0,borderColor:"black",backgroundColor:"black",overflow:"hidden",cursor:"pointer",boxShadow:"0 6px 12px rgba(0, 0, 0, 0.25)"},onMouseEnter:()=>p(!0),onMouseLeave:()=>p(!1),onClick:()=>{u(!0),(0,o.c)("open_video",.1),(0,o.c)("open_video_"+t,.05,1)},children:[(0,s.jsxs)("div",{style:{position:"relative",width:"100%",height:"146px",backgroundImage:`url(http://img.youtube.com/vi/${t}/0.jpg)`,backgroundSize:"cover",backgroundPosition:"center"},children:[(0,s.jsx)("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,display:"flex",alignItems:"center",justifyContent:"center"},children:(0,s.jsx)(l,{isHovered:c})}),(0,s.jsx)("span",{style:{position:"absolute",bottom:"8px",right:"8px",backgroundColor:"rgba(0, 0, 0, 0.8)",color:"white",fontSize:"12px",padding:"4px 6px",borderRadius:"4px",zIndex:2},children:a})]}),(0,s.jsx)("div",{style:{padding:"0px"},children:(0,s.jsx)("span",{style:{fontSize:"14px",fontWeight:"bold",color:"#333",display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical",overflow:"hidden",textOverflow:"ellipsis",backgroundColor:"white",padding:8,paddingTop:4,height:55},children:i})}),h?(0,s.jsxs)(r.A,{open:h,onCancel:e=>{e.stopPropagation(),console.log("CANCEL"),u(!1)},onClose:e=>{e.stopPropagation(),console.log("CLOSSSSSE"),u(!1)},onOk:e=>{e.stopPropagation(),console.log("OKKK"),u(!1)},footer:null,width:"auto",style:{maxWidth:800},children:[(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),(0,s.jsx)("h3",{children:i}),(0,s.jsx)("center",{children:(0,s.jsx)("iframe",{className:"img-radius",style:{width:"100%",borderRadius:"15px"},height:"515",src:"https://www.youtube.com/embed/"+t+"?autoplay=1&start="+(d||0),title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerPolicy:"strict-origin-when-cross-origin",allowFullScreen:!0})})]}):(0,s.jsx)(s.Fragment,{})]})}},3894:(e,t,i)=>{i.d(t,{t:()=>s});var n=i(6540),r=i(6412),o=i(4848);function s(e){const t=[];let i=null;n.Children.toArray(e.children).forEach((e=>{const n=e,r=n?.props?.id;r?(i&&t.push(i),i={label:n.props.children,key:n.props.id,content:[]}):i&&i.content.push(e)})),i&&t.push(i);const s=t.map((e=>({key:e.key,label:e.label,children:(0,o.jsx)("div",{style:{color:"white"},children:e.content})})));return(0,o.jsx)(r.A,{type:"line",items:s,color:"red"})}},5355:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>u,frontMatter:()=>a,metadata:()=>n,toc:()=>p});const n=JSON.parse('{"id":"replication-appwrite","title":"Appwrite Realtime Sync for Local-First Apps","description":"Leverage RxDB to enable real-time, offline-first replication with Firestore. Cut cloud costs, resolve conflicts, and speed up your app.","source":"@site/docs/replication-appwrite.md","sourceDirName":".","slug":"/replication-appwrite.html","permalink":"/replication-appwrite.html","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Appwrite Realtime Sync for Local-First Apps","slug":"replication-appwrite.html","description":"Leverage RxDB to enable real-time, offline-first replication with Firestore. Cut cloud costs, resolve conflicts, and speed up your app."},"sidebar":"tutorialSidebar","previous":{"title":"Contribute & Innovate with RxDB","permalink":"/contribution.html"}}');var r=i(4848),o=i(8453),s=(i(3894),i(7580)),l=i(1916);const a={title:"Appwrite Realtime Sync for Local-First Apps",slug:"replication-appwrite.html",description:"Leverage RxDB to enable real-time, offline-first replication with Firestore. Cut cloud costs, resolve conflicts, and speed up your app."},d="RxDB Appwrite Replication (Pre Alpha)",c={},p=[{value:"Why you should use RxDB with Appwrite?",id:"why-you-should-use-rxdb-with-appwrite",level:2},{value:"Preparing the Appwrite Server",id:"preparing-the-appwrite-server",level:2},{value:"Create an Appwrite Database and Collection",id:"create-an-appwrite-database-and-collection",level:3},{value:"Add your documents attributes",id:"add-your-documents-attributes",level:3},{value:"Add a <code>deleted</code> attribute",id:"add-a-deleted-attribute",level:3},{value:"Set the Permission on the Appwrite Collection",id:"set-the-permission-on-the-appwrite-collection",level:3},{value:"Setting up the RxDB - Appwrite Replication",id:"setting-up-the-rxdb---appwrite-replication",level:2},{value:"Install the Appwrite SDK and RxDB:",id:"install-the-appwrite-sdk-and-rxdb",level:3},{value:"Import the Appwrite SDK and RxDB",id:"import-the-appwrite-sdk-and-rxdb",level:3},{value:"Create a Database with a Collection",id:"create-a-database-with-a-collection",level:3},{value:"Configure the Appwrite Client",id:"configure-the-appwrite-client",level:3},{value:"Start the Replication",id:"start-the-replication",level:3},{value:"Do other things with the replication state",id:"do-other-things-with-the-replication-state",level:3},{value:"Limitations of the Appwrite Server",id:"limitations-of-the-appwrite-server",level:2}];function h(e){const t={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"rxdb-appwrite-replication-pre-alpha",children:"RxDB Appwrite Replication (Pre Alpha)"})}),"\n",(0,r.jsxs)(t.p,{children:["This replication plugin allows you to synchronize documents between RxDB and an ",(0,r.jsx)(t.a,{href:"https://appwrite.io/",children:"Appwrite"})," server. It supports both push and pull replication, live updates via Appwrite's real-time subscriptions, ",(0,r.jsx)(t.a,{href:"/offline-first.html",children:"offline-capability"})," and ",(0,r.jsx)(t.a,{href:"/transactions-conflicts-revisions.html",children:"conflict resolution"}),"."]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)("center",{children:(0,r.jsx)(l.C,{videoId:"L07xPMyL8sY",title:"Appwrite in 100 Seconds",duration:"2:35"})}),"\n",(0,r.jsx)(t.h2,{id:"why-you-should-use-rxdb-with-appwrite",children:"Why you should use RxDB with Appwrite?"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Appwrite"})," is a secure, open-source backend server that simplifies backend tasks like user authentication, storage, database management, and real-time APIs.",(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.strong,{children:"RxDB"})," is a reactive database for the frontend that offers offline-first capabilities and rich client-side data handling."]}),"\n",(0,r.jsx)(t.p,{children:"Combining the two provides several benefits:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/offline-first.html",children:"Offline-First"}),": RxDB keeps all data locally, so your application remains fully functional even when the network is unavailable. When connectivity returns, the RxDB \u2194 Appwrite replication automatically resolves and synchronizes changes."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Real-Time Sync"}),": With Appwrite\u2019s real-time subscriptions and RxDB\u2019s live replication, you can build collaborative features that update across all clients instantaneously."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/transactions-conflicts-revisions.html",children:"Conflict Handling"}),": RxDB offers flexible conflict resolution strategies, making it simpler to handle concurrent edits across multiple users or devices."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Scalable & Secure"}),": Appwrite is built to handle production loads with granular access controls, while RxDB easily scales across various storage backends on the client side."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Simplicity & Modularity"}),": RxDB\u2019s plugin-based architecture, combined with Appwrite\u2019s Cloud offering makes it one of the easiest way to build local-first ",(0,r.jsx)(t.a,{href:"/articles/realtime-database.html",children:"realtime apps"})," that scale."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)("p",{align:"center",children:(0,r.jsx)("img",{src:"./files/icons/appwrite.svg",alt:"Appwrite Sync",height:"60"})}),"\n",(0,r.jsx)(t.h2,{id:"preparing-the-appwrite-server",children:"Preparing the Appwrite Server"}),"\n",(0,r.jsxs)(t.p,{children:["You can either use the appwrite cloud or ",(0,r.jsx)(t.a,{href:"https://appwrite.io/docs/advanced/self-hosting",children:"self-host the Appwrite server"}),". In this tutorial we use the Cloud which is recommended for beginners because it is way easier to set up. You can later decide to self-host if needed."]}),"\n",(0,r.jsxs)(s.g,{children:[(0,r.jsx)(t.h3,{id:"create-an-appwrite-database-and-collection",children:"Create an Appwrite Database and Collection"}),(0,r.jsxs)(t.p,{children:["After creating an Appwrite project you have to create an Appwrite Database and a collection, you can either do this in code with the ",(0,r.jsx)(t.a,{href:"https://appwrite.io/docs/products/databases/databases",children:"node-appwrite SDK"})," or in the ",(0,r.jsx)(t.a,{href:"https://cloud.appwrite.io/console/",children:"Appwrite Console"})," as shown in this video:"]}),(0,r.jsx)("center",{children:(0,r.jsx)(l.C,{videoId:"HGlBpna17LQ",title:"Appwrite Database Tutorial",duration:"9:47",startAt:328})}),(0,r.jsx)("br",{}),(0,r.jsx)(t.h3,{id:"add-your-documents-attributes",children:"Add your documents attributes"}),(0,r.jsxs)(t.p,{children:["In the appwrite collection, create all ",(0,r.jsx)(t.a,{href:"https://appwrite.io/docs/products/databases/collections#attributes",children:"attributes"})," of your documents. You have to define all the fields that your document in your ",(0,r.jsx)(t.a,{href:"/rx-schema.html",children:"RxDB schema"})," knows about. Notice that Appwrite does not allow for nested attributes. So when you use RxDB with Appwrite, you should also not have nested attributes in your RxDB schema."]}),(0,r.jsxs)(t.h3,{id:"add-a-deleted-attribute",children:["Add a ",(0,r.jsx)(t.code,{children:"deleted"})," attribute"]}),(0,r.jsx)(t.p,{children:"Appwrite (natively) hard-deletes documents. But for offline-handling RxDB needs soft-deleted documents on the server so that the deletion state can be replicated with other clients."}),(0,r.jsxs)(t.p,{children:["In RxDB, ",(0,r.jsx)(t.code,{children:"_deleted"}),' indicates that a document is removed locally and you need a similar field in your Appwrite collection on the Server: You must define a deletedField with any name to mark documents as "deleted" in the remote collection. Mostly you would use a boolean field named ',(0,r.jsx)(t.code,{children:"deleted"})," (set it to ",(0,r.jsx)(t.code,{children:"required"}),"). The plugin will treat any document with ",(0,r.jsx)(t.code,{children:"{ [deletedField]: true }"})," as deleted and replicate that state to local RxDB."]}),(0,r.jsx)(t.h3,{id:"set-the-permission-on-the-appwrite-collection",children:"Set the Permission on the Appwrite Collection"}),(0,r.jsxs)(t.p,{children:["Appwrite uses permissions to control data access on the collection level. Make sure that in the Console at ",(0,r.jsx)(t.code,{children:"Collection -> Settings -> Permissions"})," you have set the permission according to what you want to allow your clients to do. For testing, just enable all of them (Create, Read, Update and Delete)."]})]}),"\n",(0,r.jsx)(t.h2,{id:"setting-up-the-rxdb---appwrite-replication",children:"Setting up the RxDB - Appwrite Replication"}),"\n",(0,r.jsx)(t.p,{children:"Now that we have set up the Appwrite server, we can go to the client side code and set up RxDB and the replication:"}),"\n",(0,r.jsxs)(s.g,{children:[(0,r.jsx)(t.h3,{id:"install-the-appwrite-sdk-and-rxdb",children:"Install the Appwrite SDK and RxDB:"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npm install appwrite rxdb\n"})}),(0,r.jsx)(t.h3,{id:"import-the-appwrite-sdk-and-rxdb",children:"Import the Appwrite SDK and RxDB"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"import {\n    replicateAppwrite\n} from 'rxdb/plugins/replication-appwrite';\nimport {\n    createRxDatabase,\n    addRxPlugin,\n    RxCollection\n} from 'rxdb/plugins/core';\nimport {\n    getRxStorageDexie\n} from 'rxdb/plugins/storage-dexie';\n\nimport { Client } from 'appwrite';\n"})}),(0,r.jsx)(t.h3,{id:"create-a-database-with-a-collection",children:"Create a Database with a Collection"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"const db = await createRxDatabase({\n    name: 'mydb',\n    storage: getRxStorageDexie()\n});\nconst mySchema = {\n    title: 'my schema',\n    version: 0,\n    primaryKey: 'id',\n    type: 'object',\n    properties: {\n        id: {\n            type: 'string',\n            maxLength: 100\n        },\n        name: {\n            type: 'string'\n        }\n    },\n    required: ['id', 'name']\n};\nawait db.addCollections({\n    humans: {\n        schema: mySchema\n    }\n});\nconst collection = db.humans;\n"})}),(0,r.jsx)(t.h3,{id:"configure-the-appwrite-client",children:"Configure the Appwrite Client"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"const client = new Client();\nclient.setEndpoint('https://cloud.appwrite.io/v1');\nclient.setEndpointRealtime('https://cloud.appwrite.io/v1');\nclient.setProject('YOUR_APPWRITE_PROJECT_ID');\n"})}),(0,r.jsx)(t.h3,{id:"start-the-replication",children:"Start the Replication"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"const replicationState = replicateAppwrite({\n    replicationIdentifier: 'my-appwrite-replication',\n    client,\n    databaseId: 'YOUR_APPWRITE_DATABASE_ID',\n    collectionId: 'YOUR_APPWRITE_COLLECTION_ID',\n    deletedField: 'deleted', // Field that represents deletion in Appwrite\n    collection,\n    pull: {\n        batchSize: 10,\n    },\n    push: {\n        batchSize: 10\n    },\n    /*\n     * ...\n     * You can set all other options for RxDB replication states\n     * like 'live' or 'retryTime'\n     * ...\n     */\n});\n"})}),(0,r.jsx)(t.h3,{id:"do-other-things-with-the-replication-state",children:"Do other things with the replication state"}),(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"RxAppwriteReplicationState"})," which is returned from ",(0,r.jsx)(t.code,{children:"replicateAppwrite()"})," allows you to run all functionaliy of the normal ",(0,r.jsx)(t.a,{href:"/replication.html",children:"RxReplicationState"}),"."]})]}),"\n",(0,r.jsx)(t.h2,{id:"limitations-of-the-appwrite-server",children:"Limitations of the Appwrite Server"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Appwrite primary keys only allow for the characters ",(0,r.jsx)(t.code,{children:"a-z"}),", ",(0,r.jsx)(t.code,{children:"A-Z"}),", ",(0,r.jsx)(t.code,{children:"0-9"}),", and underscore ",(0,r.jsx)(t.code,{children:"_"})," (They cannot start with a leading underscore). Also the primary key has a max length of 36 characters."]}),"\n",(0,r.jsx)(t.li,{children:"The Appwrite replication only works on browsers because the Appwrite SDK does not support subscriptions in Node.js."}),"\n",(0,r.jsx)(t.li,{children:"Appwrite does not allow for bulk write operations so on push one HTTP request will be made per document. Reads run in bulk so this is mostly not a problem."}),"\n",(0,r.jsxs)(t.li,{children:['Appwrite does not allow for transactions or "update-if" calls which can lead to overwriting documents instead of properly handling ',(0,r.jsx)(t.a,{href:"/transactions-conflicts-revisions.html#conflicts",children:"conflicts"})," when multiple clients edit the same document in parallel."]}),"\n",(0,r.jsxs)(t.li,{children:["It is not possible to define nested attributes in an Appwrite collection so you should also not have them in the corresponding RxDB ",(0,r.jsx)(t.a,{href:"/rx-collection.html",children:"collection"}),"."]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},7580:(e,t,i)=>{i.d(t,{g:()=>r});var n=i(4848);function r(e){const t=[];let i=null;return e.children.forEach((e=>{e.props.id?(i&&t.push(i),i={headline:e,paragraphs:[]}):i&&i.paragraphs.push(e)})),i&&t.push(i),(0,n.jsx)("div",{style:o.stepsContainer,children:t.map(((e,t)=>(0,n.jsxs)("div",{style:o.stepWrapper,children:[(0,n.jsxs)("div",{style:o.stepIndicator,children:[(0,n.jsxs)("div",{style:o.stepNumber,children:[t+1,"."]}),(0,n.jsx)("div",{style:o.verticalLine})]}),(0,n.jsxs)("div",{style:o.stepContent,children:[(0,n.jsx)("div",{children:e.headline}),e.paragraphs.map(((e,t)=>(0,n.jsx)("div",{style:o.item,children:e},t)))]})]},t)))})}const o={stepsContainer:{display:"flex",flexDirection:"column"},stepWrapper:{display:"flex",alignItems:"stretch",marginBottom:"1rem",position:"relative",minWidth:0},stepIndicator:{position:"relative",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-start",width:"32px",marginRight:"1rem",minWidth:0},stepNumber:{width:"32px",height:"32px",borderRadius:"50%",backgroundColor:"var(--color-middle)",border:"3px solid #391a3b",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"bold"},verticalLine:{position:"absolute",top:"32px",bottom:"0",left:"50%",width:"1px",background:"linear-gradient(to bottom, var(--color-middle) 0%, var(--color-middle) 80%, rgba(0,0,0,0) 100%)",transform:"translateX(-50%)"},stepContent:{flex:1,minWidth:0,overflowWrap:"break-word"},item:{marginTop:"0.5rem"}}},8453:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>l});var n=i(6540);const r={},o=n.createContext(r);function s(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);