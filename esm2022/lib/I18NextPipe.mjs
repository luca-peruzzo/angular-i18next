import { Inject, Injectable, Pipe } from '@angular/core';
import { I18NEXT_NAMESPACE, I18NEXT_SCOPE, I18NEXT_SERVICE } from './I18NEXT_TOKENS';
import * as i0 from "@angular/core";
export class I18NextPipe {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSTE4TmV4dFBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL0kxOE5leHRQaXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFFeEUsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixhQUFhLEVBQ2IsZUFBZSxFQUNoQixNQUFNLGtCQUFrQixDQUFDOztBQU8xQixNQUFNLE9BQU8sV0FBVztJQUVlO0lBQ0U7SUFDSjtJQUhuQyxZQUNxQyxnQkFBcUMsRUFDbkMsRUFBcUIsRUFDekIsS0FBd0I7UUFGdEIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFxQjtRQUNuQyxPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQUN6QixVQUFLLEdBQUwsS0FBSyxDQUFtQjtJQUN4RCxDQUFDO0lBRUcsU0FBUyxDQUFDLEdBQXNCLEVBQUUsT0FBcUI7UUFDNUQsT0FBTyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFdkMsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQztRQUM3QyxJQUFJLE9BQU8sQ0FBQyxZQUFZLEtBQUssU0FBUyxJQUFJLE9BQU8sQ0FBQyxZQUFZLEtBQUssSUFBSSxFQUFFO1lBQ3ZFLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDZCxHQUFHLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FDckIsR0FBRyxFQUNILElBQUksQ0FBQyxLQUFLLEVBQ1YsUUFBUSxDQUFDLFlBQVksRUFDckIsUUFBUSxDQUFDLFdBQVcsQ0FDckIsQ0FBQzthQUNIO1NBQ0Y7UUFDRCxJQUNFLE9BQU8sQ0FBQyxnQkFBZ0IsS0FBSyxTQUFTO1lBQ3RDLE9BQU8sQ0FBQyxnQkFBZ0IsS0FBSyxJQUFJLEVBQ2pDO1lBQ0EsSUFBSSxJQUFJLENBQUMsRUFBRSxFQUFFO2dCQUNY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Q0FBQyxDQUFDLENBQUMsQ0FBQztTQUMzQjtRQUNELE9BQU8saUJBQWlCLENBQUM7SUFDM0IsQ0FBQztJQUVPLFdBQVcsQ0FBQyxTQUFpQixFQUFFLEdBQUcsR0FBYTtRQUNyRCxPQUFPLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVPLHNCQUFzQixDQUFDLEdBQVcsRUFBRSxXQUFtQjtRQUM3RCxPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVPLGNBQWMsQ0FBQyxPQUFxQjtRQUMxQyxPQUFPLEdBQUcsT0FBTyxJQUFJLEVBQUUsQ0FBQztRQUN4QixJQUFJLE9BQU8sQ0FBQyxPQUFPLElBQUksSUFBSTtZQUFFLE9BQU8sQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUMxRSxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO3VHQTVHVSxXQUFXLGtCQUVaLGVBQWUsYUFDZixpQkFBaUIsYUFDakIsYUFBYTtxR0FKWixXQUFXOzJHQUFYLFdBQVc7OzJGQUFYLFdBQVc7a0JBSnZCLFVBQVU7O2tCQUNWLElBQUk7bUJBQUM7b0JBQ0osSUFBSSxFQUFFLFNBQVM7aUJBQ2hCOzswQkFHSSxNQUFNOzJCQUFDLGVBQWU7OzBCQUN0QixNQUFNOzJCQUFDLGlCQUFpQjs7MEJBQ3hCLE1BQU07MkJBQUMsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICBJMThORVhUX05BTUVTUEFDRSxcbiAgSTE4TkVYVF9TQ09QRSxcbiAgSTE4TkVYVF9TRVJWSUNFXG59IGZyb20gJy4vSTE4TkVYVF9UT0tFTlMnO1xuaW1wb3J0IHsgSVRyYW5zbGF0aW9uU2VydmljZSB9IGZyb20gJy4vSVRyYW5zbGF0aW9uU2VydmljZSc7XG5pbXBvcnQgeyBQaXBlT3B0aW9ucyB9IGZyb20gJy4vbW9kZWxzJztcbkBJbmplY3RhYmxlKClcbkBQaXBlKHtcbiAgbmFtZTogJ2kxOG5leHQnLFxufSlcbmV4cG9ydCBjbGFzcyBJMThOZXh0UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KEkxOE5FWFRfU0VSVklDRSkgcHJvdGVjdGVkIHRyYW5zbGF0ZUkxOE5leHQ6IElUcmFuc2xhdGlvblNlcnZpY2UsXG4gICAgQEluamVjdChJMThORVhUX05BTUVTUEFDRSkgcHJvdGVjdGVkIG5zOiBzdHJpbmcgfCBzdHJpbmdbXSxcbiAgICBASW5qZWN0KEkxOE5FWFRfU0NPUEUpIHByb3RlY3RlZCBzY29wZTogc3RyaW5nIHwgc3RyaW5nW11cbiAgKSB7fVxuXG4gIHB1YmxpYyB0cmFuc2Zvcm0oa2V5OiBzdHJpbmcgfCBzdHJpbmdbXSwgb3B0aW9ucz86IFBpcGVPcHRpb25zKTogc3RyaW5nIHtcbiAgICBvcHRpb25zID0gdGhpcy5wcmVwYXJlT3B0aW9ucyhvcHRpb25zKTtcblxuICAgIGxldCBpMThuT3B0cyA9IHRoaXMudHJhbnNsYXRlSTE4TmV4dC5vcHRpb25zO1xuICAgIGlmIChvcHRpb25zLnByZXBlbmRTY29wZSA9PT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMucHJlcGVuZFNjb3BlID09PSB0cnVlKSB7XG4gICAgICBpZiAodGhpcy5zY29wZSkge1xuICAgICAgICBrZXkgPSB0aGlzLnByZXBlbmRTY29wZShcbiAgICAgICAgICBrZXksXG4gICAgICAgICAgdGhpcy5zY29wZSxcbiAgICAgICAgICBpMThuT3B0cy5rZXlTZXBhcmF0b3IsXG4gICAgICAgICAgaTE4bk9wdHMubnNTZXBhcmF0b3JcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKFxuICAgICAgb3B0aW9ucy5wcmVwZW5kTmFtZXNwYWNlID09PSB1bmRlZmluZWQgfHxcbiAgICAgIG9wdGlvbnMucHJlcGVuZE5hbWVzcGFjZSA9PT0gdHJ1ZVxuICAgICkge1xuICAgICAgaWYgKHRoaXMubnMpIHtcbiAgICAgICAga2V5ID0gdGhpcy5wcmVwZW5kTmFtZXNwYWNlKGtleSwgdGhpcy5ucywgaTE4bk9wdHMubnNTZXBhcmF0b3IpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxldCByZXN1bHQgPSB0aGlzLnRyYW5zbGF0ZUkxOE5leHQudChrZXksIG9wdGlvbnMpO1xuXG4gICAgaWYgKG9wdGlvbnMuZm9ybWF0KSB7XG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIHJlc3VsdCA9IHRoaXMudHJhbnNsYXRlSTE4TmV4dC5mb3JtYXQoXG4gICAgICAgICAgcmVzdWx0LFxuICAgICAgICAgIG9wdGlvbnMuZm9ybWF0LFxuICAgICAgICAgIHRoaXMudHJhbnNsYXRlSTE4TmV4dC5sYW5ndWFnZVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0ID8/ICcnO1xuICB9XG5cbiAgcHJpdmF0ZSBwcmVwZW5kU2NvcGUoXG4gICAga2V5OiBzdHJpbmcgfCBzdHJpbmdbXSxcbiAgICBzY29wZTogc3RyaW5nIHwgc3RyaW5nW10sXG4gICAga2V5U2VwYXJhdG9yOiBzdHJpbmcgfCBmYWxzZSB8IHVuZGVmaW5lZCxcbiAgICBuc1NlcGFyYXRvcjogc3RyaW5nIHwgZmFsc2UgfCB1bmRlZmluZWRcbiAgKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IG5zU2VwID0gbnNTZXBhcmF0b3IgfHwgJyc7XG4gICAgY29uc3Qga2V5U2VwID0ga2V5U2VwYXJhdG9yIHx8ICcnO1xuICAgIGlmICh0eXBlb2Yga2V5ID09PSAnc3RyaW5nJykge1xuICAgICAga2V5ID0gW2tleV07XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygc2NvcGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBzY29wZSA9IFtzY29wZV07XG4gICAgfVxuICAgIGxldCBrZXlzV2l0aFNjb3BlID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGsgPSBrZXlbaV07XG4gICAgICBpZiAoIXRoaXMua2V5Q29udGFpbnNOc1NlcGFyYXRvcihrLCBuc1NlcCkpIHtcbiAgICAgICAgLy8gRG8gbm90IHNldCBzY29wZSwgaWYga2V5IGNvbnRhaW5zIGEgbmFtZXNwYWNlXG4gICAgICAgIGtleXNXaXRoU2NvcGUucHVzaChcbiAgICAgICAgICAuLi5zY29wZS5tYXAoKHNjKSA9PiB0aGlzLmpvaW5TdHJpbmdzKGtleVNlcCwgc2MsIGspKVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAga2V5c1dpdGhTY29wZS5wdXNoKGspO1xuICAgIH1cbiAgICByZXR1cm4ga2V5c1dpdGhTY29wZTtcbiAgfVxuXG4gIHByaXZhdGUgcHJlcGVuZE5hbWVzcGFjZShcbiAgICBrZXk6IHN0cmluZyB8IHN0cmluZ1tdLFxuICAgIG5zOiBzdHJpbmcgfCBzdHJpbmdbXSxcbiAgICBuc1NlcGFyYXRvcjogc3RyaW5nIHwgZmFsc2UgfCB1bmRlZmluZWRcbiAgKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IG5zU2VwID0gbnNTZXBhcmF0b3IgfHwgJyc7XG4gICAgaWYgKHR5cGVvZiBrZXkgPT09ICdzdHJpbmcnKSB7XG4gICAgICBrZXkgPSBba2V5XTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBucyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG5zID0gW25zXTtcbiAgICB9XG4gICAgbGV0IGtleXNXaXRoTmFtZXNwYWNlID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGsgPSBrZXlbaV07XG4gICAgICBpZiAoIXRoaXMua2V5Q29udGFpbnNOc1NlcGFyYXRvcihrLCBuc1NlcCkpIHtcbiAgICAgICAgLy8gRG8gbm90IHNldCBuYW1lc3BhY2UsIGlmIGtleSBjb250YWlucyBhIG5hbWVzcGFjZVxuICAgICAgICBrZXlzV2l0aE5hbWVzcGFjZS5wdXNoKC4uLm5zLm1hcCgobikgPT4gdGhpcy5qb2luU3RyaW5ncyhuc1NlcCwgbiwgaykpKTtcbiAgICAgIH1cbiAgICAgIGtleXNXaXRoTmFtZXNwYWNlLnB1c2goayk7XG4gICAgfVxuICAgIHJldHVybiBrZXlzV2l0aE5hbWVzcGFjZTtcbiAgfVxuXG4gIHByaXZhdGUgam9pblN0cmluZ3Moc2VwYXJhdG9yOiBzdHJpbmcsIC4uLnN0cjogc3RyaW5nW10pIHtcbiAgICByZXR1cm4gWy4uLnN0cl0uam9pbihzZXBhcmF0b3IpO1xuICB9XG5cbiAgcHJpdmF0ZSBrZXlDb250YWluc05zU2VwYXJhdG9yKGtleTogc3RyaW5nLCBuc1NlcGFyYXRvcjogc3RyaW5nKSB7XG4gICAgcmV0dXJuIGtleS5pbmRleE9mKG5zU2VwYXJhdG9yKSAhPT0gLTE7XG4gIH1cblxuICBwcml2YXRlIHByZXBhcmVPcHRpb25zKG9wdGlvbnM/OiBQaXBlT3B0aW9ucyk6IFBpcGVPcHRpb25zIHtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICBpZiAob3B0aW9ucy5jb250ZXh0ICE9IG51bGwpIG9wdGlvbnMuY29udGV4dCA9IG9wdGlvbnMuY29udGV4dC50b1N0cmluZygpO1xuICAgIHJldHVybiBvcHRpb25zO1xuICB9XG59XG4iXX0=