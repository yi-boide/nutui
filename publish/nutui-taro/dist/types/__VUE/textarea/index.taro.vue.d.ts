export interface InputTarget extends HTMLInputElement {
    composing?: boolean;
}

declare type Install<T> = T & {
    install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    modelValue: {
        type: StringConstructor;
        default: string;
    };
    textAlign: {
        type: StringConstructor;
        default: string;
    };
    limitShow: {
        type: BooleanConstructor;
        default: boolean;
    };
    maxLength: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    rows: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    autosize: {
        type: (ObjectConstructor | BooleanConstructor)[];
        default: boolean;
    };
    autofocus: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    env: TaroGeneral.ENV_TYPE;
    textareaRef: import("vue").Ref<any>;
    classes: import("vue").ComputedRef<{
        "nut-textarea": boolean;
        "nut-textarea--disabled": boolean;
    }>;
    styles: import("vue").ComputedRef<any>;
    disabled: import("vue").ComputedRef<boolean>;
    change: (event: Event) => void;
    focus: (event: Event) => void;
    blur: (event: Event) => void;
    translate: (keyPath: string, ...args: unknown[]) => any;
    copyTxtStyle: any;
    startComposing: () => void;
    endComposing: ({ target }: Event) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("blur" | "change" | "focus" | "update:modelValue")[], "blur" | "change" | "focus" | "update:modelValue", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: StringConstructor;
        default: string;
    };
    textAlign: {
        type: StringConstructor;
        default: string;
    };
    limitShow: {
        type: BooleanConstructor;
        default: boolean;
    };
    maxLength: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    rows: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    autosize: {
        type: (ObjectConstructor | BooleanConstructor)[];
        default: boolean;
    };
    autofocus: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onFocus?: ((...args: any[]) => any) | undefined;
    onBlur?: ((...args: any[]) => any) | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    placeholder: string;
    modelValue: string;
    maxLength: string | number;
    autofocus: boolean;
    readonly: boolean;
    textAlign: string;
    limitShow: boolean;
    rows: string | number;
    autosize: boolean | Record<string, any>;
}, {}>>;
export default _default;

declare module 'vue' {
    interface GlobalComponents {
        NutTextarea: typeof _default;
    }
}