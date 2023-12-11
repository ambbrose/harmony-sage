"use client";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

interface SelectCountryProps {
    onSelect: (value: string) => void;
};

export const SelectCountry = ({ onSelect }: SelectCountryProps) => {
    return (
        <Select
            onValueChange={(value) => onSelect(value as string)}
            defaultValue=""
        >
            <SelectTrigger className="w-[280px]">
                <SelectValue placeholder="Select country you  want result from" />
            </SelectTrigger>

            <SelectContent>
                <SelectItem value="US">United States</SelectItem>
                <SelectItem value="GB">United Kingdom</SelectItem>
                <SelectItem value="NG">Nigeria</SelectItem>
                <SelectItem value="GH">Ghana</SelectItem>
                <SelectItem value="ZA">South Africa</SelectItem>
                <SelectItem value="nil">world wide</SelectItem>
            </SelectContent>
        </Select>
    );
};