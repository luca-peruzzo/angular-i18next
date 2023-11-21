import * as i18n from 'i18next';
import { I18NextErrorHandlingStrategy } from './I18NextErrorHandlingStrategies';
import { I18NextLoadResult } from './I18NextLoadResult';
import { ITranslationEvents } from './ITranslationEvents';
import { ITranslationService } from './ITranslationService';
import * as i0 from "@angular/core";
export declare class I18NextService implements ITranslationService {
    private errorHandlingStrategy;
    private readonly i18next;
    events: ITranslationEvents;
    get language(): string;
    get languages(): readonly string[];
    get options(): i18n.InitOptions<object>;
    get modules(): i18n.Modules;
    get services(): i18n.Services;
    get store(): i18n.ResourceStore;
    get resolvedLanguage(): string | undefined;
    get isInitialized(): boolean;
    constructor(errorHandlingStrategy: I18NextErrorHandlingStrategy, i18nextInstance?: i18n.i18n);
    t(key: string | string[], options?: (i18n.TOptions & {
        defaultValue?: string | undefined;
    }) | undefined): i18n.DefaultTReturn<(i18n.TOptions & {
        defaultValue?: string | undefined;
    })>;
    t(key: string | string[] | (string | TemplateStringsArray)[], defaultValue: string, options?: (i18n.TOptions & {
        defaultValue: string;
    }) | undefined): i18n.DefaultTReturn<(i18n.TOptions & {
        defaultValue: string;
    })>;
    use<T extends i18n.Module>(module: T | i18n.NewableModule<T> | i18n.Newable<T>): ITranslationService;
    init(options: i18n.InitOptions): Promise<I18NextLoadResult>;
    format(value: any, format?: string, lng?: string): string;
    exists(key: string | string[], options: any): boolean;
    getFixedT(lng: string | readonly string[], ns?: string | readonly string[], keyPrefix?: string): i18n.TFunction;
    getFixedT(lng: null, ns: string | readonly string[] | null, keyPrefix?: string): i18n.TFunction;
    setDefaultNamespace(ns: string): void;
    dir(lng?: string): "ltr" | "rtl";
    changeLanguage(lng: string): Promise<i18n.TFunction>;
    loadNamespaces(namespaces: string | string[]): Promise<any>;
    loadLanguages(lngs: string | string[]): Promise<void>;
    loadResources(callback?: (err: any) => void): void;
    getDataByLanguage(lng: string): {
        [key: string]: {
            [key: string]: string;
        };
    } | undefined;
    reloadResources(...params: any): Promise<void>;
    getResource(lng: string, ns: string, key: string, options: any): any;
    addResource(lng: string, ns: string, key: string, value: any, options: any): i18n.i18n;
    addResources(lng: string, ns: string, resources: any): i18n.i18n;
    addResourceBundle(lng: string, ns: string, resources: any, deep: any, overwrite: any): i18n.i18n;
    hasResourceBundle(lng: string, ns: string): boolean;
    getResourceBundle(lng: string, ns: string): any;
    removeResourceBundle(lng: string, ns: string): i18n.i18n;
    private subscribeEvents;
    static ɵfac: i0.ɵɵFactoryDeclaration<I18NextService, [null, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<I18NextService>;
}
