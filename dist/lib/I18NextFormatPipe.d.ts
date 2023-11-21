import { PipeTransform } from '@angular/core';
import { ITranslationService } from './ITranslationService';
import { FormatPipeOptions } from './models';
import * as i0 from "@angular/core";
export declare class I18NextFormatPipe implements PipeTransform {
    private translateI18Next;
    constructor(translateI18Next: ITranslationService);
    transform(value: any, options: FormatPipeOptions | string): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<I18NextFormatPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<I18NextFormatPipe, "i18nextFormat", false>;
    static ɵprov: i0.ɵɵInjectableDeclaration<I18NextFormatPipe>;
}
