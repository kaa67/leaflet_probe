import { createSelector } from "@reduxjs/toolkit";

import { sitesListSelector } from "./sites";

const routes = state => state.routes;

export const routesListSelector = createSelector(
    routes,
    routes => routes.list,
);

export const routesWithSiteListSelector = createSelector(
    routesListSelector,
    sitesListSelector,
    (routes, sites) => routes.map(
        route => ({
            from: sites.find(site => site.id === route.from) || route.from,
            to:  sites.find(site => site.id === route.to) || route.to,
        }),
    ),
);

export const routesInProgressSelector = createSelector(
    routes,
    routes => routes.inProgress,
);

export const modeRouteCreatorSelector = createSelector(
    routes,
    routes => routes.modeRouteCreator,
);
