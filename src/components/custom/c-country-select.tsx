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
import { CiGlobe } from "react-icons/ci";
import Flag from "react-world-flags";

interface CCountrySelectProps {
    continents: {
        continent: string,
        countries: {
            value: string;
            label: string;
            flag: string;
            area: string;
            languages: string[];
        }[]
    }[],
    placeholder: string
    onValueChange: (...event: any[]) => void;
    value: any
    defaultValue: string;
}

interface CountryOption {
    value: string;
    label: string;
    flag: string;
    area: string;
}

const getOptionLabel = (option: CountryOption): React.ReactNode => {
    return (
        <>
            <div className="flex items-center">
                {option.value === 'global' ? (
                    <CiGlobe className="mr-2 h-5 w-5 fill-c-black" />
                ) : (
                    <Flag code={option.flag} className="mr-2 h-5 w-5" />
                )}
                <span className="text-wrap lg:max-w-[100px] 2lg:max-w-full">{option.label}</span>
            </div>
        </>
    );
};

export function CCountrySelect({ continents, placeholder, ...rest }: CCountrySelectProps) {
    return (
        <Select {...rest}>
            <SelectTrigger
                id="c-language-select"
                className="h-[58px] [&>span]:flex [&>span]:items-center [&>span]:gap-2 [&>span_svg]:shrink-0 [&>span_svg]:text-muted-foreground/80"
            >
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent className="[&_*[role=option]>span>svg]:shrink-0 [&_*[role=option]>span>svg]:text-muted-foreground/80 [&_*[role=option]>span]:end-2 [&_*[role=option]>span]:start-auto [&_*[role=option]>span]:flex [&_*[role=option]>span]:items-center [&_*[role=option]>span]:gap-2">
                {continents.map((continent) => (
                    <SelectGroup key={continent.continent} className="p-[10px]">
                        {continent.continent !== 'global' && (<SelectLabel className="ps-2 uppercase lg:text-lg">{continent.continent}</SelectLabel>)}
                        {continent.countries.map((item) => (
                            <SelectItem key={item.value} value={item.value} className="p-[10px] text-wrap">
                                <div className="lg:text-base">{getOptionLabel(item)}</div>
                            </SelectItem>
                        ))}
                    </SelectGroup>
                ))}
            </SelectContent>
        </Select>
    )
}
