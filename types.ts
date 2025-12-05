import { ReactNode } from "react";

export interface Requirement {
    label: string;
    val: string;
    sub: string;
    icon: ReactNode;
}

export interface FeatureDetail {
    title: string;
    subtitle: string;
    desc: string;
    reqs: Requirement[];
    list: string[];
    btnText: string;
}

export interface SubCategory {
    id: string;
    name: string;
    subLabel?: string;
    data: FeatureDetail;
}

export interface MainCategory {
    id: string;
    name: string;
    icon: ReactNode;
    subCategories: SubCategory[];
}
