import { precacheAndRoute } from "workbox-precaching";
import { clientsClaim } from "workbox-core";

self.skipWaiting();
clientsClaim();

// Workbox injecteert __WB_MANIFEST tijdens build
precacheAndRoute(self.__WB_MANIFEST);
