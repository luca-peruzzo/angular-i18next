import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import * as i0 from "@angular/core";
import * as i1 from "./I18NextPipe";
export class I18NextTitle extends Title {
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.3", ngImport: i0, type: I18NextTitle, deps: [{ token: i1.I18NextPipe }, { token: DOCUMENT }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.0.3", ngImport: i0, type: I18NextTitle });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.3", ngImport: i0, type: I18NextTitle, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1.I18NextPipe }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSTE4TmV4dFRpdGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9JMThOZXh0VGl0bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7O0FBSWxELE1BQU0sT0FBTyxZQUFhLFNBQVEsS0FBSztJQUNqQjtJQUFwQixZQUFvQixXQUF3QixFQUFvQixHQUFRO1FBQ3RFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQURPLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBRTVDLENBQUM7SUFFUSxRQUFRLENBQUMsS0FBYTtRQUM3QixPQUFPLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFTyxTQUFTLENBQUMsSUFBWTtRQUM1QixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQzdELENBQUM7dUdBWFUsWUFBWSw2Q0FDK0IsUUFBUTsyR0FEbkQsWUFBWTs7MkZBQVosWUFBWTtrQkFEeEIsVUFBVTs7MEJBRXNDLE1BQU07MkJBQUMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGl0bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IEkxOE5leHRQaXBlIH0gZnJvbSAnLi9JMThOZXh0UGlwZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJMThOZXh0VGl0bGUgZXh0ZW5kcyBUaXRsZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaTE4bmV4dFBpcGU6IEkxOE5leHRQaXBlLCBASW5qZWN0KERPQ1VNRU5UKSBkb2M6IGFueSkge1xuICAgIHN1cGVyKGRvYyk7XG4gIH1cblxuICBvdmVycmlkZSBzZXRUaXRsZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHN1cGVyLnNldFRpdGxlKHRoaXMudHJhbnNsYXRlKHZhbHVlKSk7XG4gIH1cblxuICBwcml2YXRlIHRyYW5zbGF0ZSh0ZXh0OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5pMThuZXh0UGlwZS50cmFuc2Zvcm0odGV4dCwgeyBmb3JtYXQ6ICdjYXAnIH0pO1xuICB9XG59XG4iXX0=