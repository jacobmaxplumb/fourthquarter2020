(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["emailTemplate"],{"76e4":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"feature",attrs:{name:"emailTemplate"}},[a("div",{staticClass:"row-basic"},[a("div",{staticClass:"feature-text offset-tool"},[a("p",{staticClass:"feature-name"},[t._v(t._s(t.$t("emailTemplate.featureName")))]),a("p",{staticClass:"des-text"},[t._v(t._s(t.$t("emailTemplate.featureDesc")))])])]),a("div",{staticClass:"row-child mgt-md"},[a("div",{staticClass:"feature-text offset-tool"},[a("div",{staticClass:"email-template-form"},[a("label",{staticStyle:{float:"left","line-height":"30px","margin-bottom":"0","margin-right":"8px"},attrs:{for:"language-select"}},[t._v(t._s(t.$t("emailTemplate.tips")))]),a("zm-select",{staticStyle:{width:"150px"},attrs:{id:"language-select"},on:{change:t.formDataChange},model:{value:t.language,callback:function(e){t.language=e},expression:"language"}},t._l(t.languageList,(function(t){return a("zm-option",{key:t.value,attrs:{"option-id":t.value,label:t.label,value:t.value}})})),1),t.readonly?t._e():a("zm-button",{staticClass:"mgl-md",attrs:{type:"icon",icon:"zm-icon-edit","aria-label":t.$t("common.edit")},on:{click:function(e){t.showModal=!0}}})],1),a("p",[0===t.sendEmailStatus?a("zm-button",{attrs:{type:"link"},on:{click:t.sendEmail}},[t._v("\n          "+t._s(t.$t("emailTemplate.preview"))+"\n        ")]):1===t.sendEmailStatus?a("span",{staticClass:"btn",staticStyle:{"padding-left":"0",color:"#626275"}},[t._v(t._s(t.$t("emailTemplate.sending")))]):a("span",{staticClass:"btn",staticStyle:{"padding-left":"0",color:"#626275"}},[t._v(t._s(t.$t("emailTemplate.sent")))])],1),a("zm-dialog",{attrs:{visible:t.showModal,width:"600px",title:t.$t("emailTemplate.dialogTitle")},on:{"update:visible":function(e){t.showModal=e}}},[a("div",{ref:"emailTemplate",staticClass:"emailTemplate",domProps:{innerHTML:t._s(t.emailTemplateString)}}),a("zm-input",{ref:"moreContent",staticClass:"mgt-md",attrs:{type:"textarea",placeholder:t.$t("emailTemplate.placeholder")},model:{value:t.moreContent,callback:function(e){t.moreContent=e},expression:"moreContent"}}),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("zm-button",{attrs:{focusFirst:"",type:"primary",loading:t.loading},on:{click:t.save}},[t._v(t._s(t.$t("common.save")))]),a("zm-button",{attrs:{plain:""},on:{click:t.cancel}},[t._v(t._s(t.$t("common.cancel")))])],1)],1)],1)])])},n=[],i=a("365c"),l=a("a78e"),o=a.n(l),c={name:"emailTemplate",props:["readonly"],inject:["dataModel"],data:function(){return{language:"",languageList:[],showModal:!1,moreContent:"",loading:!1,sendEmailStatus:0,emailTemplateString:""}},created:function(){this.languageList=this.dataModel._i18nlanguages||[]},methods:{sendEmail:function(){var t=this;this.sendEmailStatus=1,Object(i["wb"])({userId:this.dataModel.objectId,language:this.language}).then((function(){t.sendEmailStatus=2,t.$message({message:t.$t("emailTemplate.sendSuccess"),type:"success",duration:2800}),setTimeout((function(){t.sendEmailStatus=0}),3e3)})).catch((function(e){t.sendEmailStatus=0,t.$message({message:e.message||t.$t("emailTemplate.sendFailed"),type:"error",duration:2800})}))},formDataChange:function(){var t=this;Object(i["E"])({userId:this.dataModel.objectId,language:this.language}).then((function(e){t.emailTemplateString=e&&e.emailSection,t.moreContent=e&&e.moreContentSection}))},edit:function(){this.showModal=!0},save:function(){var t=this;this.loading=!0;var e={userId:this.dataModel.objectId,language:this.language,moreContent:this.moreContent.trim()};Object(i["Ab"])(e).then((function(e){t.$message({message:t.$t("emailTemplate.updateSuccess"),type:"success",duration:2800}),t.showModal=!1,t.loading=!1})).catch((function(e){t.loading=!1,t.$message({message:e.message||t.$t("common.saveFailed"),type:"error",duration:2800})}))},cancel:function(){this.showModal=!1,this.loading=!1}},mounted:function(){var t=this,e=o.a.get("_zm_lang"),a=this.languageList.some((function(t){return t.value===e}));this.cookieLang=e&&a?e:"en-US",this.$nextTick((function(){t.language=t.cookieLang})),this.formDataChange()}},m=c,r=(a("fac4"),a("2877")),u=Object(r["a"])(m,s,n,!1,null,"1126fd98",null);e["default"]=u.exports},f66c:function(t,e,a){},fac4:function(t,e,a){"use strict";var s=a("f66c"),n=a.n(s);n.a}}]);