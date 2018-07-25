import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';

export interface Intent {
  /**
   * Type of action requested by the user (See IntentActions enum)
   */
  action: string;

  /**
   * If true, you should exit the app after processing
   */
  exit: boolean;

  /**
   * Array of DataDescriptors selected by user to open with your app
   */
  items: DataDescriptor[];
}

export interface DataDescriptor {
  /**
   * MIME Type
   */
  type: string;

  /**
   * URI to the file, probably NOT a web URI
   */
  uri: string;

  /**
   * Text to share alongside the DataDescriptor (iOS Only)
   */
  text: string;

  /**
   * Suggested name of the DataDescriptor (iOS 11+ only)
   */
  name: string;

  /**
   * Path on the device, generally undefined
   */
  path: string;

  /**
   * List of UTIs the file belongs to (iOS only)
   */
  utis: string;
}

export enum VerbosityLevel {
  DEBUG = 0,
  INFO = 10,
  WARN = 20,
  ERROR = 30
}

export enum IntentActions {
  SEND = "SEND",
  VIEW = "VIEW"
}

/**
 * @name OpenWith
 * @description
 * Provides Open With/Send To registration and intent handling for your application
 *
 * @usage
 * ```typescript
 * import { OpenWith, Intent, DataDescriptor } from '@ionic-native/openwith';
 *
 * constructor(private openWith: OpenWith) {}
 *
 * ...
 *
 * this.openWith.addHandler().subscribe((intent: Intent) => {
 *   // Handle the intent
 *
 *   for (let item of intent.items) {
 *     // Work with each individual DataDescriptor (if multiple sent)
 *   }
 * });
 *
 * ```
 * @interfaces
 * Intent
 * DataDescriptor
 */
@Plugin({
  pluginName: 'OpenWith',
  plugin: 'cordova-plugin-openwith',
  pluginRef: 'cordova.openwith',
  repo: 'https://github.com/j3k0/cordova-plugin-openwith',
  platforms: ['Android', 'iOS']
})
@Injectable()
export class OpenWith extends IonicNativePlugin {
  /**
   * Event firing on Open With/Send To intent
   *
   * @returns {Observable<Intent>} Returns an Observable that notifies incoming Open With/Send To intent
   */
  @Cordova({ observable: true })
  addHandler(): Observable<Intent> {
    return;
  }

  /**
   * Change the verbosity level of the plugin (Use VerbosityLevel enum to set)
   *
   * @returns {void}
   */
  @Cordova({ sync: true })
  setVerbosityLevel(level: number): void {
    return;
  }

  /**
   * Exit the Open With/Send To intent
   *
   * @returns {void}
   */
  @Cordova({ sync: true })
  exit(): void {
    return;
  }

  /**
   * Loads an item
   *
   * @returns {Promise<void>} Returns a promise which resolves after the exit completes
   */
  @Cordova({
    successIndex: 1,
    errorIndex: 2,
    callbackStyle: "object"
  })
  load(item: DataDescriptor): Promise<void> {
    return;
  }
}
