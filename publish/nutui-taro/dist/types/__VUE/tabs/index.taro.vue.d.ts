import { VNode, Ref, CSSProperties, PropType } from 'vue';
import type { TabsDirection, TabsSize, TabsType, TabsAlign } from './types';
export declare class Title {
    title: string;
    titleSlot?: VNode[];
    paneKey: string;
    disabled: boolean;
    constructor();
}

declare type Install<T> = T & {
  install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    modelValue: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    direction: {
        type: PropType<TabsDirection>;
        default: string;
    };
    size: {
        type: PropType<TabsSize>;
        default: string;
    };
    type: {
        type: PropType<TabsType>;
        default: string;
    };
    titleScroll: {
        type: BooleanConstructor;
        default: boolean;
    };
    ellipsis: {
        type: BooleanConstructor;
        default: boolean;
    };
    swipeable: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoHeight: {
        type: BooleanConstructor;
        default: boolean;
    };
    background: {
        type: StringConstructor;
        default: string;
    };
    animatedTime: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    titleGutter: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    sticky: {
        type: BooleanConstructor;
        default: boolean;
    };
    top: {
        type: NumberConstructor;
        default: number;
    };
    align: {
        type: PropType<TabsAlign>;
        default: string;
    };
}, {
    onTouchStart(event: TouchEvent): void;
    onTouchMove(event: TouchEvent): void;
    onTouchEnd(): void;
    isBegin: () => boolean;
    isEnd: () => boolean;
    next: () => void;
    prev: () => void;
    updateValue: (item: Title) => void;
    tabChange: (item: Title, index: number) => void;
    setTabItemRef: (el: HTMLElement, index: number) => void;
    titles: Ref<Title[]>;
    tabsContentRef: Ref<HTMLElement | undefined>;
    contentStyle: import("vue").ComputedRef<CSSProperties>;
    tabsNavStyle: import("vue").ComputedRef<{
        background: any;
    }>;
    titleStyle: import("vue").ComputedRef<{
        marginTop?: undefined;
        marginBottom?: undefined;
        marginLeft?: undefined;
        marginRight?: undefined;
    } | {
        marginTop: string | undefined;
        marginBottom: string | undefined;
        marginLeft?: undefined;
        marginRight?: undefined;
    } | {
        marginLeft: string | undefined;
        marginRight: string | undefined;
        marginTop?: undefined;
        marginBottom?: undefined;
    }>;
    tabsActiveStyle: import("vue").ComputedRef<{
        color: any;
        background: any;
    }>;
    container: Ref<null>;
    scrollLeft: Ref<number>;
    scrollTop: Ref<number>;
    getScrollX: import("vue").ComputedRef<any>;
    getScrollY: import("vue").ComputedRef<any>;
    scrollWithAnimation: Ref<boolean>;
    canShowLabel: Ref<boolean>;
    refRandomId: string;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "click" | "update:modelValue")[], "change" | "click" | "update:modelValue", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    direction: {
        type: PropType<TabsDirection>;
        default: string;
    };
    size: {
        type: PropType<TabsSize>;
        default: string;
    };
    type: {
        type: PropType<TabsType>;
        default: string;
    };
    titleScroll: {
        type: BooleanConstructor;
        default: boolean;
    };
    ellipsis: {
        type: BooleanConstructor;
        default: boolean;
    };
    swipeable: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoHeight: {
        type: BooleanConstructor;
        default: boolean;
    };
    background: {
        type: StringConstructor;
        default: string;
    };
    animatedTime: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    titleGutter: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    sticky: {
        type: BooleanConstructor;
        default: boolean;
    };
    top: {
        type: NumberConstructor;
        default: number;
    };
    align: {
        type: PropType<TabsAlign>;
        default: string;
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    onClick?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    size: TabsSize;
    type: TabsType;
    color: string;
    top: number;
    ellipsis: boolean;
    sticky: boolean;
    modelValue: string | number;
    background: string;
    direction: TabsDirection;
    titleScroll: boolean;
    swipeable: boolean;
    autoHeight: boolean;
    animatedTime: string | number;
    titleGutter: string | number;
    align: TabsAlign;
}, {}>>;
export default _default;

declare module 'vue' {
  interface GlobalComponents {
      NutTabs: typeof _default;
  }
}