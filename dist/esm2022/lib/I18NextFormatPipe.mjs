import { Inject, Injectable, Pipe } from '@angular/core';
import { I18NEXT_SERVICE } from './I18NEXT_TOKENS';
import * as i0 from "@angular/core";
export class I18NextFormatPipe {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSTE4TmV4dEZvcm1hdFBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL0kxOE5leHRGb3JtYXRQaXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFFeEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtCQUFrQixDQUFDOztBQVFuRCxNQUFNLE9BQU8saUJBQWlCO0lBRU87SUFEbkMsWUFDbUMsZ0JBQXFDO1FBQXJDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBcUI7SUFDckUsQ0FBQztJQUVHLFNBQVMsQ0FBQyxLQUFVLEVBQUUsT0FBbUM7UUFDOUQsSUFBSSxJQUFJLEdBQ04sT0FBTyxPQUFPLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO1FBQzlELE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDcEUsQ0FBQzt1R0FUVSxpQkFBaUIsa0JBRWxCLGVBQWU7cUdBRmQsaUJBQWlCOzJHQUFqQixpQkFBaUI7OzJGQUFqQixpQkFBaUI7a0JBSjdCLFVBQVU7O2tCQUNWLElBQUk7bUJBQUM7b0JBQ0osSUFBSSxFQUFFLGVBQWU7aUJBQ3RCOzswQkFHSSxNQUFNOzJCQUFDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSTE4TkVYVF9TRVJWSUNFIH0gZnJvbSAnLi9JMThORVhUX1RPS0VOUyc7XG5pbXBvcnQgeyBJVHJhbnNsYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9JVHJhbnNsYXRpb25TZXJ2aWNlJztcbmltcG9ydCB7IEZvcm1hdFBpcGVPcHRpb25zIH0gZnJvbSAnLi9tb2RlbHMnO1xuXG5ASW5qZWN0YWJsZSgpXG5AUGlwZSh7XG4gIG5hbWU6ICdpMThuZXh0Rm9ybWF0Jyxcbn0pXG5leHBvcnQgY2xhc3MgSTE4TmV4dEZvcm1hdFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChJMThORVhUX1NFUlZJQ0UpIHByaXZhdGUgdHJhbnNsYXRlSTE4TmV4dDogSVRyYW5zbGF0aW9uU2VydmljZVxuICApIHt9XG5cbiAgcHVibGljIHRyYW5zZm9ybSh2YWx1ZTogYW55LCBvcHRpb25zOiBGb3JtYXRQaXBlT3B0aW9ucyB8IHN0cmluZyk6IHN0cmluZyB7XG4gICAgbGV0IG9wdHM6IEZvcm1hdFBpcGVPcHRpb25zID1cbiAgICAgIHR5cGVvZiBvcHRpb25zID09PSAnc3RyaW5nJyA/IHsgZm9ybWF0OiBvcHRpb25zIH0gOiBvcHRpb25zO1xuICAgIHJldHVybiB0aGlzLnRyYW5zbGF0ZUkxOE5leHQuZm9ybWF0KHZhbHVlLCBvcHRzLmZvcm1hdCwgb3B0cy5sbmcpO1xuICB9XG59XG4iXX0=