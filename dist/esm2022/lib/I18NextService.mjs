import { Inject, Injectable, Optional } from '@angular/core';
import * as i18n from 'i18next';
import { I18NEXT_ERROR_HANDLING_STRATEGY, I18NEXT_INSTANCE } from './I18NEXT_TOKENS';
import { I18NextEvents } from './I18NextEvents';
import * as i0 from "@angular/core";
const i18nextGlobal = i18n.default;
export class I18NextService {
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
        this.i18next = i18nextInstance ?? i18nextGlobal;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSTE4TmV4dFNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL0kxOE5leHRTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEtBQUssSUFBSSxNQUFNLFNBQVMsQ0FBQztBQUVoQyxPQUFPLEVBQUUsK0JBQStCLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVyRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7O0FBTWhELE1BQU0sYUFBYSxHQUFjLElBQUksQ0FBQyxPQUFPLENBQUM7QUFHOUMsTUFBTSxPQUFPLGNBQWM7SUFxQ2Y7SUFuQ08sT0FBTyxDQUFZO0lBRXBDLE1BQU0sR0FBdUIsSUFBSSxhQUFhLEVBQUUsQ0FBQztJQUVqRCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDO0lBQy9CLENBQUM7SUFDRCxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO0lBQzlCLENBQUM7SUFFRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO0lBQzlCLENBQUM7SUFDRCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDO0lBQy9CLENBQUM7SUFDRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO0lBQzVCLENBQUM7SUFFRCxJQUFJLGdCQUFnQjtRQUNsQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENB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dUdBMU5VLGNBQWMsa0JBb0NmLCtCQUErQixhQUVuQixnQkFBZ0I7MkdBdEMzQixjQUFjOzsyRkFBZCxjQUFjO2tCQUQxQixVQUFVOzswQkFxQ04sTUFBTTsyQkFBQywrQkFBK0I7OzBCQUV0QyxRQUFROzswQkFBSSxNQUFNOzJCQUFDLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIGkxOG4gZnJvbSAnaTE4bmV4dCc7XG5cbmltcG9ydCB7IEkxOE5FWFRfRVJST1JfSEFORExJTkdfU1RSQVRFR1ksIEkxOE5FWFRfSU5TVEFOQ0UgfSBmcm9tICcuL0kxOE5FWFRfVE9LRU5TJztcbmltcG9ydCB7IEkxOE5leHRFcnJvckhhbmRsaW5nU3RyYXRlZ3kgfSBmcm9tICcuL0kxOE5leHRFcnJvckhhbmRsaW5nU3RyYXRlZ2llcyc7XG5pbXBvcnQgeyBJMThOZXh0RXZlbnRzIH0gZnJvbSAnLi9JMThOZXh0RXZlbnRzJztcbmltcG9ydCB7IEkxOE5leHRMb2FkUmVzdWx0IH0gZnJvbSAnLi9JMThOZXh0TG9hZFJlc3VsdCc7XG5pbXBvcnQgeyBJVHJhbnNsYXRpb25FdmVudHMgfSBmcm9tICcuL0lUcmFuc2xhdGlvbkV2ZW50cyc7XG5pbXBvcnQgeyBJVHJhbnNsYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9JVHJhbnNsYXRpb25TZXJ2aWNlJztcblxuXG5jb25zdCBpMThuZXh0R2xvYmFsOiBpMThuLmkxOG4gPSBpMThuLmRlZmF1bHQ7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJMThOZXh0U2VydmljZSBpbXBsZW1lbnRzIElUcmFuc2xhdGlvblNlcnZpY2Uge1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgaTE4bmV4dDogaTE4bi5pMThuO1xuXG4gIGV2ZW50czogSVRyYW5zbGF0aW9uRXZlbnRzID0gbmV3IEkxOE5leHRFdmVudHMoKTtcblxuICBnZXQgbGFuZ3VhZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuaTE4bmV4dC5sYW5ndWFnZTtcbiAgfVxuICBnZXQgbGFuZ3VhZ2VzKCkge1xuICAgIHJldHVybiB0aGlzLmkxOG5leHQubGFuZ3VhZ2VzO1xuICB9XG5cbiAgZ2V0IG9wdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaTE4bmV4dC5vcHRpb25zO1xuICB9XG5cbiAgZ2V0IG1vZHVsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaTE4bmV4dC5tb2R1bGVzO1xuICB9XG4gIGdldCBzZXJ2aWNlcygpIHtcbiAgICByZXR1cm4gdGhpcy5pMThuZXh0LnNlcnZpY2VzO1xuICB9XG4gIGdldCBzdG9yZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pMThuZXh0LnN0b3JlO1xuICB9XG5cbiAgZ2V0IHJlc29sdmVkTGFuZ3VhZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuaTE4bmV4dC5yZXNvbHZlZExhbmd1YWdlO1xuICB9XG5cbiAgZ2V0IGlzSW5pdGlhbGl6ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaTE4bmV4dC5pc0luaXRpYWxpemVkO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChJMThORVhUX0VSUk9SX0hBTkRMSU5HX1NUUkFURUdZKVxuICAgIHByaXZhdGUgZXJyb3JIYW5kbGluZ1N0cmF0ZWd5OiBJMThOZXh0RXJyb3JIYW5kbGluZ1N0cmF0ZWd5LFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoSTE4TkVYVF9JTlNUQU5DRSkgaTE4bmV4dEluc3RhbmNlPzogaTE4bi5pMThuXG4gICkge1xuICAgIHRoaXMuaTE4bmV4dCA9IGkxOG5leHRJbnN0YW5jZSA/PyBpMThuZXh0R2xvYmFsO1xuICB9XG5cbiAgdChrZXk6IHN0cmluZyB8IHN0cmluZ1tdLCBvcHRpb25zPzogKGkxOG4uVE9wdGlvbnMgJiB7IGRlZmF1bHRWYWx1ZT86IHN0cmluZyB8IHVuZGVmaW5lZDsgfSkgfCB1bmRlZmluZWQpOiBpMThuLkRlZmF1bHRUUmV0dXJuPChpMThuLlRPcHRpb25zICYgeyBkZWZhdWx0VmFsdWU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7IH0pPjtcbiAgdChrZXk6IHN0cmluZyB8IHN0cmluZ1tdIHwgKHN0cmluZyB8IFRlbXBsYXRlU3RyaW5nc0FycmF5KVtdLCBkZWZhdWx0VmFsdWU6IHN0cmluZywgb3B0aW9ucz86IChpMThuLlRPcHRpb25zICYgeyBkZWZhdWx0VmFsdWU6IHN0cmluZzsgfSkgfCB1bmRlZmluZWQpOiBpMThuLkRlZmF1bHRUUmV0dXJuPChpMThuLlRPcHRpb25zICYgeyBkZWZhdWx0VmFsdWU6IHN0cmluZzsgfSk+O1xuICB0KGtleTogdW5rbm93biwgZGVmYXVsdFZhbHVlT3JPcHRpb25zPzogdW5rbm93biwgb3B0aW9ucz86IHVua25vd24pOiBpMThuLkRlZmF1bHRUUmV0dXJuPChpMThuLlRPcHRpb25zICYgeyBkZWZhdWx0VmFsdWU6IHN0cmluZzsgfSk+IHtcbiAgICBjb25zdCBoYXNEZWZhdWx0ID0gISFkZWZhdWx0VmFsdWVPck9wdGlvbnMgJiYgdHlwZW9mIGRlZmF1bHRWYWx1ZU9yT3B0aW9ucyA9PT0gJ3N0cmluZyc7XG5cbiAgICB0aGlzLmkxOG5leHQudC5iaW5kKHRoaXMuaTE4bmV4dCk7XG4gICAgaWYgKGhhc0RlZmF1bHQpIHtcbiAgICAgIHJldHVybiB0aGlzLmkxOG5leHQudChrZXkgYXMgKHN0cmluZyB8IHN0cmluZ1tdKSwgZGVmYXVsdFZhbHVlT3JPcHRpb25zIGFzIHN0cmluZywgb3B0aW9ucyBhcyAoaTE4bi5UT3B0aW9ucyAmIHsgZGVmYXVsdFZhbHVlPzogc3RyaW5nIHwgdW5kZWZpbmVkOyB9KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmkxOG5leHQudChrZXkgYXMgKHN0cmluZyB8IHN0cmluZ1tdKSwgZGVmYXVsdFZhbHVlT3JPcHRpb25zIGFzIChpMThuLlRPcHRpb25zICYgeyBkZWZhdWx0VmFsdWU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7IH0pKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgdXNlPFQgZXh0ZW5kcyBpMThuLk1vZHVsZT4oXG4gICAgbW9kdWxlOlxuICAgIFQgfCBpMThuLk5ld2FibGVNb2R1bGU8VD4gfCBpMThuLk5ld2FibGU8VD5cbiAgKTogSVRyYW5zbGF0aW9uU2VydmljZSB7XG4gICAgdGhpcy5pMThuZXh0LnVzZS5jYWxsKHRoaXMuaTE4bmV4dCwgbW9kdWxlKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGluaXQob3B0aW9uczogaTE4bi5Jbml0T3B0aW9ucyk6IFByb21pc2U8STE4TmV4dExvYWRSZXN1bHQ+IHtcbiAgICB0aGlzLnN1YnNjcmliZUV2ZW50cygpO1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPEkxOE5leHRMb2FkUmVzdWx0PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLmkxOG5leHQuaW5pdC5jYWxsKFxuICAgICAgICB0aGlzLmkxOG5leHQsXG4gICAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMgPz8ge30pLFxuICAgICAgICB0aGlzLmVycm9ySGFuZGxpbmdTdHJhdGVneS5oYW5kbGUocmVzb2x2ZSwgcmVqZWN0KVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG5cblxuXG4gIHB1YmxpYyBmb3JtYXQodmFsdWU6IGFueSwgZm9ybWF0Pzogc3RyaW5nLCBsbmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmkxOG5leHQuZm9ybWF0LmNhbGwodGhpcy5pMThuZXh0LCB2YWx1ZSwgZm9ybWF0LCBsbmcsIHt9KTtcbiAgfVxuXG4gIHB1YmxpYyBleGlzdHMoa2V5OiBzdHJpbmcgfCBzdHJpbmdbXSwgb3B0aW9uczogYW55KSB7XG4gICAgcmV0dXJuIHRoaXMuaTE4bmV4dC5leGlzdHMuY2FsbCh0aGlzLmkxOG5leHQsIGtleSwgb3B0aW9ucyk7XG4gIH1cblxuICBnZXRGaXhlZFQobG5nOiBzdHJpbmcgfCByZWFkb25seSBzdHJpbmdbXSwgbnM/OiBzdHJpbmcgfCByZWFkb25seSBzdHJpbmdbXSwga2V5UHJlZml4Pzogc3RyaW5nKTogaTE4bi5URnVuY3Rpb247XG4gIGdldEZpeGVkVChsbmc6IG51bGwsIG5zOiBzdHJpbmcgfCByZWFkb25seSBzdHJpbmdbXSB8IG51bGwsIGtleVByZWZpeD86IHN0cmluZyk6IGkxOG4uVEZ1bmN0aW9uO1xuICBnZXRGaXhlZFQobG5nOiBhbnksIG5zPzogYW55LCBrZXlQcmVmaXg/OiBhbnkpOiBpMThuLlRGdW5jdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMuaTE4bmV4dC5nZXRGaXhlZFQuY2FsbCh0aGlzLmkxOG5leHQsIGxuZywgbnMsIGtleVByZWZpeCk7XG4gIH1cblxuICBwdWJsaWMgc2V0RGVmYXVsdE5hbWVzcGFjZShuczogc3RyaW5nKSB7XG4gICAgdGhpcy5pMThuZXh0LnNldERlZmF1bHROYW1lc3BhY2UuY2FsbCh0aGlzLmkxOG5leHQsIG5zKTtcbiAgfVxuXG4gIHB1YmxpYyBkaXIobG5nPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuaTE4bmV4dC5kaXIuY2FsbCh0aGlzLmkxOG5leHQsIGxuZyk7XG4gIH1cblxuICBwdWJsaWMgY2hhbmdlTGFuZ3VhZ2UobG5nOiBzdHJpbmcpOiBQcm9taXNlPGkxOG4uVEZ1bmN0aW9uPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPGkxOG4uVEZ1bmN0aW9uPihcbiAgICAgIChcbiAgICAgICAgcmVzb2x2ZTogKHRoZW5hYmxlT3JSZXN1bHQ6IGkxOG4uVEZ1bmN0aW9uIHwgUHJvbWlzZUxpa2U8aTE4bi5URnVuY3Rpb24+KSA9PiB2b2lkLFxuICAgICAgICByZWplY3Q6IChlcnJvcjogYW55KSA9PiB2b2lkXG4gICAgICApID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaTE4bmV4dC5jaGFuZ2VMYW5ndWFnZS5jYWxsKFxuICAgICAgICAgIHRoaXMuaTE4bmV4dCxcbiAgICAgICAgICBsbmcsXG4gICAgICAgICAgdGhpcy5lcnJvckhhbmRsaW5nU3RyYXRlZ3kuaGFuZGxlKHJlc29sdmUsIHJlamVjdClcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgcHVibGljIGxvYWROYW1lc3BhY2VzKG5hbWVzcGFjZXM6IHN0cmluZyB8IHN0cmluZ1tdKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8STE4TmV4dExvYWRSZXN1bHQ+KFxuICAgICAgKFxuICAgICAgICByZXNvbHZlOiAodGhlbmFibGVPclJlc3VsdDogSTE4TmV4dExvYWRSZXN1bHQgfCBQcm9taXNlTGlrZTxJMThOZXh0TG9hZFJlc3VsdD4pID0+IHZvaWQsXG4gICAgICAgIHJlamVjdDogKGVycm9yOiBhbnkpID0+IHZvaWRcbiAgICAgICkgPT4ge1xuICAgICAgICB0aGlzLmkxOG5leHQubG9hZE5hbWVzcGFjZXMuY2FsbChcbiAgICAgICAgICB0aGlzLmkxOG5leHQsXG4gICAgICAgICAgbmFtZXNwYWNlcyxcbiAgICAgICAgICB0aGlzLmVycm9ySGFuZGxpbmdTdHJhdGVneS5oYW5kbGUocmVzb2x2ZSwgcmVqZWN0KVxuICAgICAgICApO1xuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgbG9hZExhbmd1YWdlcyhsbmdzOiBzdHJpbmcgfCBzdHJpbmdbXSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPihcbiAgICAgIChcbiAgICAgICAgcmVzb2x2ZTogKHRoZW5hYmxlT3JSZXN1bHQ6IHZvaWQgfCBQcm9taXNlTGlrZTx2b2lkPikgPT4gdm9pZCxcbiAgICAgICAgcmVqZWN0OiAoZXJyb3I6IGFueSkgPT4gdm9pZFxuICAgICAgKSA9PiB7XG4gICAgICAgIHRoaXMuaTE4bmV4dC5sb2FkTGFuZ3VhZ2VzLmNhbGwoXG4gICAgICAgICAgdGhpcy5pMThuZXh0LFxuICAgICAgICAgIGxuZ3MsXG4gICAgICAgICAgdGhpcy5lcnJvckhhbmRsaW5nU3RyYXRlZ3kuaGFuZGxlKHJlc29sdmUsIHJlamVjdClcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgLy8jcmVnaW9uIHJlc291cmNlIGhhbmRsaW5nXG5cbiAgcHVibGljIGxvYWRSZXNvdXJjZXMoY2FsbGJhY2s/OiAoZXJyOiBhbnkpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLmkxOG5leHQubG9hZFJlc291cmNlcy5jYWxsKHRoaXMuaTE4bmV4dCwgY2FsbGJhY2spO1xuICB9XG4gIHB1YmxpYyBnZXREYXRhQnlMYW5ndWFnZShsbmc6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmkxOG5leHQuZ2V0RGF0YUJ5TGFuZ3VhZ2UuY2FsbCh0aGlzLmkxOG5leHQsIGxuZyk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgcmVsb2FkUmVzb3VyY2VzKC4uLnBhcmFtczogYW55KSB7XG4gICAgYXdhaXQgdGhpcy5pMThuZXh0LnJlbG9hZFJlc291cmNlcy5hcHBseSh0aGlzLmkxOG5leHQsIHBhcmFtcyk7XG4gIH1cblxuICBwdWJsaWMgZ2V0UmVzb3VyY2UobG5nOiBzdHJpbmcsIG5zOiBzdHJpbmcsIGtleTogc3RyaW5nLCBvcHRpb25zOiBhbnkpIHtcbiAgICByZXR1cm4gdGhpcy5pMThuZXh0LmdldFJlc291cmNlLmNhbGwodGhpcy5pMThuZXh0LCBsbmcsIG5zLCBrZXksIG9wdGlvbnMpO1xuICB9XG5cbiAgcHVibGljIGFkZFJlc291cmNlKGxuZzogc3RyaW5nLCBuczogc3RyaW5nLCBrZXk6IHN0cmluZywgdmFsdWU6IGFueSwgb3B0aW9uczogYW55KTogaTE4bi5pMThuIHtcbiAgICByZXR1cm4gdGhpcy5pMThuZXh0LmFkZFJlc291cmNlLmNhbGwodGhpcy5pMThuZXh0LCBsbmcsIG5zLCBrZXksIHZhbHVlLCBvcHRpb25zKTtcbiAgfVxuXG4gIHB1YmxpYyBhZGRSZXNvdXJjZXMobG5nOiBzdHJpbmcsIG5zOiBzdHJpbmcsIHJlc291cmNlczogYW55KTogaTE4bi5pMThuIHtcbiAgICByZXR1cm4gdGhpcy5pMThuZXh0LmFkZFJlc291cmNlcy5jYWxsKHRoaXMuaTE4bmV4dCwgbG5nLCBucywgcmVzb3VyY2VzKTtcbiAgfVxuXG4gIHB1YmxpYyBhZGRSZXNvdXJjZUJ1bmRsZShsbmc6IHN0cmluZywgbnM6IHN0cmluZywgcmVzb3VyY2VzOiBhbnksIGRlZXA6IGFueSwgb3ZlcndyaXRlOiBhbnkpOiBpMThuLmkxOG4ge1xuICAgIHJldHVybiB0aGlzLmkxOG5leHQuYWRkUmVzb3VyY2VCdW5kbGUuY2FsbChcbiAgICAgIHRoaXMuaTE4bmV4dCxcbiAgICAgIGxuZyxcbiAgICAgIG5zLFxuICAgICAgcmVzb3VyY2VzLFxuICAgICAgZGVlcCxcbiAgICAgIG92ZXJ3cml0ZVxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgaGFzUmVzb3VyY2VCdW5kbGUobG5nOiBzdHJpbmcsIG5zOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5pMThuZXh0Lmhhc1Jlc291cmNlQnVuZGxlLmNhbGwodGhpcy5pMThuZXh0LCBsbmcsIG5zKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRSZXNvdXJjZUJ1bmRsZShsbmc6IHN0cmluZywgbnM6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmkxOG5leHQuZ2V0UmVzb3VyY2VCdW5kbGUuY2FsbCh0aGlzLmkxOG5leHQsIGxuZywgbnMpO1xuICB9XG5cbiAgcHVibGljIHJlbW92ZVJlc291cmNlQnVuZGxlKGxuZzogc3RyaW5nLCBuczogc3RyaW5nKTogaTE4bi5pMThuIHtcbiAgICByZXR1cm4gdGhpcy5pMThuZXh0LnJlbW92ZVJlc291cmNlQnVuZGxlLmNhbGwodGhpcy5pMThuZXh0LCBsbmcsIG5zKTtcbiAgfVxuXG4gIC8vI2VuZHJlZ2lvblxuXG4gIHByaXZhdGUgc3Vic2NyaWJlRXZlbnRzKCkge1xuICAgIHRoaXMuaTE4bmV4dC5vbi5jYWxsKHRoaXMuaTE4bmV4dCwgJ2luaXRpYWxpemVkJywgKG9wdGlvbnM6IGkxOG4uSW5pdE9wdGlvbnMpID0+IHtcbiAgICAgIHRoaXMuZXZlbnRzLmluaXRpYWxpemVkLm5leHQob3B0aW9ucyk7XG4gICAgfSk7XG4gICAgdGhpcy5pMThuZXh0Lm9uLmNhbGwodGhpcy5pMThuZXh0LCAnbG9hZGVkJywgKGxvYWRlZDogYm9vbGVhbikgPT5cbiAgICAgIHRoaXMuZXZlbnRzLmxvYWRlZC5uZXh0KGxvYWRlZClcbiAgICApO1xuICAgIHRoaXMuaTE4bmV4dC5vbi5jYWxsKHRoaXMuaTE4bmV4dCwgJ2ZhaWxlZExvYWRpbmcnLCAobG5nOiBzdHJpbmcsIG5zOiBzdHJpbmcsIG1zZzogc3RyaW5nKSA9PlxuICAgICAgdGhpcy5ldmVudHMuZmFpbGVkTG9hZGluZy5uZXh0KHsgbG5nLCBucywgbXNnIH0pXG4gICAgKTtcbiAgICB0aGlzLmkxOG5leHQub24uY2FsbCh0aGlzLmkxOG5leHQsICdsYW5ndWFnZUNoYW5nZWQnLCAobG5nOiBzdHJpbmcpID0+IHtcbiAgICAgIHRoaXMuZXZlbnRzLmxhbmd1YWdlQ2hhbmdlZC5uZXh0KGxuZyk7XG4gICAgfSk7XG4gICAgdGhpcy5pMThuZXh0Lm9uLmNhbGwodGhpcy5pMThuZXh0LCAnbWlzc2luZ0tleScsIChsbmdzOiBzdHJpbmcsIG5hbWVzcGFjZTogc3RyaW5nLCBrZXk6IHN0cmluZywgcmVzOiBhbnkpID0+XG4gICAgICB0aGlzLmV2ZW50cy5taXNzaW5nS2V5Lm5leHQoeyBsbmdzLCBuYW1lc3BhY2UsIGtleSwgcmVzIH0pXG4gICAgKTtcbiAgICB0aGlzLmkxOG5leHQub24uY2FsbCh0aGlzLmkxOG5leHQsICdhZGRlZCcsIChsbmc6IHN0cmluZywgbnM6IHN0cmluZykgPT5cbiAgICAgIHRoaXMuZXZlbnRzLmFkZGVkLm5leHQoeyBsbmcsIG5zIH0pXG4gICAgKTtcbiAgICB0aGlzLmkxOG5leHQub24uY2FsbCh0aGlzLmkxOG5leHQsICdyZW1vdmVkJywgKGxuZzogc3RyaW5nLCBuczogc3RyaW5nKSA9PlxuICAgICAgdGhpcy5ldmVudHMucmVtb3ZlZC5uZXh0KHsgbG5nLCBucyB9KVxuICAgICk7XG4gIH1cbn1cbiJdfQ==