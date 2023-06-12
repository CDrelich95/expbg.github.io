import{_ as r,M as a,p as i,q as l,R as t,t as e,N as n,a1 as s}from"./framework-5866ffd3.js";const d="/assets/1-079801ff.png",c="/assets/2-33823739.png",p="/assets/config-1-43da761e.png",h="/assets/config-2-c2141c48.png",u="/assets/config-3-735713f5.png",g="/assets/mod-location-1-132bf60a.png",m="/assets/add-repo-1-c0d4d22c.png",y="/assets/connect-repo-1-30831221.png",f="/assets/connect-repo-2-0eb4ba0e.png",w="/assets/add-select-modsets-1-4b3e600c.png",b="/assets/add-select-modsets-2-a84c9442.png",_="/assets/add-select-modsets-3-70ed7dfd.png",v="/assets/launcher-options-1-5c41cbb6.png",x="/assets/select-mods-1-9c27e38e.png",A="/assets/join-server-1-de475adc.png",k={},I=t("ul",null,[t("li",null,"Explain what repos are and how they work"),t("li",null,"Explain that we use ArmA3Sync for the above"),t("li",null,"Invite users to first page")],-1),S=t("h1",{id:"getting-started",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#getting-started","aria-hidden":"true"},"#"),e(" Getting started")],-1),E={class:"custom-container tip"},T=t("p",{class:"custom-container-title"},"Necessary download",-1),C={href:"https://www.java.com/en/download/",target:"_blank",rel:"noopener noreferrer"},G=t("h2",{id:"download-arma3sync-zip",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#download-arma3sync-zip","aria-hidden":"true"},"#"),e(" Download ArmA3Sync.zip")],-1),B={href:"https://www.dropbox.com/sh/0vkt7x25xahw4cd/AACHSjIijmWsI6C_Si5hVXyoa?dl=0",target:"_blank",rel:"noopener noreferrer"},j=s('<p>After extracting the compressed folder, run <strong>ArmA3Sync.exe</strong>.</p><h2 id="installation-optional" tabindex="-1"><a class="header-anchor" href="#installation-optional" aria-hidden="true">#</a> Installation (optional)</h2><p>If someone sent you the ArmA3Sync installer instead of a ZIP archive, run the installer and follow the instructions to complete the installation process. It doesn’t matter where you install ArmA3Sync, as long as you know where to find it or have a shortcut to the application.</p><ol><li><p>Extract the contents of the ZIP archive to a new folder. <img src="'+d+'" alt=""></p></li><li><p>Run <strong>ArmA3Sync.exe</strong>.</p></li></ol><p><img src="'+c+'" alt=""></p><h2 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h2><h3 id="create-a-new-profile" tabindex="-1"><a class="header-anchor" href="#create-a-new-profile" aria-hidden="true">#</a> Create a new profile</h3><p>If prompted, enter the location of your Arma 3 root directory in your Steam folder.</p><p>Otherwise, follow these instructions:</p><ol><li>Click <strong>Profiles</strong>, go to <strong>Edit</strong>.</li></ol><p><img src="'+p+'" alt=""></p><ol><li>Select <strong>New</strong>, enter a profile name (e.g. ExpBG) and click <strong>OK</strong>.</li></ol><p><img src="'+h+'" alt=""></p><ol start="3"><li>Make sure your new profile is selected before clicking <strong>OK</strong> to exit this window.</li></ol><p><img src="'+u+'" alt=""></p><h3 id="arma-3-mod-location" tabindex="-1"><a class="header-anchor" href="#arma-3-mod-location" aria-hidden="true">#</a> Arma 3 Mod Location</h3><p>In this step, you will tell ArmA3Sync to store all your ExpBG mods in the same directory as your root ArmA3 folder.</p><p>Go to the <strong>Addon Options</strong> tab, locate your Arma 3 directory in your Steam folder and click <strong>Open</strong>.</p><p><img src="'+g+'" alt=""></p><h3 id="add-a-new-repository" tabindex="-1"><a class="header-anchor" href="#add-a-new-repository" aria-hidden="true">#</a> Add a new repository</h3><p>To add a new repository, follow the steps below:</p><p>In the <strong>Repositories</strong> tab, click the <strong>blue plus</strong> button near the top-right corner. A <strong>New repository</strong> pop-up window will appear:</p><p><img src="'+m+'" alt=""></p><p>To gain access to ExpBG mods, you will have to add a few repositories first and connect to them. For ease of use, there are two sets of repositories:</p><ul><li>One set contains ITC training sessions and client-side mods</li><li>The other set contains all the remaining content, such as maps and assets used during our missions and campaigns.</li></ul><p><strong>ITC Training repository set</strong>:</p><ul><li>ftp://armasync.theexpeditionarybattlegroup.com/a3s/ExpBGCore/autoconfig</li><li>ftp://armasync.theexpeditionarybattlegroup.com/a3s/ExpBGClient/autoconfig</li></ul><p>Copy the first repository link and paste it in the <strong>Public auto-config url</strong> field, then click <strong>Import</strong>. The rest of the fields will be automatically populated. When that happens, click <strong>OK</strong>.</p><p>[gif]</p><div class="custom-container tip"><p class="custom-container-title">Optional repository</p><p>While you only need the <strong>ExpBGCore</strong> repository to complete ITC-1 training, we highly suggest you also download the <strong>ExpBGClient</strong> repository for quality-of-life improvements.</p></div><p>To prevent delays, we recommend downloading the rest of the mods from the remaining repositories only after you&#39;ve completed training.</p><p><strong>Remaining ExpBG repositories</strong>:</p><ul><li>ftp://armasync.theexpeditionarybattlegroup.com/a3s/ExpBGExtended/autoconfig</li><li>ftp://armasync.theexpeditionarybattlegroup.com/a3s/ExpBGAdditional/autoconfig</li><li>ftp://armasync.theexpeditionarybattlegroup.com/a3s/ExpBGShared/autoconfig</li></ul><h3 id="configure-and-connect-to-your-repositories" tabindex="-1"><a class="header-anchor" href="#configure-and-connect-to-your-repositories" aria-hidden="true">#</a> Configure and connect to your repositories</h3><p>Now we just need to connect to the remote repositories you&#39;ve added and download your mods.</p><p>Follow these instructions:</p><ol><li>Still in the <strong>Repositories</strong> tab, tick all the <strong>Notify</strong> and <strong>Auto</strong> boxes, then click the <strong>Connect to Repository</strong> icon.</li></ol><p><img src="'+y+'" alt=""></p><ol start="2"><li>The contents of the repository you connected to will open in a new tab. Once the check for addons in the top-left corner finishes, tick the <strong>Select All</strong> box, then click the <strong>Start/Resume</strong> button towards the left.</li></ol><p><img src="'+f+'" alt=""></p><div class="custom-container warning"><p class="custom-container-title">Mismatch error</p><p>Make sure you tick all of the file names in the <strong>Repository content</strong> tab in your repository. If you don&#39;t do this, there is a high chance that you won&#39;t download all the mods that the server requires. This will result in a &quot;mismatch error&quot;, preventing you from joining the server until you fix the issue.</p></div><p>Use the instructions on the previous page to add the remaining repositories to ArmA3Sync.</p><p>Be aware that by downloading all the mods from all the repositories will take a long time regardless of your Internet speed.</p><h3 id="add-and-select-the-modsets-you-want-to-use" tabindex="-1"><a class="header-anchor" href="#add-and-select-the-modsets-you-want-to-use" aria-hidden="true">#</a> Add and select the modsets you want to use</h3><p>In the <strong>Addons</strong> tab, click the <strong>Modsets</strong> button with a blue plus icon next to it.</p><p><img src="'+w+'" alt=""></p><p>ITC training only requires you to tick the fields from the list of events as selected above, but you can tick all the boxes if you wish.</p><p>If you won&#39;t be Zeusing any time soon, ignore Zeus tools.</p><p><img src="'+b+'" alt=""></p><p>You should see your added modsets in <strong>Addon Groups</strong>. Only tick the modsets needed for the mission you want to join.</p><p><img src="'+_+'" alt=""></p><p>You&#39;ve now added a group of pre-defined mods called a &quot;modset&quot; that you can choose from. These modsets will automatically be updated regularly. The above configuration shows what you need to enable in order to join an ITC-1 server with client-side mods enabled.</p><p>If you can&#39;t join the server due to outdated mods, try restarting ArmA3Sync. That usally works straight away. If not, go to the <strong>Addons</strong> tab, right-click the modsets in <strong>Addon Groups</strong>, remove them and then repeat the steps in this section from the beginning.</p><div class="custom-container tip"><p class="custom-container-title">Removing modsets</p><p>Removing modsets in <strong>Addon Groups</strong> only removes them from the list of mods that you can load. It doesn&#39;t delete/uninstall any mods, so don&#39;t worry, you won&#39;t have to redownload anything.</p></div><div class="custom-container warning"><p class="custom-container-title">Incorrect mods loaded</p><p>Be aware that you may be unable to join the server if one of these situations occur:</p><ul><li>You load fewer mods than the server requires</li><li>You load more mods than the server expects</li></ul><p>Only select the necessary mods being used for any given mission. Ask the guys on TS or Discord as to which modset is being used and only load that.</p><p>This does not apply to the client-side modset that can be run on nearly every mission.</p></div><h3 id="launcher-options" tabindex="-1"><a class="header-anchor" href="#launcher-options" aria-hidden="true">#</a> Launcher options</h3><p>Now let&#39;s set up ArmA3Sync to allow Arma 3 to make better use of your computer hardware.</p><p><img src="'+v+'" alt=""></p><p>You can use parts of this example setup for your own configuration. This is based on a Ryzen 5 5600X. For faster loading times, manually type <code>-skipintro</code> into <strong>Additional Parameters</strong>.</p><p>If your ArmA III Executable Location is empty, locate your <strong>arma3_x64.exe</strong> and click <strong>Select</strong>.</p><div class="custom-container warning"><p class="custom-container-title">Things to avoid</p><p>Do not tick <strong>No File Patching</strong>, <strong>Check Signatures</strong> or <strong>Auto-restart</strong>. These will either extend your mission loading time significantly, make bugfixing harder if anything goes wrong, or prevent you from joining altogether.</p></div>',61),O={href:"https://community.bistudio.com/wiki/Arma_3:_Custom_Memory_Allocator",target:"_blank",rel:"noopener noreferrer"},R=s('<p>Remember that you can always ask around on the <code>#💻general-tech-support</code> channel on Discord if you need extra help.</p><h3 id="selecting-your-mods" tabindex="-1"><a class="header-anchor" href="#selecting-your-mods" aria-hidden="true">#</a> Selecting your mods</h3><p>Simply select all the modsets that you need for a given mission. If you are told not to load a specific mod, expand the drop-down menu and untick that particular mod.</p><p>Here is an example showing what modsets you need to select to play Saturday missions:</p><p><img src="'+x+'" alt=""></p><h3 id="joining-a-server" tabindex="-1"><a class="header-anchor" href="#joining-a-server" aria-hidden="true">#</a> Joining a server</h3><p>Go to the <strong>Online</strong> tab and paste the following parameters into the <strong>Favorite servers</strong> table by clicking the <strong>Blue Plus</strong> on the right:</p><p><img src="'+A+'" alt=""></p><p>Once you have done this, you&#39;ll be able to select the server from the <strong>Join Server</strong> drop-down menu at the bottom.</p><table><thead><tr><th>Description</th><th>IP Address</th><th>Port</th><th>Password</th></tr></thead><tbody><tr><td>Campaign Server EXPBG</td><td>85.114.136.178</td><td>2302</td><td>3xpbg</td></tr><tr><td>ITC Expeditionary BattleGroup</td><td>85.114.136.178</td><td>2312</td><td>3xpbg</td></tr><tr><td>Zeus Expeditionary BattleGroup</td><td>85.114.136.178</td><td>2330</td><td>3xpbg</td></tr></tbody></table><p>Alternatively, you can click <strong>Start Game</strong> at the bottom right without selecting a server from the list and join using the Arma 3 server browser or by joining a friend via Steam.</p><h3 id="server-credentials" tabindex="-1"><a class="header-anchor" href="#server-credentials" aria-hidden="true">#</a> Server credentials</h3><p>When prompted, enter the following to join the server:</p><p><strong>Username</strong>: expbg <strong>Password</strong>: 3xpbg</p>',14);function N(P,q){const o=a("ExternalLinkIcon");return i(),l("div",null,[I,S,t("div",E,[T,t("p",null,[e("If you don’t have it already, you will need "),t("a",C,[e("Java Runtime Environment 8"),n(o)]),e(" or higher to use ArmA3Sync.")])]),G,t("p",null,[e("You can download ArmA3Sync "),t("a",B,[e("here"),n(o)]),e(". Extract the contents somewhere where they’re easy to access and ideally create a shortcut on your desktop that points to ArmA3Sync.")]),j,t("p",null,[e("You can visit "),t("a",O,[e("this wiki page"),n(o)]),e(" for more information about Malloc (custom memory allocators).")]),R])}const Y=r(k,[["render",N],["__file","index.html.vue"]]);export{Y as default};
