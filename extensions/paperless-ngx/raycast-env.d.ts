/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Paperless URL - URL of your self-hosted instance of Paperless-ngx */
  "paperlessURL": string,
  /** API Token - Token to query the API of your Paperless-ngx instance (can be found in admin tools). */
  "apiToken": string,
  /** Grid Mode - Display documents in Grid instead of List */
  "gridMode": boolean,
  /** Date format - Choose the date format */
  "dateFormat": "YYYY-MM-DD HH:MM" | "DD.MM.YYYY HH:MM" | "DD/MM/YYYY HH:MM" | "MM/DD/YYYY  hh:MM"
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `documentsView` command */
  export type DocumentsView = ExtensionPreferences & {}
  /** Preferences accessible in the `documentForm` command */
  export type DocumentForm = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `documentsView` command */
  export type DocumentsView = {}
  /** Arguments passed to the `documentForm` command */
  export type DocumentForm = {}
}

