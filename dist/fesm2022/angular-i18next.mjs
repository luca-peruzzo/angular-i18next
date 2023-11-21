import * as i0 from '@angular/core';
import { InjectionToken, Injectable, Pipe, Inject, Optional, NgModule } from '@angular/core';
import * as i18n from 'i18next';
import { Subject, BehaviorSubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';
import { Title } from '@angular/platform-browser';

const I18NEXT_SCOPE = new InjectionToken('I18NEXT_SCOPE');
const I18NEXT_NAMESPACE = new InjectionToken('I18NEXT_NAMESPACE');
const I18NEXT_SERVICE = new InjectionToken('I18NEXT_SERVICE');
const I18NEXT_NAMESPACE_RESOLVER = new InjectionToken('I18NEXT_NAMESPACE_RESOLVER');
const I18NEXT_ERROR_HANDLING_STRATEGY = new InjectionToken('I18NEXT_ERROR_HANDLING_STRATEGY');
const I18NEXT_INSTANCE = new InjectionToken('I18NEXT_INSTANCE');

class I18NextPipe {
    translateI18Next;
    ns;
    scope;
    constructor(translateI18Next, ns, scope) {
        this.translateI18Next = translateI18Next;
        this.ns = ns;
        this.scope = scope;
    }
    transform(key, options) {
        options = this.prepareOptions(options);
        let i18nOpts = this.translateI18Next.options;
        if (options.prependScope === undefined || options.prependScope === true) {
            if (this.scope) {
                key = this.prependScope(key, this.scope, i18nOpts.keySeparator, i18nOpts.nsSeparator);
            }
        }
        if (options.prependNamespace === undefined ||
            options.prependNamespace === true) {
            if (this.ns) {
                key = this.prependNamespace(key, this.ns, i18nOpts.nsSeparator);
            }
        }
        let result = this.translateI18Next.t(key, options);
        if (options.format) {
            if (result) {
                result = this.translateI18Next.format(result, options.format, this.translateI18Next.language);
            }
        }
        return result ?? '';
    }
    prependScope(key, scope, keySeparator, nsSeparator) {
        const nsSep = nsSeparator || '';
        const keySep = keySeparator || '';
        if (typeof key === 'string') {
            key = [key];
        }
        if (typeof scope === 'string') {
            scope = [scope];
        }
        let keysWithScope = [];
        for (let i = 0; i < key.length; i++) {
            const k = key[i];
            if (!this.keyContainsNsSeparator(k, nsSep)) {
                // Do not set scope, if key contains a namespace
                keysWithScope.push(...scope.map((sc) => this.joinStrings(keySep, sc, k)));
            }
            keysWithScope.push(k);
        }
        return keysWithScope;
    }
    prependNamespace(key, ns, nsSeparator) {
        const nsSep = nsSeparator || '';
        if (typeof key === 'string') {
            key = [key];
        }
        if (typeof ns === 'string') {
            ns = [ns];
        }
        let keysWithNamespace = [];
        for (let i = 0; i < key.length; i++) {
            const k = key[i];
            if (!this.keyContainsNsSeparator(k, nsSep)) {
                // Do not set namespace, if key contains a namespace
                keysWithNamespace.push(...ns.map((n) => this.joinStrings(nsSep, n, k)));
            }
            keysWithNamespace.push(k);
        }
        return keysWithNamespace;
    }
    joinStrings(separator, ...str) {
        return [...str].join(separator);
    }
    keyContainsNsSeparator(key, nsSeparator) {
        return key.indexOf(nsSeparator) !== -1;
    }
    prepareOptions(options) {
        options = options || {};
        if (options.context != null)
            options.context = options.context.toString();
        return options;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.3", ngImport: i0, type: I18NextPipe, deps: [{ token: I18NEXT_SERVICE }, { token: I18NEXT_NAMESPACE }, { token: I18NEXT_SCOPE }], target: i0.ɵɵFactoryTarget.Pipe });
    static ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "17.0.3", ngImport: i0, type: I18NextPipe, name: "i18next" });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.0.3", ngImport: i0, type: I18NextPipe });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.3", ngImport: i0, type: I18NextPipe, decorators: [{
            type: Injectable
        }, {
            type: Pipe,
            args: [{
                    name: 'i18next',
                }]
        }], ctorParameters: () => [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [I18NEXT_SERVICE]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [I18NEXT_NAMESPACE]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [I18NEXT_SCOPE]
                }] }] });

class I18NextCapPipe extends I18NextPipe {
    constructor(translateI18Next, ns, scope) {
        super(translateI18Next, ns, scope);
    }
    transform(key, options) {
        options = options || {};
        options.format = 'cap';
        return super.transform(key, options);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.3", ngImport: i0, type: I18NextCapPipe, deps: [{ token: I18NEXT_SERVICE }, { token: I18NEXT_NAMESPACE }, { token: I18NEXT_SCOPE }], target: i0.ɵɵFactoryTarget.Pipe });
    static ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "17.0.3", ngImport: i0, type: I18NextCapPipe, name: "i18nextCap" });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.0.3", ngImport: i0, type: I18NextCapPipe });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.3", ngImport: i0, type: I18NextCapPipe, decorators: [{
            type: Injectable
        }, {
            type: Pipe,
            args: [{
                    name: 'i18nextCap',
                }]
        }], ctorParameters: () => [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [I18NEXT_SERVICE]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [I18NEXT_NAMESPACE]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [I18NEXT_SCOPE]
                }] }] });

class I18NextEagerPipe extends I18NextPipe {
    translateI18Next;
    ns;
    scope;
    cd;
    ngZone;
    lastKey;
    lastOptions;
    lastValue = '';
    ngUnsubscribe = new Subject();
    constructor(translateI18Next, ns, scope, cd, ngZone) {
        super(translateI18Next, ns, scope);
        this.translateI18Next = translateI18Next;
        this.ns = ns;
        this.scope = scope;
        this.cd = cd;
        this.ngZone = ngZone;
        translateI18Next.events.languageChanged
            .pipe(takeUntil(this.ngUnsubscribe))
            .subscribe(() => {
            this.ngZone.run(() => this.cd.markForCheck());
        });
    }
    hasKeyChanged(key) {
        return !this.lastKey || this.lastKey !== key;
    }
    hasOptionsChanged(options) {
        return this.lastOptions !== options;
    }
    transform(key, options) {
        const newKey = this.translateI18Next.language + '|' + JSON.stringify(key);
        if (this.hasKeyChanged(newKey) || this.hasOptionsChanged(options)) {
            this.lastKey = newKey;
            this.lastOptions = options;
            this.lastValue = super.transform(key, options);
        }
        return this.lastValue;
    }
    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.3", ngImport: i0, type: I18NextEagerPipe, deps: [{ token: I18NEXT_SERVICE }, { token: I18NEXT_NAMESPACE }, { token: I18NEXT_SCOPE }, { token: i0.ChangeDetectorRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Pipe });
    static ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "17.0.3", ngImport: i0, type: I18NextEagerPipe, name: "i18nextEager", pure: false });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.3", ngImport: i0, type: I18NextEagerPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'i18nextEager',
                    pure: false,
                }]
        }], ctorParameters: () => [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [I18NEXT_SERVICE]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [I18NEXT_NAMESPACE]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [I18NEXT_SCOPE]
                }] }, { type: i0.ChangeDetectorRef }, { type: i0.NgZone }] });

class NativeErrorHandlingStrategy {
    handle(resolve, reject) {
        return (err, t) => {
            let result = {
                err: err,
                t: t,
            };
            resolve(result);
        };
    }
}
class StrictErrorHandlingStrategy {
    handle(resolve, reject) {
        return (err, t) => {
            let result = {
                err: err,
                t: t,
            };
            if (!err) {
                resolve(result);
                return;
            }
            reject(err);
        };
    }
}

class I18NextFormatPipe {
    translateI18Next;
    constructor(translateI18Next) {
        this.translateI18Next = translateI18Next;
    }
    transform(value, options) {
        let opts = typeof options === 'string' ? { format: options } : options;
        return this.translateI18Next.format(value, opts.format, opts.lng);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.3", ngImport: i0, type: I18NextFormatPipe, deps: [{ token: I18NEXT_SERVICE }], target: i0.ɵɵFactoryTarget.Pipe });
    static ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "17.0.3", ngImport: i0, type: I18NextFormatPipe, name: "i18nextFormat" });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.0.3", ngImport: i0, type: I18NextFormatPipe });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.3", ngImport: i0, type: I18NextFormatPipe, decorators: [{
            type: Injectable
        }, {
            type: Pipe,
            args: [{
                    name: 'i18nextFormat',
                }]
        }], ctorParameters: () => [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [I18NEXT_SERVICE]
                }] }] });

class I18NextEvents {
    initialized = new BehaviorSubject(undefined);
    loaded = new BehaviorSubject(false);
    failedLoading = new Subject();
    missingKey = new Subject();
    added = new Subject();
    removed = new Subject();
    languageChanged = new BehaviorSubject(null);
}

const i18nextGlobal$1 = i18n.default;
class I18NextService {
    errorHandlingStrategy;
    i18next;
    events = new I18NextEvents();
    get language() {
        return this.i18next.language;
    }
    get languages() {
        return this.i18next.languages;
    }
    get options() {
        return this.i18next.options;
    }
    get modules() {
        return this.i18next.modules;
    }
    get services() {
        return this.i18next.services;
    }
    get store() {
        return this.i18next.store;
    }
    get resolvedLanguage() {
        return this.i18next.resolvedLanguage;
    }
    get isInitialized() {
        return this.i18next.isInitialized;
    }
    constructor(errorHandlingStrategy, i18nextInstance) {
        this.errorHandlingStrategy = errorHandlingStrategy;
        this.i18next = i18nextInstance ?? i18nextGlobal$1;
    }
    t(key, defaultValueOrOptions, options) {
        const hasDefault = !!defaultValueOrOptions && typeof defaultValueOrOptions === 'string';
        this.i18next.t.bind(this.i18next);
        if (hasDefault) {
            return this.i18next.t(key, defaultValueOrOptions, options);
        }
        else {
            return this.i18next.t(key, defaultValueOrOptions);
        }
    }
    use(module) {
        this.i18next.use.call(this.i18next, module);
        return this;
    }
    init(options) {
        this.subscribeEvents();
        return new Promise((resolve, reject) => {
            this.i18next.init.call(this.i18next, Object.assign({}, options ?? {}), this.errorHandlingStrategy.handle(resolve, reject));
        });
    }
    format(value, format, lng) {
        return this.i18next.format.call(this.i18next, value, format, lng, {});
    }
    exists(key, options) {
        return this.i18next.exists.call(this.i18next, key, options);
    }
    getFixedT(lng, ns, keyPrefix) {
        return this.i18next.getFixedT.call(this.i18next, lng, ns, keyPrefix);
    }
    setDefaultNamespace(ns) {
        this.i18next.setDefaultNamespace.call(this.i18next, ns);
    }
    dir(lng) {
        return this.i18next.dir.call(this.i18next, lng);
    }
    changeLanguage(lng) {
        return new Promise((resolve, reject) => {
            return this.i18next.changeLanguage.call(this.i18next, lng, this.errorHandlingStrategy.handle(resolve, reject));
        });
    }
    loadNamespaces(namespaces) {
        return new Promise((resolve, reject) => {
            this.i18next.loadNamespaces.call(this.i18next, namespaces, this.errorHandlingStrategy.handle(resolve, reject));
        });
    }
    loadLanguages(lngs) {
        return new Promise((resolve, reject) => {
            this.i18next.loadLanguages.call(this.i18next, lngs, this.errorHandlingStrategy.handle(resolve, reject));
        });
    }
    //#region resource handling
    loadResources(callback) {
        this.i18next.loadResources.call(this.i18next, callback);
    }
    getDataByLanguage(lng) {
        return this.i18next.getDataByLanguage.call(this.i18next, lng);
    }
    async reloadResources(...params) {
        await this.i18next.reloadResources.apply(this.i18next, params);
    }
    getResource(lng, ns, key, options) {
        return this.i18next.getResource.call(this.i18next, lng, ns, key, options);
    }
    addResource(lng, ns, key, value, options) {
        return this.i18next.addResource.call(this.i18next, lng, ns, key, value, options);
    }
    addResources(lng, ns, resources) {
        return this.i18next.addResources.call(this.i18next, lng, ns, resources);
    }
    addResourceBundle(lng, ns, resources, deep, overwrite) {
        return this.i18next.addResourceBundle.call(this.i18next, lng, ns, resources, deep, overwrite);
    }
    hasResourceBundle(lng, ns) {
        return this.i18next.hasResourceBundle.call(this.i18next, lng, ns);
    }
    getResourceBundle(lng, ns) {
        return this.i18next.getResourceBundle.call(this.i18next, lng, ns);
    }
    removeResourceBundle(lng, ns) {
        return this.i18next.removeResourceBundle.call(this.i18next, lng, ns);
    }
    //#endregion
    subscribeEvents() {
        this.i18next.on.call(this.i18next, 'initialized', (options) => {
            this.events.initialized.next(options);
        });
        this.i18next.on.call(this.i18next, 'loaded', (loaded) => this.events.loaded.next(loaded));
        this.i18next.on.call(this.i18next, 'failedLoading', (lng, ns, msg) => this.events.failedLoading.next({ lng, ns, msg }));
        this.i18next.on.call(this.i18next, 'languageChanged', (lng) => {
            this.events.languageChanged.next(lng);
        });
        this.i18next.on.call(this.i18next, 'missingKey', (lngs, namespace, key, res) => this.events.missingKey.next({ lngs, namespace, key, res }));
        this.i18next.on.call(this.i18next, 'added', (lng, ns) => this.events.added.next({ lng, ns }));
        this.i18next.on.call(this.i18next, 'removed', (lng, ns) => this.events.removed.next({ lng, ns }));
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.3", ngImport: i0, type: I18NextService, deps: [{ token: I18NEXT_ERROR_HANDLING_STRATEGY }, { token: I18NEXT_INSTANCE, optional: true }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.0.3", ngImport: i0, type: I18NextService });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.3", ngImport: i0, type: I18NextService, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [I18NEXT_ERROR_HANDLING_STRATEGY]
                }] }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [I18NEXT_INSTANCE]
                }] }] });

class I18NextTitle extends Title {
    i18nextPipe;
    constructor(i18nextPipe, doc) {
        super(doc);
        this.i18nextPipe = i18nextPipe;
    }
    setTitle(value) {
        return super.setTitle(this.translate(value));
    }
    translate(text) {
        return this.i18nextPipe.transform(text, { format: 'cap' });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.3", ngImport: i0, type: I18NextTitle, deps: [{ token: I18NextPipe }, { token: DOCUMENT }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.0.3", ngImport: i0, type: I18NextTitle });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.3", ngImport: i0, type: I18NextTitle, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: I18NextPipe }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }] });

function resolver(activatedRouteSnapshot, routerStateSnapshot) {
    let namespaces = [];
    namespaces =
        (activatedRouteSnapshot.data &&
            activatedRouteSnapshot.data.i18nextNamespaces) ||
            namespaces;
    // @ts-ignore
    return this.loadNamespaces(namespaces.filter((n) => n));
}
function i18nextNamespaceResolverFactory(i18next) {
    return resolver.bind(i18next);
}
const i18nextGlobal = i18n.default;
class I18NextModule {
    static forRoot(params = {}) {
        return {
            ngModule: I18NextModule,
            providers: [{
                    provide: I18NEXT_INSTANCE,
                    useValue: i18nextGlobal,
                },
                {
                    provide: I18NEXT_SERVICE,
                    useFactory: (errHandle, i18nextInstance) => new I18NextService(errHandle, i18nextInstance),
                    deps: [
                        I18NEXT_ERROR_HANDLING_STRATEGY,
                        I18NEXT_INSTANCE
                    ]
                },
                {
                    provide: I18NEXT_ERROR_HANDLING_STRATEGY,
                    useClass: params.errorHandlingStrategy || NativeErrorHandlingStrategy,
                },
                I18NextService,
                I18NextPipe,
                I18NextCapPipe,
                I18NextFormatPipe,
                I18NextTitle,
                I18NextEagerPipe,
                {
                    provide: I18NEXT_NAMESPACE_RESOLVER,
                    useFactory: i18nextNamespaceResolverFactory,
                    deps: [I18NEXT_SERVICE],
                },],
        };
    }
    static interpolationFormat(customFormat = null) {
        function formatDelegate(value, format, lng, options) {
            let formatedValue = defaultInterpolationFormat(value, format, lng);
            if (customFormat === null)
                return formatedValue;
            return customFormat(formatedValue, format, lng);
        }
        return formatDelegate;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.3", ngImport: i0, type: I18NextModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.0.3", ngImport: i0, type: I18NextModule, declarations: [I18NextPipe,
            I18NextCapPipe,
            I18NextFormatPipe,
            I18NextEagerPipe], exports: [I18NextPipe, I18NextCapPipe, I18NextFormatPipe, I18NextEagerPipe] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.0.3", ngImport: i0, type: I18NextModule, providers: [
            {
                provide: I18NEXT_NAMESPACE,
                useValue: '',
            },
            {
                provide: I18NEXT_SCOPE,
                useValue: '',
            },
            I18NextPipe,
            I18NextCapPipe,
            I18NextFormatPipe,
            I18NextTitle,
            I18NextEagerPipe,
        ] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.3", ngImport: i0, type: I18NextModule, decorators: [{
            type: NgModule,
            args: [{
                    providers: [
                        {
                            provide: I18NEXT_NAMESPACE,
                            useValue: '',
                        },
                        {
                            provide: I18NEXT_SCOPE,
                            useValue: '',
                        },
                        I18NextPipe,
                        I18NextCapPipe,
                        I18NextFormatPipe,
                        I18NextTitle,
                        I18NextEagerPipe,
                    ],
                    declarations: [
                        I18NextPipe,
                        I18NextCapPipe,
                        I18NextFormatPipe,
                        I18NextEagerPipe,
                    ],
                    exports: [I18NextPipe, I18NextCapPipe, I18NextFormatPipe, I18NextEagerPipe],
                }]
        }] });
function defaultInterpolationFormat(value, format, lng) {
    if (!value)
        return value;
    switch (format) {
        case 'upper':
        case 'uppercase':
            return value.toUpperCase();
        case 'lower':
        case 'lowercase':
            return value.toLowerCase();
        case 'cap':
        case 'capitalize':
            return value.charAt(0).toUpperCase() + value.slice(1);
        case null:
        case undefined:
        case 'none':
        default:
            return value;
    }
}

/**
 * Generated bundle index. Do not edit.
 */

export { I18NEXT_ERROR_HANDLING_STRATEGY, I18NEXT_INSTANCE, I18NEXT_NAMESPACE, I18NEXT_NAMESPACE_RESOLVER, I18NEXT_SCOPE, I18NEXT_SERVICE, I18NextCapPipe, I18NextEagerPipe, I18NextEvents, I18NextFormatPipe, I18NextModule, I18NextPipe, I18NextService, I18NextTitle, NativeErrorHandlingStrategy, StrictErrorHandlingStrategy, defaultInterpolationFormat, i18nextNamespaceResolverFactory, resolver };
//# sourceMappingURL=angular-i18next.mjs.map
