(this["webpackJsonpflash-cards-mongodb"]=this["webpackJsonpflash-cards-mongodb"]||[]).push([[0],{29:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},57:function(e,t,c){},58:function(e,t,c){},62:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){"use strict";c.r(t);var i=c(0),s=c(1),n=c.n(s),l=c(31),o=c.n(l),a=(c(38),c(17)),r=c(11),d=c(12),j=c(10),h=c(14),b=c(13),u=(c(39),c(9)),v=c.n(u),x=[{title:"Home",url:"http://localhost:3000",cName:"nav-links"},{title:"Collections",url:"#",cName:"nav-links"},{title:"Edits",url:"#",cName:"nav-links"}],O=(c(57),c(58),function(e){Object(h.a)(c,e);var t=Object(b.a)(c);function c(){var e;Object(r.a)(this,c);for(var i=arguments.length,s=new Array(i),n=0;n<i;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={clicked:!1},e.handleClick=function(){e.setState({clicked:!e.state.clicked})},e}return Object(d.a)(c,[{key:"render",value:function(){return Object(i.jsxs)("nav",{className:"NavbarItems",children:[Object(i.jsxs)("h1",{className:"navbar-logo",children:[Object(i.jsx)("i",{className:"fab fa-react"})," S.P.E.C.I.A.L Flash Cards"]}),Object(i.jsx)("div",{className:"menu-icon",onClick:this.handleClick,children:Object(i.jsx)("i",{className:this.state.clicked?"fas fa-times":"fas fa-bars"})}),Object(i.jsx)("ul",{className:this.state.clicked?"nav-menu active":"nav-menu",children:x.map((function(e,t){return Object(i.jsx)("li",{children:Object(i.jsx)("a",{className:e.cName,href:e.url,children:e.title})},t)}))})]})}}]),c}(s.Component)),g=c(67);c(29);var C=function(e){return!1===e.viewing?Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{class:"card-scene col-md4",children:Object(i.jsxs)("div",{id:"card",class:"card",children:[Object(i.jsxs)("div",{class:"card-face card-backing",children:[Object(i.jsx)("div",{class:"grain-overlay"}),Object(i.jsx)("div",{class:"bump"}),Object(i.jsx)("div",{class:"top-banner",children:Object(i.jsx)("h1",{children:e.collection.title})}),Object(i.jsxs)("div",{class:"back-main",children:[Object(i.jsx)("div",{class:"pipboy",children:Object(i.jsx)("img",{src:"https://vignette.wikia.nocookie.net/fallout/images/c/c0/VaultBoyFO3.png/revision/latest?cb=20110809182235"})}),Object(i.jsxs)("div",{class:"vault-tec",children:[Object(i.jsx)("div",{class:"center"}),Object(i.jsxs)("div",{class:"lines",children:[Object(i.jsxs)("div",{class:"line line--left",children:[Object(i.jsx)("div",{class:"line-inner"}),Object(i.jsx)("div",{class:"line-inner"}),Object(i.jsx)("div",{class:"line-inner"})]}),Object(i.jsxs)("div",{class:"line line--right",children:[Object(i.jsx)("div",{class:"line-inner"}),Object(i.jsx)("div",{class:"line-inner"}),Object(i.jsx)("div",{class:"line-inner"})]})]})]})]})]}),Object(i.jsxs)("div",{class:"card-face card-front",children:[Object(i.jsx)("h1",{children:Object(i.jsx)("span",{class:"bump",children:Object(i.jsx)("b",{class:"outer",children:Object(i.jsx)("b",{class:"inner",children:"1"})})})}),Object(i.jsx)("div",{class:"main-pane"}),Object(i.jsxs)("div",{class:"desc",children:[Object(i.jsx)("p",{children:"Your two-handed melee weapons now do +10% damage."}),Object(i.jsx)("div",{class:"special","data-category":"strength",children:"S"}),Object(i.jsx)("div",{id:"level",class:"level","data-level-cap":"3","data-level-current":"1"})]}),Object(i.jsx)("div",{class:"grain-overlay"})]})]})}),Object(i.jsx)("link",{rel:"stylesheet",href:"../component/card/card.css"}),Object(i.jsx)("script",{src:"https://cdnjs.cloudflare.com/ajax/libs/prefixfree/1.0.7/prefixfree.min.js"}),Object(i.jsx)("script",{src:"conic-gradient.js"}),Object(i.jsx)("script",{src:"../component/card/card.js",async:!0,defer:!0})]}):!0===e.viewing&&!0===e.front?Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{class:"card-scene col-md4",children:Object(i.jsxs)("div",{id:"card",class:"card",children:[Object(i.jsxs)("div",{class:"card-face card-backing",children:[Object(i.jsx)("div",{class:"grain-overlay"}),Object(i.jsx)("div",{class:"bump"}),Object(i.jsxs)("div",{class:"top-banner",children:[Object(i.jsx)("h3",{}),Object(i.jsxs)("h2",{children:[e.currentFlashCardNumber+1,"/",e.collection.cards.length,Object(i.jsx)("br",{}),e.collection.cards[e.currentFlashCardNumber].word]})]}),Object(i.jsxs)("div",{class:"back-main",children:[Object(i.jsx)("div",{class:"pipboy",children:Object(i.jsx)("img",{src:"https://vignette.wikia.nocookie.net/fallout/images/c/c0/VaultBoyFO3.png/revision/latest?cb=20110809182235"})}),Object(i.jsxs)("div",{class:"vault-tec",children:[Object(i.jsx)("div",{class:"center"}),Object(i.jsxs)("div",{class:"lines",children:[Object(i.jsxs)("div",{class:"line line--left",children:[Object(i.jsx)("div",{class:"line-inner"}),Object(i.jsx)("div",{class:"line-inner"}),Object(i.jsx)("div",{class:"line-inner"})]}),Object(i.jsxs)("div",{class:"line line--right",children:[Object(i.jsx)("div",{class:"line-inner"}),Object(i.jsx)("div",{class:"line-inner"}),Object(i.jsx)("div",{class:"line-inner"})]})]})]})]})]}),Object(i.jsxs)("div",{class:"card-face card-front",children:[Object(i.jsxs)("h1",{children:[Object(i.jsx)("span",{class:"bump",children:Object(i.jsx)("b",{class:"outer",children:Object(i.jsx)("b",{class:"inner",children:"1"})})}),e.collection.cards[e.currentFlashCardNumber].word]}),Object(i.jsx)("div",{class:"main-pane"}),Object(i.jsxs)("div",{class:"desc",children:[Object(i.jsx)("p",{}),Object(i.jsx)("div",{class:"special","data-category":"strength",children:"S"}),Object(i.jsx)("div",{id:"level",class:"level","data-level-cap":"3","data-level-current":"1"})]}),Object(i.jsx)("div",{class:"grain-overlay"})]})]})}),Object(i.jsx)("link",{rel:"stylesheet",href:"../component/card/card.css"}),Object(i.jsx)("script",{src:"https://cdnjs.cloudflare.com/ajax/libs/prefixfree/1.0.7/prefixfree.min.js"}),Object(i.jsx)("script",{src:"conic-gradient.js"}),Object(i.jsx)("script",{src:"../component/card/card.js",async:!0,defer:!0})]}):Object(i.jsx)("div",{className:"card-scene",children:Object(i.jsxs)("div",{class:"card-face card-front",children:[Object(i.jsxs)("h1",{children:[Object(i.jsx)("span",{class:"bump",children:Object(i.jsx)("b",{class:"outer",children:Object(i.jsxs)("b",{class:"inner",children:[e.currentFlashCardNumber+1,"/",e.collection.cards.length]})})}),e.collection.cards[e.currentFlashCardNumber].word]}),Object(i.jsx)("div",{class:"main-pane",children:Object(i.jsx)("img",{class:"slugger",src:"https://vignette.wikia.nocookie.net/fallout/images/6/69/Fo76_Slugger.png/revision/latest/scale-to-width-down/353?cb=20181125171021"})}),Object(i.jsxs)("div",{class:"desc",children:[Object(i.jsx)("h3",{children:e.collection.cards[e.currentFlashCardNumber].definition}),Object(i.jsx)("div",{class:"special","data-category":"strength",children:"D"}),Object(i.jsx)("div",{id:"level",class:"level","data-level-cap":"3","data-level-current":"1"})]}),Object(i.jsx)("div",{class:"grain-overlay"})]})})};var m=function(e){return Object(i.jsxs)("div",{className:"container-fluid",children:[Object(i.jsxs)("h1",{children:["What makes you S.P.E.C.I.A.L?",Object(i.jsx)("span",{children:"(This is the top player)"})]}),Object(i.jsxs)("div",{className:"row",children:[Object(i.jsxs)("div",{className:"col-sm-2",id:"leftControl",children:[Object(i.jsx)(g.a,{color:"primary",onClick:function(){return e.previousCollection()},children:"Previous Collection"})," "]}),Object(i.jsxs)("div",{className:"col-sm-6",id:"collectionItem",children:[Object(i.jsx)("div",{className:"",children:C(e)}),Object(i.jsx)(g.a,{color:"primary",onClick:function(){return e.viewFlashCards()},children:"View This Collection's Flash Cards"}),Object(i.jsx)(g.a,{onClick:function(){return e.viewEditor()},children:"Edit Collections"})]}),Object(i.jsx)("div",{className:"col-sm-2",id:"rightControl",children:Object(i.jsx)(g.a,{color:"primary",onClick:function(){return e.nextCollection()},children:"Next Collection"})})]})]})};var f=function(e){return console.log("FCC Flash Card",e.collection.cards[e.currentFlashCardNumber]),!0===e.front?Object(i.jsxs)("div",{class:"container-fluid",children:[Object(i.jsx)("h1",{children:"Dev Card Collections"}),Object(i.jsxs)("div",{class:"row",children:[Object(i.jsx)("div",{class:"col-sm-2",id:"leftControl",children:Object(i.jsx)(g.a,{color:"primary",onClick:function(){return e.previousFlashCard()},children:"Previous Flash Card"})}),Object(i.jsxs)("div",{className:"col-sm-6",id:"collectionItem",children:[Object(i.jsx)("div",{className:"",children:C(e)}),Object(i.jsxs)("div",{children:[Object(i.jsx)(g.a,{onClick:function(){return e.flip()},children:"View Definiton"}),Object(i.jsx)(g.a,{onClick:function(){return e.viewEditor()},children:"Edit Collections"})]}),Object(i.jsx)(g.a,{color:"primary",onClick:function(){return e.viewCollections()},children:"Collections"})]}),Object(i.jsx)("div",{class:"col-sm-2",id:"rightControl",children:Object(i.jsx)(g.a,{color:"primary",onClick:function(){return e.nextFlashCard()},children:"Next Flash Card"})})]})]}):!1===e.front?Object(i.jsxs)("div",{class:"container-fluid",children:[Object(i.jsxs)("h1",{children:["What makes you S.P.E.C.I.A.L?",Object(i.jsx)("span",{children:"(This is the bottom player)"})]}),Object(i.jsxs)("div",{class:"row",children:[Object(i.jsx)("div",{class:"col-sm-2",id:"leftControl",children:Object(i.jsx)(g.a,{color:"primary",onClick:function(){return e.previousFlashCard()},children:"Previous Flash Card"})}),Object(i.jsxs)("div",{class:"col-sm-6",id:"collectionItem",children:[Object(i.jsx)("div",{className:"",children:C(e)}),Object(i.jsx)("div",{}),Object(i.jsxs)("div",{children:[Object(i.jsx)(g.a,{onClick:function(){return e.flip()},children:"View Word"}),Object(i.jsx)(g.a,{onClick:function(){return e.viewEditor()},children:"Edit Collections"})]}),Object(i.jsx)(g.a,{color:"primary",onClick:function(){return e.viewCollections()},children:"View Collections"})]}),Object(i.jsx)("div",{class:"col-sm-2",id:"rightControl",children:Object(i.jsx)(g.a,{color:"primary",onClick:function(){return e.nextFlashCard()},children:"Next Flash Card"})})]})]}):void 0},p=(c(61),c(62),c(19)),k=c(32),N=c(18),w=c(8);function F(e){return e.collection.cards.map((function(e,t){var c=e.id,s=e.word,n=e.definition;return Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:s}),Object(i.jsx)("td",{children:n}),Object(i.jsx)("td",{children:Object(i.jsx)(g.a,{children:"Remove"})})]},c)}))}function y(e){return Object(i.jsxs)(p.a,{onSubmit:e.handleThatFlashCardSubmit(),children:[Object(i.jsx)("input",{type:"text",name:"word",placeholder:"New Word",onChange:e.handleThatChange()}),Object(i.jsx)("input",{type:"text",name:"definition",placeholder:"New Definition",onChange:e.handleThatChange()}),Object(i.jsx)(g.a,{type:"submit",children:"Submit"})]})}var A=function(e){return Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{id:"title",children:"React Dynamic Table"}),Object(i.jsxs)("h3",{children:["NOW EDITING COLLECTION: ",e.collection.title.toUpperCase()]}),Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)("div",{className:"col-md-2",children:Object(i.jsx)(g.a,{onClick:function(){return e.previousCollection()},children:"Previous Collection"})}),Object(i.jsx)("div",{className:"col-md-4",children:Object(i.jsxs)(k.a,{variant:"dark",id:"collection",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Word"}),Object(i.jsx)("th",{children:"Definition"}),Object(i.jsx)("th",{children:"Action"})]})}),Object(i.jsx)("tbody",{children:F(e)})]})}),Object(i.jsx)("div",{className:"col-md-2",children:Object(i.jsx)(g.a,{onClick:function(){return e.nextCollection()},children:"Next Collection"})})]}),Object(i.jsxs)(N.a,{children:[Object(i.jsx)(w.a,{className:"col-md-2"}),Object(i.jsx)(w.a,{children:y(e)}),Object(i.jsx)(w.a,{})]}),Object(i.jsxs)(N.a,{children:[Object(i.jsx)(w.a,{className:"col-md-2"}),Object(i.jsx)(w.a,{children:Object(i.jsxs)(p.a,{onSubmit:e.handleThatCollectionSubmit(),children:[Object(i.jsx)("input",{type:"text",name:"newCollection",placeholder:"New Collection Name",onChange:e.handleThatChange()}),Object(i.jsx)(g.a,{type:"submit",children:"Add Collection"})]})}),Object(i.jsx)(w.a,{})]}),Object(i.jsx)(g.a,{onClick:function(){return e.viewCollections()},children:"View Collections"})]})},S=function(e){Object(h.a)(s,e);var t=Object(b.a)(s);function s(e){var i;return Object(r.a)(this,s),(i=t.call(this,e)).axios=c(9).default,i.state={collections:[],collectionNumber:0,flashCardNumber:0,loading:!0,lookingAtFlashcards:!1,lookingAtFront:!0,lookingAtEditor:!1,lookingAtCollections:!0,word:"",definition:"",newCollection:""},i.handleChange=i.handleChange.bind(Object(j.a)(i)),i.handleSubmitFlashCard=i.handleSubmitFlashCard.bind(Object(j.a)(i)),i.handleSubmitCollection=i.handleSubmitCollection.bind(Object(j.a)(i)),i}return Object(d.a)(s,[{key:"componentDidMount",value:function(){var e=this;v.a.get("http://localhost:5000/api/collections").then((function(t){var c=t.data;e.setState({collections:c,loading:!1})}))}},{key:"handleChange",value:function(e){var t=e.target.name,c=e.target.value;this.setState(Object(a.a)({},t,c))}},{key:"handleSubmitFlashCard",value:function(e){var t=this;e.preventDefault(),console.log("colleciton _id: ",this.state.collections[this.state.collectionNumber]._id);var c={word:this.state.word,definition:this.state.definition},i="http://localhost:5000/api/collections/"+this.state.collections[this.state.collectionNumber]._id+"/cards/";v.a.post(i,c).then((function(e){console.log(e),console.log(e.data)})),v.a.get("http://localhost:5000/api/collections").then((function(e){var c=e.data;t.setState({collections:c,loading:!1})}))}},{key:"handleSubmitCollection",value:function(e){var t=this;e.preventDefault();var c={title:this.state.newCollection};v.a.post("http://localhost:5000/api/collections/",c).then((function(e){console.log(e),console.log(e.data)})),v.a.get("http://localhost:5000/api/collections").then((function(e){var c=e.data;t.setState({collections:c,loading:!1})}))}},{key:"goToNextCollection",value:function(){var e=this.state.collectionNumber;++e===this.state.collections.length&&(e=0),this.setState({collectionNumber:e})}},{key:"goToNextFlashCard",value:function(){var e=this.state.flashCardNumber;++e===this.state.collections[this.state.collectionNumber].cards.length&&(e=0),this.setState({flashCardNumber:e,lookingAtFront:!0})}},{key:"goToPreviousCollection",value:function(){var e=this.state.collectionNumber,t=this.state.collections.length;--e<0&&(e=t-1),this.setState({collectionNumber:e})}},{key:"goToPreviousFlashCard",value:function(){var e=this.state.flashCardNumber,t=this.state.collections[this.state.collectionNumber].cards.length;--e<0&&(e=t-1),this.setState({flashCardNumber:e,lookingAtFront:!0})}},{key:"viewingFlashCards",value:function(){this.setState({lookingAtFlashcards:!0,lookingAtCollections:!1,lookingAtEditor:!1})}},{key:"viewingCollections",value:function(){this.setState({lookingAtCollections:!0,lookingAtFlashcards:!1,lookingAtFront:!0,lookingAtEditor:!1})}},{key:"flipCard",value:function(){!0===this.state.lookingAtFront?this.setState({lookingAtFront:!1}):!1===this.state.lookingAtFront&&this.setState({lookingAtFront:!0})}},{key:"toggleEditor",value:function(){!1===this.state.lookingAtEditor?this.setState({lookingAtEditor:!0,lookingAtCollections:!1,lookingAtFlashcards:!1}):!0===this.state.lookingAtEditor&&this.setState({lookingAtEditor:!1})}},{key:"render",value:function(){var e=this;return console.log("collections: ",this.state.collections),console.log("Collection Number: ",this.state.collectionNumber),console.log("Flash Card Number: ",this.state.flashCardNumber),console.log("loading: ",this.state.loading),console.log("looking At Collections: ",this.state.lookingAtCollections),console.log("viewing flash cards: ",this.state.lookingAtFlashcards),console.log("viewing Editor: ",this.state.lookingAtEditor),console.log("new Word: ",this.state.word),console.log("new Definition",this.state.definition),console.log("new Collection: ",this.state.newCollection),console.log("---------------------------------"),!0===this.state.lookingAtEditor?this.state.loading?Object(i.jsx)("h1",{children:"Loading..."}):Object(i.jsxs)("div",{children:[Object(i.jsx)(O,{}),Object(i.jsx)(A,{collections:this.collections,collection:this.state.collections[this.state.collectionNumber],nextCollection:function(){return e.goToNextCollection()},previousCollection:function(){return e.goToPreviousCollection()},viewing:this.state.lookingAtFlashcards,viewFlashCards:function(){return e.viewingFlashCards()},viewCollections:function(){return e.viewingCollections()},handleThatChange:function(){return e.handleChange},handleThatFlashCardSubmit:function(){return e.handleSubmitFlashCard},handleThatCollectionSubmit:function(){return e.handleSubmitCollection}})]}):!1===this.state.lookingAtFlashcards&&!0===this.state.lookingAtCollections&&!1===this.state.lookingAtEditor?this.state.loading?Object(i.jsx)("h1",{children:"Loading..."}):Object(i.jsxs)("div",{children:[Object(i.jsx)(O,{}),Object(i.jsx)(m,Object(a.a)({collections:this.collections,collection:this.state.collections[this.state.collectionNumber],nextCollection:function(){return e.goToNextCollection()},previousCollection:function(){return e.goToPreviousCollection()},viewing:this.state.lookingAtFlashcards,viewFlashCards:function(){return e.viewingFlashCards()},viewEditor:function(){return e.toggleEditor()}},"viewing",this.state.lookingAtFlashcards))]}):!0===this.state.lookingAtFlashcards&&!1===this.state.lookingAtCollections&&!1===this.state.lookingAtEditor?this.state.loading?Object(i.jsx)("h1",{children:"Loading..."}):Object(i.jsxs)("div",{children:[Object(i.jsx)(O,{}),Object(i.jsx)(f,{collections:this.collections,collection:this.state.collections[this.state.collectionNumber],viewing:this.state.lookingAtFlashcards,nextFlashCard:function(){return e.goToNextFlashCard()},previousFlashCard:function(){return e.goToPreviousFlashCard()},currentFlashCardNumber:this.state.flashCardNumber,viewCollections:function(){return e.viewingCollections()},flip:function(){return e.flipCard()},front:this.state.lookingAtFront,viewEditor:function(){return e.toggleEditor()}})]}):void 0}}]),s}(n.a.Component),E=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,68)).then((function(t){var c=t.getCLS,i=t.getFID,s=t.getFCP,n=t.getLCP,l=t.getTTFB;c(e),i(e),s(e),n(e),l(e)}))};c(64),c(65);o.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(S,{})}),document.getElementById("root")),E()}},[[66,1,2]]]);
//# sourceMappingURL=main.c67062fc.chunk.js.map