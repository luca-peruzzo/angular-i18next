import { PipeTransform } from '@angular/core';
import { ITranslationService } from './ITranslationService';
import { PipeOptions } from './models';
import * as i0 from "@angular/core";
export declare class I18NextPipe implements PipeTransform {
    protected translateI18Next: ITranslationService;
    protected ns: string | string[];
    protected scope: string | string[];
    constructor(translateI18Next: ITranslationService, ns: string | string[], scope: string | string[]);
    transform(key: string | string[], options?: PipeOptions): string;
    private prependScope;
    private prependNamespace;
    private joinStrings;
    private keyContainsNsSeparator;
    private prepareOptions;
    static ɵfac: i0.ɵɵFactoryDeclaration<I18NextPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<I18NextPipe, "i18next", false>;
    static ɵprov: i0.ɵɵInjectableDeclaration<I18NextPipe>;
}
