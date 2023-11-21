import { I18NextLoadResult } from './I18NextLoadResult';
import * as i18n from 'i18next';
export interface I18NextErrorHandlingStrategy {
    handle(resolve: (thenableOrResult?: any) => void, reject: (error: any) => void): i18n.Callback;
}
export declare class NativeErrorHandlingStrategy implements I18NextErrorHandlingStrategy {
    handle(resolve: (thenableOrResult?: I18NextLoadResult) => void, reject: (error: any) => void): (err: any, t?: Function) => void;
}
export declare class StrictErrorHandlingStrategy implements I18NextErrorHandlingStrategy {
    handle(resolve: (thenableOrResult?: I18NextLoadResult) => void, reject: (error: any) => void): (err: any, t?: any) => void;
}
