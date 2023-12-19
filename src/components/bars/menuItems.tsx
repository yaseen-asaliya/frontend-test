import React from 'react';
import { RiHomeLine } from 'react-icons/ri';
import { MdOutlineLogout } from 'react-icons/md';
import UserProfileIcon from '@/assets/icons/UserProfileIcon';
import FormIcon from '@/assets/icons/FormIcon';
import TemplateIcon from '@/assets/icons/TemplateIcon';
import localization from "../../../localizationConfig"
export interface MenuItem {
  icon: React.ReactNode;
  text: string;
  action: string;
}

export const menuItems: MenuItem[] = [
  { icon: <RiHomeLine />, text: localization.main, action: localization.main },
  { icon: <TemplateIcon />, text: localization.templates, action: localization.templates },
  { icon: <FormIcon />, text: localization.forms , action: localization.forms},
  { icon: <UserProfileIcon />, text: localization.profile, action: localization.profile },
  { icon: <MdOutlineLogout />, text: localization.logout, action: localization.logout },
];

export const getPathAction = (currentPath : string) => {
  switch (currentPath) {
    case "/forms-browser":
      return localization.forms;
    case "/form-responses":
      return localization.forms;
    case "/templates-browser":
      return localization.templates;
    case "/profile":
      return localization.profile;
    case "/login":
      return localization.logout;
    default:
      return localization.main;
  }
};

export const getNavigationPath = (itemAction : string) => {
  switch (itemAction) {
    case localization.main:
      return "/dashboard";
    case localization.forms:
      return "/forms-browser";
    case localization.templates:
      return "/templates-browser";
    case localization.profile:
      return "/profile";
    case localization.logout:
      return "/login";
    default:
      return "/";
  }
};