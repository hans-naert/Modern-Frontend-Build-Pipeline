/// <reference lib="webworker" />
import { precacheAndRoute } from "workbox-precaching";
import { clientsClaim } from "workbox-core";

// Local typing so TS accepts the Workbox injected manifest placeholder.
declare const self: ServiceWorkerGlobalScope & { __WB_MANIFEST: Array<{ url: string; revision?: string }> };

self.skipWaiting();
clientsClaim();

// IMPORTANT: keep the literal `self.__WB_MANIFEST` so injectManifest can replace it.
precacheAndRoute(self.__WB_MANIFEST);
