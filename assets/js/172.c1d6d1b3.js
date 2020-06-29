(window.webpackJsonp=window.webpackJsonp||[]).push([[172],{455:function(e,t,r){"use strict";r.r(t);var a=r(43),i=Object(a.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("div",{staticClass:"tip custom-block"},[r("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),r("p",[e._v("🔔 Follow us on "),r("a",{attrs:{href:"https://twitter.com/intent/follow?screen_name=code",target:"_blank",rel:"noopener noreferrer"}},[e._v("Twitter"),r("OutboundLink")],1),e._v(" for daily software updates")]),e._v(" "),r("p",[e._v("🔥 Checkout our Visual Studio Code page at "),r("a",{attrs:{href:"https://code.visualstudio.com/?WT.mc_id=other-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("code.visualstudio.com"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("💡 Learn more : "),r("a",{attrs:{href:"https://code.visualstudio.com/docs/editor/extension-gallery/?WT.mc_id=other-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Visual Studio Code Extensions"),r("OutboundLink")],1),e._v(".")])]),e._v(" "),r("h2",{attrs:{id:"overview"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),r("p",[r("strong",[e._v("Azure Functions")]),e._v(" is a Serverless component from Microsoft that allows you to create event-based functions that can be dynamically scaled to meet the demand. We can work with all kinds of events such as when a file is uploaded to storage, a message appears in the queue or a HTTP request is received.")]),e._v(" "),r("p",[e._v("Using GitHub we can take an existing application, fork it to our account and then create our own version of the application, all from within VS Code.")]),e._v(" "),r("h2",{attrs:{id:"what-s-covered-in-this-lab"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#what-s-covered-in-this-lab","aria-hidden":"true"}},[e._v("#")]),e._v(" What's covered in this lab")]),e._v(" "),r("p",[e._v("In this lab, you will:")]),e._v(" "),r("ol",[r("li",[e._v("Fork an existing Azure Functions project on GitHub")]),e._v(" "),r("li",[e._v("Learn how to create and merge branches in VS Code")]),e._v(" "),r("li",[e._v("Debug Functions with VS Code")]),e._v(" "),r("li",[e._v("Deploy Functions to Azure from VS Code")])]),e._v(" "),r("h2",{attrs:{id:"prerequisites"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites","aria-hidden":"true"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),r("ol",[r("li",[e._v("You'll need VS Code with Azure Functions extension, Node.js and the Azure Functions Core Tools npm module.")]),e._v(" "),r("li",[e._v("You are using a GitHub account and an Azure account made for the purpose of this lab. These have already been logged into your machine and the account info is saved.")])]),e._v(" "),r("h2",{attrs:{id:"setting-up-the-github-repo"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-the-github-repo","aria-hidden":"true"}},[e._v("#")]),e._v(" Setting up the GitHub repo")]),e._v(" "),r("ol",[r("li",[e._v("Navigate to the "),r("a",{attrs:{href:"https://github.com/aaronpowell/trivia-api?WT.mc_id=github-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("example app repository"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("li",[e._v('Click the "Fork" button in the upper-right hand corner of the repository.')])]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/vscode-serverless-001.png")}}),e._v(" "),r("ol",{attrs:{start:"3"}},[r("li",[e._v('From the forked repository, click the green "Clone" button and copy the URL.')])]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/vscode-serverless-002.png")}}),e._v(" "),r("ol",{attrs:{start:"4"}},[r("li",[e._v("In VS Code open the Command Pallet (Ctrl/Cmd + Shift + P) and type "),r("strong",[e._v("Git clone")]),e._v(", select the command and paste in the URL copied in step 3 and select a folder on disk to clone to.")])]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/vscode-serverless-003.png")}}),e._v(" "),r("h2",{attrs:{id:"running-and-debugging-with-vs-code"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#running-and-debugging-with-vs-code","aria-hidden":"true"}},[e._v("#")]),e._v(" Running and Debugging with VS Code")]),e._v(" "),r("ol",[r("li",[e._v('Click "Run and Debug" from the Activity Bar (Ctrl/Cmd + Shift + D)')])]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/vscode-serverless-004.png")}}),e._v(" "),r("ol",{attrs:{start:"2"}},[r("li",[e._v('Click "Start Debugging" (F5)')])]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/vscode-serverless-005.png")}}),e._v(" "),r("ol",{attrs:{start:"3"}},[r("li",[e._v("Add a breakpoint to line 4 of "),r("code",[e._v("GetAllQuestions/index.js")])]),e._v(" "),r("li",[e._v("Open a browser and navigate to http://localhost:7071/api/GetAllQuestions")]),e._v(" "),r("li",[e._v("Observe the breakpoint being hit in VS Code, then press F5 to continue execution")])]),e._v(" "),r("h2",{attrs:{id:"create-a-branch"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#create-a-branch","aria-hidden":"true"}},[e._v("#")]),e._v(" Create a branch")]),e._v(" "),r("ol",[r("li",[e._v("Click 'master' in the Status Bar and enter the name for a new branch (e.g.: update-response)")])]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/vscode-serverless-006.png")}}),e._v(" "),r("ol",{attrs:{start:"2"}},[r("li",[e._v("Edit "),r("code",[e._v("GetAllQuestions/index.js")]),e._v(" to return the question and possible answers, without indicating the correct answer")])]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/vscode-serverless-007.png")}}),e._v(" "),r("ol",{attrs:{start:"3"}},[r("li",[e._v('Click "Source Control" from the Activity Bar (Ctrl/Cmd + Shift + G) and enter a commit message for the change')])]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/vscode-serverless-008.png")}}),e._v(" "),r("h2",{attrs:{id:"update-master-branch"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#update-master-branch","aria-hidden":"true"}},[e._v("#")]),e._v(" Update master branch")]),e._v(" "),r("ol",[r("li",[e._v("Use the Status Bar to navigate back to the 'master' branch")]),e._v(" "),r("li",[e._v("Edit GetAllQuestions/index.js to only return the first 5 questions in the response")])]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/vscode-serverless-009.png")}}),e._v(" "),r("ol",{attrs:{start:"3"}},[r("li",[e._v('Click "Source Control" from the Activity Bar (Ctrl/Cmd + Shift + G) and enter a commit message for the change')]),e._v(" "),r("li",[e._v('Open the Command Pallet (Ctrl/Cmd + Shift + P) and select "Git: Merge Branch", selecting your branch from the previous exercise')]),e._v(" "),r("li",[e._v('Select "Accept incoming Changes" in the Merge Conflict window')])]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/vscode-serverless-010.png")}}),e._v(" "),r("ol",{attrs:{start:"6"}},[r("li",[e._v('Open the Command Pallet (Ctrl/Cmd + Shift + P) and select "Git: Delete Branch", selecting your branch from the previous exercise')]),e._v(" "),r("li",[e._v('Click "Source Control" from the Activity Bar (Ctrl/Cmd + Shift + G) and commit the merge to the git repo')]),e._v(" "),r("li",[e._v('Open the Command Pallet (Ctrl/Cmd + Shift + P) and select "Git: Push" to publish to GitHub')])]),e._v(" "),r("h2",{attrs:{id:"deploying-to-azure"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#deploying-to-azure","aria-hidden":"true"}},[e._v("#")]),e._v(" Deploying to Azure")]),e._v(" "),r("ol",[r("li",[e._v('Open the Command Pallet (Ctrl/Cmd + Shift + P) and select "Azure Functions: Deploy to Function App"')])]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/vscode-serverless-011.png")}}),e._v(" "),r("ol",{attrs:{start:"2"}},[r("li",[e._v("Follow the wizard providing information along the way for:")])]),e._v(" "),r("ul",[r("li",[e._v("Select your subscription")]),e._v(" "),r("li",[e._v("Function App Name (eg: YOUR_NAME-jsghfunctions)")]),e._v(" "),r("li",[e._v("Node.js runtime (12.x)")]),e._v(" "),r("li",[e._v("Azure Region (Pick one close to you, e.g.: Australia East)")])]),e._v(" "),r("ol",{attrs:{start:"3"}},[r("li",[e._v("It will take a minute or two to create the app. Once it's done, you'll get prompted with the URL of the deployed app, which you can navigate to in the browser")]),e._v(" "),r("li",[e._v("Open up the "),r("a",{attrs:{href:"https://portal.azure.com?WT.mc_id=other-azuredevstream-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Portal"),r("OutboundLink")],1),e._v(" and navigate to your subscription -> resource group -> Function App to view the deployed app in Azure")])]),e._v(" "),r("h2",{attrs:{id:"live-streaming-software-development"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#live-streaming-software-development","aria-hidden":"true"}},[e._v("#")]),e._v(" Live streaming software development")]),e._v(" "),r("p",[e._v("On a side note - If you like Azure Tips and Tricks, then you might enjoy another project that I'm working on for live streaming. Check out my channel below and hit the follow button to know when I'm live.")]),e._v(" "),r("iframe",{attrs:{src:"https://player.twitch.tv/?channel=mbcrump",frameborder:"0",allowfullscreen:"true",scrolling:"no",height:"378",width:"620"}}),r("a",{staticStyle:{padding:"2px 0px 4px",display:"block",width:"345px","font-weight":"normal","font-size":"10px","text-decoration":"underline"},attrs:{href:"https://www.twitch.tv/mbcrump?tt_content=text_link&tt_medium=live_embed"}},[e._v("Watch live video from mbcrump on www.twitch.tv")])])},[],!1,null,null,null);t.default=i.exports}}]);