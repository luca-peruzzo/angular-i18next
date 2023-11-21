import { Inject, Pipe, } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { I18NEXT_NAMESPACE, I18NEXT_SCOPE, I18NEXT_SERVICE, } from './I18NEXT_TOKENS';
import { I18NextPipe } from './I18NextPipe';
import * as i0 from "@angular/core";
export class I18NextEagerPipe extends I18NextPipe {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSTE4TmV4dEVhZ2VyUGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvSTE4TmV4dEVhZ2VyUGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsTUFBTSxFQUdOLElBQUksR0FFTCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLGFBQWEsRUFDYixlQUFlLEdBQ2hCLE1BQU0sa0JBQWtCLENBQUM7QUFDMUIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFRNUMsTUFBTSxPQUFPLGdCQUNYLFNBQVEsV0FBVztJQVUyQjtJQUNFO0lBQ0o7SUFDbEM7SUFDQTtJQVhGLE9BQU8sQ0FBcUI7SUFDNUIsV0FBVyxDQUEwQjtJQUNyQyxTQUFTLEdBQVcsRUFBRSxDQUFDO0lBRXZCLGFBQWEsR0FBa0IsSUFBSSxPQUFPLEVBQUUsQ0FBQztJQUVyRCxZQUM4QyxnQkFBcUMsRUFDbkMsRUFBcUIsRUFDekIsS0FBd0IsRUFDMUQsRUFBcUIsRUFDckIsTUFBYztRQUV0QixLQUFLLENBQUMsZ0JBQWdCLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBTlMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFxQjtRQUNuQyxPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQUN6QixVQUFLLEdBQUwsS0FBSyxDQUFtQjtRQUMxRCxPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBR3RCLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxlQUFlO2FBQ3BDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2FBQ25DLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7UUFDaEQsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ08sYUFBYSxDQUFDLEdBQXNCO1FBQzFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssR0FBRyxDQUFDO0lBQy9DLENBQUM7SUFFTyxpQkFBaUIsQ0FBQyxPQUFxQjtRQUM3QyxPQUFPLElBQUksQ0FBQyxXQUFXLEtBQUssT0FBTyxDQUFDO0lBQ3RDLENBQUM7SUFFZSxTQUFTLENBQUMsR0FBc0IsRUFBRSxPQUFxQjtRQUNyRSxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRTFFLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDakUsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7WUFDdEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUM7WUFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQztTQUNoRDtRQUNELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNoQyxDQUFDO3VHQTlDVSxnQkFBZ0Isa0JBV2pCLGVBQWUsYUFDZixpQkFBaUIsYUFDakIsYUFBYTtxR0FiWixnQkFBZ0I7OzJGQUFoQixnQkFBZ0I7a0JBSjVCLElBQUk7bUJBQUM7b0JBQ0osSUFBSSxFQUFFLGNBQWM7b0JBQ3BCLElBQUksRUFBRSxLQUFLO2lCQUNaOzswQkFZSSxNQUFNOzJCQUFDLGVBQWU7OzBCQUN0QixNQUFNOzJCQUFDLGlCQUFpQjs7MEJBQ3hCLE1BQU07MkJBQUMsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBJbmplY3QsXG4gIE5nWm9uZSxcbiAgT25EZXN0cm95LFxuICBQaXBlLFxuICBQaXBlVHJhbnNmb3JtLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7XG4gIEkxOE5FWFRfTkFNRVNQQUNFLFxuICBJMThORVhUX1NDT1BFLFxuICBJMThORVhUX1NFUlZJQ0UsXG59IGZyb20gJy4vSTE4TkVYVF9UT0tFTlMnO1xuaW1wb3J0IHsgSTE4TmV4dFBpcGUgfSBmcm9tICcuL0kxOE5leHRQaXBlJztcbmltcG9ydCB7IElUcmFuc2xhdGlvblNlcnZpY2UgfSBmcm9tICcuL0lUcmFuc2xhdGlvblNlcnZpY2UnO1xuaW1wb3J0IHsgUGlwZU9wdGlvbnMgfSBmcm9tICcuL21vZGVscyc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ2kxOG5leHRFYWdlcicsXG4gIHB1cmU6IGZhbHNlLFxufSlcbmV4cG9ydCBjbGFzcyBJMThOZXh0RWFnZXJQaXBlXG4gIGV4dGVuZHMgSTE4TmV4dFBpcGVcbiAgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtLCBPbkRlc3Ryb3lcbntcbiAgcHJpdmF0ZSBsYXN0S2V5OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHByaXZhdGUgbGFzdE9wdGlvbnM6IFBpcGVPcHRpb25zIHwgdW5kZWZpbmVkO1xuICBwcml2YXRlIGxhc3RWYWx1ZTogc3RyaW5nID0gJyc7XG5cbiAgcHJpdmF0ZSBuZ1Vuc3Vic2NyaWJlOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3QoKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KEkxOE5FWFRfU0VSVklDRSkgcHJvdGVjdGVkIG92ZXJyaWRlIHRyYW5zbGF0ZUkxOE5leHQ6IElUcmFuc2xhdGlvblNlcnZpY2UsXG4gICAgQEluamVjdChJMThORVhUX05BTUVTUEFDRSkgcHJvdGVjdGVkIG92ZXJyaWRlIG5zOiBzdHJpbmcgfCBzdHJpbmdbXSxcbiAgICBASW5qZWN0KEkxOE5FWFRfU0NPUEUpIHByb3RlY3RlZCBvdmVycmlkZSBzY29wZTogc3RyaW5nIHwgc3RyaW5nW10sXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSAgXG4gICkge1xuICAgIHN1cGVyKHRyYW5zbGF0ZUkxOE5leHQsIG5zLCBzY29wZSk7XG4gICAgdHJhbnNsYXRlSTE4TmV4dC5ldmVudHMubGFuZ3VhZ2VDaGFuZ2VkXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5uZ1Vuc3Vic2NyaWJlKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4gdGhpcy5jZC5tYXJrRm9yQ2hlY2soKSk7XG4gICAgICB9KTtcbiAgfVxuICBwcml2YXRlIGhhc0tleUNoYW5nZWQoa2V5OiBzdHJpbmcgfCBzdHJpbmdbXSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhdGhpcy5sYXN0S2V5IHx8IHRoaXMubGFzdEtleSAhPT0ga2V5O1xuICB9XG5cbiAgcHJpdmF0ZSBoYXNPcHRpb25zQ2hhbmdlZChvcHRpb25zPzogUGlwZU9wdGlvbnMpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5sYXN0T3B0aW9ucyAhPT0gb3B0aW9ucztcbiAgfVxuXG4gIHB1YmxpYyBvdmVycmlkZSB0cmFuc2Zvcm0oa2V5OiBzdHJpbmcgfCBzdHJpbmdbXSwgb3B0aW9ucz86IFBpcGVPcHRpb25zKTogc3RyaW5nIHtcbiAgICBjb25zdCBuZXdLZXkgPSB0aGlzLnRyYW5zbGF0ZUkxOE5leHQubGFuZ3VhZ2UgKyAnfCcgKyBKU09OLnN0cmluZ2lmeShrZXkpO1xuXG4gICAgaWYgKHRoaXMuaGFzS2V5Q2hhbmdlZChuZXdLZXkpIHx8IHRoaXMuaGFzT3B0aW9uc0NoYW5nZWQob3B0aW9ucykpIHtcbiAgICAgIHRoaXMubGFzdEtleSA9IG5ld0tleTtcbiAgICAgIHRoaXMubGFzdE9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgdGhpcy5sYXN0VmFsdWUgPSBzdXBlci50cmFuc2Zvcm0oa2V5LCBvcHRpb25zKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMubGFzdFZhbHVlO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5uZ1Vuc3Vic2NyaWJlLm5leHQoKTtcbiAgICB0aGlzLm5nVW5zdWJzY3JpYmUuY29tcGxldGUoKTtcbiAgfVxufVxuIl19