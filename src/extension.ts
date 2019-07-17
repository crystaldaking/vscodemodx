import * as vscode from 'vscode';

let addEventListener = new vscode.CompletionItem('addEventListener', vscode.CompletionItemKind.Method);
addEventListener.documentation = new vscode.MarkdownString("_Add a plugin to the eventMap within the current execution cycle._");

let runSnippet = new vscode.CompletionItem('runSnippet',vscode.CompletionItemKind.Method);
runSnippet.sortText = 'a';
runSnippet.documentation = new vscode.MarkdownString('_Process and return the output from a PHP snippet by name._');

let getChunk = new vscode.CompletionItem('getChunk',vscode.CompletionItemKind.Method);
getChunk.documentation = new vscode.MarkdownString('_Processes and returns the output from an HTML chunk by name._');

let checkForLocks = new vscode.CompletionItem('checkForLocks', vscode.CompletionItemKind.Method);
checkForLocks.documentation = new vscode.MarkdownString('_Checks for locking on a page. A page is "locked" if another user is already viewing it. This prevents collisions._');

let checkSession = new vscode.CompletionItem('checkSession', vscode.CompletionItemKind.Method);
checkSession.documentation = new vscode.MarkdownString('_Checks to see if the user has a session in the specified context._');

let executeProcessor = new vscode.CompletionItem('executeProcessor', vscode.CompletionItemKind.Method);
const md = new vscode.MarkdownString(`Executes a specific processor. The only argument is an array, which can take the following values:
* **action** - The action to take, similar to connector handling.  
* **processors_path** - If specified, will override the default MODX processors path.  
* **location** - A prefix to load processor files from, will prepend to the action parameter. 
`);
md.isTrusted = true;
executeProcessor.documentation = md;

let getAuthenticatedUser = new vscode.CompletionItem('getAuthenticatedUser', vscode.CompletionItemKind.Method);
const descgetAuthenticatedUser = new vscode.MarkdownString(`
## modX::getAuthenticatedUser
Gets the user authenticated in the specified context.
## Syntax
`+" ```  php\n"+"unknown getAuthenticatedUser ([string $contextKey = ''])"+"\n  ```");
descgetAuthenticatedUser.isTrusted = true;
getAuthenticatedUser.documentation = descgetAuthenticatedUser;

let getCacheManager = new vscode.CompletionItem('getCacheManager', vscode.CompletionItemKind.Method);
const descgetCacheManager = new vscode.MarkdownString(`Get an extended xPDOCacheManager instance responsible for MODX caching.
\n Overrides xPDO::getCacheManager.`);
descgetCacheManager.isTrusted = true;
getCacheManager.documentation = descgetCacheManager;

let getChildIds = new vscode.CompletionItem('getChildIds', vscode.CompletionItemKind.Method);
const descgetChildIds = new vscode.MarkdownString(`Gets all of the child resource ids for a given resource.`);
descgetChildIds.isTrusted = true;
getChildIds.documentation = descgetChildIds;

let getConfig = new vscode.CompletionItem('getConfig', vscode.CompletionItemKind.Method);
const descgetConfig = new vscode.MarkdownString(`Get the configuration for the site.`);
descgetConfig.isTrusted = true;
getConfig.documentation = descgetConfig;

let getContext = new vscode.CompletionItem('getContext', vscode.CompletionItemKind.Method);
const descgetContext = new vscode.MarkdownString(`Retrieve a context by name without initializing it.
\n Within a request, contexts retrieved using this function will cache the context data into the modX::$contexts array to avoid loading the same context multiple times.`);
descgetContext.isTrusted = true;
getContext.documentation = descgetContext;

let getEventMap = new vscode.CompletionItem('getEventMap', vscode.CompletionItemKind.Method);
const descgetEventMap = new vscode.MarkdownString(`Gets a map of events and registered plugins for the specified context.`);
descgetEventMap.isTrusted = true;
getEventMap.documentation = descgetEventMap;

let getLoginUserID = new vscode.CompletionItem('getLoginUserID', vscode.CompletionItemKind.Method);
const descgetLoginUserID = new vscode.MarkdownString(`Returns the current user ID, for the current or specified context.`);
descgetLoginUserID.isTrusted = true;
getLoginUserID.documentation = descgetLoginUserID;

let getLoginUserName = new vscode.CompletionItem('getLoginUserName', vscode.CompletionItemKind.Method);
const descgetLoginUserName = new vscode.MarkdownString(`Returns the current user name, for the current or specified context.`);
descgetLoginUserName.isTrusted = true;
getLoginUserName.documentation = descgetLoginUserName;

let getParentIds = new vscode.CompletionItem('getParentIds', vscode.CompletionItemKind.Method);
const descgetParentIds = new vscode.MarkdownString(`Gets all of the parent resource ids for a given resource.`);
descgetParentIds.isTrusted = true;
getParentIds.documentation = descgetParentIds;

let getParser = new vscode.CompletionItem('getParser', vscode.CompletionItemKind.Method);
const descgetParser = new vscode.MarkdownString(`Returns an instance of modParser responsible for parsing tags in element content, performing
\n actions, returning content and/or sending other responses in the process.`);
descgetParser.isTrusted = true;
getParser.documentation = descgetParser;

let getPlaceholder = new vscode.CompletionItem('getPlaceholder', vscode.CompletionItemKind.Method);
const descgetPlaceholder = new vscode.MarkdownString(`Get a placeholder value by key.`);
descgetPlaceholder.isTrusted = true;
getPlaceholder.documentation = descgetPlaceholder;

let getRegisteredClientScripts = new vscode.CompletionItem('getRegisteredClientScripts', vscode.CompletionItemKind.Method);
const descgetRegisteredClientScripts = new vscode.MarkdownString(`Returns all registered JavaScript and HTML blocks.`);
descgetRegisteredClientScripts.isTrusted = true;
getRegisteredClientScripts.documentation = descgetRegisteredClientScripts;

let getRegisteredClientStartupScripts = new vscode.CompletionItem('getRegisteredClientStartupScripts', vscode.CompletionItemKind.Method);
const descgetRegisteredClientStartupScripts = new vscode.MarkdownString(`Returns all registered startup CSS, JavaScript, or HTML blocks.`);
descgetRegisteredClientStartupScripts.isTrusted = true;
getRegisteredClientStartupScripts.documentation = descgetRegisteredClientStartupScripts;

let getRequest = new vscode.CompletionItem('getRequest', vscode.CompletionItemKind.Method);
const descgetRequest = new vscode.MarkdownString(`Attempt to load the request handler class, if not already loaded. Defaults to modRequest.`);
descgetRequest.isTrusted = true;
getRequest.documentation = descgetRequest;

let getResponse = new vscode.CompletionItem('getResponse', vscode.CompletionItemKind.Method);
const descgetResponse = new vscode.MarkdownString(`Attempt to load the response handler class, if not already loaded. Defaults to modResponse.`);
descgetResponse.isTrusted = true;
getResponse.documentation = descgetResponse;

let getService = new vscode.CompletionItem('getService', vscode.CompletionItemKind.Method);
const descgetService = new vscode.MarkdownString(`
Load and return a named service class instance. Returns either a reference to the service class \n
instance or null if it could not be loaded. You can think of this is a simple dependency injector.\n
Note that the class is instantiated only once: subsequent calls return a reference to the stored instance.`);
descgetService.isTrusted = true;
getService.documentation = descgetService;

let getSessionState = new vscode.CompletionItem('getSessionState', vscode.CompletionItemKind.Method);
const descgetSessionState = new vscode.MarkdownString(`Returns the state of the SESSION being used by modX.`);
descgetSessionState.isTrusted = true;
getSessionState.documentation = descgetSessionState;

let getTree = new vscode.CompletionItem('getTree', vscode.CompletionItemKind.Method);
const descgetTree = new vscode.MarkdownString(`Get a site tree from a single or multiple modResource instances.`);
descgetTree.isTrusted = true;
getTree.documentation = descgetTree;

let getUser = new vscode.CompletionItem('getUser', vscode.CompletionItemKind.Method);
const descgetUser = new vscode.MarkdownString(`Get the current authenticated User and assigns it to the modX instance.`);
descgetUser.isTrusted = true;
getUser.documentation = descgetUser;

let getVersionData = new vscode.CompletionItem('getVersionData', vscode.CompletionItemKind.Method);
const descgetVersionData = new vscode.MarkdownString(`
Gets the modX core version data`);
descgetVersionData.isTrusted = true;
getVersionData.documentation = descgetVersionData;

let handleRequest = new vscode.CompletionItem('handleRequest', vscode.CompletionItemKind.Method);
const deschandleRequest = new vscode.MarkdownString(`Initialize, cleanse, and process a request made to a modX site.`);
deschandleRequest.isTrusted = true;
handleRequest.documentation = deschandleRequest;

let hasPermission = new vscode.CompletionItem('hasPermission', vscode.CompletionItemKind.Method);
const deschasPermission = new vscode.MarkdownString(`Returns true if user has the specified policy permission.
`);
deschasPermission.isTrusted = true;
hasPermission.documentation = deschasPermission;

let initialize = new vscode.CompletionItem('initialize', vscode.CompletionItemKind.Method);
const descinitialize = new vscode.MarkdownString(`
Initializes the modX engine into a Context.
This includes preparing the session, pre-loading some common classes and objects, the current site and context settings, extension packages used to override session handling, error handling, or other initialization classes.`);
descinitialize.isTrusted = true;
initialize.documentation = descinitialize;

let invokeEvent = new vscode.CompletionItem('invokeEvent', vscode.CompletionItemKind.Method);
const descinvokeEvent = new vscode.MarkdownString(`Invokes a specified Event with an optional array of parameters.`);
descinvokeEvent.isTrusted = true;
invokeEvent.documentation = descinvokeEvent;

let lexicon = new vscode.CompletionItem('lexicon', vscode.CompletionItemKind.Method);
const desclexicon = new vscode.MarkdownString(`Grabs a processed Lexicon Entry.
This may also be a modLexicon object as well, if the Lexicon has been loaded. PHP supports having objects and methods with the same name.`);
desclexicon.isTrusted = true;
lexicon.documentation = desclexicon;

let makeUrl = new vscode.CompletionItem('makeUrl', vscode.CompletionItemKind.Method);
const descmakeUrl = new vscode.MarkdownString(`Generates a URL representing a specified resource.`);
descmakeUrl.isTrusted = true;
makeUrl.documentation = descmakeUrl;

let parseChunk = new vscode.CompletionItem('parseChunk', vscode.CompletionItemKind.Method);
const descparseChunk = new vscode.MarkdownString(`Parse a chunk using an associative array of replacement variables.`);
descparseChunk.isTrusted = true;
parseChunk.documentation = descparseChunk;

let regClientCSS = new vscode.CompletionItem('regClientCSS', vscode.CompletionItemKind.Method);
const descregClientCSS = new vscode.MarkdownString(`Register CSS to be injected inside the HEAD tag of a resource.`);
descregClientCSS.isTrusted = true;
regClientCSS.documentation = descregClientCSS;

let regClientHTMLBlock = new vscode.CompletionItem('regClientHTMLBlock', vscode.CompletionItemKind.Method);
const descregClientHTMLBlock = new vscode.MarkdownString(`Register HTML to be injected before the closing BODY tag.`);
descregClientHTMLBlock.isTrusted = true;
regClientHTMLBlock.documentation = descregClientHTMLBlock;

let regClientScript = new vscode.CompletionItem('regClientScript', vscode.CompletionItemKind.Method);
const descregClientScript = new vscode.MarkdownString(`Register JavaScript to be injected before the closing BODY tag.`);
descregClientScript.isTrusted = true;
regClientScript.documentation = descregClientScript;

let regClientStartupHTMLBlock = new vscode.CompletionItem('regClientStartupHTMLBlock', vscode.CompletionItemKind.Method);
const descregClientStartupHTMLBlock = new vscode.MarkdownString(`Register HTML to be injected before the closing HEAD tag.`);
descregClientStartupHTMLBlock.isTrusted = true;
regClientStartupHTMLBlock.documentation = descregClientStartupHTMLBlock;

let regClientStartupScript = new vscode.CompletionItem('regClientStartupScript', vscode.CompletionItemKind.Method);
const descregClientStartupScript = new vscode.MarkdownString(`Register JavaScript to be injected inside the HEAD tag of a resource.`);
descregClientStartupScript.isTrusted = true;
regClientStartupScript.documentation = descregClientStartupScript;

let reloadConfig = new vscode.CompletionItem('reloadConfig', vscode.CompletionItemKind.Method);
const descreloadConfig = new vscode.MarkdownString(`Reload the config settings. Useful in cases where you've loaded some Settings dynamically.`);
descreloadConfig.isTrusted = true;
reloadConfig.documentation = descreloadConfig;

let removeAllEventListener = new vscode.CompletionItem('removeAllEventListener', vscode.CompletionItemKind.Method);
const descremoveAllEventListener = new vscode.MarkdownString(`Remove all registered events for the current request.`);
descremoveAllEventListener.isTrusted = true;
removeAllEventListener.documentation = descremoveAllEventListener;

let removeEventListener = new vscode.CompletionItem('removeEventListener', vscode.CompletionItemKind.Method);
const descremoveEventListener = new vscode.MarkdownString(`Remove an event from the eventMap so it will not be invoked.`);
descremoveEventListener.isTrusted = true;
removeEventListener.documentation = descremoveEventListener;

let runProcessor = new vscode.CompletionItem('runProcessor', vscode.CompletionItemKind.Method);
const descrunProcessor = new vscode.MarkdownString(`Loads and runs a specific processor`);
descrunProcessor.isTrusted = true;
runProcessor.documentation = descrunProcessor;

let sendError = new vscode.CompletionItem('sendError', vscode.CompletionItemKind.Method);
const descsendError = new vscode.MarkdownString(`Send the user to a type-specific core error page and halt PHP execution.`);
descsendError.isTrusted = true;
sendError.documentation = descsendError;

let sendErrorPage = new vscode.CompletionItem('sendErrorPage', vscode.CompletionItemKind.Method);
const descsendErrorPage = new vscode.MarkdownString(`Send the user to a MODX virtual error page.`);
descsendErrorPage.isTrusted = true;
sendErrorPage.documentation = descsendErrorPage;

let sendForward = new vscode.CompletionItem('sendForward', vscode.CompletionItemKind.Method);
const descsendForward = new vscode.MarkdownString(`Forwards the request to another resource without changing the URL. If the ID provided does not exist, sends to a 404 Error page.`);
descsendForward.isTrusted = true;
sendForward.documentation = descsendForward;

let sendRedirect = new vscode.CompletionItem('sendRedirect', vscode.CompletionItemKind.Method);
const descsendRedirect = new vscode.MarkdownString(`Sends a redirect to the specified URL using the specified method.`);
descsendRedirect.isTrusted = true;
sendRedirect.documentation = descsendRedirect;

let sendUnauthorizedPage = new vscode.CompletionItem('sendUnauthorizedPage', vscode.CompletionItemKind.Method);
const descsendUnauthorizedPage = new vscode.MarkdownString(`Send the user to the MODX unauthorized page.`);
descsendUnauthorizedPage.isTrusted = true;
sendUnauthorizedPage.documentation = descsendUnauthorizedPage;

let setDebug = new vscode.CompletionItem('setDebug', vscode.CompletionItemKind.Method);
const descsetDebug = new vscode.MarkdownString(`Sets the debugging features of the modX instance.`);
descsetDebug.isTrusted = true;
setDebug.documentation = descsetDebug;

let setPlaceholder = new vscode.CompletionItem('setPlaceholder', vscode.CompletionItemKind.Method);
const descsetPlaceholder = new vscode.MarkdownString(`Sets a Placeholder value, corresponding to the "+" syntax.`);
descsetPlaceholder.isTrusted = true;
setPlaceholder.documentation = descsetPlaceholder;

let setPlaceholders = new vscode.CompletionItem('setPlaceholders', vscode.CompletionItemKind.Method);
const descsetPlaceholders = new vscode.MarkdownString(`
Sets a collection of placeholders stored in an array or as object vars. An optional namespace parameter can be prepended to each placeholder key in the collection, to isolate the collection of placeholders.`);
descsetPlaceholders.isTrusted = true;
setPlaceholders.documentation = descsetPlaceholders;

let switchContext = new vscode.CompletionItem('switchContext', vscode.CompletionItemKind.Method);
const descswitchContext = new vscode.MarkdownString(`Switches the primary Context for the modX instance.`);
descswitchContext.isTrusted = true;
switchContext.documentation = descswitchContext;

let toPlaceholder = new vscode.CompletionItem('toPlaceholder', vscode.CompletionItemKind.Method);
const desctoPlaceholder = new vscode.MarkdownString(`Recursively validates and sets placeholders appropriate to the value type passed.`);
desctoPlaceholder.isTrusted = true;
toPlaceholder.documentation = desctoPlaceholder;

let toPlaceholders = new vscode.CompletionItem('toPlaceholders', vscode.CompletionItemKind.Method);
const desctoPlaceholders = new vscode.MarkdownString(`Sets placeholders from values stored in arrays and objects.`);
desctoPlaceholders.isTrusted = true;
toPlaceholders.documentation = desctoPlaceholders;

let unsetPlaceholder = new vscode.CompletionItem('unsetPlaceholder', vscode.CompletionItemKind.Method);
const descunsetPlaceholder = new vscode.MarkdownString(`Unsets a placeholder value by key.`);
descunsetPlaceholder.isTrusted = true;
unsetPlaceholder.documentation = descunsetPlaceholder;

let unsetPlaceholders = new vscode.CompletionItem('unsetPlaceholders', vscode.CompletionItemKind.Method);
const descunsetPlaceholders = new vscode.MarkdownString(`Unset multiple placeholders, either by prefix or an array of keys.`);
descunsetPlaceholders.isTrusted = true;
unsetPlaceholders.documentation = descunsetPlaceholders;

export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(vscode.languages.registerCompletionItemProvider({ language: 'php', scheme: 'file' }, {
		provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken) {
			let linePrefix = document.lineAt(position).text.substr(0, position.character);
			if (!linePrefix.endsWith('$modx->'))
			{
				return [
					unsetPlaceholder,
					unsetPlaceholders,
					toPlaceholders,
					toPlaceholder,
					switchContext,
					setPlaceholders,
					setPlaceholder,
					setDebug,
					sendUnauthorizedPage,
					sendRedirect,
					sendForward,
					sendErrorPage,
					sendError,
					runProcessor,
					removeEventListener,
					removeAllEventListener,
					reloadConfig,
					regClientStartupHTMLBlock,
					regClientStartupScript,
					regClientCSS,
					regClientScript,
					regClientHTMLBlock,
					parseChunk,
					regClientCSS,
					makeUrl,
					lexicon,
					invokeEvent,
					initialize,
					hasPermission,
					handleRequest,
					getVersionData,
					getUser,
					getTree,
					getSessionState,
					getService,
					getRequest,
					getRegisteredClientStartupScripts,
					getRegisteredClientScripts,
					getPlaceholder,
					getLoginUserName,
					getLoginUserID,
					getParentIds,
					getParser,
					getEventMap,
					getContext,
					getConfig,
					getChildIds,
					getCacheManager,
					getAuthenticatedUser,
					checkSession,
					executeProcessor,
					checkForLocks,
					getChunk,
					runSnippet,
					addEventListener
				];
				
			}
		}
		},'->'));
	}