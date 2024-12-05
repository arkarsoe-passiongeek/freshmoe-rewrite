export const INTL_PREFIX_BY_COUNTRY = {
    myanmar: 'my_mm'
}

export const COUNTRY_OPTIONS = [
    {
        continent: 'global',
        countries: [
            { value: 'global', label: 'Global', flag: 'global', area: 'global', languages: ['en', 'mm', 'th', 'ar', 'cn'] },
        ]
    },
    {
        continent: 'asia pacific',
        countries: [
            { value: 'mm', label: 'Myanmar', flag: 'mm', area: 'asia pacific', languages: ['mm', 'en'] },
            { value: 'th', label: 'Thailand', flag: 'th', area: 'asia pacific', languages: ['th', 'en'] },
        ]
    },
    {
        continent: 'middle east',
        countries: [
            { value: 'ae', label: 'United Arab Emirates', flag: 'ae', area: 'middle east', languages: ['ar', 'en'] },
        ]
    }
]