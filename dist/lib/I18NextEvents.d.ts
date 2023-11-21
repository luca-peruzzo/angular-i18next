import { BehaviorSubject, Subject } from 'rxjs';
import { ITranslationEvents, MissingKeyEvent, ResourceEvent } from './ITranslationEvents';
import * as i18n from 'i18next';
export declare class I18NextEvents implements ITranslationEvents {
    initialized: BehaviorSubject<i18n.InitOptions<object> | undefined>;
    loaded: BehaviorSubject<boolean>;
    failedLoading: Subject<unknown>;
    missingKey: Subject<MissingKeyEvent>;
    added: Subject<ResourceEvent>;
    removed: Subject<ResourceEvent>;
    languageChanged: BehaviorSubject<string | null>;
}
