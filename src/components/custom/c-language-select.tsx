import * as React from "react"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { getLanguageName } from "@/lib/utils";

interface CLanguageSelectProps {
    items: any[],
    placeholder: string;
    onValueChange: (...event: any[]) => void;
    defaultValue: string;
}

export function CLanguageSelect({ items, placeholder, ...rest }: CLanguageSelectProps) {
    return (
        <Select {...rest}>
            <SelectTrigger className="text-base text-c-contrast p-[1rem] h-[58px]">
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup className="p-[10px]">
                    {/* <SelectLabel className="p-0 mb-[15px] text-lg font-medium">{placeholder}</SelectLabel> */}
                    <div className="space-y-[10px]">
                        {
                            items.map(item => {
                                return (
                                    <SelectItem className="text-base" key={item} value={item}>{getLanguageName(item)}</SelectItem>
                                )
                            })
                        }
                    </div>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}