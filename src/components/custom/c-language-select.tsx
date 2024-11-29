import * as React from "react"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { getLanguageName, LanguageCodes } from "@/lib/utils";

interface CLanguageSelectProps {
    items: any[],
    placeholder: string;
    onValueChange: (...event: any[]) => void;
    defaultValue: string;
    value: LanguageCodes;
}

export function CLanguageSelect({ items, placeholder, ...rest }: CLanguageSelectProps) {
    return (
        <Select {...rest}>
            <SelectTrigger className="text-sm lg:text-base p-[1rem] h-[58px]">
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup className="p-[10px]">
                    {/* <SelectLabel className="p-0 mb-[15px] text-lg font-medium">{placeholder}</SelectLabel> */}
                    <div className="space-y-[10px]">
                        {
                            items.map(item => {
                                return (
                                    <SelectItem className="text-sm lg:text-base" key={item} value={item}>{getLanguageName(item)}</SelectItem>
                                )
                            })
                        }
                    </div>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
