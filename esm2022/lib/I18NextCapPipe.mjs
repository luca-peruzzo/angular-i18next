import { Inject, Injectable, Pipe } from '@angular/core';
import { I18NEXT_NAMESPACE, I18NEXT_SCOPE, I18NEXT_SERVICE, } from './I18NEXT_TOKENS';
import { I18NextPipe } from './I18NextPipe';
import * as i0 from "@angular/core";
export class I18NextCapPipe extends I18NextPipe {
    constructor(translateI18Next, ns, scope) {
        super(translateI18Next, ns, scope);
    }
    transform(key, options) {
        options = options || {};
        options.format = 'cap';
        return super.transform(key, options);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.5", ngImport: i0, type: I18NextCapPipe, deps: [{ token: I18NEXT_SERVICE }, { token: I18NEXT_NAMESPACE }, { token: I18NEXT_SCOPE }], target: i0.ɵɵFactoryTarget.Pipe });
    static ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "17.0.5", ngImport: i0, type: I18NextCapPipe, name: "i18nextCap" });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.0.5", ngImport: i0, type: I18NextCapPipe });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.5", ngImport: i0, type: I18NextCapPipe, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSTE4TmV4dENhcFBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL0kxOE5leHRDYXBQaXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFFeEUsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixhQUFhLEVBQ2IsZUFBZSxHQUNoQixNQUFNLGtCQUFrQixDQUFDO0FBQzFCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBUTVDLE1BQU0sT0FBTyxjQUFlLFNBQVEsV0FBVztJQUM3QyxZQUMyQixnQkFBcUMsRUFDbkMsRUFBcUIsRUFDekIsS0FBd0I7UUFFL0MsS0FBSyxDQUFDLGdCQUFnQixFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRWUsU0FBUyxDQUFDLEdBQXNCLEVBQUUsT0FBcUI7UUFDckUsT0FBTyxHQUFHLE9BQU8sSUFBSSxFQUFFLENBQUM7UUFDeEIsT0FBTyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDdkIsT0FBTyxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN2QyxDQUFDO3VHQWJVLGNBQWMsa0JBRWYsZUFBZSxhQUNmLGlCQUFpQixhQUNqQixhQUFhO3FHQUpaLGNBQWM7MkdBQWQsY0FBYzs7MkZBQWQsY0FBYztrQkFKMUIsVUFBVTs7a0JBQ1YsSUFBSTttQkFBQztvQkFDSixJQUFJLEVBQUUsWUFBWTtpQkFDbkI7OzBCQUdJLE1BQU07MkJBQUMsZUFBZTs7MEJBQ3RCLE1BQU07MkJBQUMsaUJBQWlCOzswQkFDeEIsTUFBTTsyQkFBQyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG4gIEkxOE5FWFRfTkFNRVNQQUNFLFxuICBJMThORVhUX1NDT1BFLFxuICBJMThORVhUX1NFUlZJQ0UsXG59IGZyb20gJy4vSTE4TkVYVF9UT0tFTlMnO1xuaW1wb3J0IHsgSTE4TmV4dFBpcGUgfSBmcm9tICcuL0kxOE5leHRQaXBlJztcbmltcG9ydCB7IElUcmFuc2xhdGlvblNlcnZpY2UgfSBmcm9tICcuL0lUcmFuc2xhdGlvblNlcnZpY2UnO1xuaW1wb3J0IHsgUGlwZU9wdGlvbnMgfSBmcm9tICcuL21vZGVscyc7XG5cbkBJbmplY3RhYmxlKClcbkBQaXBlKHtcbiAgbmFtZTogJ2kxOG5leHRDYXAnLFxufSlcbmV4cG9ydCBjbGFzcyBJMThOZXh0Q2FwUGlwZSBleHRlbmRzIEkxOE5leHRQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoSTE4TkVYVF9TRVJWSUNFKSB0cmFuc2xhdGVJMThOZXh0OiBJVHJhbnNsYXRpb25TZXJ2aWNlLFxuICAgIEBJbmplY3QoSTE4TkVYVF9OQU1FU1BBQ0UpIG5zOiBzdHJpbmcgfCBzdHJpbmdbXSxcbiAgICBASW5qZWN0KEkxOE5FWFRfU0NPUEUpIHNjb3BlOiBzdHJpbmcgfCBzdHJpbmdbXVxuICApIHtcbiAgICBzdXBlcih0cmFuc2xhdGVJMThOZXh0LCBucywgc2NvcGUpO1xuICB9XG5cbiAgcHVibGljIG92ZXJyaWRlIHRyYW5zZm9ybShrZXk6IHN0cmluZyB8IHN0cmluZ1tdLCBvcHRpb25zPzogUGlwZU9wdGlvbnMpOiBzdHJpbmcge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIG9wdGlvbnMuZm9ybWF0ID0gJ2NhcCc7XG4gICAgcmV0dXJuIHN1cGVyLnRyYW5zZm9ybShrZXksIG9wdGlvbnMpO1xuICB9XG59XG4iXX0=