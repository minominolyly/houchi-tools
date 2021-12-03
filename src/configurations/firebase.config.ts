import { Analytics, getAnalytics } from "firebase/analytics";
import { FirebaseApp, FirebaseOptions, initializeApp } from "firebase/app"

export default class Firebase {
  private _firebaseOptions: FirebaseOptions = {
    apiKey: "AIzaSyDJmK8nxMz0LDRker__6N-uyBHu4cZxhQw",
    authDomain: "houchi-tools.firebaseapp.com",
    projectId: "houchi-tools",
    storageBucket: "houchi-tools.appspot.com",
    messagingSenderId: "853575763217",
    appId: "1:853575763217:web:83a6035b4428028bb778b0",
    measurementId: "G-2DYB630X8N"
  };
  private static _instance: Firebase;
  private _firebaseApp: FirebaseApp;
  private _analytics: Analytics;

  private constructor() {
    this._firebaseApp = initializeApp(this._firebaseOptions);
    this._firebaseApp.automaticDataCollectionEnabled = true;
    this._analytics = getAnalytics(this._firebaseApp);
  }

  public static get instance(): Firebase {
    if (!this._instance) {
      this._instance = new Firebase();
    }
    return this._instance;
  }

  public get firebaseApp(): FirebaseApp {
    return this._firebaseApp;
  }
  public get analytics(): Analytics {
    return this._analytics;
  }
}
