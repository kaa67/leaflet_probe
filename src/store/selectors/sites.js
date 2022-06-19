import { createSelector } from "@reduxjs/toolkit";

const sites = state => state.sites;

export const sitesListSelector = createSelector(
  sites,
  sites => sites.list,
);

export const sitesInProgressSelector = createSelector(
  sites,
  sites => sites.inProgress,
);
