import { ChangeDetectorRef, NgZone, OnDestroy, PipeTransform } from '@angular/core';
import { I18NextPipe } from './I18NextPipe';
import { ITranslationService } from './ITranslationService';
import { PipeOptions } from './models';
import * as i0 from "@angular/core";
export declare class I18NextEagerPipe extends I18NextPipe implements PipeTransform, OnDestroy {
    protected translateI18Next: ITranslationService;
    protected ns: string | string[];
    protected scope: string | string[];
    private cd;
    private ngZone;
    private lastKey;
    private lastOptions;
    private lastValue;
    private ngUnsubscribe;
    constructor(translateI18Next: ITranslationService, ns: string | string[], scope: string | string[], cd: ChangeDetectorRef, ngZone: NgZone);
    private hasKeyChanged;
    private hasOptionsChanged;
    transform(key: string | string[], options?: PipeOptions): string;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<I18NextEagerPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<I18NextEagerPipe, "i18nextEager", false>;
}
