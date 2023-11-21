import { Title } from '@angular/platform-browser';
import { I18NextPipe } from './I18NextPipe';
import * as i0 from "@angular/core";
export declare class I18NextTitle extends Title {
    private i18nextPipe;
    constructor(i18nextPipe: I18NextPipe, doc: any);
    setTitle(value: string): void;
    private translate;
    static ɵfac: i0.ɵɵFactoryDeclaration<I18NextTitle, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<I18NextTitle>;
}
