
##РГУПС\
`$ curl rgups.ru -I -k -L -s --User-agent "Chrome"`

```shell 
HTTP/1.1 301 Moved Permanently # Это первая строка ответа сервера, которая указывает на версию протокола HTTP и статус ответа "301 Moved Permanently". Этот статус означает, что запрошенный ресурс перемещен на постоянной основе.

Server: nginx/1.19.1 # Это HTTP-заголовок, который указывает на тип сервера и его версию. В данном случае, сервер использует программное обеспечение Nginx версии 1.19.1.

Date: Wed, 13 Sep 2023 19:22:49 GMT # Этот HTTP-заголовок содержит дату и время, когда был сделан HTTP-ответ. Это полезно для отладки и мониторинга.

Content-Type: text/html # Этот заголовок указывает на тип контента, который возвращается в ответе. В данном случае, это текст в формате HTML.

Content-Length: 169 # Этот заголовок указывает на длину (в байтах) тела ответа, то есть размер HTML-кода, который будет передан клиенту.

Connection: keep-alive # Этот заголовок указывает на метод управления соединением между клиентом и сервером. "keep-alive" означает, что соединение будет сохранено открытым для возможных последующих запросов.

Location: https://rgups.ru/ # Этот заголовок указывает на новый URL, на который был перенаправлен запрос. В данном случае, запрос был перенаправлен на "https://rgups.ru/" из-за статуса "301 Moved Permanently".


HTTP/1.1 200 OK # Это вторая строка ответа сервера, которая указывает на успешный HTTP-статус "200 OK". Этот статус означает успешное выполнение запроса.

Server: nginx/1.19.1 # Тот же самый HTTP-заголовок, который указывает на тип сервера и его версию.

Date: Wed, 13 Sep 2023 19:22:50 GMT # Тот же самый HTTP-заголовок, который указывает на дату и время ответа.

Content-Type: text/html; charset=utf-8 # Тот же самый HTTP-заголовок, который указывает на тип контента. Здесь также указывается кодировка символов (UTF-8).

Connection: keep-alive # Тот же самый HTTP-заголовок, который указывает на метод управления соединением.

X-Powered-By: ProcessWire CMS # Этот заголовок может указывать на программное обеспечение (в данном случае, Content Management System - CMS), которое используется для создания и управления сайтом.

Set-Cookie: wire=c791981a0c3a40c7c349576c2b65591c; path=/; HttpOnly; SameSite=Lax # Этот заголовок указывает на установку куки (cookie) в браузере клиента. Куки часто используются для отслеживания сеансов пользователей и другой информации.

Expires: Thu, 19 Nov 1981 08:52:00 GMT ## Этот заголовок указывает на дату и время истечения срока действия ответа. В данном случае, он устанавливается в прошлое, что означает, что ответ не должен кэшироваться.

Cache-Control: no-store, no-cache, must-revalidate # Этот заголовок указывает на инструкции по кэшированию ответа. В данном случае, ответ должен быть полностью перезагружен каждый раз и не должен кэшироваться.

Pragma: no-cache # Этот заголовок также связан с инструкциями по кэшированию и указывает, что ответ не должен кэшироваться.
```

----------------------------------------------------

##РЖД

`$ curl rzd.ru -I -k -L -s --User-agent "Chrome"`

```shell 
HTTP/1.1 301 Moved Permanently\
Date: Wed, 13 Sep 2023 19:26:05 GMT\
Content-Type: text/html\
Content-Length: 150\
Connection: keep-alive\
Location: https://rzd.ru:443/\

HTTP/1.1 301 Moved Permanently\
Content-Type: text/html\
Content-Length: 185\
Connection: keep-alive\
Date: Wed, 13 Sep 2023 19:26:06 GMT\
Location: https://www.rzd.ru/\
Set-Cookie: session-cookie=17848be2d1c361b64bd3b0b218991a243fa27dbf18dadb27adf38af88dfe71f4b8ad88de502ef29dda4e125f3e86bc13; Max-Age=86400; Path=/; secure

X-XSS-Protection: 1; mode=block #  браузер должен включить защиту от XSS-атак, и в режиме mode=block, если обнаружит попытку атаки, браузер должен блокировать выполнение скриптов на странице, чтобы предотвратить возможные уязвимости.

HTTP/1.1 200\
Content-Type: text/html;charset=utf-8\
Content-Length: 209269\
Connection: keep-alive\
Date: Wed, 13 Sep 2023 19:26:07 GMT

Vary: Accept-Encoding # Этот заголовок указывает, что сервер может изменять свой ответ в зависимости от заголовка Accept-Encoding в запросе, что может использоваться для сжатия данных.

X-UCM-Pod-Name: inex-ucm-776d97f9d-lpczs #  Этот заголовок может быть специфичным для вашего веб-приложения и может служить для идентификации или маркировки запроса.

Strict-Transport-Security: max-age=15724800; includeSubDomains # Этот заголовок указывает, что клиент (браузер) должен использовать HTTPS для взаимодействия с этим сайтом в течение 15724800 секунд (примерно 6 месяцев), и это правило распространяется на все поддомены.

Via: nginx1 # Этот заголовок указывает, что ответ был прошедшим через прокси-сервер с именем nginx1.

X-Frame-Options: sameorigin #  Этот заголовок указывает, что страницы сайта можно встраивать во фреймы (iframe) только с тем же источником (origin). Это может помочь предотвратить атаки, связанные со встраиванием вредных страниц в фреймы.

Set-Cookie: session-cookie=17848be2eb4c08fc4bd3b0b218991a240846f5670a0743b9271e680a86b5fe7b6eed3f82ce82e7f8af2de2af135f2f7c; Max-Age=86400; Path=/; secure; HttpOnly\
X-XSS-Protection: 1; mode=block
```
-------------------------------------------------------

##GITHUB

`$ curl github.com -I -k -L -s --User-agent "Chrome"`
```Shell 
HTTP/1.1 301 Moved Permanently\
Content-Length: 0\
Location: https://github.com/ 

HTTP/1.1 200 OK\
Server: GitHub.com\
Date: Wed, 13 Sep 2023 19:27:10 GMT\
Content-Type: text/html; charset=utf-8\
Vary: X-PJAX, X-PJAX-Container, Turbo-Visit, Turbo-Frame, Accept-Language, Accept-Encoding, Accept, X-Requested-With

content-language: en-US  #  Указывает язык, используемый в содержимом, - английский

ETag: W/"bc7b83063984ef12108d4bee1e1f97b5" # ETag - это идентификатор для содержимого ответа, полезный для кеширования.

Cache-Control: max-age=0, private, must-revalidate\
Strict-Transport-Security: max-age=31536000; includeSubdomains; preload\
X-Frame-Options: deny\
X-Content-Type-Options: nosniff

X-XSS-Protection: 0 #  Отключает встроенную защиту от межсайтовых скриптовых атак (XSS).

Referrer-Policy: origin-when-cross-origin, strict-origin-when-cross-origin\
Content-Security-Policy: default-src 'none'; base-uri 'self'; child-src github.com/assets-cdn/worker/ gist.github.com/assets-cdn/worker/; connect-src 'self' uploads.github.com objects-origin.githubusercontent.com www.githubstatus.com collector.github.com raw.githubusercontent.com api.github.com github-cloud.s3.amazonaws.com github-production-repository-file-5c1aeb.s3.amazonaws.com github-production-upload-manifest-file-7fdce7.s3.amazonaws.com github-production-user-asset-6210df.s3.amazonaws.com cdn.optimizely.com logx.optimizely.com/v1/events *.actions.githubusercontent.com productionresultssa0.blob.core.windows.net/ productionresultssa1.blob.core.windows.net/ productionresultssa2.blob.core.windows.net/ productionresultssa3.blob.core.windows.net/ productionresultssa4.blob.core.windows.net/ productionresultssa5.blob.core.windows.net/ productionresultssa6.blob.core.windows.net/ productionresultssa7.blob.core.windows.net/ productionresultssa8.blob.core.windows.net/ productionresultssa9.blob.core.windows.net/ wss://*.actions.githubusercontent.com github-production-repository-image-32fea6.s3.amazonaws.com github-production-release-asset-2e65be.s3.amazonaws.com insights.github.com wss://alive.github.com github.githubassets.com; font-src github.githubassets.com; form-action 'self' github.com gist.github.com objects-origin.githubusercontent.com; frame-ancestors 'none'; frame-src viewscreen.githubusercontent.com notebooks.githubusercontent.com support.github.com; img-src 'self' data: github.githubassets.com media.githubusercontent.com camo.githubusercontent.com identicons.github.com avatars.githubusercontent.com github-cloud.s3.amazonaws.com objects.githubusercontent.com objects-origin.githubusercontent.com secured-user-images.githubusercontent.com/ user-images.githubusercontent.com/ private-user-images.githubusercontent.com opengraph.githubassets.com github-production-user-asset-6210df.s3.amazonaws.com customer-stories-feed.github.com spotlights-feed.github.com *.githubusercontent.com; manifest-src 'self'; media-src github.com user-images.githubusercontent.com/ secured-user-images.githubusercontent.com/ private-user-images.githubusercontent.com github.githubassets.com; script-src github.githubassets.com; style-src 'unsafe-inline' github.githubassets.com; upgrade-insecure-requests; worker-src github.com/assets-cdn/worker/ gist.github.com/assets-cdn/worker/ # Указывает, как браузер должен устанавливать заголовок Referer при переходе на другие сайты.

Set-Cookie: _gh_sess=Iii12etFSTFzucLmKPrHpeLGB3Q9jm5S0EEoyRhKwbfWsjSbYsk26drHUGNYvA9LBEkbKpdNOMFBi3vLLuyyK9UhZ6ex3%2BqmnCetjK3E9EFS%2FoSLx4YMueBkoD2mPGR05lxR5Q8DP2jxX6tVQIwpVBFl0Kt9Ia3xpvxdaTBCCMMD1rT645hCYrfMYD2FNha6FYxi0F%2FCNDnmUkSAR7KfeSzaVcayfV17s0onLgco9uFREBRO7jgeYqpd4GEvikiFYwSADNyE3rwC20l7HBc5xg%3D%3D--ktqWWKZgTykNVt%2F0--VfqOdK9A%2BdEiMOJSz2nUnQ%3D%3D; Path=/; HttpOnly; Secure; SameSite=Lax \
Set-Cookie: _octo=GH1.1.1308100317.1694633235; Path=/; Domain=github.com; Expires=Fri, 13 Sep 2024 19:27:15 GMT; Secure; SameSite=Lax\
Set-Cookie: logged_in=no; Path=/; Domain=github.com; Expires=Fri, 13 Sep 2024 19:27:15 GMT; HttpOnly; Secure; SameSite=Lax\

Accept-Ranges: bytes # Этот заголовок указывает, что сервер поддерживает диапазоны (ranges) запросов для ресурса. Он говорит клиенту (обычно браузеру), что можно запросить только определенный диапазон байтов из этого ресурса, что может быть полезно при загрузке больших файлов. В данном случае, сервер поддерживает разделение файла на части по байту.

X-GitHub-Request-Id: FBE0:D47B:307350B:30F14CB:65020D13 # Этот заголовок предоставляет уникальный идентификатор для запроса, сгенерированный сервером GitHub.com. Это может быть полезно для отслеживания запросов и для помощи в диагностике и отладке при взаимодействии с сервером GitHub. Каждый запрос к серверу может иметь свой собственный уникальный идентификатор.
```
-----------------------------------------------------------------

##Яндекс

`$ curl yandex.ru -I -k -L -s --User-agent "Chrome"`
```shell 
HTTP/1.1 302 Moved temporarily
Accept-CH: Sec-CH-UA-Platform-Version, Sec-CH-UA-Mobile, Sec-CH-UA-Model, Sec-CH-UA, Sec-CH-UA-Full-Version-List, Sec-CH-UA-WoW64, Sec-CH-UA-Arch, Sec-CH-UA-Bitness, Sec-CH-UA-Platform, Sec-CH-UA-Full-Version, Viewport-Width, DPR, Device-Memory, RTT, Downlink, ECT
Cache-Control: max-age=1209600,private
Date: Wed, 13 Sep 2023 19:28:20 GMT
Location: https://dzen.ru/?yredirect=true
NEL: {"report_to": "network-errors", "max_age": 100, "success_fraction": 0.001, "failure_fraction": 0.1}
P3P: policyref="/w3c/p3p.xml", CP="NON DSP ADM DEV PSD IVDo OUR IND STP PHY PRE NAV UNI"
Portal: Home
Report-To: { "group": "network-errors", "max_age": 100, "endpoints": [{"url": "https://dr.yandex.net/nel", "priority": 1}, {"url": "https://dr2.yandex.net/nel", "priority": 2}]}
X-Content-Type-Options: nosniff
X-Robots-Tag: unavailable_after: 12 Sep 2022 00:00:00 PST
X-Yandex-Req-Id: 1694633300185741-100367087802913559-balancer-l7leveler-kubr-yp-vla-147-BAL-7568
set-cookie: is_gdpr=0; Path=/; Domain=.yandex.ru; Expires=Fri, 12 Sep 2025 19:28:20 GMT
set-cookie: is_gdpr_b=COj6IhCezgEoAg==; Path=/; Domain=.yandex.ru; Expires=Fri, 12 Sep 2025 19:28:20 GMT
set-cookie: _yasc=cxG8ACcNJfpvxBsewxiZt8jgANpXjA2lQwaBWhazVsK4nDgXO0IJ1iiMKgUfNMLyRodJ; domain=.yandex.ru; path=/; expires=Sat, 10 Sep 2033 19:28:20 GMT; secure

HTTP/1.1 200 Ok
Cache-Control: no-cache, no-store, max-age=0, must-revalidate
Content-Security-Policy-Report-Only: default-src 'none'; connect-src 'self' an.yandex.ru strm.yandex.ru *.strm.yandex.net mc.yandex.ru yandex.st yastatic.net matchid.adfox.yandex.ru adfox.yandex.ru ads.adfox.ru ads6.adfox.ru jstracer.yandex.ru yastat.net yandex.ru awaps.yandex.net awaps.yandex.ru verify.yandex.ru *.verify.yandex.ru favicon.yandex.net pixel.adsafeprotected.com tps.doubleverify.com ad.adriver.ru amc.yandex.ru *.tunneler-si.dzen.ru *.tun.si.dzen.ru http-check-headers.yandex.ru mc.yandex.az mc.yandex.by mc.yandex.co.il mc.yandex.com mc.yandex.com.am mc.yandex.com.ge mc.yandex.com.tr mc.yandex.ee mc.yandex.fr mc.yandex.kg mc.yandex.kz mc.yandex.lt mc.yandex.lv mc.yandex.md mc.yandex.tj mc.yandex.tm mc.yandex.ua mc.yandex.uz mc.admetrica.ru yandexmetrica.com yandexmetrica.com:29009 yandexmetrica.com:30102 forms-ext-api.yandex.ru strm.yandex.net *.strm.yandex.ru *.cdn.ngenix.net zen-rc3.yandex.ru frontend.vh.yandex.ru https://vh.test.yandex.ru/live/ wss://push.yandex.ru api.passport.yandex.ru api.passport-test.yandex.ru suggest-maps.yandex.ru/suggest-geo vk.ru static.dzeninfra.ru avatars.dzeninfra.ru cdn.dzen.ru video.dzen.ru log.dzen.ru playlog.dzen.ru cdn.dzeninfra.ru *.cdn.dzeninfra.ru *.extcdn.dzeninfra.ru *.hot-video.dzeninfra.ru cold-video.dzeninfra.ru *.cold-video.dzeninfra.ru s3.dzeninfra.ru *.s3.dzeninfra.ru *.ms.dzen.ru notify.dzen.ru clck.dzen.ru static-mon.yandex.net cloud-api.yandex.ru yandex.ru dzen.ru *.adlooxtracking.com *.adlooxtracking.ru *.adsafeprotected.com *.doubleverify.com *.moatads.com *.serving-sys.com *.serving-sys.ru *.mail.ru *.mradx.net *.imgsmail.ru *.criteo.com *.criteo.net *.mycdn.me *.vkuser.net; frame-src awaps.yandex.net yandexadexchange.net *.yandexadexchange.net yastatic.net *.yandex.ru banners.adfox.ru yastat.net yandex.ru storage.mds.yandex.net *.tunneler-si.dzen.ru *.tun.si.dzen.ru http-check-headers.yandex.ru blob: mc.yandex.ru mc.yandex.md zenadservices.net sso.passport.yandex.ru id.vk.com *.dzen.ru sso.dzen.ru static.dzeninfra.ru suggest.dzen.ru 'self' yandex.ru *.mail.ru *.mradx.net *.imgsmail.ru *.criteo.com *.criteo.net *.mycdn.me *.vkuser.net *.doubleverify.com *.doubleclick.net; img-src 'self' data: avatars-fast.yandex.net favicon.yandex.net an.yandex.ru banners.adfox.ru content.adfox.ru ads6.adfox.ru tns-counter.ru *.tns-counter.ru s3.mds.yandex.net ads.adfox.ru amc.yandex.ru mc.admetrica.ru wcm-ru.frontend.weborama.fr wcm.solution.weborama.fr ad.adriver.ru bs.serving-sys.com ad.doubleclick.net counter.yadro.ru gdeby.hit.gemius.pl mc.yandex.ru verify.yandex.ru *.verify.yandex.ru yastatic.net yastat.net avatars.mds.yandex.net yandex.ru px.moatads.com awaps.yandex.net awaps.yandex.ru gdero.hit.gemius.pl pixel.adlooxtracking.com tps.doubleverify.com impression.appsflyer.com rgi.io track.rutarget.ru ssl.hurra.com pixel.adsafeprotected.com storage.mds.yandex.net *.tunneler-si.dzen.ru *.tun.si.dzen.ru http-check-headers.yandex.ru mc.yandex.az mc.yandex.by mc.yandex.co.il mc.yandex.com mc.yandex.com.am mc.yandex.com.ge mc.yandex.com.tr mc.yandex.ee mc.yandex.fr mc.yandex.kg mc.yandex.kz mc.yandex.lt mc.yandex.lv mc.yandex.md mc.yandex.tj mc.yandex.tm mc.yandex.ua mc.yandex.uz mc.webvisor.org *.mediascope.mc.yandex.ru avatars.mdst.yandex.net zen.s3.yandex.net strm.yandex.ru strm.yandex.net sso.passport.yandex.ru dzen.ru avatars.dzeninfra.ru static.dzeninfra.ru cdn.dzen.ru video.dzen.ru log.dzen.ru playlog.dzen.ru s3.dzeninfra.ru *.ms.dzen.ru *.s3.dzeninfra.ru *.zen.yandex.com *.m-counter.ru www.m-counter.ru www.tns-counter.ru *.mail.ru *.mradx.net *.imgsmail.ru *.criteo.com *.criteo.net *.mycdn.me *.vkuser.net *.doubleverify.com *.adsafeprotected.com *.serving-sys.com *.serving-sys.ru *.weborama.fr *.weborama-tech.ru *.hit.gemius.pl consentmanager.mgr.consensu.org cdn.consentmanager.mgr.consensu.org *.adlooxtracking.com *.adlooxtracking.ru vk.com vk.ru *.userapi.com *.vk.com *.vk.ru; media-src *.yandex.net strm.yandex.ru *.strm.yandex.ru yandex.ru yandex.st yastatic.net banners.adfox.ru content.adfox.ru data: yastat.net *.mycdn.me *.vkuser.net *.tunneler-si.dzen.ru *.tun.si.dzen.ru http-check-headers.yandex.ru blob: *.strm.yandex.net *.cdn.ngenix.net cdn.dzen.ru video.dzen.ru *.cdn.dzeninfra.ru *.extcdn.dzeninfra.ru *.hot-video.dzeninfra.ru cold-video.dzeninfra.ru *.cold-video.dzeninfra.ru *.s3.dzeninfra.ru *.mail.ru *.mradx.net *.imgsmail.ru *.criteo.com *.criteo.net; script-src 'unsafe-inline' 'unsafe-eval' an.yandex.ru yandex.st yastatic.net mc.yandex.ru banners.adfox.ru ads.adfox.ru ads6.adfox.ru yastat.net yandex.ru z.moatads.com storage.mds.yandex.net *.tunneler-si.dzen.ru *.tun.si.dzen.ru http-check-headers.yandex.ru mc.yandex.az mc.yandex.by mc.yandex.co.il mc.yandex.com mc.yandex.com.am mc.yandex.com.ge mc.yandex.com.tr mc.yandex.ee mc.yandex.fr mc.yandex.kg mc.yandex.kz mc.yandex.lt mc.yandex.lv mc.yandex.md mc.yandex.tj mc.yandex.tm mc.yandex.ua mc.yandex.uz chat.s3.yandex.net sso.dzen.ru sso.passport.yandex.ru static.dzeninfra.ru 'self' *.zen.yandex.com dzen.ru *.mail.ru *.mradx.net *.imgsmail.ru *.criteo.com *.criteo.net *.mycdn.me *.vkuser.net *.adlooxtracking.com *.adlooxtracking.ru *.adsafeprotected.com *.doubleverify.com *.moatads.com *.dvtps.com *.doubleclick.net *.serving-sys.ru *.userapi.com vk.com vk.ru *.vk.com *.vk.ru; style-src 'unsafe-inline' 'unsafe-eval' yandex.st yastatic.net banners.adfox.ru content.adfox.ru yastat.net *.tunneler-si.dzen.ru *.tun.si.dzen.ru http-check-headers.yandex.ru yandex.ru static.dzeninfra.ru 'self' *.zen.yandex.com dzen.ru *.mail.ru *.mradx.net *.imgsmail.ru *.criteo.com *.criteo.net *.mycdn.me *.vkuser.net; font-src 'self' data: an.yandex.ru yastatic.net yastat.net *.tunneler-si.dzen.ru *.tun.si.dzen.ru http-check-headers.yandex.ru static.dzeninfra.ru *.mail.ru *.mradx.net *.imgsmail.ru *.criteo.com *.criteo.net *.mycdn.me *.vkuser.net fonts.gstatic.com; child-src blob: mc.yandex.ru; manifest-src *.dzen.ru/manifest.webmanifest 'self'; report-uri https://csp.yandex.net/csp?from=zen_old&project=zen&yandex_login=&yandexuid=7677981321694633300&requestid=2988050248.218.1694633300546.23201&page=site_desktop;
Content-Type: text/html; charset=utf-8
Set-Cookie: _yasc=WeShm5GEouy73Jab/6HsI2dstxiVMDvecCN/acwdvmcDjRQZ83VFPbSkD+GWrHmm; domain=.dzen.ru; path=/; expires=Sat, 10 Sep 2033 19:28:20 GMT; secure

X-Content-Type-Options: nosniff # Этот заголовок предназначен для борьбы с атаками типа MIME sniffing (метод анализа MIME-типов). Значение nosniff указывает браузеру не анализировать содержимое страницы и не пытаться угадать MIME-тип, а принимать MIME-тип, указанный в заголовке Content-Type.

X-Frame-Options: deny # Этот заголовок предотвращает отображение содержимого страницы во фрейме (iframe) на других веб-сайтах. Значение deny запрещает вставку страницы в iframe на любом другом сайте, что помогает предотвратить некоторые виды атак, такие как кликджекинг.

X-Requestid: 2988050248.218.1694633300546.23201 # Этот заголовок содержит уникальный идентификатор запроса. Он может быть полезен для отслеживания и идентификации конкретного запроса на сервере.

X-XSS-Protection: 1; mode=block

X-Yandex-Req-Id: 1694633300507932-860076366083120057100109-production-app-host-sas-zen-132 # Этот заголовок содержит уникальный идентификатор запроса, который, вероятно, связан с Yandex или каким-то приложением Yandex. Он используется, чтобы идентифицировать и отслеживать запросы в системе Yandex или его связанных сервисах.
```
-------------------------------------------------------------

##Python

`$ curl python.org -I -k -L -s --User-agent "Chrome"`
```shell
HTTP/1.1 301 Moved Permanently

Connection: close # Этот заголовок указывает на то, что после этого ответа соединение будет закрыто.

Content-Length: 0
Server: Varnish

Retry-After: 0 # Этот заголовок указывает, как долго клиент должен подождать, прежде чем повторно отправить запрос. Значение 0 означает, что клиент может сразу же отправить повторный запрос.

Accept-Ranges: bytes
Date: Wed, 13 Sep 2023 19:29:17 GMT
Via: 1.1 varnish

X-Served-By: cache-fra-eddf8230022-FRA #  Этот заголовок, вероятно, указывает на то, какой кэш-сервер обработал ваш запрос. В данном случае, это кэш-сервер с идентификатором "cache-fra-eddf8230022-FRA".

X-Cache: HIT #  Этот заголовок указывает на результат кэширования. "HIT" означает, что сервер нашел запрошенные данные в своем кэше и успешно их вернул, без необходимости запроса к исходному серверу.

X-Cache-Hits: 0 # Этот заголовок указывает на количество хитов (успешных кэш-попаданий) для данного запроса. В данном случае, значение равно "0", что означает, что запрошенные данные не были найдены в кэше сервера.

X-Timer: S1694633357.490462,VS0,VE0
Location: https://www.python.org/
Strict-Transport-Security: max-age=315360000; preload

HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 50434
Server: nginx
Content-Type: text/html; charset=utf-8
X-Frame-Options: SAMEORIGIN
Via: 1.1 vegur, 1.1 varnish, 1.1 varnish
Accept-Ranges: bytes
Date: Wed, 13 Sep 2023 19:29:18 GMT
Age: 3440
X-Served-By: cache-iad-kiad7000025-IAD, cache-fra-eddf8230104-FRA
X-Cache: HIT, HIT
X-Cache-Hits: 138, 16
X-Timer: S1694633359.694382,VS0,VE0
Vary: Cookie
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
```

------------------------------------------------------

##Saint GIT

`$ curl git-scm.com -I -k -L -s --User-agent "Chrome"`
```shell
HTTP/1.1 301 Moved Permanently
Date: Wed, 13 Sep 2023 19:30:45 GMT
Connection: keep-alive
Cache-Control: max-age=3600
Expires: Wed, 13 Sep 2023 20:30:45 GMT
Location: https://git-scm.com/
Server: cloudflare
CF-RAY: 8062ce7a39a60c48-DME

HTTP/1.1 200 OK
Date: Wed, 13 Sep 2023 19:30:46 GMT
Content-Type: text/html; charset=utf-8
Connection: keep-alive
X-Frame-Options: SAMEORIGIN
X-Xss-Protection: 1; mode=block

X-Content-Type-Options: nosniff # Этот заголовок указывает браузеру не пытаться угадать тип содержимого (MIME-тип) ответа на основе его содержания. Это помогает предотвратить атаки, связанные с неверным определением типа контента.

X-Download-Options: noopen # Этот заголовок предотвращает открытие файлов загрузки во встроенных приложениях (например, в браузерных PDF-просмотрщиках), что может уменьшить потенциальные уязвимости, связанные с этими приложениями.

X-Permitted-Cross-Domain-Policies: none # Этот заголовок указывает, что политика разрешений для междоменных запросов отключена, что может уменьшить риски, связанные с междоменными атаками.

Referrer-Policy: strict-origin-when-cross-origin # тот заголовок определяет, как браузер должен передавать информацию о реферере (странице, с которой был сделан запрос) при междоменных запросах. В данном случае, он указывает на строгий режим передачи реферера, когда запросы выполняются между разными источниками.

Cache-Control: public, max-age=14400
Etag: W/"db69273d9410cbf4536e9d4b3a59685d"
X-Request-Id: 476d2e08-474c-4f3d-8503-d83ed21ae45f
X-Runtime: 0.015343
Via: 1.1 vegur
CF-Cache-Status: HIT
Age: 8442
Server: cloudflare
CF-RAY: 8062ce80b8be9da5-DME #  технические детали обработки запроса через Cloudflare.
```
------------------------------------------------------

##Jetbrains

`$ curl jetbrains.com -I -k -L -s --User-agent "Chrome"`
```shell
HTTP/1.1 301 Moved Permanently
Server: CloudFront
Date: Wed, 13 Sep 2023 19:31:53 GMT
Content-Type: text/html
Content-Length: 167
Connection: keep-alive
Location: https://jetbrains.com/
X-Cache: Redirect from cloudfront
Via: 1.1 f6020f10d519a41b0c116dad7dcb2798.cloudfront.net (CloudFront)

X-Amz-Cf-Pop: ARN54-C1 # Этот заголовок указывает на точку присутствия (POP) CloudFront, которая обслуживает данный запрос. ARN54-C1 - это идентификатор POP, и он может указывать на конкретный сервер CloudFront, который обрабатывает запрос клиента.

Alt-Svc: h3=":443"; ma=86400 # Этот заголовок предоставляет альтернативные способы обслуживания запроса. В данном случае, он указывает на использование HTTP/3 (h3) на порту 443 и сообщает, что этот вариант может использоваться в течение 86400 секунд (1 день). HTTP/3 - это протокол передачи данных, который обеспечивает более быструю и безопасную передачу данных через Интернет.

X-Amz-Cf-Id: jvUSqgzdFQqMdGfP4SLYRPSF3Mc1tjK2b_rBq6d_CxphNl8Ep0C_jw== #Этот заголовок содержит уникальный идентификатор запроса в рамках CloudFront. Этот идентификатор может использоваться для отслеживания и анализа конкретного запроса и его обработки через CloudFront.

HTTP/1.1 308 Found # Этот статусный код указывает, что запрошенный ресурс был временно перемещен, и клиент должен перенаправить запрос к новому адресу, сохраняя при этом исходный метод HTTP (например, GET или POST). Это подобно статусному коду 301 (Moved Permanently), но с тем отличием, что 308 требует сохранения исходного метода.

Server: CloudFront
Date: Wed, 13 Sep 2023 19:31:54 GMT
Content-Length: 0
Connection: keep-alive
Location: https://www.jetbrains.com/
Strict-Transport-Security: max-age=31536000;
X-Cache: FunctionGeneratedResponse from cloudfront
Via: 1.1 58899c559ea4c71daeb5333a74914042.cloudfront.net (CloudFront)
X-Amz-Cf-Pop: ARN54-C1
Alt-Svc: h3=":443"; ma=86400
X-Amz-Cf-Id: QRFC4s10xbByBknkllf-k4NJr6PbtKgXtfx_uCa8qPj53_6vRxSiMw==

HTTP/1.1 200 OK
Content-Type: text/html; charset=utf-8
Content-Length: 47213
Connection: keep-alive
Date: Wed, 13 Sep 2023 19:29:53 GMT
Server: nginx
X-Content-Type-Options: nosniff
Referrer-Policy: same-origin
Expires: Wed, 13 Sep 2023 19:29:53 GMT
Cache-Control: max-age=0
Pragma: no-cache
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
X-Xss-Protection: 1; mode=block
Strict-Transport-Security: max-age=31536000;
Vary: Accept-Encoding
Via: 1.1 ce3c66cc97e84e18b943362365d9ba66.cloudfront.net (CloudFront)
Alt-Svc: h3=":443"; ma=86400
Age: 121
Set-Cookie: cf_country-region=RU-KDA; Domain=jetbrains.com; Path=/; Secure
X-Cache: Hit from cloudfront
X-Amz-Cf-Pop: ARN56-P2
X-Amz-Cf-Id: 5IuDkLEMTSLHuSrRLSgZuFxqPzZHELuz5N4U8cFip_QcLH9IxZW4IA==
```
------------------------------------------------------------------

##VSCode

`$ curl code.visualstudio.com -I -k -L -s --User-agent "Chrome"`
```shell
HTTP/1.1 307 Temporary Redirect
Content-Length: 0
Location: https://code.visualstudio.com/

X-Azure-Ref: 0gA4CZQAAAAC0Tzg0pYU3SISTLzPfvoNIU1RPRURHRTE4MTQAYmU4N2RjNmQtNDBmOS00NWIwLTg4MTAtOTkxMDg3ZWY4YjI5 # Обычно этот заголовок используется для отслеживания и анализа запросов и ответов при разработке, настройке или мониторинге приложений, развернутых на платформе Azure.

Date: Wed, 13 Sep 2023 19:33:19 GMT

HTTP/1.1 200 OK
Content-Length: 50213
Content-Type: text/html; charset=utf-8
Accept-Ranges: bytes
ETag: W/"c425-XBxswsHoV0dlJCAKuBbwZ9s5rjQ"
Strict-Transport-Security: max-age=31536000; includeSubDomains
Content-Security-Policy: frame-ancestors 'self'
X-Frame-Options: SAMEORIGIN
X-XSS-Protection: 1; mode=block
X-Content-Type-Options: nosniff
X-Content-Type-Options: nosniff
X-Powered-By: ASP.NET
x-azure-ref: 0gQ4CZQAAAADMnNqo7s8FT5gxlSUl4hJlU1RPRURHRTEzMTEAYmU4N2RjNmQtNDBmOS00NWIwLTg4MTAtOTkxMDg3ZWY4YjI5
X-Cache: CONFIG_NOCACHE
Date: Wed, 13 Sep 2023 19:33:20 GMT
```
