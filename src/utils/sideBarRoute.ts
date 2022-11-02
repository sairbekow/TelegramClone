import LeftColumn from '@/components/leftColumn'
import { Settings } from '@/components/Settings'
import { EditProfile } from '@/components/Settings/content/EditProfile'
import { GeneralSettings } from '@/components/Settings/content/GeneralSettings'
import { FC } from 'react'
import { Notifications } from '../components/Settings/content/Notifications/index'
import { CreateFolder } from '../components/Settings/content/CreateFolder/index'
import Contacts from '@/components/contacts'
import ContactWrapper from '@/components/contacts/contactWrapper'

export enum SidebarRoute {
  Root = 'root',
  Settings = 'settings',
  GeneralSettings = 'generalSetting',
  Notifications = 'notification',
  EditProfile = 'editprofile',
  CreateFolder = 'createFolder',
  Contacts = 'contacts',
}

export interface ISideBarRoute {
  path: SidebarRoute
  component: FC
}

export const sideBarRoutes: ISideBarRoute[] = [
  {
    path: SidebarRoute.Root,
    component: LeftColumn,
  },
  {
    path: SidebarRoute.Settings,
    component: Settings,
  },
  {
    path: SidebarRoute.GeneralSettings,
    component: GeneralSettings,
  },
  {
    path: SidebarRoute.Notifications,
    component: Notifications,
  },
  {
    path: SidebarRoute.Contacts,
    component: ContactWrapper,
  },
  {
    path: SidebarRoute.EditProfile,
    component: EditProfile,
  },
  {
    path: SidebarRoute.CreateFolder,
    component: CreateFolder,
  },
]
