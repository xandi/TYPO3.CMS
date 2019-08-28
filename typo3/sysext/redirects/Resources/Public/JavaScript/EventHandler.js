/*
 * This file is part of the TYPO3 CMS project.
 *
 * It is free software; you can redistribute it and/or modify it under
 * the terms of the GNU General Public License, either version 2
 * of the License, or any later version.
 *
 * For the full copyright and license information, please read the
 * LICENSE.txt file that was distributed with this source code.
 *
 * The TYPO3 project - inspiring people to share!
 */
var __awaiter=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(i,o){function a(e){try{c(n.next(e))}catch(e){o(e)}}function s(e){try{c(n.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,s)}c((n=n.apply(e,t||[])).next())}))};define(["require","exports","TYPO3/CMS/Core/Ajax/AjaxRequest","TYPO3/CMS/Backend/Notification","TYPO3/CMS/Backend/ActionButton/DeferredAction"],(function(e,t,r,n,i){"use strict";return new class{constructor(){document.addEventListener("typo3:redirects:slugChanged",e=>this.onSlugChanged(e.detail))}onSlugChanged(e){let t=[];const r=e.correlations;e.autoUpdateSlugs&&t.push({label:TYPO3.lang["notification.redirects.button.revert_update"],action:new i(()=>this.revert([r.correlationIdSlugUpdate,r.correlationIdRedirectCreation]))}),e.autoCreateRedirects&&t.push({label:TYPO3.lang["notification.redirects.button.revert_redirect"],action:new i(()=>this.revert([r.correlationIdRedirectCreation]))});let o=TYPO3.lang["notification.slug_only.title"],a=TYPO3.lang["notification.slug_only.message"];e.autoCreateRedirects&&(o=TYPO3.lang["notification.slug_and_redirects.title"],a=TYPO3.lang["notification.slug_and_redirects.message"]),n.info(o,a,0,t)}revert(e){const t=new r(TYPO3.settings.ajaxUrls.redirects_revert_correlation).withQueryArguments({correlation_ids:e}).get();return t.then(e=>__awaiter(this,void 0,void 0,(function*(){const t=yield e.resolve();"ok"===t.status&&n.success(t.title,t.message),"error"===t.status&&n.error(t.title,t.message)}))).catch(()=>{n.error(TYPO3.lang.redirects_error_title,TYPO3.lang.redirects_error_message)}),t}}}));